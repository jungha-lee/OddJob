INSERT INTO USER (EMAIL, PASSWORD, FIRST_NAME, LAST_NAME, PHONE, DESCRIPTION)
VALUES ('baybabe@babe.com', '12345', 'Pamela', 'Anderson', '07245514', 'Working a lot so do not have time for chores'),
('moneypenny@mit.co.uk', 'ilovejames', 'Money', 'Penny', '07245514', 'Classified'),
('jenny@tv4.se', '123', 'Jenny', 'Strömstedt', '07245514', 'I am on tv!!'),
('linus@academy.se', '123', 'Linus', 'Eriksson', '0721902254', ''),
('junga@academy.se', '123', 'Junga', 'Lee', '0724551334', 'Can help you move with my huge van'),
('anatoli@latvia.lat', '123', 'Anatoli', 'Vahterovs', '0724545514', 'I help you with this shit'),
('daniel@academy.se', '123', 'Daniel', 'Persson', '0724245514', 'Certified ping pong sensei'),
('lars@telia.com', '12345', 'LARS', 'HAMMAR', '07245514', 'I am a friendly guy');

INSERT INTO JOB (TITLE, PRICE, "DATE", OWNER_ID, LOCATION_ID, DESCRIPTION)
VALUES ('Painting', 1500, '2019-04-17', 2, 2 , 'Need to paint my daughters room pink. Bring your own paint'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Plumbing', 700, '2019-04-02', 4, 1 , 'Fix my pipes'),
('Gardening', 200, '2019-04-01', 4, 1 , 'Mow my lawn. 200 sqm');


INSERT INTO APPLICATION (JOB_ID, APPLICANT_ID, APPLICANT_MSG)
VALUES (1, 1,'I would love to, got lots of experience'),
(1, 2,'Money here, put me to work ;)'),
(2, 2,'Please, I need it desperately ;)'),
(3, 2,'I beg you ;)'),
(3, 3,'Moneypenny needs some money and a penny');


INSERT INTO LOCATION (STREET, ZIP_CODE, CITY, COUNTRY, LNG, LAT)
VALUES ('Boulevard of Broken Dreams', '511-69', 'L.A.', 'US of A', 1, 1),
('Götgatan 51', '411-80', 'Stockholm.', 'Sweden', 0, 0);