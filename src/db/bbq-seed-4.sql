-- ---------------------------------------------------------------
-- Recipe rack, seed 4: reserved recipes
--   mysql --default-character-set=utf8mb4 -u USER -p DBNAME < bbq-seed-4.sql
--
-- Run after the guests exist -- these look them up by name, so add them first:
--   node --env-file=.env.local scripts/bbq-guests.mjs add "Katie" "Jordan+Jazmin"
--
-- claim_cap is 1 rather than 2 on all three. Only one person can see a
-- reserved card, so a two-person duel is impossible by construction and a cap
-- of 2 would just make the gate count read wrong ("2 still open" for a card
-- one person can claim). If you ever clear reserved_for, bump it back to 2.
-- ---------------------------------------------------------------

-- ===== KATIE =====================================================
-- << EDIT >> Both of these need a source. If they're H-E-B, drop the URL in
-- and change source to 'heb'. If they're yours or hers, paste the text into
-- body. Right now they'll render with a title and no way to see the recipe.
INSERT INTO bbq_recipe
  (slug, title, blurb, host_note, category, effort, source, recipe_url, body,
   claim_cap, sort_order, reserved_for)
VALUES
  ('marinated-chicken', 'Marinated chicken',
   'The one we talked about.',
   NULL,
   'meat_dish', 'medium', 'family',
   NULL,
   NULL,
   1, 205,
   (SELECT id FROM bbq_guest WHERE name = 'Katie')),

  ('onion-dip', 'Onion dip',
   'The one we talked about.',
   NULL,
   'appetizer', 'easy', 'family',
   NULL,
   NULL,
   1, 105,
   (SELECT id FROM bbq_guest WHERE name = 'Katie'));


-- ===== JORDAN + JAZMIN ===========================================
-- Not a recipe, which is why body carries a sentence instead of ingredients.
-- The rack needs every card to be claimable, and this is the honest shape for
-- "bring whatever you'd like" -- it still shows up on the board, still grays
-- out when claimed, and still lands on the printed labels on the day.
INSERT INTO bbq_recipe
  (slug, title, blurb, host_note, category, effort, source, body,
   claim_cap, sort_order, reserved_for)
VALUES
  ('jazmin-bakery', 'Jazmin''s pick',
   'Whatever looks good at the bakery.',
   'No recipe on this one — Jazmin picks. Anything from the bakery counter.',
   'dessert', 'easy', 'family',
'This card is a standing invitation rather than a recipe.

Jazmin, bring whatever looks good — a bakery pick, something you make, your
call entirely. There is nothing to follow here and nothing to get right.',
   1, 705,
   (SELECT id FROM bbq_guest WHERE name = 'Jordan+Jazmin'));


-- ===== check =====================================================
-- SELECT r.title, g.name AS reserved_for
--   FROM bbq_recipe r LEFT JOIN bbq_guest g ON g.id = r.reserved_for
--  WHERE r.reserved_for IS NOT NULL;
