create table "USER" (
id bigint auto_increment primary key,
email varchar(50),
password varchar(50),
firstName varchar(50),
lastName varchar(50),
phone varchar(50),
profilePic varchar(50),
description varchar(140)
);

create table Application (
id bigint auto_increment primary key,
jobId bigint,
applicantId bigint,
status varchar(50),
applicantMsg varchar(140)
);

create table Job (
id bigint auto_increment primary key,
title varchar(50),
description varchar(140),
locationId bigint,
jobPic varchar(50),
price decimal,
ownerId bigint,
"DATE" date
);

create table Location (
id bigint auto_increment primary key,
street varchar(50),
zipCode varchar(50),
city varchar(50),
country varchar(50),
lng decimal,
lat decimal
)