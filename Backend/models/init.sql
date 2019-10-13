/****************************************\
 *      Voting System Data Base         * 
\****************************************/

-- Notice database.
CREATE DATABASE voting_system;

-- NOTICE:  CREATE TABLE TO ADD NEW votes.
CREATE TABLE votes (
    id_insertion SERIAL NOT NULL PRIMARY KEY,
    id_vote SERIAL NOT NULL,
    v_favor INT NOT NULL,
    v_nay INT NOT NULL,
    v_blank INT NOT NULL,
    CONSTRAINT uk_id_insertion UNIQUE(id_insertion)
);

-- NOTICE: CREATE TABLE TO ADD NEW agendas.
CREATE TABLE agendas (
    id_insertion SERIAL NOT NULL PRIMARY KEY,
    id_agenda VARCHAR(30) NOT NULL,
    agenda_name VARCHAR(50) NOT NULL,
    agenda_content JSONB NOT NULL,
    CONSTRAINT uk_id UNIQUE(id_agenda)
);

-- Notice: Create a function to get all agendas.

CREATE OR REPLACE FUNCTION get_all_agendas()
RETURNS TABLE 
(
   id VARCHAR,
   name_a VARCHAR,
   agenda JSONB
) 
AS $$
BEGIN
    RETURN QUERY SELECT 
       id_agenda, agenda_name, agenda_content 
    FROM
        agendas;
END;$$
LANGUAGE 'plpgsql';

-- Notice: create a function to get all votes.
CREATE OR REPLACE FUNCTION get_all_votes()
RETURNS TABLE 
(
   id INT,
   favor INT,
   nay INT,
   blank INT
) 
AS $$
BEGIN
    RETURN QUERY SELECT 
       id_vote, v_favor, v_nay, v_blank
    FROM
        votes;
END;$$
LANGUAGE 'plpgsql';

--Notice: create a function to insert new agendas.
CREATE OR REPLACE FUNCTION insert_agenda(_id VARCHAR, _nam VARCHAR, agenda JSONB)
RETURNS VOID
AS $$
BEGIN
    INSERT INTO agendas(id_agenda, agenda_name, agenda_content) values($1, $2, $3);
END;$$
LANGUAGE 'plpgsql';