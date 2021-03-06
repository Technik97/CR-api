CREATE TABLE IF NOT EXISTS {}.stats(
    id INT(12) NOT NULL auto_increment PRIMARY KEY,
    hit_points INT(12),
    damage INT(12),
    crown_tower_damage INT(12),
    area_damage INT(12),
    spawn_damage INT(12),
    jump_damage INT(12),
    jump_range VARCHAR(30),
    dps INT(12),
    building_dps INT(12),
    slowdown INT(12),
    duration FLOAT(12,4),
    radius FLOAT(12, 4),
    hit_speed FLOAT(12, 4),
    speed INT(12) NOT NULL,
    deploy_time FLOAT(12, 4) NOT NULL,
    spawn_speed FLOAT(12, 4) NOT NULL,
    life_time FLOAT(12, 4) NOT NULL,
    atk_range VARCHAR(30) NOT NULL,
    death_damage INT(12),
    production_speed FLOAT(12, 4)
);