-- ---------------------------------------------------------------
-- Recipe rack, migration 2: real categories + source + bodies
--   mysql --default-character-set=utf8mb4 -u USER -p DBNAME < bbq-migration-2.sql
--
-- The charset flag matters -- without it, accented titles like Jalapeño get
-- mangled on the way in. That's what happened the first time around.
-- ---------------------------------------------------------------

-- The seeded placeholder recipes used the old categories, so clear them out
-- rather than trying to map them across. bbq_claim has ON DELETE CASCADE, so
-- their claims go with them. Guests are untouched -- tokens survive.
DELETE FROM bbq_recipe;


-- New categories, in the order somebody actually eats.
-- Database values stay terse; the page labels live in Rack.js so they can be
-- friendlier without a schema change.
ALTER TABLE bbq_recipe
  MODIFY COLUMN category ENUM(
    'appetizer',
    'meat_dish',
    'meat_side',
    'starchy_side',
    'veggie_side',
    'salad',
    'dessert',
    'pantry'
  ) NOT NULL;


-- Where the recipe came from. Two values because that's the whole rule:
-- family recipes, or H-E-B. `heb` rows have a recipe_url. `family` rows don't,
-- so they carry `body` instead and get rendered at /bbq/r/[slug].
ALTER TABLE bbq_recipe
  ADD COLUMN source ENUM('family','heb') NOT NULL DEFAULT 'heb' AFTER effort,
  ADD COLUMN body   MEDIUMTEXT NULL AFTER recipe_url;


-- A note in your voice, separate from `blurb`. blurb describes the dish;
-- host_note is you talking to whoever claims it -- "double the jalapenos",
-- "needs a warmer", "mine's better vegan". Rendered in the script face on the
-- card so it reads as a person and not as more product copy.
ALTER TABLE bbq_recipe
  ADD COLUMN host_note VARCHAR(300) NULL AFTER blurb;


-- The add-on. Holds the slug of a recipe that goes with this one; once somebody
-- claims this card they get a one-tap button to add that too. Points at pantry
-- rows in practice, since those are uncapped and can absorb any number of
-- takers -- a dip pointing at tortilla chips, a cobbler pointing at ice cream.
-- Deliberately not a foreign key: a typo'd slug should quietly render no button
-- rather than refuse the INSERT while you're seeding at 1am.
ALTER TABLE bbq_recipe
  ADD COLUMN pairs_with VARCHAR(60) NULL AFTER claim_cap;

-- e.g.
--   UPDATE bbq_recipe SET pairs_with = 'tortilla-chips'
--    WHERE slug IN ('guacamole','salsa','queso');


-- Reserved recipes. NULL means everybody sees it; a guest id means only that
-- guest does, in a group of their own at the top of the rack. Filtering happens
-- in the query, not in the browser -- if the page rendered every card and hid
-- some with CSS, the reserved ones would still be sitting in the page source
-- for anyone who looked.
--
-- The recipe keeps its real category either way, so clearing reserved_for drops
-- it back into Sides or Desserts where it belongs with no other change.
ALTER TABLE bbq_recipe
  ADD COLUMN reserved_for INT UNSIGNED NULL AFTER pairs_with,
  ADD CONSTRAINT fk_recipe_reserved
    FOREIGN KEY (reserved_for) REFERENCES bbq_guest(id) ON DELETE SET NULL;

-- e.g.
--   UPDATE bbq_recipe SET reserved_for = (SELECT id FROM bbq_guest WHERE name = 'Katie')
--    WHERE slug IN ('marinated-chicken','onion-dip');


-- sort_order by hundreds, matching category order. Leaves room to slot
-- something in without renumbering the neighbours.
--   100s appetizer   200s meat_dish   300s meat_side   400s starchy_side
--   500s veggie_side 600s salad       700s dessert     800s pantry


-- Pantry comes back now since it's fixed, not curated. claim_cap NULL means
-- unlimited -- these never gray out and never duel.
INSERT INTO bbq_recipe
  (slug, title, blurb, category, effort, source, claim_cap, sort_order) VALUES
  ('root-beer',   'A&W root beer',          'Always welcome. Always.',      'pantry', 'easy', 'family', NULL, 810),
  ('ice',         'A bag of ice',           'You cannot have too much.',    'pantry', 'easy', 'family', NULL, 820),
  ('tortilla-chips', 'Tortilla chips',      'The vessel. Never enough.',    'pantry', 'easy', 'family', NULL, 830),
  ('paper-goods', 'Paper plates & napkins', 'The unglamorous hero.',        'pantry', 'easy', 'family', NULL, 840);


-- ---------------------------------------------------------------
-- Template for the real 33. claim_cap 2 for everything except pantry.
-- `source` decides which column matters: heb -> recipe_url, family -> body.
--
-- INSERT INTO bbq_recipe
--   (slug, title, blurb, category, effort, source, recipe_url, claim_cap, sort_order)
-- VALUES
--   ('queso', 'Queso', 'Bring a warmer if you have one.',
--    'appetizer', 'easy', 'heb', 'https://www.heb.com/recipe/...', 2, 110);
--
-- INSERT INTO bbq_recipe
--   (slug, title, blurb, category, effort, source, body, claim_cap, sort_order)
-- VALUES
--   ('strawberry-cake', 'Strawberry cake', 'Two years to get right. Better vegan.',
--    'dessert', 'project', 'family', 'Full recipe text here...', 2, 710);
-- ---------------------------------------------------------------
