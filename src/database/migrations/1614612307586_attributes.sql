CREATE TABLE IF NOT EXISTS {}.attributes(
    id INT(12) NOT NULL auto_increment PRIMARY KEY,
    cost INT(12) NOT NULL,
    target VARCHAR(20) NOT NULL,
    count INT(12) NOT NULL,
    tansport VARCHAR(20) NOT NULL,
    type_id INT(12) NOT NULL,
    CONSTRAINT fk_type FOREIGN KEY(type_id) REFERENCES card_types(id) ON DELETE CASCADE ON UPDATE CASCADE,
    rarity_id INT(12) NOT NULL,
    CONSTRAINT fk_rarity FOREIGN KEY(rarity_id) REFERENCES card_rarities(id) ON DELETE CASCADE ON UPDATE CASCADE
);