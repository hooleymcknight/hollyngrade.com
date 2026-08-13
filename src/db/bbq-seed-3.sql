-- ---------------------------------------------------------------
-- Recipe rack, seed 3: the real 32
--   mysql --default-character-set=utf8mb4 -u USER -p DBNAME < bbq-seed-3.sql
--
-- The charset flag is not optional -- Jalapeño and Mammaw's em-dashes will
-- both mangle without it. Run bbq-migration-2.sql first.
--
-- blurbs below are drafts. They're the one thing here written in my voice
-- rather than yours, so read them with a red pen.
-- ---------------------------------------------------------------

DELETE FROM bbq_recipe WHERE category <> 'pantry';


-- ===== APPETIZERS (5) ===========================================
INSERT INTO bbq_recipe
  (slug, title, blurb, host_note, category, effort, source, recipe_url, claim_cap, sort_order, pairs_with)
VALUES
  ('guacamole', 'Guacamole avocado dip',
   'Cool, green, gone in ten minutes.',
   NULL,
   'appetizer', 'easy', 'heb',
   'https://www.heb.com/recipe/recipe-detail/guacamole-avocado-dip', 2, 110, 'tortilla-chips'),

  ('tamale-nachos', 'Tamale corn chip nachos',
   'Tamales and corn chips, which is two good ideas at once.',
   NULL,
   'appetizer', 'easy', 'heb',
   'https://www.heb.com/recipe/recipe-detail/tamale-corn-chip-nachos', 2, 120, NULL),

  ('smoked-salsa', 'Smoked spicy salsa',
   'Smoked first, then blended. Worth the extra step.',
   NULL,
   'appetizer', 'medium', 'heb',
   'https://www.heb.com/recipe/recipe-detail/smoked-spicy-salsa', 2, 130, 'tortilla-chips'),

  ('poppers', 'Carbonara jalapeño poppers',
   'Bacon, cream, and a pepper. Structurally perfect.',
   'My usual — but I''m allergic to capsaicin, so this year somebody else gets the gloves. Scrape the ribs and seeds well.',
   'appetizer', 'medium', 'heb',
   'https://www.heb.com/recipe/recipe-detail/carbonara-jalapeno-poppers', 2, 140, NULL);

INSERT INTO bbq_recipe
  (slug, title, blurb, host_note, category, effort, source, body, claim_cap, sort_order)
VALUES
  ('deviled-eggs', 'Mom & Dad''s deviled eggs',
   'Miracle Whip and pickle juice. Don''t argue with it.',
   NULL,
   'appetizer', 'medium', 'family',
'Rick & Alana Phillips

12 eggs
6 tbsp Miracle Whip
1 tbsp pickle juice
2 tbsp sugar
1/4 tsp salt
1/2 tsp pepper
1 tbsp dry mustard
1 tbsp mustard
paprika

Hard boil eggs, cut in half lengthwise, and remove yolks. Mix remaining
ingredients with yolks. Spoon into eggs and top with paprika.',
   2, 150);


-- ===== MEAT DISHES (5) ==========================================
INSERT INTO bbq_recipe
  (slug, title, blurb, host_note, category, effort, source, recipe_url, claim_cap, sort_order)
VALUES
  ('pork-belly', 'Crispy grilled pork belly',
   'Crispy edges, soft middle.',
   NULL,
   'meat_dish', 'project', 'heb',
   'https://www.heb.com/recipe/recipe-detail/crispy-grilled-pork-belly', 2, 210),

  ('pulled-pork', 'Sweet and spicy BBQ pulled pork',
   'Low, slow, and forgiving.',
   NULL,
   'meat_dish', 'project', 'heb',
   'https://www.heb.com/recipe/recipe-detail/sweet-and-spicy-bbq-pulled-pork', 2, 220),

  ('cola-ribs', 'Slow cooker cola ribs',
   'The slow cooker does the whole job.',
   NULL,
   'meat_dish', 'project', 'heb',
   'https://www.heb.com/recipe/recipe-detail/slow-cooker-cola-ribs', 2, 230),

  ('bratwurst', 'Bock and brown sugar bratwurst',
   'Simmered in beer, finished on the grill.',
   'Heads up that this one needs a bottle of bock — grab a single if you''d rather not buy a six-pack.',
   'meat_dish', 'easy', 'heb',
   'https://www.heb.com/recipe/recipe-detail/bock-and-brown-sugar-bratwurst', 2, 240),

  ('king-ranch', 'King Ranch chicken casserole',
   'The Texas potluck casserole. Travels in a 9x13.',
   NULL,
   'meat_dish', 'medium', 'heb',
   'https://www.heb.com/recipe/recipe-detail/king-ranch-chicken-casserole', 2, 250);


