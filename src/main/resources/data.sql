INSERT INTO "USER" ("EMAIL", "PASSWORD", "FIRSTNAME", "LASTNAME", "PHONE", "DESCRIPTION")
VALUES ('lars@telia.com', '12345', 'LARS', 'HAMMAR', '07245514', 'I am a friendly guy');

INSERT INTO "USER" ("EMAIL", "PASSWORD", "FIRSTNAME", "LASTNAME", "PHONE", "DESCRIPTION")
VALUES ('jenny@tv4.se', '123', 'Jenny', 'Strömstedt', '07245514', 'I am on tv!!');

INSERT INTO "USER" ("EMAIL", "PASSWORD", "FIRSTNAME", "LASTNAME", "PHONE", "DESCRIPTION")
VALUES ('moneypenny', 'ilovejames', 'Money', 'Penny', '07245514', 'Classified');

INSERT INTO "USER" ("EMAIL", "PASSWORD", "FIRSTNAME", "LASTNAME", "PHONE", "DESCRIPTION")
VALUES ('baybabe', '12345', 'Pamela', 'Anderson', '07245514', 'Working a lot so do not have time for chores');

INSERT INTO "JOB" ("TITLE", "DESCRIPTION", "PRICE", "DATE", "OWNERID", "LOCATIONID")
VALUES ('Gardening', 'Mow my lawn. 200 sqm', '200', '2019-04-01', 4, 1 );

INSERT INTO "JOB" ("TITLE", "DESCRIPTION", "PRICE", "DATE", "OWNERID", "LOCATIONID")
VALUES ('Plumbing', 'Fix my pipes', '700', '2019-04-02', 4, 1 );

INSERT INTO "JOB" ("TITLE", "DESCRIPTION", "PRICE", "DATE", "OWNERID", "LOCATIONID")
VALUES ('Painting', 'Need to paint my daughters room pink. Bring your own paint', '1500', '2019-04-17', 2, 2 );

INSERT INTO "APPLICATION" ("JOBID", "APPLICANTID", "APPLICANTMSG")
VALUES ('1','1','I would love to, got lots of experience')

INSERT INTO "APPLICATION" ("JOBID", "APPLICANTID", "APPLICANTMSG")
VALUES ('1','2','Jenny here, put me to work ;)')

INSERT INTO "APPLICATION" ("JOBID", "APPLICANTID", "APPLICANTMSG")
VALUES ('3','3','Moneypenny needs some money and a penny')

INSERT INTO "LOCATION" ("STREET", "ZIPCODE", "CITY", "COUNTRY")
VALUES ('Boulevard of Broken Dreams', '511-69', 'L.A.', 'US of A')

INSERT INTO "LOCATION" ("STREET", "ZIPCODE", "CITY", "COUNTRY")
VALUES ('Götgatan 51', '411-80', 'Stockholm.', 'Sweden')
