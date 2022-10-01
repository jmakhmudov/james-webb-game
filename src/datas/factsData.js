const factsData = [
    {
        id: 1,
        question: "How much did it cost to build JWST?",
        imgName: "NAME.png",
        answers: [
            {
                description: "10 billion dollars.",
                correct: true //The program of the James Webb Space Telescope was plagued with enormous cost overruns and delays. A major redesign in 2005 led to the current approach, with the construction completed in 2016 at a total cost of USD 10 billion.
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
        id: 3,
        question: "JWST is named after James Edwin Webb, the second head of NASA responsible for Apollo mission’s success.",
        imgName: "NAME.png",
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
        id: 4,
        question: "When did JWST get launched into space?",
        imgName: "NAME.png",
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
        question: "JWST's main mission goal is to search for light from the first stars and galaxies that formed after the Big Bang.",
        imgName: "NAME.png",
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
        answers: [
            {
                description: "JWST is so powerful, that it can see the past and the future.",
                correct: false
            },
            {
                description: "JWST took photos of the light that comes millions of light years ago.",
                correct: true
            },
        ]
    },
    
    {
        id: 14,
        question: "NASA believe, that JWST will work for ...?",
        imgName: "NAME.png",
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
                description: "5-10 years.",
                correct: true // The mission duration of the James Webb Space Telescope to investigate across the fields of astronomy and cosmology is 5-10 years
            },
        ]
    },

    


    {
        id: 15,
        question: "Which celestial body does JWST orbit?",
        imgName: "NAME.png",
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
                description: "Sun", //Answer: Sun Explanation: As per NASA, the James Webb Space Telescope will not be in orbit around the Earth, like the Hubble Telescope is, and it will actually orbiting the Sun, 1.5 million kilometers away from the Earth at what is called the second Lagrange Point or L2.
                correct: true
            },
        ]
    },


    {
        id: 16,
        question: "What shape is the James Webb Space Telescope Primary Mirror?",
        imgName: "NAME.png",
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
                description: "Hexagonal-shaped.", //Explanation: The Webb Telescope Team had decided to build the mirror in segments on a structure which folds up so that it can fit into the rocket. Each of the 18 Hexagonal-shaped mirror segments is 1.32 meters in diameter, flat to flat.
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
        answers: [
            {
                description: "Visible.",
                correct: false
            },
            {
                description: "Mid-infrared.",
                correct: true
            },
            {
                description: "Far and near infrared.",
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
                description: "NASA Administrator.",  //James Webb Space Telescope is named after James E. Webb. He was the administrator of NASA from 1961 to 1968 during the Mercury, Gemini and Apollo Programs.
                correct: true
            },
        ]
    },

    {
        id: 19,
        question: "How far JWST is located from the earth?",
        imgName: "NAME.png",
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