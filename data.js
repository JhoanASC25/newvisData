const peopleInfo = [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Liron",
        "last": "Van Tongeren"
      },
      "location": {
        "street": {
          "number": 793,
          "name": "Graaf Jansdijk"
        },
        "city": "Zuiddorpe",
        "state": "Zuid-Holland",
        "country": "Netherlands",
        "postcode": "4088 YJ",
        "coordinates": {
          "latitude": "32.6318",
          "longitude": "-84.3277"
        },
        "timezone": {
          "offset": "+8:00",
          "description": "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      "email": "liron.vantongeren@example.com",
      "login": {
        "uuid": "8ed19fff-c9b5-4bd2-aaf2-dfb1d0ba4089",
        "username": "yellowdog834",
        "password": "number",
        "salt": "XIStU1ij",
        "md5": "75fede671fef89fef552d831df637e33",
        "sha1": "41f462ce9e9ceb53c8b55f2ba38979bd38c891d1",
        "sha256": "55ed096b7e3956702fdeb0d449e9c4e3e5b77b00db29e6e826eab21528ff9783"
      },
      "dob": {
        "date": "1998-01-22T06:29:01.201Z",
        "age": 27
      },
      "registered": {
        "date": "2016-08-27T18:40:42.430Z",
        "age": 8
      },
      "phone": "(080) 7630555",
      "cell": "(06) 04035379",
      "id": {
        "name": "BSN",
        "value": "75017478"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/9.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/9.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/9.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Josefine",
        "last": "Andersen"
      },
      "location": {
        "street": {
          "number": 4734,
          "name": "Lundevej"
        },
        "city": "Juelsminde",
        "state": "Nordjylland",
        "country": "Denmark",
        "postcode": 45411,
        "coordinates": {
          "latitude": "8.4025",
          "longitude": "-81.9969"
        },
        "timezone": {
          "offset": "-1:00",
          "description": "Azores, Cape Verde Islands"
        }
      },
      "email": "josefine.andersen@example.com",
      "login": {
        "uuid": "0d426f85-7060-4685-bfc8-12c7bd60dde5",
        "username": "smallkoala485",
        "password": "blizzard",
        "salt": "O0l4HMBq",
        "md5": "2f105ded93fa789b009b6cabf5657793",
        "sha1": "7a5807a68b94459440c2fcc503652b8400fea97d",
        "sha256": "2c27f84b962e2257abc1a9a2915f461db65b22649fbb4fb0d5f72560f13562b1"
      },
      "dob": {
        "date": "1962-02-03T18:35:14.525Z",
        "age": 63
      },
      "registered": {
        "date": "2020-08-05T00:14:09.501Z",
        "age": 4
      },
      "phone": "47206215",
      "cell": "80118862",
      "id": {
        "name": "CPR",
        "value": "030262-4789"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/53.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/53.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/53.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mademoiselle",
        "first": "Amy",
        "last": "Laurent"
      },
      "location": {
        "street": {
          "number": 1378,
          "name": "Rue Saint-Georges"
        },
        "city": "Frauenfeld",
        "state": "Basel-Stadt",
        "country": "Switzerland",
        "postcode": 8971,
        "coordinates": {
          "latitude": "-39.0900",
          "longitude": "99.2120"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "amy.laurent@example.com",
      "login": {
        "uuid": "60a67758-6af2-4e8a-b42c-664e86b30a31",
        "username": "bluerabbit706",
        "password": "transfer",
        "salt": "G1uZJA9M",
        "md5": "377897abc97085e3e00e44910ff472fc",
        "sha1": "49d20a7cad131524206469bd10d3be0f50fa0991",
        "sha256": "39b1fda02c472d4b1a7b6e578f0375e6bdb20f18a719690d74f2dd5abdbc1658"
      },
      "dob": {
        "date": "1964-05-29T06:18:28.471Z",
        "age": 61
      },
      "registered": {
        "date": "2003-11-02T06:13:20.685Z",
        "age": 21
      },
      "phone": "078 387 33 31",
      "cell": "078 650 82 15",
      "id": {
        "name": "AVS",
        "value": "756.1575.6321.10"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/16.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
      },
      "nat": "CH"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Özsu",
        "last": "Keseroğlu"
      },
      "location": {
        "street": {
          "number": 7238,
          "name": "Atatürk Sk"
        },
        "city": "Karabük",
        "state": "Kütahya",
        "country": "Turkey",
        "postcode": 71619,
        "coordinates": {
          "latitude": "14.1858",
          "longitude": "120.1141"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "ozsu.keseroglu@example.com",
      "login": {
        "uuid": "033ceb37-cdf2-4f07-af2f-4208d5d96fae",
        "username": "whitemouse272",
        "password": "meatloaf",
        "salt": "6prvLXix",
        "md5": "0f7d0f17b7f6add6df6badd14b8cd11b",
        "sha1": "b6a8eaabe3cc500d920fe3919051e4b261a95cbf",
        "sha256": "fef762622911b6ed84c3b327ca277b597eba961c8e335354653b663c28ff4de8"
      },
      "dob": {
        "date": "1994-12-06T22:45:44.266Z",
        "age": 30
      },
      "registered": {
        "date": "2019-10-23T03:10:35.961Z",
        "age": 5
      },
      "phone": "(185)-442-4312",
      "cell": "(028)-541-5670",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/57.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/57.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/57.jpg"
      },
      "nat": "TR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Monsieur",
        "first": "Oswald",
        "last": "Aubert"
      },
      "location": {
        "street": {
          "number": 5180,
          "name": "Rue de la Mairie"
        },
        "city": "Semsales",
        "state": "Thurgau",
        "country": "Switzerland",
        "postcode": 1557,
        "coordinates": {
          "latitude": "-51.9108",
          "longitude": "110.1631"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "oswald.aubert@example.com",
      "login": {
        "uuid": "a5126eb5-db55-452b-a81d-32838c8a5332",
        "username": "orangesnake517",
        "password": "00000",
        "salt": "nENWWrID",
        "md5": "c4386f19aeede713d88290b638087440",
        "sha1": "d0e65ccac59bd413c00b9cd4853cc9e7a4c8bb1a",
        "sha256": "6a293a903269376e8bd23242e35d0e8f563f152cd476eeacf4cf170b11ddfec1"
      },
      "dob": {
        "date": "1955-05-22T05:45:34.083Z",
        "age": 70
      },
      "registered": {
        "date": "2006-10-20T04:46:26.917Z",
        "age": 18
      },
      "phone": "079 215 67 64",
      "cell": "077 587 86 53",
      "id": {
        "name": "AVS",
        "value": "756.4440.4575.25"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/74.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
      },
      "nat": "CH"
    }
  ]