-- ===== SIDES WITH MEAT IN 'EM (3) ===============================
INSERT INTO bbq_recipe
  (slug, title, blurb, host_note, category, effort, source, recipe_url, claim_cap, sort_order, pairs_with)
VALUES
  ('texas-chili', 'Totally Texas chili',
   'No beans. We''re not doing this again.',
   NULL,
   'meat_side', 'project', 'heb',
   'https://www.heb.com/recipe/recipe-detail/totally-texas-chili', 2, 310, NULL),

  ('brisket-queso', 'Homemade brisket queso',
   'Queso with brisket in it, which is the correct amount of brisket.',
   'Come find me before you finish it — you can throw some of my brisket in at the end.',
   'meat_side', 'medium', 'heb',
   'https://www.heb.com/recipe/recipe-detail/homemade-brisket-queso', 2, 320, 'tortilla-chips'),

  ('bean-pot', 'Texas slow cooker bean pot',
   'Smoky, slow, and better the longer it sits.',
   NULL,
   'meat_side', 'project', 'heb',
   'https://www.heb.com/recipe/recipe-detail/texas-slow-cooker-bean-pot', 2, 330, NULL);


-- ===== BREAD & STARCHY SIDES (6) ================================
INSERT INTO bbq_recipe
  (slug, title, blurb, host_note, category, effort, source, recipe_url, claim_cap, sort_order)
VALUES
  ('tater-tot', 'Texas tater tot casserole',
   'Tots on top. Non-negotiable.',
   NULL,
   'starchy_side', 'easy', 'heb',
   'https://www.heb.com/recipe/recipe-detail/texas-tater-tot-casserole', 2, 410),

  ('frito-pie', 'Frito pie',
   'A bag of Fritos and no regrets.',
   NULL,
   'starchy_side', 'easy', 'heb',
   'https://www.heb.com/recipe/recipe-detail/frito-pie-dinner', 2, 420),

  ('twice-baked', 'Twice-baked potato casserole',
   'All the good parts of a loaded potato, in a pan.',
   NULL,
   'starchy_side', 'medium', 'heb',
   'https://www.heb.com/recipe/recipe-detail/twice-baked-potato-casserole', 2, 430),

  ('smoked-potatoes', 'Smoked baked potatoes',
   'They pick up smoke while they cook.',
   NULL,
   'starchy_side', 'medium', 'heb',
   'https://www.heb.com/recipe/recipe-detail/smoked-baked-potatoes', 2, 440),

  ('spanish-rice', 'Easy Spanish rice',
   'One pan, feeds a crowd.',
   NULL,
   'starchy_side', 'easy', 'heb',
   'https://www.heb.com/recipe/recipe-detail/easy-spanish-rice', 2, 450);

INSERT INTO bbq_recipe
  (slug, title, blurb, host_note, category, effort, source, body, claim_cap, sort_order)
VALUES
  ('mac-cheese', 'Aunt Sharon''s mac & cheese',
   'Velveeta, elbows, and a lot of confidence.',
   'This came to me as a text message and I''m not editing it.',
   'starchy_side', 'easy', 'family',
'Aunt Sharon — by text, verbatim

Sure. Buy the Large elbow macaroni. Velveeta cheese and you will need some
milk. Boil macaroni. While its cooking cut velveeta into small cubes get a pan
or casserole dish. Place some of the cheese on notion [bottom] of pan and about 1/2 cup
of milk. Strain the pasta and poor it over the cheese and milk. Start stirring
and add more cheese as it melts. As cheese melts add a lil more milk keeping it
a little bit soupy.

If u get small bag of pasta use small box of cheese. Large bag use large box.
You may not use all cheese just depends how cheesy u want it.

You can''t mess it up so just go for it.',
   2, 460);


-- ===== VEGGIE SIDES (5) =========================================
INSERT INTO bbq_recipe
  (slug, title, blurb, host_note, category, effort, source, recipe_url, claim_cap, sort_order)
VALUES
  ('street-corn', 'Grilled Mexican street corn',
   'Charred, then dressed. Off the cob is fine too.',
   'Bring it ready to go and put it on my grill once you''re here.',
   'veggie_side', 'medium', 'heb',
   'https://www.heb.com/recipe/recipe-detail/grilled-mexican-street-corn', 2, 510),

  ('green-beans', 'Creamy green bean casserole',
   'The one everybody''s grandmother made.',
   NULL,
   'veggie_side', 'easy', 'heb',
   'https://www.heb.com/recipe/recipe-detail/creamy-green-bean-casserole', 2, 520),

  ('okra-fries', 'Air fryer spiced okra fries',
   'Crisp, salty, disappears fast.',
   'Best straight out of the fryer — make these last thing before you head over.',
   'veggie_side', 'easy', 'heb',
   'https://www.heb.com/recipe/recipe-detail/air-fryer-spiced-okra-fries', 2, 530),

  ('squash-casserole', 'Squash casserole',
   'Cracker topping, soft middle.',
   NULL,
   'veggie_side', 'medium', 'heb',
   'https://www.heb.com/recipe/recipe-detail/holiday-squash-casserole', 2, 540),

  ('veg-kabobs', 'Grilled vegetable kabobs',
   'Skewered, seasoned, charred.',
   'Skewer them at home and put them on my grill when you get here.',
   'veggie_side', 'medium', 'heb',
   'https://www.heb.com/recipe/recipe-detail/spicy-grilled-vegetable-kabobs', 2, 550);


