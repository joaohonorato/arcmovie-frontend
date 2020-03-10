const initState = [
  {
    id: 454626,
    name: "Sonic the Hedgehog",
    image: "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
    genre: [
      {
        id: 28,
        name: "Action"
      },
      {
        id: 35,
        name: "Comedy"
      },
      {
        id: 878,
        name: "Science Fiction"
      },
      {
        id: 10751,
        name: "Family"
      }
    ],
    overview:
      "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
    releaseDate: "2020-02-12"
  },
  {
    id: 570670,
    name: "The Invisible Man",
    image: "/4U7hpTK0XTQBKT5X60bKmJd05ha.jpg",
    genre: [
      {
        id: 27,
        name: "Horror"
      },
      {
        id: 878,
        name: "Science Fiction"
      },
      {
        id: 53,
        name: "Thriller"
      }
    ],
    overview:
      "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
    releaseDate: "2020-02-26"
  },
  {
    id: 338762,
    name: "Bloodshot",
    image: "/1kE2xBJlX49iEsCfMYKcQd7tHpn.jpg",
    genre: [
      {
        id: 28,
        name: "Action"
      },
      {
        id: 18,
        name: "Drama"
      },
      {
        id: 14,
        name: "Fantasy"
      },
      {
        id: 878,
        name: "Science Fiction"
      }
    ],
    overview:
      "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine - Bloodshot. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
    releaseDate: "2020-02-20"
  },
  {
    id: 508439,
    name: "Onward",
    image: "/3VqDLgKLfNYSQYEGC5sjGhcPhn7.jpg",
    genre: [
      {
        id: 12,
        name: "Adventure"
      },
      {
        id: 16,
        name: "Animation"
      },
      {
        id: 35,
        name: "Comedy"
      },
      {
        id: 14,
        name: "Fantasy"
      },
      {
        id: 10751,
        name: "Family"
      }
    ],
    overview:
      "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
    releaseDate: "2020-02-29"
  },
  {
    id: 331482,
    name: "Little Women",
    image: "/mSmiB8XjUnR1GSIljuCPGsk0cwX.jpg",
    genre: [
      {
        id: 18,
        name: "Drama"
      },
      {
        id: 10749,
        name: "Romance"
      }
    ],
    overview: "Four sisters come of age in America in the aftermath of the Civil War.",
    releaseDate: "2019-12-25"
  },
  {
    id: 292011,
    name: "Richard Jewell",
    image: "/5Lgkm8jt4roAFPZQ52fKMhVmDaZ.jpg",
    genre: [
      {
        id: 18,
        name: "Drama"
      }
    ],
    overview:
      'Directed by Clint Eastwood and based on true events, "Richard Jewell" is a story of what happens when what is reported as fact obscures the truth. "There is a bomb in Centennial Park. You have thirty minutes." The world is first introduced to Richard Jewell as the security guard who reports finding the device at the 1996 Atlanta bombing-his report making him a hero whose swift actions save countless lives. But within days, the law enforcement wannabe becomes the FBI\'s number one suspect, vilified by press and public alike, his life ripped apart.  Richard Jewell thinks quick, works fast, and saves hundreds, perhaps thousands, of lives after a domestic terrorist plants several pipe bombs and they explode during a concert, only to be falsely suspected of the crime by sloppy FBI work and sensational media coverage.',
    releaseDate: "2019-12-13"
  },
  {
    id: 458897,
    name: "Charlie's Angels",
    image: "/1DPUFG6QnGqzpvEaDEv7TaepycM.jpg",
    genre: [
      {
        id: 28,
        name: "Action"
      },
      {
        id: 12,
        name: "Adventure"
      },
      {
        id: 35,
        name: "Comedy"
      }
    ],
    overview:
      "When a systems engineer blows the whistle on a dangerous technology, Charlie's Angels from across the globe are called into action, putting their lives on the line to protect society.",
    releaseDate: "2019-11-14"
  },
  {
    id: 502425,
    name: "Escape from Pretoria",
    image: "/sI4StUppzQHzSU9QPiRUxOvQRvp.jpg",
    genre: [
      {
        id: 53,
        name: "Thriller"
      }
    ],
    overview:
      "Based on the real-life prison break of two political captives, Escape From Pretoria is a race-against-time thriller set in the tumultuous apartheid days of South Africa. Two white South Africans, imprisoned for working on behalf of the ANC, are determined to escape from the notorious white man's 'Robben Island', Pretoria Prison.",
    releaseDate: "2020-03-06"
  },
  {
    id: 457335,
    name: "Guns Akimbo",
    image: "/2kNnf7BwRCEm4bcFkdiE0T4U25s.jpg",
    genre: [
      {
        id: 28,
        name: "Action"
      },
      {
        id: 35,
        name: "Comedy"
      }
    ],
    overview:
      "An ordinary guy suddenly finds himself forced to fight a gladiator-like battle for a dark website that streams the violence for viewers. Miles must fight heavily armed Nix and also save his kidnapped ex-girlfriend.",
    releaseDate: "2020-02-27"
  },
  {
    id: 525661,
    name: "Bombshell",
    image: "/gbPfvwBqbiHpQkYZQvVwB6MVauV.jpg",
    genre: [
      {
        id: 18,
        name: "Drama"
      }
    ],
    overview:
      "Bombshell is a revealing look inside the most powerful and controversial media empire of all time; and the explosive story of the women who brought down the infamous man who created it.",
    releaseDate: "2019-12-13"
  },
  {
    id: 571265,
    name: "Digimon Adventure: Last Evolution Kizuna",
    image: "/7bjTzPQUV2KVI0HdUjf1l8lUoLF.jpg",
    genre: [
      {
        id: 28,
        name: "Action"
      },
      {
        id: 12,
        name: "Adventure"
      },
      {
        id: 16,
        name: "Animation"
      },
      {
        id: 53,
        name: "Thriller"
      }
    ],
    overview:
      "Tai is now a university student, living alone, working hard at school, and working every day, but with his future still undecided. Meanwhile, Matt and others continue to work on Digimon incidents and activities that help people with their partner Digimon. When an unprecedented phenomenon occurs, the DigiDestined discover that when they grow up, their relationship with their partner Digimon will come closer to an end.  As a countdown timer activates on the Digivice, they realize that the more they fight with their partner Digimon, the faster their bond breaks. Will they fight for others and lose their partner? The time to choose and decide is approaching fast. There is a short time before “chosen children” will become adults. This is the last adventure of Tai and Agumon.",
    releaseDate: "2020-02-21"
  },
  {
    id: 556678,
    name: "Emma.",
    image: "/sm8iVzA7kRp0d4BSIsgXjsSBMKV.jpg",
    genre: [
      {
        id: 35,
        name: "Comedy"
      },
      {
        id: 18,
        name: "Drama"
      }
    ],
    overview: "In 1800s England, a well-meaning but selfish young woman meddles in the love lives of her friends.",
    releaseDate: "2020-02-13"
  },
  {
    id: 448119,
    name: "Dolittle",
    image: "/5eNiYMu2GXCtNlDwMcJqKGVwyoX.jpg",
    genre: [
      {
        id: 12,
        name: "Adventure"
      },
      {
        id: 35,
        name: "Comedy"
      },
      {
        id: 14,
        name: "Fantasy"
      },
      {
        id: 10751,
        name: "Family"
      }
    ],
    overview:
      "After losing his wife seven years earlier, the eccentric Dr. John Dolittle, famed doctor and veterinarian of Queen Victoria’s England, hermits himself away behind the high walls of Dolittle Manor with only his menagerie of exotic animals for company. But when the young queen falls gravely ill, a reluctant Dolittle is forced to set sail on an epic adventure to a mythical island in search of a cure, regaining his wit and courage as he crosses old adversaries and discovers wondrous creatures.",
    releaseDate: "2020-01-01"
  },
  {
    id: 552178,
    name: "Dark Waters",
    image: "/67AVxH8SM5gDUoPFCGfeUg1TuEs.jpg",
    genre: [
      {
        id: 18,
        name: "Drama"
      },
      {
        id: 53,
        name: "Thriller"
      }
    ],
    overview:
      "A tenacious attorney uncovers a dark secret that connects a growing number of unexplained deaths due to one of the world's largest corporations. In the process, he risks everything — his future, his family, and his own life — to expose the truth.",
    releaseDate: "2019-11-22"
  },
  {
    id: 585244,
    name: "I Still Believe",
    image: "/dWkt2dC0tYm2ZhxuEotXQaNeH7X.jpg",
    genre: [
      {
        id: 18,
        name: "Drama"
      },
      {
        id: 10402,
        name: "Music"
      }
    ],
    overview:
      "The true-life story of Christian music star Jeremy Camp and his journey of love and loss that looks to prove there is always hope.",
    releaseDate: "2020-03-12"
  },
  {
    id: 575452,
    name: "The Traitor",
    image: "/bjb1zKlyw85hYwDXzz2UM6XqjUU.jpg",
    genre: [
      {
        id: 80,
        name: "Crime"
      },
      {
        id: 18,
        name: "Drama"
      }
    ],
    overview:
      "Palermo, Sicily, 1980. Mafia member Tommaso Buscetta decides to move to Brazil with his family fleeing the constant war between the different clans of the criminal organization. But when, after living several misfortunes, he is forced to return to Italy, he makes a bold decision that will change his life and the destiny of Cosa Nostra forever.",
    releaseDate: "2019-05-23"
  },
  {
    id: 520763,
    name: "A Quiet Place Part II",
    image: "/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
    genre: [
      {
        id: 18,
        name: "Drama"
      },
      {
        id: 878,
        name: "Science Fiction"
      },
      {
        id: 53,
        name: "Thriller"
      }
    ],
    overview:
      "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
    releaseDate: "2020-03-18"
  },
  {
    id: 595975,
    name: "La Belle Époque",
    image: "/mJJD5m0uHKqcWctQRcPoOuHvG6E.jpg",
    genre: [
      {
        id: 35,
        name: "Comedy"
      },
      {
        id: 18,
        name: "Drama"
      }
    ],
    overview:
      "Victor, a disillusioned sexagenarian, sees his life turned upside down on the day when Antoine, a brilliant entrepreneur, offers him a new kind of attraction: mixing theatrical artifices and historical reconstruction, this company offers his clients a chance to dive back into the era of their choice. Victor then chose to relive the most memorable week of his life: the one where, 40 years earlier, he met the great love.",
    releaseDate: "2019-11-06"
  },
  {
    id: 531428,
    name: "Portrait of a Lady on Fire",
    image: "/3NTEMlG5mQdIAlKDl3AJG0rX29Z.jpg",
    genre: [
      {
        id: 18,
        name: "Drama"
      },
      {
        id: 10749,
        name: "Romance"
      }
    ],
    overview:
      "On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.",
    releaseDate: "2019-06-17"
  },
  {
    id: 673168,
    name: "Don’t Speak",
    image: "/wnUOcrX6AENcpydRc9OItLxF889.jpg",
    genre: [],
    overview:
      "Upon arriving at their grandparents farm, a family soon realise the entire town has been taken out by an unknown monster. And soon, they become its prey.",
    releaseDate: "2020-03-10"
  }
];

const movieReducer = (state = initState, action) => {
  if (action.type == "SEARCH_MOVIE") {
    // let a = state.results.filter(movie =>
    //   movie.original_title.toLowerCase().includes(action.search.query.toLowerCase())
    // );
    const selectedMovies = state;
    console.log(action);
    if (action.search !== "") {
      return [...state.filter(movie => movie.name.toLowerCase().includes(action.search.toLowerCase()))];
    }

    return [...initState];
  }
  return state;
};

export default movieReducer;
