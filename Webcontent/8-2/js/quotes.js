const quotes = [
    {
        quotes: "With Great Power comes great responsibility.",
        author: "Ben Parker",
    },
    {
        quotes: "Sometimes you gotta run before you walk.",
        author: "Tony Stark",
    },
    {
        quotes: "Cowards never start. the weak never finish and the winners never quit.",
        author: "Tony Stark",
    },
    {
        quotes: "I Can Do This All Day",
        author: "Steve Rogers",
    },
    {
        quotes: "If you're nothing without the suit, you shouldn't have it",
        author: "Tony Stark",
    },
    {
        quotes: "All learning has an emotional base",
        author: "Plato",
    },
    {
        quotes: "Who questions much, shall learn much, and retain much",
        author: "Francis Bacon",
    },
    {
        quotes: "The beautiful thing about learning is that no one can take it away from you",
        author: "B.B.King",
    },
    {
        quotes: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
        author: "Lowell Bennion",
    },
    {
        quotes: "Never too old to learn",
        author: "Isaac Asimov"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quotes;
author.innerText = todayQuote.author;