CREATE TABLE IF  NOT EXISTS {}.cards(
    id INT(12) NOT NULL auto_increment PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    released VARCHAR(40) NOT NULL,
    image VARCHAR(50) NOT NULL,
    attribute_id INT(12) NOT NULL,
    CONSTRAINT fk_attribute FOREIGN KEY(attribute_id) REFERENCES attributes(id) ON DELETE CASCADE ON UPDATE CASCADE,
    stat_id INT(12) NOT NULL,
    CONSTRAINT fk_stat FOREIGN KEY(stat_id) REFERENCES stats(id) ON DELETE CASCADE ON UPDATE CASCADE
)