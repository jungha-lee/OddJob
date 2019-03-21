INSERT INTO USER (EMAIL, PASSWORD, FIRST_NAME, LAST_NAME, PHONE, DESCRIPTION)
VALUES ('pam@be.com', '12345', 'Pamela', 'Anderson', '07245514', 'Working a lot so do not have time for chores'),
('moneypenny@mit.co.uk', 'secret007', 'Money', 'Penny', '+44 0123 23 32', 'Classified'),
('Michelle@casablanca.org', '123', 'Michelle', 'Obama', '072-454 43 43', 'Got used to white house staff helping us but now we only use OddJob!'),
('linus@academy.se', '123', 'Linus', 'Eriksson', '0721902254', 'Bom dia!'),
('jungha@academy.se', '123', 'Jungha', 'Lee', '0724551334', 'Can help you move with my huge van'),
('anatoli@latvia.lat', '123', 'Anatoli', 'Vahterovs', '070-33 66 712', 'I help you with this shit'),
('daniel@academy.se', '123', 'Daniel', 'Persson', '072412314', 'Certified ping pong sensei'),
('lars@telia.com', '12345', 'Lars', 'Hammar', '0729213', 'I am a friendly guy');

INSERT INTO JOB (TITLE, PRICE, "DATE", OWNER_ID, LOCATION_ID, DESCRIPTION)
VALUES ('Painting', 1500, '2019-04-17', 2, 2 , 'Need to paint my daughters room pink. Bring your own paint'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Gardening', 300, '2019-04-04', 1, 1 , 'Fix my plants'),
('Painting', 700, '2019-04-12', 2, 1 , 'Fix my wall'),
('Plumbing', 700, '2019-05-02', 4, 1 , 'My toilet is clogged'),
('Teaching', 700, '2019-04-02', 3, 1 , 'Need someone to help my kid practice math'),
('Technology', 100, '2019-04-01', 4, 1 , 'Install my new computer'),
('Painting', 1220, '2019-06-02', 5, 1 , 'My house is brown but I would like it red.'),
('Plumbing', 700, '2019-04-02', 6, 1 , 'Fix my pipes'),
('Gardening', 300, '2019-04-04', 8, 1 , 'Fix my plants'),
('Painting', 700, '2019-04-12', 7, 1 , 'Fix my wall'),
('Plumbing', 700, '2019-05-02', 4, 1 , 'My toilet is clogged'),
('Teaching', 700, '2019-04-02', 3, 1 , 'Need someone to help my kid practice math'),
('Technology', 100, '2019-04-01', 4, 1 , 'Install my new computer'),
('Painting', 1220, '2019-06-02', 2, 1 , 'My house is brown but I would like it red.'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Gardening', 300, '2019-04-04', 1, 1 , 'Fix my plants'),
('Painting', 700, '2019-04-12', 8, 1 , 'Fix my wall'),
('Plumbing', 700, '2019-05-02', 4, 1 , 'My toilet is clogged'),
('Teaching', 700, '2019-04-02', 3, 1 , 'Need someone to help my kid practice math'),
('Technology', 100, '2019-04-01', 4, 1 , 'Install my new computer'),
('Painting', 1220, '2019-06-02', 4, 1 , 'My house is red but I would like it blue.'),
('Gardening', 200, '2019-04-01', 4, 1 , 'Mow my lawn. 200 sqm');


INSERT INTO APPLICATION (JOB_ID, APPLICANT_ID, APPLICANT_MSG)
VALUES (1, 1,'I would love to, got lots of experience'),
 (2, 1,'I would love to, got lots of experience'),
 (3, 1,'I know all about that'),
 (1, 2,'Send me a msg if you want to see my resume'),
 (2, 2,'I will do it'),
 (4, 4,'I would love to, got lots of experience'),
 (6, 5,'I would love to, got lots of experience'),
 (6, 4,'I would love to, got lots of experience');



INSERT INTO LOCATION (STREET, ZIP_CODE, CITY, COUNTRY, LNG, LAT)
VALUES ('Strandvägen', '411 01', 'Stockholm', 'Sweden', 1, 1),
('Götgatan 51', '411-80', 'Stockholm.', 'Sweden', 0, 0);