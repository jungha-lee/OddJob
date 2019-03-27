INSERT INTO USER (EMAIL, PASSWORD, FIRST_NAME, LAST_NAME, PHONE, DESCRIPTION, PROFILE_PIC)
VALUES ('oddjob@goldfinger.co.uk', '$2a$11$Z7P4Kczw5qARQ4J/qX/bTuOlpjTDm2/lh7pDgRwYSO3CGFNc8hoxW', 'Odd', 'Job', '+44 0123 23 32', 'Bond is my mortal enemy', 'https://res.cloudinary.com/linusaxel/image/upload/v1553344129/WhatsApp_Image_2019-03-23_at_1.27.38_PM.jpg'),
('moneypenny@mit.co.uk', '$2a$11$Z7P4Kczw5qARQ4J/qX/bTuOlpjTDm2/lh7pDgRwYSO3CGFNc8hoxW', 'Money', 'Penny', '+44 0123 23 32', 'Classified', 'https://res.cloudinary.com/linusaxel/image/upload/v1553342959/oddjob.jpg'),
('Michelle@casablanca.org', '$2a$11$Z7P4Kczw5qARQ4J/qX/bTuOlpjTDm2/lh7pDgRwYSO3CGFNc8hoxW', 'Michelle', 'Obama', '072-454 43 43', 'Got used to white house staff helping us but now we only use OddJob!', 'https://res.cloudinary.com/linusaxel/image/upload/v1553342959/oddjob.jpg'),
('linus@academy.se', '$2a$11$Z7P4Kczw5qARQ4J/qX/bTuOlpjTDm2/lh7pDgRwYSO3CGFNc8hoxW', 'Linus', 'Eriksson', '0721902254', 'Bom dia!', 'https://res.cloudinary.com/linusaxel/image/upload/v1553356804/4H9B0862.jpg'),
('jungha@academy.se', '$2a$11$Z7P4Kczw5qARQ4J/qX/bTuOlpjTDm2/lh7pDgRwYSO3CGFNc8hoxW', 'Jungha', 'Lee', '0724551334', 'Can help you move with my huge van', 'https://res.cloudinary.com/linusaxel/image/upload/v1553356805/4H9B0868.jpg'),
('anatoli@latvia.lat', '$2a$11$Z7P4Kczw5qARQ4J/qX/bTuOlpjTDm2/lh7pDgRwYSO3CGFNc8hoxW', 'Anatoli', 'Vahterovs', '070-33 66 712', 'I help you', 'https://res.cloudinary.com/linusaxel/image/upload/v1553356808/4H9B0888.jpg'),
('daniel@academy.se', '$2a$11$Z7P4Kczw5qARQ4J/qX/bTuOlpjTDm2/lh7pDgRwYSO3CGFNc8hoxW', 'Daniel', 'Persson', '072412314', 'Certified ping pong sensei', 'https://res.cloudinary.com/linusaxel/image/upload/v1553356802/4H9B0858.jpg'),
('ana@gmail.com', '$2a$11$Z7P4Kczw5qARQ4J/qX/bTuOlpjTDm2/lh7pDgRwYSO3CGFNc8hoxW', 'Lars', 'Hammar', '0729213', 'I am a friendly guy', 'https://res.cloudinary.com/linusaxel/image/upload/v1553342784/4H9B0853.jpg');

INSERT INTO JOB (TITLE, PRICE, "DATE", OWNER_ID, LOCATION_ID, DESCRIPTION, JOB_PIC)
VALUES ('Painting', 500, '2019-04-17', 2, 1 , 'Need to paint my daughters room pink. Bring your own paint', 'https://res.cloudinary.com/linusaxel/image/upload/v1553592565/painting.jpg'),
('Plumbing', 1050, '2019-04-02', 4, 2 , 'Fix my pipes', 'https://res.cloudinary.com/linusaxel/image/upload/v1553592606/plumbing.jpg'),
('Gardening', 500, '2019-04-04', 1, 3 , 'Fix my plants', 'https://res.cloudinary.com/linusaxel/image/upload/v1553592880/garden.jpg'),
('Painting', 600, '2019-04-12', 2, 4 , 'Fix my wall', 'https://res.cloudinary.com/linusaxel/image/upload/v1553592467/Stocksy_txpdc39b9790by000_Medium_867684-5a958e10119fa80036fb82b6.jpg'),
('Plumbing', 1100, '2019-05-02', 4, 5 , 'My toilet is clogged', 'https://res.cloudinary.com/linusaxel/image/upload/v1553592624/sink.jpg');
--('Teaching', 800, '2019-04-02', 3, 1 , 'Need someone to help my kid practice math', 'https://res.cloudinary.com/linusaxel/image/upload/v1553592647/teachingmath.jpg'),
--('Technology', 2000, '2019-04-01', 4, 2 , 'Install my new computer', 'https://res.cloudinary.com/linusaxel/image/upload/v1553592683/computerinstall.jpg'),
--('Painting', 1220, '2019-06-02', 5, 3 , 'My house is brown but I would like it red.', 'https://res.cloudinary.com/linusaxel/image/upload/v1553592565/painting.jpg'),
--('Plumbing', 400, '2019-04-02', 6, 4 , 'Fix my pipes', 'https://res.cloudinary.com/linusaxel/image/upload/v1553592606/plumbing.jpg'),
--('Gardening', 300, '2019-04-04', 8, 5 , 'Fix my plants', 'https://res.cloudinary.com/linusaxel/image/upload/v1553592880/garden.jpg'),
--('Painting', 450, '2019-04-12', 7, 1 , 'Fix my wall', 'https://res.cloudinary.com/linusaxel/image/upload/v1553592565/painting.jpg'),
--('Plumbing', 700, '2019-05-02', 4, 2 , 'My toilet is clogged', 'https://res.cloudinary.com/linusaxel/image/upload/v1553592606/plumbing.jpg'),
--('Gardening', 1150, '2019-04-01', 4, 3 , 'Mow my lawn. 200 sqm', 'https://res.cloudinary.com/linusaxel/image/upload/v1553592900/gg.jpg');

INSERT INTO APPLICATION (JOB_ID, APPLICANT_ID, APPLICANT_MSG)
VALUES (1, 1,'I would love to, got lots of experience'),
 (2, 1,'I would love to, got lots of experience'),
 (3, 1,'I know all about that'),
 (1, 2,'Send me a msg if you want to see my resume'),
 (2, 2,'I will do it'),
 (4, 4,'I would love to, got lots of experience');
-- (6, 5,'I would love to, got lots of experience'),
-- (6, 4,'I would love to, got lots of experience');

INSERT INTO LOCATION (STREET, ZIP_CODE, CITY, COUNTRY, LAT, LNG)
VALUES ('Borgarfjordsgatan 4', '164 55', 'Kista', 'Sweden', 59.407626, 17.946810),
('Götgatan 51', '116 21', 'Stockholm', 'Sweden', 59.314713, 18.073718),
('Bygatan 27', '171 49', 'Solna', 'Sweden', 59.351055, 17.984174),
('Nydalavägen 2', '126 50', 'Hägersten', 'Sweden', 59.308411, 18.002223),
('Floravägen 2-', '131 41', 'Nacka', 'Sweden', 59.304070, 18.159866);