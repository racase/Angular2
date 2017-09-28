import { Injectable } from '@angular/core';

@Injectable()
export class ListadoServiceService {

  private listaSeries: any [] =  [
    {
      "original_name": "The Big Bang Theory",
      "genre_ids": [
        35
      ],
      "name": "The Big Bang Theory",
      "popularity": 256.063735,
      "origin_country": [
        "US"
      ],
      "vote_count": 1947,
      "first_air_date": "2007-09-24",
      "backdrop_path": "/nGsNruW3W27V6r4gkyc3iiEGsKR.jpg",
      "original_language": "en",
      "id": 1418,
      "vote_average": 7,
      "overview": "The Big Bang Theory is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper; Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's equally geeky and socially awkward friends and co-workers, mechanical engineer Howard Wolowitz and astrophysicist Raj Koothrappali. The geekiness and intellect of the four guys is contrasted for comic effect with Penny's social skills and common sense.",
      "poster_path": "/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg"
    },
    {
      "original_name": "Game of Thrones",
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "name": "Game of Thrones",
      "popularity": 201.340977,
      "origin_country": [
        "US"
      ],
      "vote_count": 3652,
      "first_air_date": "2011-04-17",
      "backdrop_path": "/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg",
      "original_language": "en",
      "id": 1399,
      "vote_average": 8.1,
      "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
      "poster_path": "/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg"
    },
    {
      "original_name": "The Walking Dead",
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "name": "The Walking Dead",
      "popularity": 183.915766,
      "origin_country": [
        "US"
      ],
      "vote_count": 2391,
      "first_air_date": "2010-10-31",
      "backdrop_path": "/h1qyblc5p9G3ZWIVK8ZrkpxcXgO.jpg",
      "original_language": "en",
      "id": 1402,
      "vote_average": 7.4,
      "overview": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
      "poster_path": "/vxuoMW6YBt6UsxvMfRNwRl9LtWS.jpg"
    },
    {
      "original_name": "The Simpsons",
      "genre_ids": [
        16,
        35
      ],
      "name": "The Simpsons",
      "popularity": 152.543561,
      "origin_country": [
        "US"
      ],
      "vote_count": 1080,
      "first_air_date": "1989-12-17",
      "backdrop_path": "/f5uNbUC76oowt5mt5J9QlqrIYQ6.jpg",
      "original_language": "en",
      "id": 456,
      "vote_average": 7.1,
      "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
      "poster_path": "/yTZQkSsxUFJZJe67IenRM0AEklc.jpg"
    },
    {
      "original_name": "Breaking Bad",
      "genre_ids": [
        18
      ],
      "name": "Breaking Bad",
      "popularity": 138.537235,
      "origin_country": [
        "US"
      ],
      "vote_count": 1913,
      "first_air_date": "2008-01-19",
      "backdrop_path": "/bzoZjhbpriBT2N5kwgK0weUfVOX.jpg",
      "original_language": "en",
      "id": 1396,
      "vote_average": 8.2,
      "overview": "Breaking Bad is an American crime drama television series created and produced by Vince Gilligan. Set and produced in Albuquerque, New Mexico, Breaking Bad is the story of Walter White, a struggling high school chemistry teacher who is diagnosed with inoperable lung cancer at the beginning of the series. He turns to a life of crime, producing and selling methamphetamine, in order to secure his family's financial future before he dies, teaming with his former student, Jesse Pinkman. Heavily serialized, the series is known for positioning its characters in seemingly inextricable corners and has been labeled a contemporary western by its creator.",
      "poster_path": "/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg"
    },
    {
      "original_name": "Gotham",
      "genre_ids": [
        80,
        18,
        14,
        53
      ],
      "name": "Gotham",
      "popularity": 124.207012,
      "origin_country": [
        "US"
      ],
      "vote_count": 548,
      "first_air_date": "2014-09-22",
      "backdrop_path": "/mKBP1OCgCG0jw8DwVYlnYqVILtc.jpg",
      "original_language": "en",
      "id": 60708,
      "vote_average": 6.9,
      "overview": "Before there was Batman, there was GOTHAM. \n\nEveryone knows the name Commissioner Gordon. He is one of the crime world's greatest foes, a man whose reputation is synonymous with law and order. But what is known of Gordon's story and his rise from rookie detective to Police Commissioner? What did it take to navigate the multiple layers of corruption that secretly ruled Gotham City, the spawning ground of the world's most iconic villains? And what circumstances created them – the larger-than-life personas who would become Catwoman, The Penguin, The Riddler, Two-Face and The Joker? ",
      "poster_path": "/5tSHzkJ1HBnyGdcpr6wSyw7jYnJ.jpg"
    },
    {
      "original_name": "American Horror Story",
      "genre_ids": [
        18,
        9648
      ],
      "name": "American Horror Story",
      "popularity": 118.340571,
      "origin_country": [
        "US"
      ],
      "vote_count": 530,
      "first_air_date": "2011-10-05",
      "backdrop_path": "/anDMMvgVV6pTNSxhHgiDPUjc4pH.jpg",
      "original_language": "en",
      "id": 1413,
      "vote_average": 6.9,
      "overview": "American Horror Story is an anthology horror drama series.",
      "poster_path": "/gwSzP1cJL2HsBmGStN2vOg3d4Qd.jpg"
    },
    {
      "original_name": "The Flash",
      "genre_ids": [
        18,
        10765
      ],
      "name": "The Flash",
      "popularity": 116.785238,
      "origin_country": [
        "US"
      ],
      "vote_count": 1480,
      "first_air_date": "2014-10-07",
      "backdrop_path": "/mmxxEpTqVdwBlu5Pii7tbedBkPC.jpg",
      "original_language": "en",
      "id": 60735,
      "vote_average": 6.8,
      "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
      "poster_path": "/lUFK7ElGCk9kVEryDJHICeNdmd1.jpg"
    },
    {
      "original_name": "Grey's Anatomy",
      "genre_ids": [
        18
      ],
      "name": "Grey's Anatomy",
      "popularity": 115.983071,
      "origin_country": [
        "US"
      ],
      "vote_count": 457,
      "first_air_date": "2005-03-27",
      "backdrop_path": "/y6JABtgWMVYPx84Rvy7tROU5aNH.jpg",
      "original_language": "en",
      "id": 1416,
      "vote_average": 6,
      "overview": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
      "poster_path": "/mgOZSS2FFIGtfVeac1buBw3Cx5w.jpg"
    },
    {
      "original_name": "Supernatural",
      "genre_ids": [
        18,
        9648,
        10765
      ],
      "name": "Supernatural",
      "popularity": 108.266845,
      "origin_country": [
        "US"
      ],
      "vote_count": 1050,
      "first_air_date": "2005-09-13",
      "backdrop_path": "/koMUCyGWNtH5LXYbGqjsUwvgtsT.jpg",
      "original_language": "en",
      "id": 1622,
      "vote_average": 7.1,
      "overview": "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
      "poster_path": "/pui1V389cQft0BVFu9pbsYLEW1Q.jpg"
    },
    {
      "original_name": "South Park",
      "genre_ids": [
        16,
        35
      ],
      "name": "South Park",
      "popularity": 104.000004,
      "origin_country": [
        "US"
      ],
      "vote_count": 597,
      "first_air_date": "1997-08-13",
      "backdrop_path": "/mSDKNVvDfitFE6Fb6fSSl5DQmgS.jpg",
      "original_language": "en",
      "id": 2190,
      "vote_average": 7.8,
      "overview": "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
      "poster_path": "/v9zc0cZpy5aPSfAy6Tgb6I1zWgV.jpg"
    },
    {
      "original_name": "Marvel's Iron Fist",
      "genre_ids": [
        80,
        18,
        10759,
        10765
      ],
      "name": "Marvel's Iron Fist",
      "popularity": 99.69101,
      "origin_country": [
        "US"
      ],
      "vote_count": 295,
      "first_air_date": "2017-03-17",
      "backdrop_path": "/xHCfWGlxwbtMeeOnTvxUCZRGnkk.jpg",
      "original_language": "en",
      "id": 62127,
      "vote_average": 6.4,
      "overview": "Danny Rand resurfaces 15 years after being presumed dead. Now, with the power of the Iron Fist, he seeks to reclaim his past and fulfill his destiny.",
      "poster_path": "/nv4nLXbDhcISPP8C1mgaxKU50KO.jpg"
    },
    {
      "original_name": "ドラゴンボールGT",
      "genre_ids": [
        16,
        35,
        10759,
        10765
      ],
      "name": "Dragon Ball GT",
      "popularity": 98.895142,
      "origin_country": [
        "JP",
        "US"
      ],
      "vote_count": 54,
      "first_air_date": "1996-02-07",
      "backdrop_path": "/9sZNSPbKhr9FdpKheYVvJmoQu2w.jpg",
      "original_language": "ja",
      "id": 12697,
      "vote_average": 6.1,
      "overview": "Ten years have passed since Goku left his friends and family to hone his skills. But Goku soon finds himself helpless against the mystical power of the Dragon Balls and an accidental wish made by the devious Emperor Pilaf. His desire; that Goku once again become a child! Not daunted by this small setback, Goku, together with Trunks, and his own granddaughter Pan, blast off into the outer reaches of space in search of the mysterious Blackstar Dragon Balls. But these Dragon Balls have a fatal secret: if not collected within one year Earth will be destroyed.",
      "poster_path": "/dlj0hRaDa469SfqurlsWSR7QAhw.jpg"
    },
    {
      "original_name": "Friends",
      "genre_ids": [
        35
      ],
      "name": "Friends",
      "popularity": 96.059734,
      "origin_country": [
        "US"
      ],
      "vote_count": 821,
      "first_air_date": "1994-09-22",
      "backdrop_path": "/efiX8iir6GEBWCD0uCFIi5NAyYA.jpg",
      "original_language": "en",
      "id": 1668,
      "vote_average": 7.8,
      "overview": "Friends is an American sitcom revolving around a group of friends in the New York City borough of Manhattan. Episodes typically depict the friends' comedic and romantic adventures and career issues, such as Joey auditioning for roles or Rachel seeking jobs in the fashion industry. The six characters each have many dates and serious relationships, such as Monica with Richard Burke and Ross with Emily Waltham. Other frequently recurring characters include Ross and Monica's parents in Long Island, Ross's ex-wife and their son, Central Perk barista Gunther, Chandler's ex-girlfriend Janice, and Phoebe's twin sister Ursula.",
      "poster_path": "/7buCWBTpiPrCF5Lt023dSC60rgS.jpg"
    },
    {
      "original_name": "Doctor Who",
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "name": "Doctor Who",
      "popularity": 95.924744,
      "origin_country": [
        "GB"
      ],
      "vote_count": 910,
      "first_air_date": "2005-03-26",
      "backdrop_path": "/tQkigP2fItdzJWvtIhBvHxgs5yE.jpg",
      "original_language": "en",
      "id": 57243,
      "vote_average": 6.9,
      "overview": "The Doctor looks and seems human. He's handsome, witty, and could be mistaken for just another man in the street. But he is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel. The Doctor saves planets for a living – more of a hobby actually, and he's very, very good at it. He's saved us from alien menaces and evil from before time began – but just who is he?",
      "poster_path": "/cFcZYgPRFZdBkA7EsxHz5Cb8x5.jpg"
    },
    {
      "original_name": "Family Guy",
      "genre_ids": [
        16,
        35
      ],
      "name": "Family Guy",
      "popularity": 95.165309,
      "origin_country": [
        "US"
      ],
      "vote_count": 743,
      "first_air_date": "1999-01-31",
      "backdrop_path": "/pH38r4TWTqq7Mcs6XAlwgzNUeJe.jpg",
      "original_language": "en",
      "id": 1434,
      "vote_average": 6.7,
      "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
      "poster_path": "/gBGUL1UTUNmdRQT8gA1LUV4yg39.jpg"
    },
    {
      "original_name": "NCIS",
      "genre_ids": [
        80,
        18,
        10759
      ],
      "name": "NCIS",
      "popularity": 93.860877,
      "origin_country": [
        "US"
      ],
      "vote_count": 405,
      "first_air_date": "2003-09-23",
      "backdrop_path": "/nymeWHYQ1JaWP2wyNW5a5WHiDCd.jpg",
      "original_language": "en",
      "id": 4614,
      "vote_average": 6.6,
      "overview": "NCIS is an American police procedural drama television series, revolving around a fictional team of special agents from the Naval Criminal Investigative Service, which conducts criminal investigations involving the U.S. Navy and Marine Corps.",
      "poster_path": "/1ubAPydzsb9VzhqeUGGDA7DZCUy.jpg"
    },
    {
      "original_name": "Arrow",
      "genre_ids": [
        28,
        12,
        80,
        18,
        9648,
        878
      ],
      "name": "Arrow",
      "popularity": 87.894434,
      "origin_country": [
        "US"
      ],
      "vote_count": 1248,
      "first_air_date": "2012-10-10",
      "backdrop_path": "/dKxkwAJfGuznW8Hu0mhaDJtna0n.jpg",
      "original_language": "en",
      "id": 1412,
      "vote_average": 6.1,
      "overview": "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
      "poster_path": "/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg"
    },
    {
      "original_name": "The Orville",
      "genre_ids": [
        35,
        10765
      ],
      "name": "The Orville",
      "popularity": 87.737033,
      "origin_country": [
        "US"
      ],
      "vote_count": 46,
      "first_air_date": "2017-09-10",
      "backdrop_path": "/gLdzkbVh5lJDrSzZnndXarJeJd4.jpg",
      "original_language": "en",
      "id": 71738,
      "vote_average": 6.8,
      "overview": "Follow the crew of the not-so-functional exploratory ship in the Earth's interstellar fleet, 300 years in the future.",
      "poster_path": "/tHNxWnb9YauPEOdQRK7cJr0ncAX.jpg"
    },
    {
      "original_name": "Star Trek: Discovery",
      "genre_ids": [
        10765
      ],
      "name": "Star Trek: Discovery",
      "popularity": 85.830426,
      "origin_country": [
        "US"
      ],
      "vote_count": 29,
      "first_air_date": "2017-09-24",
      "backdrop_path": "/dgFsbkwwgK1ujMqLIzzpV67tISq.jpg",
      "original_language": "en",
      "id": 67198,
      "vote_average": 5.7,
      "overview": "Ten years before Kirk, Spock, and the Enterprise there was Discovery.  Star Trek, one of the most iconic and influential global television franchises, returns 50 years after it first premiered featuring a new ship, new characters and new missions, while embracing the same ideology and hope for the future that inspired a generation of dreamers and doers.",
      "poster_path": "/ihvG9dCEnVU3gmMUftTkRICNdJf.jpg"
    }
  ];

  constructor() { }

  getSeries(): any[] {
    return this.listaSeries;
  }
}
