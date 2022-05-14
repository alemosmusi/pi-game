import { useDispatch } from "react-redux";
import { ELIMINAR_UN_GAME, OBTENER_DETALLE, OBTENER_GAMES } from "../action-types/actionTypes";




const games = 



        [
            {
                id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
                name: "agsdu",
                description: "espsdgadfgadgaksfja",
                released: "2000-01-12",
                image: "https://i.blogs.es/c140f1/3446535-supermarioparty-review-thumbnologo/450_1000.jpeg",
                rating: "5",
                platforms: [
                    "Xbox one",
                    "playstation"
                ],
                createdAt: "2022-05-12T16:31:50.673Z",
                updatedAt: "2022-05-12T16:31:50.673Z",
                genres: []
            },
            {
                id: 4562,
                name: "Grand Theft Auto V",
                released: "2013-09-17",
                image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
                rating: 4.48,
                description: "grand-theft-auto-v",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 3,
                        name: "Adventure",
                        "slug": "adventure",
                        "games_count": 112415,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    }
                ],
                platforms: [
                    "pc",
                    "xbox-series-x",
                    "playstation4",
                    "playstation3",
                    "xbox360",
                    "xbox-one",
                    "playstation5"
                ]
            },
            {
                id: 3328,
                name: "The Witcher 3: Wild Hunt",
                released: "2015-05-18",
                image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
                rating: 4.67,
                description: "the-witcher-3-wild-hunt",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 3,
                        name: "Adventure",
                        "slug": "adventure",
                        "games_count": 112415,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    },
                    {
                        id: 5,
                        name: "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 45662,
                        "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                    }
                ],
                platforms: [
                    "nintendo-switch",
                    "playstation5",
                    "xbox-series-x",
                    "xbox-one",
                    "pc",
                    "playstation4"
                ]
            },
            {
                id: 42345635600,
                name: "Portal 2",
                released: "2011-04-18",
                image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
                rating: 4.62,
                description: "portal-2",
                genres: [
                    {
                        id: 2,
                        name: "Shooter",
                        "slug": "shooter",
                        "games_count": 51448,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        id: 7,
                        name: "Puzzle",
                        "slug": "puzzle",
                        "games_count": 84015,
                        "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                    }
                ],
                platforms: [
                    "xbox360",
                    "linux",
                    "macos",
                    "playstation3",
                    "pc",
                    "xbox-one"
                ]
            },
            {
                id: 534567456,
                name: "Tomb Raider (2013)",
                released: "2013-03-05",
                image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
                rating: 4.06,
                description: "tomb-raider",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 3,
                        name: "Adventure",
                        "slug": "adventure",
                        "games_count": 112415,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    }
                ],
                platforms: [
                    "playstation4",
                    "macos",
                    "pc",
                    "xbox-one",
                    "xbox360",
                    "playstation3"
                ]
            },
            {
                id: 53464369,
                name: "The Elder Scrolls V: Skyrim",
                released: "2011-11-11",
                image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
                rating: 4.42,
                description: "the-elder-scrolls-v-skyrim",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 5,
                        name: "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 45662,
                        "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                    }
                ],
                platforms: [
                    "pc",
                    "nintendo-switch",
                    "xbox360",
                    "playstation3"
                ]
            },
            {
                id: 434563461,
                name: "Counter-Strike: Global Offensive",
                released: "2012-08-21",
                image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
                rating: 3.57,
                description: "counter-strike-global-offensive",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 2,
                        name: "Shooter",
                        "slug": "shooter",
                        "games_count": 51448,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    }
                ],
                platforms: [
                    "pc",
                    "xbox360",
                    "playstation3"
                ]
            },
            {
                id: "a5f34573457a44-4670-bcc4-51deb276ef3e",
                name: "agsdu",
                description: "espsdgadfgadgaksfja",
                released: "2000-01-12",
                image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
                rating: "5",
                platforms: [
                    "Xbox one",
                    "playstation"
                ],
                createdAt: "2022-05-12T16:31:50.673Z",
                updatedAt: "2022-05-12T16:31:50.673Z",
                genres: []
            },
            {
                id: 34345778,
                name: "Grand Theft Auto V",
                released: "2013-09-17",
                image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
                rating: 4.48,
                description: "grand-theft-auto-v",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 3,
                        name: "Adventure",
                        "slug": "adventure",
                        "games_count": 112415,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    }
                ],
                platforms: [
                    "pc",
                    "xbox-series-x",
                    "playstation4",
                    "playstation3",
                    "xbox360",
                    "xbox-one",
                    "playstation5"
                ]
            },
            {
                id: 33456468,
                name: "The Witcher 3: Wild Hunt",
                released: "2015-05-18",
                image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
                rating: 4.67,
                description: "the-witcher-3-wild-hunt",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 3,
                        name: "Adventure",
                        "slug": "adventure",
                        "games_count": 112415,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    },
                    {
                        id: 5,
                        name: "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 45662,
                        "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                    }
                ],
                platforms: [
                    "nintendo-switch",
                    "playstation5",
                    "xbox-series-x",
                    "xbox-one",
                    "pc",
                    "playstation4"
                ]
            },
            {
                id: 424586580,
                name: "Portal 2",
                released: "2011-04-18",
                image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
                rating: 4.62,
                description: "portal-2",
                genres: [
                    {
                        id: 2,
                        name: "Shooter",
                        "slug": "shooter",
                        "games_count": 51448,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        id: 7,
                        name: "Puzzle",
                        "slug": "puzzle",
                        "games_count": 84015,
                        "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                    }
                ],
                platforms: [
                    "xbox360",
                    "linux",
                    "macos",
                    "playstation3",
                    "pc",
                    "xbox-one"
                ]
            },
            {
                id: 52345643566,
                name: "Tomb Raider (2013)",
                released: "2013-03-05",
                image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
                rating: 4.06,
                description: "tomb-raider",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 3,
                        name: "Adventure",
                        "slug": "adventure",
                        "games_count": 112415,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    }
                ],
                platforms: [
                    "playstation4",
                    "macos",
                    "pc",
                    "xbox-one",
                    "xbox360",
                    "playstation3"
                ]
            },
            {
                id: 5345745779,
                name: "The Elder Scrolls V: Skyrim",
                released: "2011-11-11",
                image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
                rating: 4.42,
                description: "the-elder-scrolls-v-skyrim",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 5,
                        name: "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 45662,
                        "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                    }
                ],
                platforms: [
                    "pc",
                    "nintendo-switch",
                    "xbox360",
                    "playstation3"
                ]
            },
            {
                id: 42345734751,
                name: "Counter-Strike: Global Offensive",
                released: "2012-08-21",
                image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
                rating: 3.57,
                description: "counter-strike-global-offensive",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 2,
                        name: "Shooter",
                        "slug": "shooter",
                        "games_count": 51448,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    }
                ],
                platforms: [
                    "pc",
                    "xbox360",
                    "playstation3"
                ]
            },
            {
                id: "a5f23457347g397-da44-4670-bcc4-51deb276ef3e",
                name: "agsdu",
                description: "espsdgadfgadgaksfja",
                released: "2000-01-12",
                image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
                rating: "5",
                platforms: [
                    "Xbox one",
                    "playstation"
                ],
                createdAt: "2022-05-12T16:31:50.673Z",
                updatedAt: "2022-05-12T16:31:50.673Z",
                genres: []
            },
            {
                id: 3426234698,
                name: "Grand Theft Auto V",
                released: "2013-09-17",
                image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
                rating: 4.48,
                description: "grand-theft-auto-v",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 3,
                        name: "Adventure",
                        "slug": "adventure",
                        "games_count": 112415,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    }
                ],
                platforms: [
                    "pc",
                    "xbox-series-x",
                    "playstation4",
                    "playstation3",
                    "xbox360",
                    "xbox-one",
                    "playstation5"
                ]
            },
            {
                id: 33234574588,
                name: "The Witcher 3: Wild Hunt",
                released: "2015-05-18",
                image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
                rating: 4.67,
                description: "the-witcher-3-wild-hunt",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 3,
                        name: "Adventure",
                        "slug": "adventure",
                        "games_count": 112415,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    },
                    {
                        id: 5,
                        name: "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 45662,
                        "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                    }
                ],
                platforms: [
                    "nintendo-switch",
                    "playstation5",
                    "xbox-series-x",
                    "xbox-one",
                    "pc",
                    "playstation4"
                ]
            },
            {
                id: 434574700,
                name: "Portal 2",
                released: "2011-04-18",
                image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
                rating: 4.62,
                description: "portal-2",
                genres: [
                    {
                        id: 2,
                        name: "Shooter",
                        "slug": "shooter",
                        "games_count": 51448,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        id: 7,
                        name: "Puzzle",
                        "slug": "puzzle",
                        "games_count": 84015,
                        "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                    }
                ],
                platforms: [
                    "xbox360",
                    "linux",
                    "macos",
                    "playstation3",
                    "pc",
                    "xbox-one"
                ]
            },
            {
                id: 53457345786,
                name: "Tomb Raider (2013)",
                released: "2013-03-05",
                image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
                rating: 4.06,
                description: "tomb-raider",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 3,
                        name: "Adventure",
                        "slug": "adventure",
                        "games_count": 112415,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    }
                ],
                platforms: [
                    "playstation4",
                    "macos",
                    "pc",
                    "xbox-one",
                    "xbox360",
                    "playstation3"
                ]
            },
            {
                id: 526324679,
                name: "The Elder Scrolls V: Skyrim",
                released: "2011-11-11",
                image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
                rating: 4.42,
                description: "the-elder-scrolls-v-skyrim",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 5,
                        name: "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 45662,
                        "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                    }
                ],
                platforms: [
                    "pc",
                    "nintendo-switch",
                    "xbox360",
                    "playstation3"
                ]
            },
            {
                id: 42345734791,
                name: "Counter-Strike: Global Offensive",
                released: "2012-08-21",
                image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
                rating: 3.57,
                description: "counter-strike-global-offensive",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 2,
                        name: "Shooter",
                        "slug": "shooter",
                        "games_count": 51448,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    }
                ],
                platforms: [
                    "pc",
                    "xbox360",
                    "playstation3"
                ]
            },
            {
                id: "a52364236fgjfjg-da44-4670-bcc4-51deb276ef3e",
                name: "agsdu",
                description: "espsdgadfgadgaksfja",
                released: "2000-01-12",
                image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
                rating: "5",
                platforms: [
                    "Xbox one",
                    "playstation"
                ],
                createdAt: "2022-05-12T16:31:50.673Z",
                updatedAt: "2022-05-12T16:31:50.673Z",
                genres: []
            },
            {
                id: 3434573478,
                name: "Grand Theft Auto V",
                released: "2013-09-17",
                image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
                rating: 4.48,
                description: "grand-theft-auto-v",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 3,
                        name: "Adventure",
                        "slug": "adventure",
                        "games_count": 112415,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    }
                ],
                platforms: [
                    "pc",
                    "xbox-series-x",
                    "playstation4",
                    "playstation3",
                    "xbox360",
                    "xbox-one",
                    "playstation5"
                ]
            },
            {
                id: 3323462368,
                name: "The Witcher 3: Wild Hunt",
                released: "2015-05-18",
                image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
                rating: 4.67,
                description: "the-witcher-3-wild-hunt",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 3,
                        name: "Adventure",
                        "slug": "adventure",
                        "games_count": 112415,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    },
                    {
                        id: 5,
                        name: "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 45662,
                        "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                    }
                ],
                platforms: [
                    "nintendo-switch",
                    "playstation5",
                    "xbox-series-x",
                    "xbox-one",
                    "pc",
                    "playstation4"
                ]
            },
            {
                id: 42056875680,
                name: "Portal 2",
                released: "2011-04-18",
                image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
                rating: 4.62,
                description: "portal-2",
                genres: [
                    {
                        id: 2,
                        name: "Shooter",
                        "slug": "shooter",
                        "games_count": 51448,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        id: 7,
                        name: "Puzzle",
                        "slug": "puzzle",
                        "games_count": 84015,
                        "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                    }
                ],
                platforms: [
                    "xbox360",
                    "linux",
                    "macos",
                    "playstation3",
                    "pc",
                    "xbox-one"
                ]
            },
            {
                id: 525687568568786,
                name: "Tomb Raider (2013)",
                released: "2013-03-05",
                image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
                rating: 4.06,
                description: "tomb-raider",
                genres: [
                    {
                        id: 4,
                        name: "Action",
                        "slug": "action",
                        "games_count": 149008,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        id: 3,
                        name: "Adventure",
                        "slug": "adventure",
                        "games_count": 112415,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    }
                ],
                platforms: [
                    "playstation4",
                    "macos",
                    "pc",
                    "xbox-one",
                    "xbox360",
                    "playstation3"
                ]
            },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: "a5f28397-da44-4670-bcc4-51deb276ef3e",
            //     name: "agsdu",
            //     description: "espsdgadfgadgaksfja",
            //     released: "2000-01-12",
            //     image: "as01.epimg.net/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg",
            //     rating: "5",
            //     platforms: [
            //         "Xbox one",
            //         "playstation"
            //     ],
            //     createdAt: "2022-05-12T16:31:50.673Z",
            //     updatedAt: "2022-05-12T16:31:50.673Z",
            //     genres: []
            // },
            // {
            //     id: 3498,
            //     name: "Grand Theft Auto V",
            //     released: "2013-09-17",
            //     image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            //     rating: 4.48,
            //     description: "grand-theft-auto-v",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox-series-x",
            //         "playstation4",
            //         "playstation3",
            //         "xbox360",
            //         "xbox-one",
            //         "playstation5"
            //     ]
            // },
            // {
            //     id: 3328,
            //     name: "The Witcher 3: Wild Hunt",
            //     released: "2015-05-18",
            //     image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            //     rating: 4.67,
            //     description: "the-witcher-3-wild-hunt",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "nintendo-switch",
            //         "playstation5",
            //         "xbox-series-x",
            //         "xbox-one",
            //         "pc",
            //         "playstation4"
            //     ]
            // },
            // {
            //     id: 4200,
            //     name: "Portal 2",
            //     released: "2011-04-18",
            //     image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            //     rating: 4.62,
            //     description: "portal-2",
            //     genres: [
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         },
            //         {
            //             id: 7,
            //             name: "Puzzle",
            //             "slug": "puzzle",
            //             "games_count": 84015,
            //             "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "xbox360",
            //         "linux",
            //         "macos",
            //         "playstation3",
            //         "pc",
            //         "xbox-one"
            //     ]
            // },
            // {
            //     id: 5286,
            //     name: "Tomb Raider (2013)",
            //     released: "2013-03-05",
            //     image: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            //     rating: 4.06,
            //     description: "tomb-raider",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 3,
            //             name: "Adventure",
            //             "slug": "adventure",
            //             "games_count": 112415,
            //             "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "playstation4",
            //         "macos",
            //         "pc",
            //         "xbox-one",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 5679,
            //     name: "The Elder Scrolls V: Skyrim",
            //     released: "2011-11-11",
            //     image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            //     rating: 4.42,
            //     description: "the-elder-scrolls-v-skyrim",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 5,
            //             name: "RPG",
            //             "slug": "role-playing-games-rpg",
            //             "games_count": 45662,
            //             "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "nintendo-switch",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
            // {
            //     id: 4291,
            //     name: "Counter-Strike: Global Offensive",
            //     released: "2012-08-21",
            //     image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            //     rating: 3.57,
            //     description: "counter-strike-global-offensive",
            //     genres: [
            //         {
            //             id: 4,
            //             name: "Action",
            //             "slug": "action",
            //             "games_count": 149008,
            //             "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            //         },
            //         {
            //             id: 2,
            //             name: "Shooter",
            //             "slug": "shooter",
            //             "games_count": 51448,
            //             "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            //         }
            //     ],
            //     platforms: [
            //         "pc",
            //         "xbox360",
            //         "playstation3"
            //     ]
            // },
        ]


