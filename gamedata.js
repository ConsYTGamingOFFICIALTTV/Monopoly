// TO DO:
// *Add ajax JSON loading & put these values into JSON
const GameData = {
    chanceCards: () => {
        return [{
            "description": "Advance to Ranelagh",
            "icon": "🛫",
            "type": "moveto",
            "nameId": "Ranelagh",
            "resolveSpace": false,
            "collectPassGo": true
        },
        {
            "description": "Advance to Broombridge",
            "icon": "🛫",
            "type": "moveto",
            "nameId": "Broombridge",
            "resolveSpace": false,
            "collectPassGo": true
        },
        {
            "description": "Advance to Parnell",
            "icon": "🛫",
            "type": "moveto",
            "nameId": "Parnell",
            "resolveSpace": false,
            "collectPassGo": true
        },
        {
            "description": "Pay Poor Tax of €15",
            "icon": "💸",
            "type": "withdraw",
            "amount": 15
        },
        {
            "description": "Buy a nintendo switch",
            "icon": "🎮",
            "type": "withdraw",
            "amount": 200,
        },
        {
            "description": "FIRE AHH! lose your clothes",
            "icon": "🔥",
            "type": "withdraw",
            "amount": 300
        },
        {
            "description": "Buy mariocart",
            "icon": "🏎️",
            "type": "withdraw",
            "amount": 50
        },
        {
            "description": "Advance to Glencairn",
            "icon": "🚅",
            "type": "moveto",
            "nameId": "Glencairn",
            "resolveSpace": false,
            "collectPassGo": true
        },
        {
            "description": "Go to jail",
            "icon": "🗝️",
            "type": "moveto",
            "nameId": "jail",
            "resolveSpace": false,
            "collectPassGo": false
        },
        {
            "description": "Happy Easter",
            "icon": "🗿",
            "type": "deposit",
            "amount": 10,
        },
        {
            "description": "ohanami. makes no sense in english.",
            "icon": "🍡",
            "type": "withdraw",
            "amount": 50
        }
    ];
    },
    communityChestCards: () => {
        return [{
            "description": "You Get €50(for Trying And REMEMBER YOU CAN ALWAYS WIN!)",
            "icon": "💰",
            "type": "deposit",
            "amount": 50
        },
        {
            "description": "Income tax refund— Collect €20",
            "icon": "💰",
            "type": "deposit",
            "amount": 20
        },
        {
            "description": "trick a rich old friend - get €200",
            "icon": "💰",
            "type": "deposit",
            "amount": 200
        },
        {
            "description": "Hey! look what you found! - get 5c",
            "icon": "💰",
            "type": "deposit",
            "amount": 0.05
        },
        {
            "description": "currency exchange! - earn €50 - The dollar is cheap now!",
            "icon": "💱",
            "type": "deposit",
            "amount": 50
        },
        {
            "description": "Win a trip to Japan + You GET €300!",
            "icon": "🗼",
            "type": "deposit",
            "amount": 300
        }];
    },
    spaces: () => {
        return [{
            "nextId": "broombridge",
            "prevId": "Glencairn",
            "nameId": "start",
            "name": "Go",
            "type": "start",
            "column": 11,
            "row": 11
        },
        {
            "nextId": "community_chest_1",
            "prevId": "start",
            "nameId": "broombridge",
            "name": "Broombridge",
            "type": "property",
            "column": 10,
            "row": 11,
            "color": "rosybrown",
            "price": 100,
            "rent": [
                50,
                60,
                70,
                80,
                90,
                100
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "cabra",
            "prevId": "broombridge",
            "nameId": "community_chest_1",
            "name": "Community Chest",
            "type": "chest",
            "column": 9,
            "row": 11
        },
        {
            "nextId": "income_tax_1",
            "prevId": "community_chest_1",
            "nameId": "cabra",
            "name": "Cabra",
            "type": "property",
            "column": 8,
            "row": 11,
            "color": "rosybrown",
            "price": 105,
            "rent": [
                55,
                65,
                75,
                85,
                95,
                105
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "phibsborough",
            "prevId": "cabra",
            "nameId": "income_tax_1",
            "name": "Income Tax",
            "type": "tax",
            "column": 7,
            "row": 11,
            "amount": 200
        },
        {
            "nextId": "grangegorman",
            "prevId": "income_tax_1",
            "nameId": "phibsborough",
            "name": "Phibsborough",
            "type": "property",
            "column": 6,
            "row": 11,
            "color": "black",
            "price": 110,
            "rent": [
                60,
                70,
                80,
                90,
                100,
                110
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "chance_1",
            "prevId": "phibsborough",
            "nameId": "grangegorman",
            "name": "Grangegorman",
            "type": "property",
            "column": 5,
            "row": 11,
            "color": "aquamarine",
            "price": 115,
            "rent": [
                65,
                75,
                85,
                95,
                105,
                115
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Broadstone — DIT",
            "prevId": "grangegorman",
            "nameId": "chance_1",
            "name": "Chance",
            "type": "chance",
            "column": 4,
            "row": 11
        },
        {
            "nextId": "Dominick",
            "prevId": "chance_1",
            "nameId": "Broadstone — DIT",
            "name": "Broadstone — DIT",
            "type": "property",
            "column": 3,
            "row": 11,
            "color": "aquamarine",
            "price": 120,
            "rent": [
                70,
                80,
                90,
                100,
                110,
                120
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "jail",
            "prevId": "Broadstone — DIT",
            "nameId": "Dominick",
            "name": "Dominick",
            "type": "property",
            "column": 2,
            "row": 11,
            "color": "aquamarine",
            "price": 125,
            "rent": [
                75,
                85,
                95,
                105,
                115,
                125
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Parnell",
            "prevId": "Dominick",
            "nameId": "jail",
            "name": "Jail",
            "type": "jail",
            "column": 1,
            "row": 11
        },
        {
            "nextId": "Marlborough",
            "prevId": "jail",
            "nameId": "Parnell",
            "name": "Parnell",
            "type": "property",
            "column": 1,
            "row": 10,
            "color": "fuchsia",
            "price": 130,
            "rent": [
                80,
                90,
                100,
                110,
                120,
                130
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Trinity",
            "prevId": "Parnell",
            "nameId": "Marlborough",
            "name": "Marlborough",
            "type": "property",
            "column": 1,
            "row": 9,
            "color": "black",
            "price": 135,
            "rent": [
                85,
                95,
                105,
                115,
                125,
                135
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "O'Connell Upper",
            "prevId": "Marlborough",
            "nameId": "Trinity",
            "name": "Trinity",
            "type": "property",
            "column": 1,
            "row": 8,
            "color": "fuchsia",
            "price": 140,
            "rent": [
                90,
                100,
                110,
                120,
                130,
                140
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "O'Connell, GPO",
            "prevId": "Trinity",
            "nameId": "O'Connell Upper",
            "name": "O'Connell Upper",
            "type": "property",
            "column": 1,
            "row": 7,
            "color": "fuchsia",
            "price": 145,
            "rent": [
                95,
                105,
                115,
                125,
                135,
                145
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Westmoreland",
            "prevId": "O'Connell Upper",
            "nameId": "O'Connell, GPO",
            "name": "O'Connell, GPO",
            "type": "property",
            "column": 1,
            "row": 6,
            "color": "black",
            "price": 150,
            "rent": [
                100,
                110,
                120,
                130,
                140,
                150
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "community_chest_2",
            "prevId": "O'Connell, GPO",
            "nameId": "Westmoreland",
            "name": "Westmoreland",
            "type": "property",
            "column": 1,
            "row": 5,
            "color": "gold",
            "price": 155,
            "rent": [
                105,
                115,
                125,
                135,
                145,
                155
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Dawson",
            "prevId": "Westmoreland",
            "nameId": "community_chest_2",
            "name": "Community Chest",
            "type": "chest",
            "column": 1,
            "row": 4
        },
        {
            "nextId": "St. Stephen's Green",
            "prevId": "community_chest_2",
            "nameId": "Dawson",
            "name": "Dawson",
            "type": "property",
            "column": 1,
            "row": 3,
            "color": "gold",
            "price": 160,
            "rent": [
                110,
                120,
                130,
                140,
                150,
                160
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "free_parking",
            "prevId": "Dawson",
            "nameId": "St. Stephen's Green",
            "name": "St. Stephen's Green",
            "type": "property",
            "column": 1,
            "row": 2,
            "color": "gold",
            "price": 165,
            "rent": [
                115,
                125,
                135,
                145,
                155,
                165
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Harcourt",
            "prevId": "St. Stephen's Green",
            "nameId": "free_parking",
            "name": "Free Parking",
            "column": 1,
            "row": 1,
            "type": "parking"
        },
        {
            "nextId": "chance_2",
            "prevId": "free_parking",
            "nameId": "Harcourt",
            "name": "Harcourt",
            "type": "property",
            "column": 2,
            "row": 1,
            "color": "red",
            "price": 170,
            "rent": [
                120,
                130,
                140,
                150,
                160,
                170
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Charlemont",
            "prevId": "Harcourt",
            "nameId": "chance_2",
            "name": "Chance",
            "type": "chance",
            "column": 3,
            "row": 1
        },
        {
            "nextId": "Ranelagh",
            "prevId": "chance_2",
            "nameId": "Charlemont",
            "name": "Charlemont",
            "type": "property",
            "column": 4,
            "row": 1,
            "color": "red",
            "price": 175,
            "rent": [
                125,
                135,
                145,
                155,
                165,
                175
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Beechwood",
            "prevId": "Charlemont",
            "nameId": "Ranelagh",
            "name": "Ranelagh",
            "type": "property",
            "column": 5,
            "row": 1,
            "color": "red",
            "price": 180,
            "rent": [
                130,
                140,
                150,
                160,
                170,
                180
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Cowper",
            "prevId": "Ranelagh",
            "nameId": "Beechwood",
            "name": "Beechwood",
            "type": "property",
            "column": 6,
            "row": 1,
            "color": "black",
            "price": 185,
            "rent": [
                135,
                145,
                155,
                165,
                175,
                185
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Milltown",
            "prevId": "Beechwood",
            "nameId": "Cowper",
            "name": "Cowper",
            "type": "property",
            "column": 7,
            "row": 1,
            "color": "yellow",
            "price": 190,
            "rent": [
                140,
                150,
                160,
                170,
                180,
                190
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Windy Arbour",
            "prevId": "Cowper",
            "nameId": "Milltown",
            "name": "Milltown",
            "type": "property",
            "column": 8,
            "row": 1,
            "color": "yellow",
            "price": 195,
            "rent": [
                145,
                155,
                165,
                175,
                185,
                195
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Dundrum",
            "prevId": "Milltown",
            "nameId": "Windy Arbour",
            "name": "Windy Arbour",
            "type": "property",
            "column": 9,
            "row": 1,
            "color": "black",
            "price": 200,
            "rent": [
                150,
                160,
                170,
                180,
                190,
                200
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "go_to_jail",
            "prevId": "Windy Arbour",
            "nameId": "Dundrum",
            "name": "Dundrum",
            "type": "property",
            "column": 10,
            "row": 1,
            "color": "yellow",
            "price": 205,
            "rent": [
                155,
                165,
                175,
                185,
                195,
                205
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Balally",
            "prevId": "Dundrum",
            "nameId": "go_to_jail",
            "name": "Go To Jail",
            "type": "goToJail",
            "column": 11,
            "row": 1
        },
        {
            "nextId": "Kilmacud",
            "prevId": "go_to_jail",
            "nameId": "Balally",
            "name": "Balally",
            "type": "property",
            "column": 11,
            "row": 2,
            "color": "green",
            "price": 210,
            "rent": [
                160,
                170,
                180,
                190,
                200,
                210
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "community_chest_3",
            "prevId": "Balally",
            "nameId": "Kilmacud",
            "name": "Kilmacud",
            "type": "property",
            "column": 11,
            "row": 3,
            "color": "green",
            "price": 215,
            "rent": [
                165,
                175,
                185,
                195,
                205,
                215
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Stillorgan",
            "prevId": "Kilmacud",
            "nameId": "community_chest_3",
            "name": "Community Chest",
            "type": "chest",
            "column": 11,
            "row": 4
        },
        {
            "nextId": "Sandyford",
            "prevId": "community_chest_3",
            "nameId": "Stillorgan",
            "name": "Stillorgan",
            "type": "property",
            "column": 11,
            "row": 5,
            "color": "green",
            "price": 220,
            "rent": [
                170,
                180,
                190,
                200,
                210,
                220
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "chance_3",
            "prevId": "Stillorgan",
            "nameId": "Sandyford",
            "name": "Sandyford",
            "type": "property",
            "column": 11,
            "row": 6,
            "color": "black",
            "price": 225,
            "rent": [
                175,
                185,
                195,
                205,
                215,
                225
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Central Park",
            "prevId": "Sandyford",
            "nameId": "chance_3",
            "name": "Chance",
            "type": "chance",
            "column": 11,
            "row": 7
        },
        {
            "nextId": "income_tax_2",
            "prevId": "chance_3",
            "nameId": "Central Park",
            "name": "Central Park",
            "type": "property",
            "column": 11,
            "row": 8,
            "color": "blue",
            "price": 230,
            "rent": [
                180,
                190,
                200,
                210,
                220,
                230
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        },
        {
            "nextId": "Glencairn",
            "prevId": "Central Park",
            "nameId": "income_tax_2",
            "name": "Income Tax",
            "type": "tax",
            "column": 11,
            "row": 9,
            "amount": 100
        },
        {
            "nextId": "start",
            "prevId": "income_tax",
            "nameId": "Glencairn",
            "name": "Glencairn",
            "type": "property",
            "column": 11,
            "row": 10,
            "color": "deeppink",
            "price": 235,
            "rent": [
                185,
                195,
                205,
                215,
                225,
                235
            ],
            "upgradeCost": [
                5,
                5,
                5,
                5,
                10
            ]
        }
        ];
    }
}