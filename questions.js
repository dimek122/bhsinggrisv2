const questions = [
    // Tenses & Grammar (20 Soal)
    {
        question: "What is the simple past tense of the verb 'go'?",
        options: ["went", "gone", "goed", "going"],
        answer: "went"
    },
    {
        question: "She ... her homework when I called her.",
        options: ["is doing", "was doing", "does", "did"],
        answer: "was doing"
    },
    {
        question: "I have ... that movie before.",
        options: ["seen", "saw", "see", "seeing"],
        answer: "seen"
    },
    {
        question: "They ... to Jakarta tomorrow.",
        options: ["will go", "go", "went", "going"],
        answer: "will go"
    },
    {
        question: "The sun ... in the east.",
        options: ["rises", "is rising", "rose", "has risen"],
        answer: "rises"
    },
    {
        question: "By the time we arrived, the show ... already started.",
        options: ["has", "had", "will have", "is"],
        answer: "had"
    },
    {
        question: "He ... a letter every day.",
        options: ["writes", "is writing", "wrote", "will write"],
        answer: "writes"
    },
    {
        question: "We ... dinner at 7 p.m. last night.",
        options: ["eat", "ate", "are eating", "have eaten"],
        answer: "ate"
    },
    {
        question: "The baby ... for two hours now.",
        options: ["cries", "is crying", "cried", "has been crying"],
        answer: "has been crying"
    },
    {
        question: "I ... my wallet yesterday.",
        options: ["lose", "lost", "have lost", "am losing"],
        answer: "lost"
    },
    {
        question: "They ... to the new cafe yet.",
        options: ["haven't been", "didn't go", "won't go", "aren't going"],
        answer: "haven't been"
    },
    {
        question: "I will call you when I ... home.",
        options: ["arrive", "arrived", "will arrive", "am arriving"],
        answer: "arrive"
    },
    {
        question: "The teacher asked the students if they ... the homework.",
        options: ["do", "did", "have done", "had done"],
        answer: "had done"
    },
    {
        question: "She ... a book for a week.",
        options: ["reads", "is reading", "has read", "has been reading"],
        answer: "has been reading"
    },
    {
        question: "He ... in this company since 2010.",
        options: ["works", "is working", "worked", "has worked"],
        answer: "has worked"
    },
    {
        question: "The cat ... on the sofa at the moment.",
        options: ["sleeps", "is sleeping", "slept", "has slept"],
        answer: "is sleeping"
    },
    {
        question: "By next year, I ... my degree.",
        options: ["will finish", "will have finished", "finish", "finished"],
        answer: "will have finished"
    },
    {
        question: "She ... TV when the power went out.",
        options: ["watched", "was watching", "watches", "is watching"],
        answer: "was watching"
    },
    {
        question: "My father ... his car now.",
        options: ["washes", "is washing", "washed", "has washed"],
        answer: "is washing"
    },
    {
        question: "The train ... at 9 a.m. every day.",
        options: ["leaves", "is leaving", "left", "has left"],
        answer: "leaves"
    },

    // Passive Voice (10 Soal)
    {
        question: "The car was fixed by my brother. This sentence is in ... voice.",
        options: ["active", "passive", "present", "future"],
        answer: "passive"
    },
    {
        question: "The book ... by a famous author.",
        options: ["writes", "is written", "wrote", "was writing"],
        answer: "is written"
    },
    {
        question: "A new stadium ... next year.",
        options: ["will be built", "is built", "was built", "is building"],
        answer: "will be built"
    },
    {
        question: "The students ... by the teacher.",
        options: ["are teaching", "are taught", "teach", "taught"],
        answer: "are taught"
    },
    {
        question: "The letter ... yesterday.",
        options: ["is sent", "was sent", "has sent", "sends"],
        answer: "was sent"
    },
    {
        question: "The cake ... by my mom.",
        options: ["is made", "made", "makes", "is making"],
        answer: "is made"
    },
    {
        question: "Many diseases ... by mosquitos.",
        options: ["are caused", "cause", "are causing", "caused"],
        answer: "are caused"
    },
    {
        question: "The house ... since 2015.",
        options: ["has been sold", "is sold", "was sold", "sold"],
        answer: "has been sold"
    },
    {
        question: "The floor ... right now.",
        options: ["is cleaned", "is being cleaned", "was cleaned", "cleans"],
        answer: "is being cleaned"
    },
    {
        question: "The report ... by the manager.",
        options: ["is reviewed", "reviews", "has been reviewed", "was reviewing"],
        answer: "has been reviewed"
    },

    // Conditional Sentences (10 Soal)
    {
        question: "If it rains, we ... the trip.",
        options: ["will cancel", "cancel", "cancelled", "would cancel"],
        answer: "will cancel"
    },
    {
        question: "If I had more money, I ... a new car.",
        options: ["would buy", "will buy", "buy", "bought"],
        answer: "would buy"
    },
    {
        question: "If I had studied harder, I ... passed the exam.",
        options: ["would have", "will have", "would have been", "would have been"],
        answer: "would have"
    },
    {
        question: "You ... get sick if you don't eat.",
        options: ["will", "would", "can", "should"],
        answer: "will"
    },
    {
        question: "If she ... here, she would help us.",
        options: ["is", "were", "was", "be"],
        answer: "were"
    },
    {
        question: "They would have won if they ... harder.",
        options: ["train", "trained", "had trained", "have trained"],
        answer: "had trained"
    },
    {
        question: "If you heat water, it ... at 100°C.",
        options: ["boils", "will boil", "is boiling", "boiled"],
        answer: "boils"
    },
    {
        question: "If I ... a bird, I would fly.",
        options: ["was", "were", "am", "have been"],
        answer: "were"
    },
    {
        question: "I ... if I get lost.",
        options: ["will ask", "would ask", "would have asked", "ask"],
        answer: "will ask"
    },
    {
        question: "If you had told me, I ... have come.",
        options: ["will", "would", "can", "would have"],
        answer: "would have"
    },

    // Report Text & Descriptive Text (10 Soal)
    {
        question: "The purpose of a descriptive text is to ...",
        options: ["tell a story", "describe a particular person, place, or thing", "report an event", "give instructions"],
        answer: "describe a particular person, place, or thing"
    },
    {
        question: "A report text usually describes a subject in a ... way.",
        options: ["specific", "general", "fictional", "emotional"],
        answer: "general"
    },
    {
        question: "Which of the following is a characteristic of a descriptive text?",
        options: ["Use of simple past tense", "Use of specific nouns and adjectives", "General information", "Focus on a sequence of events"],
        answer: "Use of specific nouns and adjectives"
    },
    {
        question: "The generic structure of a report text is ...",
        options: ["Orientation and Complication", "Goal and Steps", "General Classification and Description", "General Statement and Explanation"],
        answer: "General Classification and Description"
    },
    {
        question: "What is the social function of a report text?",
        options: ["To entertain the reader", "To inform the reader about a subject", "To persuade the reader", "To tell a past event"],
        answer: "To inform the reader about a subject"
    },
    {
        question: "The main focus of a descriptive text is on ...",
        options: ["a specific thing", "a general category", "a series of actions", "the author's opinion"],
        answer: "a specific thing"
    },
    {
        question: "Lions are large, carnivorous cats. This sentence is likely from a ... text.",
        options: ["narrative", "descriptive", "report", "procedure"],
        answer: "report"
    },
    {
        question: "My house is small but cozy. This is an example of a sentence from a ... text.",
        options: ["report", "descriptive", "narrative", "recount"],
        answer: "descriptive"
    },
    {
        question: "Report text uses ... tense.",
        options: ["present simple", "past simple", "future simple", "present continuous"],
        answer: "present simple"
    },
    {
        question: "What does the description part of a report text contain?",
        options: ["Details about the sub-topics", "The conclusion of the text", "A general statement about the subject", "The setting of the story"],
        answer: "Details about the sub-topics"
    },

    // Expressions & Dialogues (10 Soal)
    {
        question: "A: 'Could you help me with this box?' B: '...'",
        options: ["I'm sorry, I can't.", "Yes, I am.", "You're welcome.", "It's a box."],
        answer: "I'm sorry, I can't."
    },
    {
        question: "Which expression is used for asking for an opinion?",
        options: ["I think so.", "What do you think?", "I don't agree.", "You're right."],
        answer: "What do you think?"
    },
    {
        question: "A: 'What do you think of my new dress?' B: '...'",
        options: ["I don't think so.", "I don't know.", "It's beautiful!", "You're wearing it."],
        answer: "It's beautiful!"
    },
    {
        question: "Which one is an expression of agreement?",
        options: ["I don't think so.", "That's not right.", "I couldn't agree more.", "I'm not sure."],
        answer: "I couldn't agree more."
    },
    {
        question: "A: 'I'm tired.' B: '...'",
        options: ["Let's go home.", "You are tired.", "I am also.", "I am not."],
        answer: "Let's go home."
    },
    {
        question: "The following is a greeting expression, except...",
        options: ["How do you do?", "Nice to meet you.", "See you later.", "How are you doing?"],
        answer: "See you later."
    },
    {
        question: "A: 'Excuse me, where is the library?' B: '...'",
        options: ["It's on your left.", "I'm busy.", "What's the time?", "I don't know."],
        answer: "It's on your left."
    },
    {
        question: "Which expression is used to give a suggestion?",
        options: ["I think you should...", "What a great idea!", "I don't understand.", "Tell me more."],
        answer: "I think you should..."
    },
    {
        question: "A: 'Thank you for your help.' B: '...'",
        options: ["You're welcome.", "You're right.", "I'm sorry.", "That's okay."],
        answer: "You're welcome."
    },
    {
        question: "A: 'Would you like some tea?' B: '...'",
        options: ["Yes, please.", "I'm not.", "I don't.", "Yes, I do."],
        answer: "Yes, please."
    },

    // Conjunctions & Modals (10 Soal)
    {
        question: "I can't go to the party ... I am sick.",
        options: ["so", "but", "because", "and"],
        answer: "because"
    },
    {
        question: "She is smart, ... she is lazy.",
        options: ["and", "or", "but", "so"],
        answer: "but"
    },
    {
        question: "You ... finish your work before you go home.",
        options: ["can", "may", "must", "might"],
        answer: "must"
    },
    {
        question: "I have to leave now, ... I will be late.",
        options: ["and", "or", "so", "but"],
        answer: "or"
    },
    {
        question: "You ... bring your own bottle to school.",
        options: ["should", "could", "would", "might"],
        answer: "should"
    },
    {
        question: "He didn't study hard, ... he failed the test.",
        options: ["but", "so", "because", "or"],
        answer: "so"
    },
    {
        question: "We can go to the cinema ... to the beach.",
        options: ["and", "or", "but", "so"],
        answer: "or"
    },
    {
        question: "She ... speak three languages.",
        options: ["should", "can", "must", "might"],
        answer: "can"
    },
    {
        question: "He didn't call me, ... I'm worried.",
        options: ["and", "but", "so", "because"],
        answer: "so"
    },
    {
        question: "It ... rain later. I'll bring an umbrella.",
        options: ["should", "must", "might", "can"],
        answer: "might"
    },

    // Soal Tambahan (40 Soal)
    // Vocabulary, Labels, Expressions, etc.
    {
        question: "The synonym of 'beautiful' is...",
        options: ["ugly", "pretty", "sad", "bad"],
        answer: "pretty"
    },
    {
        question: "The opposite of 'strong' is...",
        options: ["weak", "big", "hard", "soft"],
        answer: "weak"
    },
    {
        question: "What is the purpose of a food label?",
        options: ["To tell a story", "To give information about a product", "To sell a product", "To give an opinion"],
        answer: "To give information about a product"
    },
    {
        question: "The 'Expiration Date' on a label tells you...",
        options: ["the price", "when the product was made", "when the product is no longer safe to use", "the ingredients"],
        answer: "when the product is no longer safe to use"
    },
    {
        question: "What does 'Net Weight' mean on a label?",
        options: ["The weight of the product and its packaging", "The weight of the product without its packaging", "The price per kilogram", "The size of the product"],
        answer: "The weight of the product without its packaging"
    },
    {
        question: "She is a ... singer. Her voice is so good.",
        options: ["terrible", "bad", "amazing", "poor"],
        answer: "amazing"
    },
    {
        question: "The synonym of 'happy' is...",
        options: ["sad", "glad", "mad", "angry"],
        answer: "glad"
    },
    {
        question: "The opposite of 'early' is...",
        options: ["late", "fast", "soon", "slow"],
        answer: "late"
    },
    {
        question: "A: 'Congratulations on your graduation!' B: '...'",
        options: ["Thank you!", "I'm sorry.", "It's nothing.", "That's okay."],
        answer: "Thank you!"
    },
    {
        question: "A: 'What's the weather like today?' B: '...'",
        options: ["It's windy.", "It's 10 a.m.", "It's a good day.", "It's raining outside."],
        answer: "It's raining outside."
    },
    {
        question: "The capital city of Indonesia is...",
        options: ["Bandung", "Surabaya", "Jakarta", "Medan"],
        answer: "Jakarta"
    },
    {
        question: "A 'Recount Text' tells about...",
        options: ["a future event", "a past experience", "a fact", "a scientific process"],
        answer: "a past experience"
    },
    {
        question: "The purpose of a 'Narrative Text' is to...",
        options: ["inform the reader", "persuade the reader", "tell a story with a complication", "describe a place"],
        answer: "tell a story with a complication"
    },
    {
        question: "He said, 'I am happy.' This is an example of...",
        options: ["direct speech", "indirect speech", "narrative text", "recount text"],
        answer: "direct speech"
    },
    {
        question: "He said that he was happy. This is an example of...",
        options: ["direct speech", "indirect speech", "report text", "descriptive text"],
        answer: "indirect speech"
    },
    {
        question: "The generic structure of a 'Narrative Text' is...",
        options: ["Orientation, Complication, Resolution", "Goal, Materials, Steps", "General Classification, Description", "Introduction, Body, Conclusion"],
        answer: "Orientation, Complication, Resolution"
    },
    {
        question: "What is the purpose of a 'Procedure Text'?",
        options: ["To tell a story", "To inform about a product", "To tell how to do something", "To describe a place"],
        answer: "To tell how to do something"
    },
    {
        question: "The 'Steps' part of a 'Procedure Text' contains...",
        options: ["the goal", "the ingredients", "the list of actions", "the conclusion"],
        answer: "the list of actions"
    },
    {
        question: "Which of the following is a transition word for a procedure text?",
        options: ["Finally", "Suddenly", "However", "Because"],
        answer: "Finally"
    },
    {
        question: "The synonym of 'difficult' is...",
        options: ["easy", "hard", "simple", "fast"],
        answer: "hard"
    },
    {
        question: "The opposite of 'noisy' is...",
        options: ["loud", "quiet", "crowded", "empty"],
        answer: "quiet"
    },
    {
        question: "A: 'Can you speak English?' B: '...'",
        options: ["Yes, I can.", "Yes, I am.", "Yes, I do.", "Yes, I have."],
        answer: "Yes, I can."
    },
    {
        question: "I like reading books ... watching movies.",
        options: ["and", "or", "but", "so"],
        answer: "and"
    },
    {
        question: "Which one is a question tag?",
        options: ["Do you?", "Don't you?", "You don't, do you?", "You don't."],
        answer: "You don't, do you?"
    },
    {
        question: "He is rich, ... he is not happy.",
        options: ["so", "but", "because", "and"],
        answer: "but"
    },
    {
        question: "A: 'I apologize for being late.' B: '...'",
        options: ["You're welcome.", "No problem.", "I'm sorry.", "It's nothing."],
        answer: "No problem."
    },
    {
        question: "A: 'What time is it?' B: '...'",
        options: ["It's 10 a.m.", "It's raining.", "It's Monday.", "It's cold."],
        answer: "It's 10 a.m."
    },
    {
        question: "The synonym of 'huge' is...",
        options: ["small", "tiny", "enormous", "little"],
        answer: "enormous"
    },
    {
        question: "The opposite of 'full' is...",
        options: ["empty", "big", "heavy", "light"],
        answer: "empty"
    },
    {
        question: "A: 'I am not feeling well.' B: '...'",
        options: ["I'm sorry to hear that.", "I am well.", "I am also not well.", "That's okay."],
        answer: "I'm sorry to hear that."
    },
    {
        question: "What is the purpose of a 'Recount Text'?",
        options: ["To inform", "To entertain", "To persuade", "To describe"],
        answer: "To inform"
    },
    {
        question: "The generic structure of a 'Recount Text' is...",
        options: ["Orientation, Events, Re-orientation", "General Classification, Description", "Goal, Materials, Steps", "Orientation, Complication, Resolution"],
        answer: "Orientation, Events, Re-orientation"
    },
    {
        question: "She ... play the piano when she was five.",
        options: ["can", "could", "should", "will"],
        answer: "could"
    },
    {
        question: "The synonym of 'brave' is...",
        options: ["coward", "afraid", "courageous", "shy"],
        answer: "courageous"
    },
    {
        question: "The opposite of 'polite' is...",
        options: ["kind", "rude", "friendly", "nice"],
        answer: "rude"
    },
    {
        question: "A: 'How was your weekend?' B: '...'",
        options: ["It was great!", "It is a weekend.", "I am good.", "I went home."],
        answer: "It was great!"
    },
    {
        question: "The 'Ingredients' part of a 'Procedure Text' contains...",
        options: ["the goal", "the materials needed", "the steps", "the conclusion"],
        answer: "the materials needed"
    },
    {
        question: "Which of the following is a characteristic of a 'Recount Text'?",
        options: ["Uses future tense", "Focuses on a general subject", "Tells a past experience", "Gives instructions"],
        answer: "Tells a past experience"
    },
    {
        question: "A: 'What's wrong?' B: '...'",
        options: ["Nothing, I'm fine.", "It's a sunny day.", "I'm not wrong.", "Everything is wrong."],
        answer: "Nothing, I'm fine."
    },
    {
        question: "The synonym of 'clever' is...",
        options: ["stupid", "smart", "silly", "slow"],
        answer: "smart"
    },
    {
        question: "The opposite of 'thin' is...",
        options: ["slim", "fat", "short", "tall"],
        answer: "fat"
    },
    {
        question: "A: 'What do you do for a living?' B: '...'",
        options: ["I'm a student.", "I'm living here.", "I'm doing my homework.", "I'm working."],
        answer: "I'm a student."
    },
    {
        question: "The 'Introduction' of a 'Report Text' is called...",
        options: ["General Classification", "Description", "Orientation", "Goal"],
        answer: "General Classification"
    },
    {
        question: "Which one is an expression of obligation?",
        options: ["You must not...", "You can...", "You might...", "You could..."],
        answer: "You must not..."
    },
    {
        question: "The synonym of 'sad' is...",
        options: ["happy", "unhappy", "glad", "joyful"],
        answer: "unhappy"
    },
    {
        question: "The opposite of 'fast' is...",
        options: ["quick", "slow", "rapid", "soon"],
        answer: "slow"
    },
    {
        question: "A: 'Nice to meet you!' B: '...'",
        options: ["Nice to meet you, too.", "Thank you.", "I'm fine.", "I'm good."],
        answer: "Nice to meet you, too."
    },
    {
        question: "A: 'How long have you been here?' B: '...'",
        options: ["For two hours.", "Two hours ago.", "Next week.", "Yesterday."],
        answer: "For two hours."
    },
    {
        question: "The synonym of 'calm' is...",
        options: ["angry", "nervous", "peaceful", "loud"],
        answer: "peaceful"
    },
    {
        question: "The opposite of 'wet' is...",
        options: ["dry", "moist", "damp", "watery"],
        answer: "dry"
    },
    {
        question: "A: 'Do you mind if I open the window?' B: '...'",
        options: ["No, not at all.", "Yes, I do.", "I'm fine.", "I like it."],
        answer: "No, not at all."
    },
    {
        question: "A: 'I'm starving!' B: '...'",
        options: ["Let's get some food.", "I'm not hungry.", "That's good.", "I'm thirsty."],
        answer: "Let's get some food."
    },
    {
        question: "Which of the following is a common expression of sympathy?",
        options: ["I'm so happy!", "I'm so sorry to hear that.", "I'm excited!", "That's great!"],
        answer: "I'm so sorry to hear that."
    },
    {
        question: "The opposite of 'clean' is...",
        options: ["dirty", "neat", "tidy", "pure"],
        answer: "dirty"
    },
    {
        question: "The synonym of 'big' is...",
        options: ["small", "large", "tiny", "little"],
        answer: "large"
    },
    {
        question: "The opposite of 'heavy' is...",
        options: ["light", "big", "strong", "weak"],
        answer: "light"
    },
    {
        question: "A: 'Can you please lend me your pen?' B: '...'",
        options: ["Of course!", "I don't have it.", "I'm not a pen.", "That's a pen."],
        answer: "Of course!"
    },
    {
        question: "A: 'Where were you yesterday?' B: '...'",
        options: ["I'm at home.", "I was at home.", "I will be at home.", "I am home."],
        answer: "I was at home."
    },
    {
        question: "The correct passive form of 'The boy eats an apple' is...",
        options: ["An apple is eaten by the boy.", "An apple was eaten by the boy.", "An apple ate the boy.", "An apple is eating the boy."],
        answer: "An apple is eaten by the boy."
    },
    {
        question: "The synonym of 'thin' is...",
        options: ["slim", "fat", "short", "tall"],
        answer: "slim"
    },
    {
        question: "The opposite of 'safe' is...",
        options: ["dangerous", "secure", "protected", "fine"],
        answer: "dangerous"
    },
    {
        question: "A: 'Do you know how to get to the station?' B: '...'",
        options: ["Yes, I do.", "Yes, I know.", "Yes, I am.", "Yes, I have."],
        answer: "Yes, I do."
    },
    {
        question: "She ... speak Spanish when she was a child.",
        options: ["can", "could", "must", "will"],
        answer: "could"
    },
    {
        question: "The synonym of 'easy' is...",
        options: ["hard", "simple", "difficult", "tough"],
        answer: "simple"
    },
    {
        question: "The opposite of 'empty' is...",
        options: ["full", "hollow", "clear", "open"],
        answer: "full"
    },
    {
        question: "A: 'I'm so sorry.' B: '...'",
        options: ["Thank you.", "That's okay.", "You're welcome.", "You're fine."],
        answer: "That's okay."
    },
    {
        question: "We ... to the movies last night.",
        options: ["go", "went", "have gone", "will go"],
        answer: "went"
    },
    {
        question: "She ... her teeth right now.",
        options: ["brushes", "is brushing", "brushed", "has brushed"],
        answer: "is brushing"
    },
    {
        question: "The synonym of 'angry' is...",
        options: ["happy", "sad", "furious", "calm"],
        answer: "furious"
    },
    {
        question: "The opposite of 'fast' is...",
        options: ["quick", "slow", "rapid", "soon"],
        answer: "slow"
    },
    {
        question: "A: 'Can I borrow your book?' B: '...'",
        options: ["No, you can't.", "Yes, you can.", "Yes, I can.", "No, I can't."],
        answer: "Yes, you can."
    },
    {
        question: "You ... wear a helmet when riding a bicycle.",
        options: ["might", "can", "should", "could"],
        answer: "should"
    },
    {
        question: "A: 'How do you feel?' B: '...'",
        options: ["I feel good.", "I feel well.", "I am good.", "I am well."],
        answer: "I feel good."
    },
    {
        question: "The synonym of 'smart' is...",
        options: ["stupid", "clever", "silly", "dumb"],
        answer: "clever"
    },
    {
        question: "The opposite of 'young' is...",
        options: ["old", "new", "fresh", "little"],
        answer: "old"
    },
    {
        question: "I ... dinner by the time you arrive.",
        options: ["will cook", "will have cooked", "cook", "cooked"],
        answer: "will have cooked"
    },
    {
        question: "The letter ... by me.",
        options: ["is write", "is written", "wrote", "will write"],
        answer: "is written"
    },
    {
        question: "A: 'What's your plan for the weekend?' B: '...'",
        options: ["I'm going to visit my grandparents.", "I went to the beach.", "I am visiting my grandparents.", "I will visit my grandparents."],
        answer: "I'm going to visit my grandparents."
    },
    {
        question: "The synonym of 'large' is...",
        options: ["small", "big", "tiny", "little"],
        answer: "big"
    },
    {
        question: "The opposite of 'long' is...",
        options: ["short", "tall", "wide", "narrow"],
        answer: "short"
    },
    {
        question: "He ... a famous singer in 2015.",
        options: ["becomes", "is becoming", "became", "has become"],
        answer: "became"
    }
];