// export function obtenerGames(){

//     return{
//         type: OBTENER_GAMES,
//         payload: games
//     }
// }
export function obtenerGames(){
    return function(dispacth){
        return fetch('http://localhost:3001/')
            .then((resp) => resp.json())
        
            .then((games) =>{
                dispacth({
                type: OBTENER_GAMES,
                payload: games
            })
    })
    }
    
}


const gamedetail = {

    
        id: 4562,
        name: "Pinballistik",
        description: "The greatest multi-player pinball game ever is now completely FREE!!<br/><br/>Pinball evolves into Battle Pinball! PINBALLISTIK brings more thrills, action and effects to traditional pinball. The bumpers, kickers, flippers, targets and more are enhanced, animated and improved with amazing physics and story features. Engage your friends or the AI side-by-side on the Battle Tables.  Blast your way onto your opponent’s table for extra points. Take control of their balls, switch their color, and increase your attack. Play the authentic, classic Single Tables for an unforgettable experience.   <br/><br/>Mosey through the Wild West on the Circle the Wagons table. Visit the saloon for a game of cards or target practice. Lose your opponent in a sand storm, load up the pistol for Revolver Multiball and blast your opponent.<br/><br/>1-2 players<br/>713KB minimum save size<br/>HDTV screen resolution: 720p<br/>DUALSHOCK®3<br/>Network Features<br/><br/>  Purchase or use of this item is subject to the PlayStation®Network Terms of Service and User Agreement and this item's use restrictions. This item has been sublicensed to you by Sony Computer Entertainment America.<br/><br/>Pinballistik © 2013 Creat Studios, Inc.",
        rating: 2.79,
        platforms: [
            {
                platform: {
                    id: 16,
                    name: "PlayStation 3", },
            }
        ],
        genres: [
            {
                id: 11,
                name: "Arcade",
            }
        ],
}







export function obtenerDetalle(id){



    return function(dispacth){
        return fetch(`http://localhost:3001/videogame/?id=${id}`)
            .then((resp) => resp.json())
        
            .then((gamedetail) =>{
                dispacth({
                    type: OBTENER_DETALLE,
                    payload: gamedetail
            })
    })
    }
    
           

}


export function eliminarGame(id){
    return{
        type: ELIMINAR_UN_GAME,
        payload: id
    }
}