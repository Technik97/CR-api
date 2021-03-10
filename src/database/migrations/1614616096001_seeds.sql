INSERT INTO card_types(card_type)
VALUES
('Troop'),
('Building'),
('Spell');

INSERT INTO card_rarities(card_rarity)
VALUES
('Common'),
('Rare'),
('Epic'),
('Legendary');

INSERT INTO stats(hit_points, hit_speed, speed, deploy_time, area_damage, dps)
VALUES
(216, 3, 60, 1, 140, 46.0);

INSERT INTO attributes(cost, target, atk_range, count, transport, type_id, rarity_id)
VALUES
(3, 'Air & Ground', '9' ,1, 'Ground', 1, 4);

INSERT INTO cards(name, released, image, attribute_id, stat_id)
VALUES
('Princess', '2016-02-29', 'princess.jpg', 1, 1);

