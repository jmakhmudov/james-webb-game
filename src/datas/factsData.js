const factsData = [
    {
        id: 1,
        question: "How much did it cost to build JWST?",
        imgName: "NAME.png",
        explanation: "The program of James Webb Space Telescope was plagued with enormous cost overruns and delays. A major redesign in 2005 led to the current approach, with the construction completed in 2016 at a total cost of USD 10 billion.",
        answers: [
            {
                description: "10 billion dollars.",
                correct: true 
            },
            {
                description: "25 million dollars.",
                correct: false
            },
            {
                description: "5 000 soums.",
                correct: false
            },
            {
                description: "It cost one cent.",
                correct: false
            },
        ]
    },

    {
        id: 2,
        question: "JWST is named after James Webber, famous site layout designer.",
        imgName: "NAME.png",
        explanation: "JWST is named after James Edwin Webb, the second head of NASA responsible for Apollo mission’s success.",
        answers: [
            {
                description: "True",
                correct: false
            },
            {
                description: "False",
                correct: true
            },
        ]
    },

    // {
    //     id: 3,
    //     question: "JWST is named after James Edwin Webb, the second head of NASA responsible for Apollo mission’s success.",
    //     imgName: "NAME.png",
    //     explanation: "",
    //     answers: [
    //         {
    //             description: "True",
    //             correct: true
    //         },
    //         {
    //             description: "False",
    //             correct: false
    //         },
    //     ]
    // },

    {
        id: 4,
        question: "When did JWST get launched into space?",
        imgName: "NAME.png",
        explanation: "JWST launched from the Guiana Space Centre in Kourou, France, as scheduled at 12:20 UTC on 25 December 2021",
        answers: [
            {
                description: "1977’s.",
                correct: false
            },
            {
                description: "Yesterday.",
                correct: false
            },
            {
                description: "It’s private information.",
                correct: false
            },
            {
                description: "2021, December 25.",
                correct: true
            },
        ]
    },

    {
        id: 5,
        question: "JWST is the biggest space telescope ever launched.",
        imgName: "NAME.png",
        explanation: "The largest space telescope with the largest mirror (a segmented mirror with a total diameter of 6.5 meters, but the largest monolithic mirror remains at the Herschel telescope — 3.5 meters) ever launched by mankind",
        
        answers: [
            {
                description: "True",
                correct: true
            },
            {
                description: "False",
                correct: false
            },
        ]
    },

    {
        id: 6,
        question: "At first, they wanted to name it Next Generation Space Telescope.",
        imgName: "NAME.png",
        explanation: "It was originally called the New Generation Space Telescope NGST. In 2002, it was renamed in honor of the second head of NASA, James Webb (1906-1992).",
        answers: [
            {
                description: "True",
                correct: true
            },
            {
                description: "False",
                correct: false
            },
        ]
    },

    {
        id: 7,
        question: "JWST was too big to fit into a rocket in working order. Then how did scientists make the rocket hold JWST?",
        imgName: "NAME.png",
        explanation: "The telescope was designed to be folded twelve times so that it fit within launch rocket's payload fairing, which is 4.57 m (15.0 ft) in diameter, and 16.19 m (53.1 ft) long.",
        answers: [
            {
                description: "JWST doesn't need any launch rocket, the telescope can take off by itself.",
                correct: false
            },
            {
                description: "The structure of the Telescope is like an origami, it can be folded.",
                correct: true
            },
        ]
    },
    
    {
        id: 8,
        question: "JWST's one of mission goals is to search for light from the first stars and galaxies that formed after the Big Bang.",
        imgName: "NAME.png",
        explanation: "The James Webb Space Telescope has four key goals: to search for light from the first stars and galaxies that formed in the universe after the Big Bang; to study galaxy formation and evolution; to understand star formation and planet formation; to study planetary systems and the origins of life.",
        answers: [
            {
                description: "True",
                correct: true
            },
            {
                description: "False",
                correct: false
            },
        ]
    },

    {
        id: 9,
        question: "JWST's one of the mission goals is to search for aliens on Mars.",
        imgName: "NAME.png",
        explanation: "The James Webb Space Telescope has four key goals: to search for light from the first stars and galaxies that formed in the universe after the Big Bang; to study galaxy formation and evolution; to understand star formation and planet formation; to study planetary systems and the origins of life.",
        answers: [
            {
                description: "True",
                correct: false
            },
            {
                description: "False",
                correct: true
            },
        ]
    },

    {
        id: 10,
        question: "JWST's one of the mission goals is to study galaxy formation and evolution",
        imgName: "NAME.png",
        explanation: "The James Webb Space Telescope has four key goals: to search for light from the first stars and galaxies that formed in the universe after the Big Bang; to study galaxy formation and evolution; to understand star formation and planet formation; to study planetary systems and the origins of life.",
        answers: [
            {
                description: "True",
                correct: true
            },
            {
                description: "False",
                correct: false
            },
        ]
    },

    {
        id: 11,
        question: "JWST's one of the mission goals is studying the dark side of the Moon.",
        imgName: "NAME.png",
        explanation: "The James Webb Space Telescope has four key goals: to search for light from the first stars and galaxies that formed in the universe after the Big Bang; to study galaxy formation and evolution; to understand star formation and planet formation; to study planetary systems and the origins of life.",
        answers: [
            {
                description: "True",
                correct: false
            },
            {
                description: "False",
                correct: true
            },
        ]
    },

    
    {
        id: 12,
        question: "Who or what is Ariane-5?",
        imgName: "NAME.png",
        explanation: "Ariane 5 is a European heavy-lift space launch vehicle developed and operated by Arianespace for the European Space Agency (ESA), was used in JWST launch.",
        answers: [
            {
                description: "5th daughter of James Webb.",
                correct: false
            },

            {
                description: "European disposable launch vehicle, that carried JWST.",
                correct: true
            },
        ]
    },
    
    {
        id: 13,
        question: "JWST made photos of space objects that only existed millions of years ago, how is this possible?",
        imgName: "NAME.png",
        explanation: "The further away the object in space is, the further into the past we see it from the telescope.",
        answers: [
            {
                description: "JWST is so powerful, that it can see the past and the future.",
                correct: false
            },
            {
                description: "JWST cathes the light that has been emitted millions of years ago.",
                correct: true
            },
        ]
    },
    
    {
        id: 14,
        question: "NASA believe, that JWST will work for ...?",
        imgName: "NAME.png",
        explanation: "The Webb team has analyzed telescope's initial trajectory and determined the observatory should have enough fuel to allow support of science operations in orbit for significantly more than a 10-year science lifetime.(The minimum baseline for the mission is five years.)",
        answers: [
            {
                description: "3 months.",
                correct: false
            },
            {
                description: "100 years.",
                correct: false
            },
            {
                description: "30 years.",
                correct: false
            },
            {
                description: "Minimum for 5 years.",
                correct: true
            },
        ]
    },

    


    {
        id: 15,
        question: "Which celestial body does JWST orbit?",
        imgName: "NAME.png",
        explanation: "JWST will orbit the sun, a million miles away from Earth at the second Lagrange point.",//1.5 million
        answers: [
            {
                description: "Earth",
                correct: false
            },
            {
                description: "Mars",
                correct: false
            },
            {
                description: "Moon",
                correct: false
            },
            {
                description: "Sun",
                correct: true
            },
        ]
    },


    {
        id: 16,
        question: "What shape is the James Webb Space Telescope Primary Mirror?",
        imgName: "NAME.png",
        explanation: "Explanation: The Webb Telescope Team had decided to build the mirror in segments on a structure which folds up so that it can fit into the rocket. Each of the 18 Hexagonal-shaped mirror segments is 1.32 meters in diameter, flat to flat.",
        answers: [
            {
                description: "Rectangular.",
                correct: false
            },
            {
                description: "Circular.",
                correct: false
            },
            {
                description: "Hexagonal-shaped.", 
                correct: true
            },
            {
                description: "Square-shaped.", 
                correct: false
            },
        ]
    },

    {
        id: 17,
        question: "In what range does JWST operate?",
        imgName: "NAME.png",
        explanation: "JWST's wavelength range covered by the scientific instruments will be from about 0.6 μm to 28.5 μm (visible to the near-mid infrared light).",
        answers: [
            {
                description: "Visible.",
                correct: false
            },
            {
                description: "Near-mid infrared.",
                correct: true
            },
            {
                description: "Far-near infrared.",
                correct: false
            },
            {
                description: "Ultraviolet.", 
                correct: false
            },
        ]
    },

    {
        id: 18,
        question: "JWST is named after James Edwin Webb, who was he?",
        imgName: "NAME.png",
        explanation: "JWST is named after James Edwin Webb, the second head of NASA, responsible for Apollo mission’s success.",
        answers: [
            {
                description: "President of the USA.",
                correct: false
            },
            {
                description: "NASA astronaut.",
                correct: false
            },
            {
                description: "Military pilot.",
                correct: false
            },
            {
                description: "NASA Administrator.",
                correct: true
            },
        ]
    },

    {
        id: 19,
        question: "How far JWST is located from the earth?",
        imgName: "NAME.png",
        explanation: "JWST orbits the sun, 1.5 million kms away from Earth at the second Lagrange point.",
        answers: [
            {
                description: "10 million km.",
                correct: false
            },
            {
                description: "1.5 billion km",
                correct: false
            },
            {
                description: "1.5 million km.",
                correct: true
            },
            {
                description: "Unknown.",
                correct: false
            },
        ]
    },

    {
        id: 20,
        question: "How long did it take after launch for JWST to reach it's working condition?",
        imgName: "NAME.png",
        explanation: "On 24 January 2022, at 2:00 p.m. EST, nearly a month after launch, a third and final course correction took place, inserting JWST into its planned halo orbit around the Sun–Earth L2 point.",
        answers: [
            {
                description: "1 month.",
                correct: true
            },
            {
                description: "1 year",
                correct: false
            },
            {
                description: "1 week",
                correct: false
            },
            {
                description: "1 hour",
                correct: false
            },
        ]
    },

]


export default factsData