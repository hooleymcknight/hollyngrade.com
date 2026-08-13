// src/scripts/addManyGuests.mjs
// Reads a newline-separated list of guest names and hands them to
// bbq-guests.mjs in one go, then prints the magic links it returns.
//
//   node src/scripts/addManyGuests.mjs
//   node src/scripts/addManyGuests.mjs path/to/other-list.txt
//
// execFile rather than exec, deliberately: exec runs the command through a
// shell, which strips quotes and interprets characters before the script ever
// sees them. That breaks any name with a space in it ("Sarah Chen" arrives as
// two guests) and does worse with an apostrophe or an ampersand. execFile takes
// an argv array and skips the shell entirely, so a name is one argument no
// matter what's inside it.

import { execFile } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const CANDIDATES = [
  './guests.txt',
  './src/scripts/guests.txt',
];

function findList(explicit) {
  if (explicit) return fs.existsSync(explicit) ? explicit : null;
  return CANDIDATES.find((p) => fs.existsSync(p)) || null;
}

function readNames(docPath) {
  return fs
    .readFileSync(docPath, 'utf8')
    .split(/\r?\n/)              // \r?\n so a Windows-edited file doesn't leave \r stuck on every name
    .map((line) => line.trim())
    .filter(Boolean);            // drops blank lines, including the trailing newline
}

function addGuests(names) {
  return new Promise((resolve, reject) => {
    execFile(
      'node',
      ['--env-file=.env.local', 'src/scripts/bbq-guests.mjs', 'add', ...names],
      { cwd: process.cwd() },
      (err, stdout, stderr) => {
        // stdout carries the magic links, which are the whole reason for
        // running this -- print it either way, since a partial failure still
        // means some guests got added and those links are the only copy.
        if (stdout) process.stdout.write(stdout);
        if (stderr) process.stderr.write(stderr);
        if (err) reject(err);
        else resolve();
      }
    );
  });
}

async function main() {
  const docPath = findList(process.argv[2]);

  if (!docPath) {
    console.error(
      process.argv[2]
        ? `No guest list at ${process.argv[2]}`
        : `No guest list found. Looked in:\n  ${CANDIDATES.join('\n  ')}`
    );
    process.exitCode = 1;
    return;
  }

  const names = readNames(docPath);

  if (names.length === 0) {
    console.error(`${docPath} is empty.`);
    process.exitCode = 1;
    return;
  }

  // Duplicate names would hit the token unique key one at a time, but a repeated
  // name is almost always a typo in the list rather than two real people.
  const dupes = names.filter((nm, i) => names.indexOf(nm) !== i);
  if (dupes.length) {
    console.error(`Duplicate names in ${docPath}: ${[...new Set(dupes)].join(', ')}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Adding ${names.length} guest(s) from ${path.resolve(docPath)}\n`);

  try {
    await addGuests(names);
  } catch (err) {
    console.error('\nFailed partway through. Anything printed above did get added.');
    process.exitCode = 1;
  }
}

main();