-- ===== SALADS (3) ===============================================
INSERT INTO bbq_recipe
  (slug, title, blurb, host_note, category, effort, source, recipe_url, claim_cap, sort_order)
VALUES
  ('texas-caviar', 'Quick Southwest Texas caviar',
   'Black-eyed peas doing their best work.',
   NULL,
   'salad', 'easy', 'heb',
   'https://www.heb.com/recipe/recipe-detail/quick-southwest-texas-caviar', 2, 610),

  ('cole-slaw', 'Texas cole slaw',
   'The crunch that cuts through everything else.',
   NULL,
   'salad', 'easy', 'heb',
   'https://www.heb.com/recipe/recipe-detail/texas-cole-slaw', 2, 620),

  ('cucumber-salad', 'Cucumber tomato salad with soft herbs',
   'Cold, sharp, and the thing people keep going back to.',
   'This one can be made the night before — it''s better after it sits.',
   'salad', 'easy', 'heb',
   'https://www.heb.com/recipe/recipe-detail/cucumber-tomato-salad-with-soft-herbs', 2, 630);


-- ===== DESSERTS (5) =============================================
INSERT INTO bbq_recipe
  (slug, title, blurb, host_note, category, effort, source, recipe_url, claim_cap, sort_order)
VALUES
  ('peach-cobbler', 'Easy peach cobbler',
   'August peaches, so it will be good.',
   NULL,
   'dessert', 'medium', 'heb',
   'https://www.heb.com/recipe/recipe-detail/easy-peach-cobbler', 2, 740),

  ('banana-pudding', 'Original banana pudding',
   'Nilla wafers. No substitutions.',
   NULL,
   'dessert', 'medium', 'heb',
   'https://www.heb.com/recipe/recipe-detail/original-banana-pudding', 2, 750);

INSERT INTO bbq_recipe
  (slug, title, blurb, host_note, category, effort, source, body, claim_cap, sort_order)
VALUES
  ('strawberry-cake', 'Strawberry cake',
   'Two years of trying things until it was right.',
   'Make it vegan. I worked out the substitutions last year and it came out four times better — ask me and I''ll walk you through it.',
   'dessert', 'project', 'family',
'Aunt Vida & Holly M. Phillips

CAKE
1 package white cake mix
1 package strawberry gelatin powder, small
1/2 cup frozen strawberries
1/2 cup water
3/4 cup vegetable oil
4 eggs
3 tbsp flour

ICING
2 1/2 cups powdered sugar
3/4 cup frozen strawberries
3/8 cup margarine

Mix cake mix, flour, and gelatin powder. Add strawberries, water, oil, and
eggs. Beat well with mixers until smooth. Bake as directed on cake mix box,
depending on type and size of pan.

Mix powdered sugar, frozen strawberries, and margarine at room temperature
(not melted). Spread icing on cake when cool.',
   2, 710),

  ('egg-custard', 'Dad''s egg custard',
   'Four ingredients and ninety minutes.',
   NULL,
   'dessert', 'medium', 'family',
'Rick Phillips

4 eggs
2 cups milk
1/2 cup sugar
1/2 tsp vanilla
nutmeg

Mix ingredients. Sprinkle with nutmeg. Bake at 300° for 90 minutes.',
   2, 720),

  ('no-bake-cookies', 'Mammaw''s no-bake cookies',
   'Coconut, oats, chocolate, no oven.',
   'Contains peanut butter, and nuts if you add them.',
   'dessert', 'easy', 'family',
'No Bake Chocolate Oatmeal Cookies
Naida Phillips

2 cups sugar
1/4 cup cocoa
1/4 cup margarine
1/2 cup milk
1/2 cup peanut butter
1/2 cup coconut
1/2 teaspoon salt
2 cups oats, rolled (raw)
1/2 cup nuts (optional)

Mix sugar, salt and cocoa in a saucepan, add margarine and milk and bring to a
boil. Boil 1 1/2 minute. Remove from heat and add remaining ingredients; mix
well. Drop by spoonfuls onto wax paper and let cool.

Naida recommends not doubling; doesn''t work well.',
   2, 730);


-- ===== check =====================================================
-- SELECT category, COUNT(*) FROM bbq_recipe GROUP BY category ORDER BY MIN(sort_order);
