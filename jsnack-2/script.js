// Crea un array di oggetti che rappresentino delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const people = [
    {
        "firstName": "Giulio", 
        "lastName": "Rossi",
        "age": "15"
    },
    
    {
        "firstName": "Alessia", 
        "lastName": "Bianchi",
        "age": "13"
    },

    {
        "firstName": "Luigi", 
        "lastName": "Verdi",
        "age": "18"
    },

    {
        "firstName": "Giulia", 
        "lastName": "Rossi",
        "age": "23"
    },

    {
        "firstName": "Sara", 
        "lastName": "Napoli",
        "age": "30"
    }
]

const legalAge = people.map({driver}) => { return driver }