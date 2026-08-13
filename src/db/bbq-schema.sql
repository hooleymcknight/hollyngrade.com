-- ---------------------------------------------------------------
-- Recipe rack for hollyngrade.com/bbq
-- Run once:  mysql -u USER -p DBNAME < bbq-schema.sql
-- ---------------------------------------------------------------

-- Guests. `token` is the magic link. Nothing secret lives behind it,
-- so it just needs to be unguessable, not cryptographically precious.
CREATE TABLE IF NOT EXISTS bbq_guest (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(80)  NOT NULL,          -- shown on the rack, so use the name people know them by
  phone      VARCHAR(24)  NULL,              -- only so you know who you still owe a link
  token      CHAR(24)     NOT NULL,
  created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uniq_token (token)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Recipes.
--   claim_cap = 2     -> normal recipe. One claim greys it, two makes it a duel.
--   claim_cap = NULL  -> unlimited. The "always in stock" pantry stuff: ice,
--                        chips, paper goods, drinks. Never greys, never duels.
CREATE TABLE IF NOT EXISTS bbq_recipe (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  slug       VARCHAR(60)  NOT NULL,
  title      VARCHAR(120) NOT NULL,
  blurb      VARCHAR(240) NULL,
  category   ENUM('main','side','sweet','drink','pantry') NOT NULL,
  effort     ENUM('easy','medium','project') NOT NULL DEFAULT 'medium',
  recipe_url VARCHAR(255) NULL,              -- link to the printable recipe
  claim_cap  TINYINT UNSIGNED NULL DEFAULT 2,
  sort_order INT NOT NULL DEFAULT 0,
  UNIQUE KEY uniq_slug (slug),
  KEY idx_category (category, sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Claims. One row per person per recipe.
-- The unique key is what actually prevents a double-tap from creating two
-- claims -- the second INSERT just fails and the route catches it.
CREATE TABLE IF NOT EXISTS bbq_claim (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  recipe_id  INT UNSIGNED NOT NULL,
  guest_id   INT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uniq_recipe_guest (recipe_id, guest_id),
  KEY idx_recipe (recipe_id),
  CONSTRAINT fk_claim_recipe FOREIGN KEY (recipe_id) REFERENCES bbq_recipe(id) ON DELETE CASCADE,
  CONSTRAINT fk_claim_guest  FOREIGN KEY (guest_id)  REFERENCES bbq_guest(id)  ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- ---------------------------------------------------------------
-- Placeholder recipes so the rack renders today. Swap the titles,
-- blurbs and URLs when you've picked the real lineup -- the rack
-- doesn't care what's in here.
-- ---------------------------------------------------------------
INSERT IGNORE INTO bbq_recipe (slug, title, blurb, category, effort, claim_cap, sort_order) VALUES
  ('poppers',        'Jalapeño poppers',      'Bacon-wrapped, the way they should be.',        'side',   'medium',  2,  10),
  ('potato-salad',   'Potato salad',          'Mustard-forward, not the sweet kind.',          'side',   'easy',    2,  20),
  ('mac-cheese',     'Baked mac & cheese',    'Crust on top is non-negotiable.',               'side',   'medium',  2,  30),
  ('borracho-beans', 'Borracho beans',        'Slow, smoky, worth the pot.',                   'side',   'project', 2,  40),
  ('coleslaw',       'Coleslaw',              'Something crunchy to cut the brisket.',         'side',   'easy',    2,  50),
  ('corn-elote',     'Elote corn salad',      'Off the cob, in a bowl, with lime.',            'side',   'easy',    2,  60),
  ('queso',          'Queso',                 'Bring a warmer if you have one.',               'side',   'easy',    2,  70),
  ('banana-pudding', 'Banana pudding',        'Nilla wafers, no substitutions.',               'sweet',  'medium',  2, 110),
  ('peach-cobbler',  'Peach cobbler',         'August peaches, so it will be good.',           'sweet',  'medium',  2, 120),
  ('pecan-bars',     'Pecan pie bars',        'Easier than a pie, tastes like a pie.',         'sweet',  'medium',  2, 130),
  ('pb-cookies',     'Peanut butter cookies', 'Fork marks required.',                          'sweet',  'easy',    2, 140),
  ('sweet-tea',      'Sweet tea',             'A gallon goes fast.',                           'drink',  'easy',    2, 210),
  ('agua-fresca',    'Agua fresca',           'Watermelon or cucumber-lime.',                  'drink',  'easy',    2, 220),
  -- pantry: unlimited, never greys out
  ('root-beer',      'A&W root beer',         'Always welcome. Always.',                       'pantry', 'easy', NULL, 310),
  ('ice',            'A bag of ice',          'You cannot have too much.',                     'pantry', 'easy', NULL, 320),
  ('chips-salsa',    'Chips & salsa',         'Low effort, high impact.',                      'pantry', 'easy', NULL, 330),
  ('paper-goods',    'Paper plates & napkins','The unglamorous hero.',                         'pantry', 'easy', NULL, 340);
