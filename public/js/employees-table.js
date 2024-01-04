const mock = [
    {
        "id": 1001,
        "imageUrl": "https://hub.dummyapis.com/Image?text=CC&height=120&width=120",
        "firstName": "Candida",
        "lastName": "Casper",
        "email": "Candida.Casper@dummyapis.com",
        "contactNumber": "4949095101",
        "age": 78,
        "dob": "31/05/1946",
        "salary": 1.0,
        "address": "Address1"
    },
    {
        "id": 1002,
        "imageUrl": "https://hub.dummyapis.com/Image?text=JS&height=120&width=120",
        "firstName": "Jarrod",
        "lastName": "Simonis",
        "email": "Jarrod.Simonis@dummyapis.com",
        "contactNumber": "4577799184",
        "age": 84,
        "dob": "04/08/1940",
        "salary": 2.0,
        "address": "Address2"
    },
    {
        "id": 1003,
        "imageUrl": "https://hub.dummyapis.com/Image?text=JA&height=120&width=120",
        "firstName": "Jermey",
        "lastName": "Armstrong",
        "email": "Jermey.Armstrong@dummyapis.com",
        "contactNumber": "4726698504",
        "age": 31,
        "dob": "21/05/1993",
        "salary": 3.0,
        "address": "Address3"
    },
    {
        "id": 1004,
        "imageUrl": "https://hub.dummyapis.com/Image?text=TS&height=120&width=120",
        "firstName": "Theodora",
        "lastName": "Stark",
        "email": "Theodora.Stark@dummyapis.com",
        "contactNumber": "4228999525",
        "age": 78,
        "dob": "22/02/1946",
        "salary": 4.0,
        "address": "Address4"
    },
    {
        "id": 1005,
        "imageUrl": "https://hub.dummyapis.com/Image?text=WS&height=120&width=120",
        "firstName": "William",
        "lastName": "Senger",
        "email": "William.Senger@dummyapis.com",
        "contactNumber": "4529493668",
        "age": 27,
        "dob": "25/02/1997",
        "salary": 5.0,
        "address": "Address5"
    },
    {
        "id": 1006,
        "imageUrl": "https://hub.dummyapis.com/Image?text=VK&height=120&width=120",
        "firstName": "Violet",
        "lastName": "Kulas",
        "email": "Violet.Kulas@dummyapis.com",
        "contactNumber": "4280199118",
        "age": 39,
        "dob": "24/08/1985",
        "salary": 6.0,
        "address": "Address6"
    },
    {
        "id": 1007,
        "imageUrl": "https://hub.dummyapis.com/Image?text=AK&height=120&width=120",
        "firstName": "Ansley",
        "lastName": "Kub",
        "email": "Ansley.Kub@dummyapis.com",
        "contactNumber": "4879092363",
        "age": 56,
        "dob": "17/02/1968",
        "salary": 7.0,
        "address": "Address7"
    },
    {
        "id": 1008,
        "imageUrl": "https://hub.dummyapis.com/Image?text=LE&height=120&width=120",
        "firstName": "Lorine",
        "lastName": "Emmerich",
        "email": "Lorine.Emmerich@dummyapis.com",
        "contactNumber": "4044494686",
        "age": 58,
        "dob": "23/12/1966",
        "salary": 8.0,
        "address": "Address8"
    },
    {
        "id": 1009,
        "imageUrl": "https://hub.dummyapis.com/Image?text=OD&height=120&width=120",
        "firstName": "Oscar",
        "lastName": "Daugherty",
        "email": "Oscar.Daugherty@dummyapis.com",
        "contactNumber": "4340594003",
        "age": 47,
        "dob": "20/08/1977",
        "salary": 9.0,
        "address": "Address9"
    },
    {
        "id": 1010,
        "imageUrl": "https://hub.dummyapis.com/Image?text=FH&height=120&width=120",
        "firstName": "Finn",
        "lastName": "Hintz",
        "email": "Finn.Hintz@dummyapis.com",
        "contactNumber": "4089190142",
        "age": 22,
        "dob": "04/10/2002",
        "salary": 10.0,
        "address": "Address10"
    },
    {
        "id": 1011,
        "imageUrl": "https://hub.dummyapis.com/Image?text=IB&height=120&width=120",
        "firstName": "Isabelle",
        "lastName": "Bins",
        "email": "Isabelle.Bins@dummyapis.com",
        "contactNumber": "4046791638",
        "age": 60,
        "dob": "16/01/1964",
        "salary": 11.0,
        "address": "Address11"
    },
    {
        "id": 1012,
        "imageUrl": "https://hub.dummyapis.com/Image?text=JC&height=120&width=120",
        "firstName": "Jayme",
        "lastName": "Corkery",
        "email": "Jayme.Corkery@dummyapis.com",
        "contactNumber": "4005190970",
        "age": 53,
        "dob": "30/10/1971",
        "salary": 12.0,
        "address": "Address12"
    },
    {
        "id": 1013,
        "imageUrl": "https://hub.dummyapis.com/Image?text=CH&height=120&width=120",
        "firstName": "Charity",
        "lastName": "Huel",
        "email": "Charity.Huel@dummyapis.com",
        "contactNumber": "4963591288",
        "age": 30,
        "dob": "21/08/1994",
        "salary": 13.0,
        "address": "Address13"
    },
    {
        "id": 1014,
        "imageUrl": "https://hub.dummyapis.com/Image?text=ML&height=120&width=120",
        "firstName": "Mona",
        "lastName": "Lehner",
        "email": "Mona.Lehner@dummyapis.com",
        "contactNumber": "4679496496",
        "age": 33,
        "dob": "26/01/1991",
        "salary": 14.0,
        "address": "Address14"
    },
    {
        "id": 1015,
        "imageUrl": "https://hub.dummyapis.com/Image?text=SS&height=120&width=120",
        "firstName": "Stacey",
        "lastName": "Schiller",
        "email": "Stacey.Schiller@dummyapis.com",
        "contactNumber": "4490390565",
        "age": 89,
        "dob": "14/12/1935",
        "salary": 15.0,
        "address": "Address15"
    },
    {
        "id": 1016,
        "imageUrl": "https://hub.dummyapis.com/Image?text=MB&height=120&width=120",
        "firstName": "Miriam",
        "lastName": "Becker",
        "email": "Miriam.Becker@dummyapis.com",
        "contactNumber": "4151690640",
        "age": 32,
        "dob": "14/04/1992",
        "salary": 16.0,
        "address": "Address16"
    },
    {
        "id": 1017,
        "imageUrl": "https://hub.dummyapis.com/Image?text=RS&height=120&width=120",
        "firstName": "Retha",
        "lastName": "Schmitt",
        "email": "Retha.Schmitt@dummyapis.com",
        "contactNumber": "4496892419",
        "age": 57,
        "dob": "21/08/1967",
        "salary": 17.0,
        "address": "Address17"
    },
    {
        "id": 1018,
        "imageUrl": "https://hub.dummyapis.com/Image?text=YB&height=120&width=120",
        "firstName": "Yadira",
        "lastName": "Bashirian",
        "email": "Yadira.Bashirian@dummyapis.com",
        "contactNumber": "4702593314",
        "age": 76,
        "dob": "25/09/1948",
        "salary": 18.0,
        "address": "Address18"
    },
    {
        "id": 1019,
        "imageUrl": "https://hub.dummyapis.com/Image?text=JL&height=120&width=120",
        "firstName": "Jarrett",
        "lastName": "Ledner",
        "email": "Jarrett.Ledner@dummyapis.com",
        "contactNumber": "4652296209",
        "age": 31,
        "dob": "30/11/1993",
        "salary": 19.0,
        "address": "Address19"
    },
    {
        "id": 1020,
        "imageUrl": "https://hub.dummyapis.com/Image?text=AM&height=120&width=120",
        "firstName": "Ali",
        "lastName": "Morar",
        "email": "Ali.Morar@dummyapis.com",
        "contactNumber": "4962593785",
        "age": 24,
        "dob": "03/07/2000",
        "salary": 20.0,
        "address": "Address20"
    },
    {
        "id": 1021,
        "imageUrl": "https://hub.dummyapis.com/Image?text=WK&height=120&width=120",
        "firstName": "Wilma",
        "lastName": "Kuhic",
        "email": "Wilma.Kuhic@dummyapis.com",
        "contactNumber": "4990993009",
        "age": 83,
        "dob": "22/08/1941",
        "salary": 21.0,
        "address": "Address21"
    },
    {
        "id": 1022,
        "imageUrl": "https://hub.dummyapis.com/Image?text=OS&height=120&width=120",
        "firstName": "Omer",
        "lastName": "Shanahan",
        "email": "Omer.Shanahan@dummyapis.com",
        "contactNumber": "4781393038",
        "age": 46,
        "dob": "18/08/1978",
        "salary": 22.0,
        "address": "Address22"
    },
    {
        "id": 1023,
        "imageUrl": "https://hub.dummyapis.com/Image?text=JK&height=120&width=120",
        "firstName": "Johann",
        "lastName": "Kuphal",
        "email": "Johann.Kuphal@dummyapis.com",
        "contactNumber": "4118990795",
        "age": 44,
        "dob": "30/07/1980",
        "salary": 23.0,
        "address": "Address23"
    },
    {
        "id": 1024,
        "imageUrl": "https://hub.dummyapis.com/Image?text=BZ&height=120&width=120",
        "firstName": "Bettie",
        "lastName": "Ziemann",
        "email": "Bettie.Ziemann@dummyapis.com",
        "contactNumber": "4010990741",
        "age": 42,
        "dob": "05/05/1982",
        "salary": 24.0,
        "address": "Address24"
    },
    {
        "id": 1025,
        "imageUrl": "https://hub.dummyapis.com/Image?text=DN&height=120&width=120",
        "firstName": "Darius",
        "lastName": "Nolan",
        "email": "Darius.Nolan@dummyapis.com",
        "contactNumber": "4074091726",
        "age": 70,
        "dob": "13/03/1954",
        "salary": 25.0,
        "address": "Address25"
    },
    {
        "id": 1026,
        "imageUrl": "https://hub.dummyapis.com/Image?text=JH&height=120&width=120",
        "firstName": "Jaron",
        "lastName": "Haley",
        "email": "Jaron.Haley@dummyapis.com",
        "contactNumber": "4235891566",
        "age": 71,
        "dob": "12/01/1953",
        "salary": 26.0,
        "address": "Address26"
    },
    {
        "id": 1027,
        "imageUrl": "https://hub.dummyapis.com/Image?text=AR&height=120&width=120",
        "firstName": "Ara",
        "lastName": "Rodriguez",
        "email": "Ara.Rodriguez@dummyapis.com",
        "contactNumber": "4974791893",
        "age": 67,
        "dob": "08/10/1957",
        "salary": 27.0,
        "address": "Address27"
    },
    {
        "id": 1028,
        "imageUrl": "https://hub.dummyapis.com/Image?text=MG&height=120&width=120",
        "firstName": "Margarette",
        "lastName": "Goodwin",
        "email": "Margarette.Goodwin@dummyapis.com",
        "contactNumber": "4043297852",
        "age": 28,
        "dob": "29/06/1996",
        "salary": 28.0,
        "address": "Address28"
    },
    {
        "id": 1029,
        "imageUrl": "https://hub.dummyapis.com/Image?text=AJ&height=120&width=120",
        "firstName": "Aubrey",
        "lastName": "Johns",
        "email": "Aubrey.Johns@dummyapis.com",
        "contactNumber": "4504994806",
        "age": 90,
        "dob": "09/08/1934",
        "salary": 29.0,
        "address": "Address29"
    },
    {
        "id": 1030,
        "imageUrl": "https://hub.dummyapis.com/Image?text=FG&height=120&width=120",
        "firstName": "Freida",
        "lastName": "Gleichner",
        "email": "Freida.Gleichner@dummyapis.com",
        "contactNumber": "4954895978",
        "age": 71,
        "dob": "18/01/1953",
        "salary": 30.0,
        "address": "Address30"
    },
    {
        "id": 1031,
        "imageUrl": "https://hub.dummyapis.com/Image?text=OL&height=120&width=120",
        "firstName": "Olive",
        "lastName": "Lowe",
        "email": "Olive.Lowe@dummyapis.com",
        "contactNumber": "4171095792",
        "age": 43,
        "dob": "10/10/1981",
        "salary": 31.0,
        "address": "Address31"
    },
    {
        "id": 1032,
        "imageUrl": "https://hub.dummyapis.com/Image?text=MP&height=120&width=120",
        "firstName": "Makayla",
        "lastName": "Pfannerstill",
        "email": "Makayla.Pfannerstill@dummyapis.com",
        "contactNumber": "4462194729",
        "age": 33,
        "dob": "13/05/1991",
        "salary": 32.0,
        "address": "Address32"
    },
    {
        "id": 1033,
        "imageUrl": "https://hub.dummyapis.com/Image?text=CC&height=120&width=120",
        "firstName": "Cameron",
        "lastName": "Crooks",
        "email": "Cameron.Crooks@dummyapis.com",
        "contactNumber": "4215192161",
        "age": 23,
        "dob": "14/02/2001",
        "salary": 33.0,
        "address": "Address33"
    },
    {
        "id": 1034,
        "imageUrl": "https://hub.dummyapis.com/Image?text=TK&height=120&width=120",
        "firstName": "Tracy",
        "lastName": "Kuhlman",
        "email": "Tracy.Kuhlman@dummyapis.com",
        "contactNumber": "4414996370",
        "age": 86,
        "dob": "12/07/1938",
        "salary": 34.0,
        "address": "Address34"
    },
    {
        "id": 1035,
        "imageUrl": "https://hub.dummyapis.com/Image?text=MG&height=120&width=120",
        "firstName": "Magnolia",
        "lastName": "Green",
        "email": "Magnolia.Green@dummyapis.com",
        "contactNumber": "4533697129",
        "age": 82,
        "dob": "23/09/1942",
        "salary": 35.0,
        "address": "Address35"
    },
    {
        "id": 1036,
        "imageUrl": "https://hub.dummyapis.com/Image?text=PH&height=120&width=120",
        "firstName": "Paris",
        "lastName": "Hickle",
        "email": "Paris.Hickle@dummyapis.com",
        "contactNumber": "4816397195",
        "age": 82,
        "dob": "10/05/1942",
        "salary": 36.0,
        "address": "Address36"
    },
    {
        "id": 1037,
        "imageUrl": "https://hub.dummyapis.com/Image?text=DG&height=120&width=120",
        "firstName": "Dayana",
        "lastName": "Gibson",
        "email": "Dayana.Gibson@dummyapis.com",
        "contactNumber": "4437797105",
        "age": 64,
        "dob": "15/04/1960",
        "salary": 37.0,
        "address": "Address37"
    },
    {
        "id": 1038,
        "imageUrl": "https://hub.dummyapis.com/Image?text=TH&height=120&width=120",
        "firstName": "Trenton",
        "lastName": "Hilpert",
        "email": "Trenton.Hilpert@dummyapis.com",
        "contactNumber": "4023297456",
        "age": 28,
        "dob": "28/11/1996",
        "salary": 38.0,
        "address": "Address38"
    },
    {
        "id": 1039,
        "imageUrl": "https://hub.dummyapis.com/Image?text=PS&height=120&width=120",
        "firstName": "Patience",
        "lastName": "Stark",
        "email": "Patience.Stark@dummyapis.com",
        "contactNumber": "4382397012",
        "age": 80,
        "dob": "20/02/1944",
        "salary": 39.0,
        "address": "Address39"
    },
    {
        "id": 1040,
        "imageUrl": "https://hub.dummyapis.com/Image?text=AV&height=120&width=120",
        "firstName": "Aurelia",
        "lastName": "Volkman",
        "email": "Aurelia.Volkman@dummyapis.com",
        "contactNumber": "4977998839",
        "age": 64,
        "dob": "19/06/1960",
        "salary": 40.0,
        "address": "Address40"
    },
    {
        "id": 1041,
        "imageUrl": "https://hub.dummyapis.com/Image?text=DK&height=120&width=120",
        "firstName": "Dorris",
        "lastName": "Kuhlman",
        "email": "Dorris.Kuhlman@dummyapis.com",
        "contactNumber": "4117996052",
        "age": 41,
        "dob": "08/01/1983",
        "salary": 41.0,
        "address": "Address41"
    },
    {
        "id": 1042,
        "imageUrl": "https://hub.dummyapis.com/Image?text=MS&height=120&width=120",
        "firstName": "Marian",
        "lastName": "Schiller",
        "email": "Marian.Schiller@dummyapis.com",
        "contactNumber": "4575593176",
        "age": 71,
        "dob": "20/01/1953",
        "salary": 42.0,
        "address": "Address42"
    },
    {
        "id": 1043,
        "imageUrl": "https://hub.dummyapis.com/Image?text=FD&height=120&width=120",
        "firstName": "Fletcher",
        "lastName": "DuBuque",
        "email": "Fletcher.DuBuque@dummyapis.com",
        "contactNumber": "4820599948",
        "age": 87,
        "dob": "03/08/1937",
        "salary": 43.0,
        "address": "Address43"
    },
    {
        "id": 1044,
        "imageUrl": "https://hub.dummyapis.com/Image?text=KH&height=120&width=120",
        "firstName": "Kathryn",
        "lastName": "Hackett",
        "email": "Kathryn.Hackett@dummyapis.com",
        "contactNumber": "4089293075",
        "age": 80,
        "dob": "21/06/1944",
        "salary": 44.0,
        "address": "Address44"
    },
    {
        "id": 1045,
        "imageUrl": "https://hub.dummyapis.com/Image?text=CM&height=120&width=120",
        "firstName": "Clemens",
        "lastName": "Marvin",
        "email": "Clemens.Marvin@dummyapis.com",
        "contactNumber": "4198799172",
        "age": 50,
        "dob": "15/08/1974",
        "salary": 45.0,
        "address": "Address45"
    },
    {
        "id": 1046,
        "imageUrl": "https://hub.dummyapis.com/Image?text=MS&height=120&width=120",
        "firstName": "Maud",
        "lastName": "Senger",
        "email": "Maud.Senger@dummyapis.com",
        "contactNumber": "4826391715",
        "age": 70,
        "dob": "23/11/1954",
        "salary": 46.0,
        "address": "Address46"
    },
    {
        "id": 1047,
        "imageUrl": "https://hub.dummyapis.com/Image?text=JR&height=120&width=120",
        "firstName": "Jessika",
        "lastName": "Reichel",
        "email": "Jessika.Reichel@dummyapis.com",
        "contactNumber": "4666093647",
        "age": 73,
        "dob": "29/11/1951",
        "salary": 47.0,
        "address": "Address47"
    },
    {
        "id": 1048,
        "imageUrl": "https://hub.dummyapis.com/Image?text=RG&height=120&width=120",
        "firstName": "Rory",
        "lastName": "Gislason",
        "email": "Rory.Gislason@dummyapis.com",
        "contactNumber": "4207494117",
        "age": 51,
        "dob": "08/12/1973",
        "salary": 48.0,
        "address": "Address48"
    },
    {
        "id": 1049,
        "imageUrl": "https://hub.dummyapis.com/Image?text=DA&height=120&width=120",
        "firstName": "Deshawn",
        "lastName": "Armstrong",
        "email": "Deshawn.Armstrong@dummyapis.com",
        "contactNumber": "4838693084",
        "age": 72,
        "dob": "11/02/1952",
        "salary": 49.0,
        "address": "Address49"
    },
    {
        "id": 1050,
        "imageUrl": "https://hub.dummyapis.com/Image?text=AW&height=120&width=120",
        "firstName": "Arnold",
        "lastName": "Weimann",
        "email": "Arnold.Weimann@dummyapis.com",
        "contactNumber": "4088699027",
        "age": 59,
        "dob": "14/01/1965",
        "salary": 50.0,
        "address": "Address50"
    },
    {
        "id": 1051,
        "imageUrl": "https://hub.dummyapis.com/Image?text=LH&height=120&width=120",
        "firstName": "Laverne",
        "lastName": "Hintz",
        "email": "Laverne.Hintz@dummyapis.com",
        "contactNumber": "4664493737",
        "age": 32,
        "dob": "24/07/1992",
        "salary": 51.0,
        "address": "Address51"
    },
    {
        "id": 1052,
        "imageUrl": "https://hub.dummyapis.com/Image?text=DR&height=120&width=120",
        "firstName": "Dominique",
        "lastName": "Rath",
        "email": "Dominique.Rath@dummyapis.com",
        "contactNumber": "4540393610",
        "age": 85,
        "dob": "26/11/1939",
        "salary": 52.0,
        "address": "Address52"
    },
    {
        "id": 1053,
        "imageUrl": "https://hub.dummyapis.com/Image?text=AH&height=120&width=120",
        "firstName": "Adam",
        "lastName": "Hammes",
        "email": "Adam.Hammes@dummyapis.com",
        "contactNumber": "4356295162",
        "age": 28,
        "dob": "27/02/1996",
        "salary": 53.0,
        "address": "Address53"
    },
    {
        "id": 1054,
        "imageUrl": "https://hub.dummyapis.com/Image?text=ES&height=120&width=120",
        "firstName": "Emilio",
        "lastName": "Schiller",
        "email": "Emilio.Schiller@dummyapis.com",
        "contactNumber": "4718892641",
        "age": 83,
        "dob": "29/03/1941",
        "salary": 54.0,
        "address": "Address54"
    },
    {
        "id": 1055,
        "imageUrl": "https://hub.dummyapis.com/Image?text=BJ&height=120&width=120",
        "firstName": "Bradley",
        "lastName": "Jones",
        "email": "Bradley.Jones@dummyapis.com",
        "contactNumber": "4166192974",
        "age": 32,
        "dob": "12/05/1992",
        "salary": 55.0,
        "address": "Address55"
    },
    {
        "id": 1056,
        "imageUrl": "https://hub.dummyapis.com/Image?text=BT&height=120&width=120",
        "firstName": "Brooke",
        "lastName": "Tromp",
        "email": "Brooke.Tromp@dummyapis.com",
        "contactNumber": "4402898036",
        "age": 54,
        "dob": "14/10/1970",
        "salary": 56.0,
        "address": "Address56"
    },
    {
        "id": 1057,
        "imageUrl": "https://hub.dummyapis.com/Image?text=OH&height=120&width=120",
        "firstName": "Oma",
        "lastName": "Herman",
        "email": "Oma.Herman@dummyapis.com",
        "contactNumber": "4502690708",
        "age": 61,
        "dob": "06/01/1963",
        "salary": 57.0,
        "address": "Address57"
    },
    {
        "id": 1058,
        "imageUrl": "https://hub.dummyapis.com/Image?text=ES&height=120&width=120",
        "firstName": "Emelie",
        "lastName": "Sauer",
        "email": "Emelie.Sauer@dummyapis.com",
        "contactNumber": "4479995656",
        "age": 79,
        "dob": "16/01/1945",
        "salary": 58.0,
        "address": "Address58"
    },
    {
        "id": 1059,
        "imageUrl": "https://hub.dummyapis.com/Image?text=EB&height=120&width=120",
        "firstName": "Elisa",
        "lastName": "Bechtelar",
        "email": "Elisa.Bechtelar@dummyapis.com",
        "contactNumber": "4003691444",
        "age": 30,
        "dob": "13/12/1994",
        "salary": 59.0,
        "address": "Address59"
    },
    {
        "id": 1060,
        "imageUrl": "https://hub.dummyapis.com/Image?text=JS&height=120&width=120",
        "firstName": "Junior",
        "lastName": "Streich",
        "email": "Junior.Streich@dummyapis.com",
        "contactNumber": "4652292202",
        "age": 46,
        "dob": "14/02/1978",
        "salary": 60.0,
        "address": "Address60"
    },
    {
        "id": 1061,
        "imageUrl": "https://hub.dummyapis.com/Image?text=RK&height=120&width=120",
        "firstName": "Rosemary",
        "lastName": "Kshlerin",
        "email": "Rosemary.Kshlerin@dummyapis.com",
        "contactNumber": "4126891074",
        "age": 63,
        "dob": "17/11/1961",
        "salary": 61.0,
        "address": "Address61"
    },
    {
        "id": 1062,
        "imageUrl": "https://hub.dummyapis.com/Image?text=PS&height=120&width=120",
        "firstName": "Pansy",
        "lastName": "Smith",
        "email": "Pansy.Smith@dummyapis.com",
        "contactNumber": "4438396163",
        "age": 50,
        "dob": "21/08/1974",
        "salary": 62.0,
        "address": "Address62"
    },
    {
        "id": 1063,
        "imageUrl": "https://hub.dummyapis.com/Image?text=DW&height=120&width=120",
        "firstName": "Declan",
        "lastName": "Will",
        "email": "Declan.Will@dummyapis.com",
        "contactNumber": "4886496447",
        "age": 58,
        "dob": "17/05/1966",
        "salary": 63.0,
        "address": "Address63"
    },
    {
        "id": 1064,
        "imageUrl": "https://hub.dummyapis.com/Image?text=PL&height=120&width=120",
        "firstName": "Patricia",
        "lastName": "Leannon",
        "email": "Patricia.Leannon@dummyapis.com",
        "contactNumber": "4053490730",
        "age": 66,
        "dob": "02/08/1958",
        "salary": 64.0,
        "address": "Address64"
    },
    {
        "id": 1065,
        "imageUrl": "https://hub.dummyapis.com/Image?text=RO&height=120&width=120",
        "firstName": "Roberta",
        "lastName": "O'Keefe",
        "email": "Roberta.O'Keefe@dummyapis.com",
        "contactNumber": "4503096113",
        "age": 70,
        "dob": "25/12/1954",
        "salary": 65.0,
        "address": "Address65"
    },
    {
        "id": 1066,
        "imageUrl": "https://hub.dummyapis.com/Image?text=CF&height=120&width=120",
        "firstName": "Casimir",
        "lastName": "Ferry",
        "email": "Casimir.Ferry@dummyapis.com",
        "contactNumber": "4906890739",
        "age": 49,
        "dob": "05/09/1975",
        "salary": 66.0,
        "address": "Address66"
    },
    {
        "id": 1067,
        "imageUrl": "https://hub.dummyapis.com/Image?text=KM&height=120&width=120",
        "firstName": "Kristin",
        "lastName": "Mayert",
        "email": "Kristin.Mayert@dummyapis.com",
        "contactNumber": "4612590751",
        "age": 51,
        "dob": "14/09/1973",
        "salary": 67.0,
        "address": "Address67"
    },
    {
        "id": 1068,
        "imageUrl": "https://hub.dummyapis.com/Image?text=BP&height=120&width=120",
        "firstName": "Burdette",
        "lastName": "Padberg",
        "email": "Burdette.Padberg@dummyapis.com",
        "contactNumber": "4219497440",
        "age": 34,
        "dob": "10/02/1990",
        "salary": 68.0,
        "address": "Address68"
    },
    {
        "id": 1069,
        "imageUrl": "https://hub.dummyapis.com/Image?text=LE&height=120&width=120",
        "firstName": "Lamont",
        "lastName": "Erdman",
        "email": "Lamont.Erdman@dummyapis.com",
        "contactNumber": "4064992145",
        "age": 42,
        "dob": "05/05/1982",
        "salary": 69.0,
        "address": "Address69"
    },
    {
        "id": 1070,
        "imageUrl": "https://hub.dummyapis.com/Image?text=MG&height=120&width=120",
        "firstName": "Marco",
        "lastName": "Gutmann",
        "email": "Marco.Gutmann@dummyapis.com",
        "contactNumber": "4961393043",
        "age": 28,
        "dob": "06/08/1996",
        "salary": 70.0,
        "address": "Address70"
    },
    {
        "id": 1071,
        "imageUrl": "https://hub.dummyapis.com/Image?text=AZ&height=120&width=120",
        "firstName": "Alva",
        "lastName": "Ziemann",
        "email": "Alva.Ziemann@dummyapis.com",
        "contactNumber": "4276098249",
        "age": 59,
        "dob": "30/12/1965",
        "salary": 71.0,
        "address": "Address71"
    },
    {
        "id": 1072,
        "imageUrl": "https://hub.dummyapis.com/Image?text=TS&height=120&width=120",
        "firstName": "Theresia",
        "lastName": "Steuber",
        "email": "Theresia.Steuber@dummyapis.com",
        "contactNumber": "4141399011",
        "age": 51,
        "dob": "22/09/1973",
        "salary": 72.0,
        "address": "Address72"
    },
    {
        "id": 1073,
        "imageUrl": "https://hub.dummyapis.com/Image?text=BS&height=120&width=120",
        "firstName": "Bailey",
        "lastName": "Spencer",
        "email": "Bailey.Spencer@dummyapis.com",
        "contactNumber": "4514490227",
        "age": 86,
        "dob": "06/08/1938",
        "salary": 73.0,
        "address": "Address73"
    },
    {
        "id": 1074,
        "imageUrl": "https://hub.dummyapis.com/Image?text=MF&height=120&width=120",
        "firstName": "Monte",
        "lastName": "Fadel",
        "email": "Monte.Fadel@dummyapis.com",
        "contactNumber": "4668795951",
        "age": 57,
        "dob": "14/06/1967",
        "salary": 74.0,
        "address": "Address74"
    },
    {
        "id": 1075,
        "imageUrl": "https://hub.dummyapis.com/Image?text=RM&height=120&width=120",
        "firstName": "Roxanne",
        "lastName": "Monahan",
        "email": "Roxanne.Monahan@dummyapis.com",
        "contactNumber": "4884796417",
        "age": 73,
        "dob": "27/06/1951",
        "salary": 75.0,
        "address": "Address75"
    },
    {
        "id": 1076,
        "imageUrl": "https://hub.dummyapis.com/Image?text=EM&height=120&width=120",
        "firstName": "Era",
        "lastName": "Mante",
        "email": "Era.Mante@dummyapis.com",
        "contactNumber": "4408196942",
        "age": 33,
        "dob": "02/08/1991",
        "salary": 76.0,
        "address": "Address76"
    },
    {
        "id": 1077,
        "imageUrl": "https://hub.dummyapis.com/Image?text=LL&height=120&width=120",
        "firstName": "Ludwig",
        "lastName": "Leannon",
        "email": "Ludwig.Leannon@dummyapis.com",
        "contactNumber": "4656198683",
        "age": 49,
        "dob": "15/01/1975",
        "salary": 77.0,
        "address": "Address77"
    },
    {
        "id": 1078,
        "imageUrl": "https://hub.dummyapis.com/Image?text=LB&height=120&width=120",
        "firstName": "Lindsay",
        "lastName": "Bauch",
        "email": "Lindsay.Bauch@dummyapis.com",
        "contactNumber": "4775895569",
        "age": 54,
        "dob": "09/02/1970",
        "salary": 78.0,
        "address": "Address78"
    },
    {
        "id": 1079,
        "imageUrl": "https://hub.dummyapis.com/Image?text=KM&height=120&width=120",
        "firstName": "Karen",
        "lastName": "McGlynn",
        "email": "Karen.McGlynn@dummyapis.com",
        "contactNumber": "4935399239",
        "age": 83,
        "dob": "21/09/1941",
        "salary": 79.0,
        "address": "Address79"
    },
    {
        "id": 1080,
        "imageUrl": "https://hub.dummyapis.com/Image?text=CS&height=120&width=120",
        "firstName": "Cletus",
        "lastName": "Schneider",
        "email": "Cletus.Schneider@dummyapis.com",
        "contactNumber": "4474497113",
        "age": 22,
        "dob": "21/04/2002",
        "salary": 80.0,
        "address": "Address80"
    },
    {
        "id": 1081,
        "imageUrl": "https://hub.dummyapis.com/Image?text=JJ&height=120&width=120",
        "firstName": "Judy",
        "lastName": "Jaskolski",
        "email": "Judy.Jaskolski@dummyapis.com",
        "contactNumber": "4462896458",
        "age": 89,
        "dob": "15/02/1935",
        "salary": 81.0,
        "address": "Address81"
    },
    {
        "id": 1082,
        "imageUrl": "https://hub.dummyapis.com/Image?text=RD&height=120&width=120",
        "firstName": "Reymundo",
        "lastName": "Doyle",
        "email": "Reymundo.Doyle@dummyapis.com",
        "contactNumber": "4761095546",
        "age": 38,
        "dob": "31/10/1986",
        "salary": 82.0,
        "address": "Address82"
    },
    {
        "id": 1083,
        "imageUrl": "https://hub.dummyapis.com/Image?text=LB&height=120&width=120",
        "firstName": "Leonie",
        "lastName": "Blick",
        "email": "Leonie.Blick@dummyapis.com",
        "contactNumber": "4390493288",
        "age": 46,
        "dob": "20/05/1978",
        "salary": 83.0,
        "address": "Address83"
    },
    {
        "id": 1084,
        "imageUrl": "https://hub.dummyapis.com/Image?text=FD&height=120&width=120",
        "firstName": "Frances",
        "lastName": "Durgan",
        "email": "Frances.Durgan@dummyapis.com",
        "contactNumber": "4191194274",
        "age": 52,
        "dob": "26/07/1972",
        "salary": 84.0,
        "address": "Address84"
    },
    {
        "id": 1085,
        "imageUrl": "https://hub.dummyapis.com/Image?text=BP&height=120&width=120",
        "firstName": "Bartholome",
        "lastName": "Pouros",
        "email": "Bartholome.Pouros@dummyapis.com",
        "contactNumber": "4851297357",
        "age": 61,
        "dob": "28/06/1963",
        "salary": 85.0,
        "address": "Address85"
    },
    {
        "id": 1086,
        "imageUrl": "https://hub.dummyapis.com/Image?text=MM&height=120&width=120",
        "firstName": "Monica",
        "lastName": "Mayert",
        "email": "Monica.Mayert@dummyapis.com",
        "contactNumber": "4500797889",
        "age": 49,
        "dob": "15/11/1975",
        "salary": 86.0,
        "address": "Address86"
    },
    {
        "id": 1087,
        "imageUrl": "https://hub.dummyapis.com/Image?text=HA&height=120&width=120",
        "firstName": "Holden",
        "lastName": "Ankunding",
        "email": "Holden.Ankunding@dummyapis.com",
        "contactNumber": "4183093479",
        "age": 26,
        "dob": "17/03/1998",
        "salary": 87.0,
        "address": "Address87"
    },
    {
        "id": 1088,
        "imageUrl": "https://hub.dummyapis.com/Image?text=ZS&height=120&width=120",
        "firstName": "Zelda",
        "lastName": "Strosin",
        "email": "Zelda.Strosin@dummyapis.com",
        "contactNumber": "4944193017",
        "age": 31,
        "dob": "18/11/1993",
        "salary": 88.0,
        "address": "Address88"
    },
    {
        "id": 1089,
        "imageUrl": "https://hub.dummyapis.com/Image?text=KF&height=120&width=120",
        "firstName": "Kayden",
        "lastName": "Funk",
        "email": "Kayden.Funk@dummyapis.com",
        "contactNumber": "4965995370",
        "age": 75,
        "dob": "02/03/1949",
        "salary": 89.0,
        "address": "Address89"
    },
    {
        "id": 1090,
        "imageUrl": "https://hub.dummyapis.com/Image?text=OM&height=120&width=120",
        "firstName": "Orrin",
        "lastName": "McKenzie",
        "email": "Orrin.McKenzie@dummyapis.com",
        "contactNumber": "4101898637",
        "age": 50,
        "dob": "11/12/1974",
        "salary": 90.0,
        "address": "Address90"
    },
    {
        "id": 1091,
        "imageUrl": "https://hub.dummyapis.com/Image?text=YZ&height=120&width=120",
        "firstName": "Yessenia",
        "lastName": "Zemlak",
        "email": "Yessenia.Zemlak@dummyapis.com",
        "contactNumber": "4975894581",
        "age": 42,
        "dob": "05/05/1982",
        "salary": 91.0,
        "address": "Address91"
    },
    {
        "id": 1092,
        "imageUrl": "https://hub.dummyapis.com/Image?text=AG&height=120&width=120",
        "firstName": "Ada",
        "lastName": "Goodwin",
        "email": "Ada.Goodwin@dummyapis.com",
        "contactNumber": "4188298612",
        "age": 75,
        "dob": "30/03/1949",
        "salary": 92.0,
        "address": "Address92"
    },
    {
        "id": 1093,
        "imageUrl": "https://hub.dummyapis.com/Image?text=PH&height=120&width=120",
        "firstName": "Pierre",
        "lastName": "Hudson",
        "email": "Pierre.Hudson@dummyapis.com",
        "contactNumber": "4203292126",
        "age": 89,
        "dob": "18/12/1935",
        "salary": 93.0,
        "address": "Address93"
    },
    {
        "id": 1094,
        "imageUrl": "https://hub.dummyapis.com/Image?text=VK&height=120&width=120",
        "firstName": "Verla",
        "lastName": "Kertzmann",
        "email": "Verla.Kertzmann@dummyapis.com",
        "contactNumber": "4417797440",
        "age": 55,
        "dob": "05/01/1969",
        "salary": 94.0,
        "address": "Address94"
    },
    {
        "id": 1095,
        "imageUrl": "https://hub.dummyapis.com/Image?text=LF&height=120&width=120",
        "firstName": "Lee",
        "lastName": "Fadel",
        "email": "Lee.Fadel@dummyapis.com",
        "contactNumber": "4299196623",
        "age": 23,
        "dob": "02/08/2001",
        "salary": 95.0,
        "address": "Address95"
    },
    {
        "id": 1096,
        "imageUrl": "https://hub.dummyapis.com/Image?text=AL&height=120&width=120",
        "firstName": "Alexane",
        "lastName": "Lockman",
        "email": "Alexane.Lockman@dummyapis.com",
        "contactNumber": "4808691408",
        "age": 82,
        "dob": "20/05/1942",
        "salary": 96.0,
        "address": "Address96"
    },
    {
        "id": 1097,
        "imageUrl": "https://hub.dummyapis.com/Image?text=SS&height=120&width=120",
        "firstName": "Shanon",
        "lastName": "Skiles",
        "email": "Shanon.Skiles@dummyapis.com",
        "contactNumber": "4740092500",
        "age": 35,
        "dob": "06/09/1989",
        "salary": 97.0,
        "address": "Address97"
    },
    {
        "id": 1098,
        "imageUrl": "https://hub.dummyapis.com/Image?text=LR&height=120&width=120",
        "firstName": "Lora",
        "lastName": "Renner",
        "email": "Lora.Renner@dummyapis.com",
        "contactNumber": "4841496300",
        "age": 42,
        "dob": "02/01/1982",
        "salary": 98.0,
        "address": "Address98"
    },
    {
        "id": 1099,
        "imageUrl": "https://hub.dummyapis.com/Image?text=GR&height=120&width=120",
        "firstName": "Gretchen",
        "lastName": "Robel",
        "email": "Gretchen.Robel@dummyapis.com",
        "contactNumber": "4063995866",
        "age": 32,
        "dob": "27/06/1992",
        "salary": 99.0,
        "address": "Address99"
    },
    {
        "id": 1100,
        "imageUrl": "https://hub.dummyapis.com/Image?text=UF&height=120&width=120",
        "firstName": "Ursula",
        "lastName": "Fritsch",
        "email": "Ursula.Fritsch@dummyapis.com",
        "contactNumber": "4510691855",
        "age": 23,
        "dob": "10/12/2001",
        "salary": 100.0,
        "address": "Address100"
    }
];
var employees = [];
var useMock = true;
const fetchEmployees = () => {
    if (useMock) {
        return new Promise((resolve) => {
            setTimeout(() => {
                employees = mock;
                resolve(employees);
            }, 2000);
        });
    }
    return fetch('https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001')
        .then(response => response.json())
        .then((data) => {
        employees = data;
        return data;
    })
        .catch(error => {
        console.error(error);
        alert('Error fetching employees');
        return [];
    });
};
const setLoading = () => {
    const table = document.getElementById('employees-table');
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = "loading...";
};
const buildEmployeesTable = () => {
    const table = document.getElementById('employees-table');
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = "";
    employees.forEach(employee => {
        const tr = document.createElement('tr');
        const id = document.createElement('td');
        const name = document.createElement('td');
        const email = document.createElement('td');
        const phone = document.createElement('td');
        const age = document.createElement('td');
        const dob = document.createElement('td');
        const address = document.createElement('td');
        const salary = document.createElement('td');
        const idText = document.createTextNode(employee.id + '');
        const empImage = document.createElement('img');
        empImage.src = employee.imageUrl;
        empImage.width = 50;
        empImage.height = 50;
        id.classList.add('id-container');
        id.appendChild(idText);
        id.appendChild(empImage);
        name.innerText = employee.firstName + ' ' + employee.lastName;
        email.innerText = employee.email;
        phone.innerText = employee.contactNumber;
        age.innerText = employee.age + '';
        dob.innerText = employee.dob;
        address.innerText = employee.address;
        salary.innerText = employee.salary + '';
        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(email);
        tr.appendChild(phone);
        tr.appendChild(age);
        tr.appendChild(dob);
        tr.appendChild(address);
        tr.appendChild(salary);
        tr.addEventListener('click', () => {
            alert('You clicked on ' + employee.firstName + ' ' + employee.lastName);
        });
        tbody.appendChild(tr);
    });
};
const init = () => {
    setLoading();
    fetchEmployees().then(buildEmployeesTable);
};
(function () {
    document.getElementById('refresh-table').addEventListener('click', () => {
        init();
    });
    document.getElementById('sort-table').addEventListener('click', () => {
        employees.sort((a, b) => {
            const nameA = a.firstName + ' ' + a.lastName;
            const nameB = b.firstName + ' ' + b.lastName;
            return nameA.localeCompare(nameB);
        });
        buildEmployeesTable();
    });
    init();
})();
//# sourceMappingURL=employees-table.js.map