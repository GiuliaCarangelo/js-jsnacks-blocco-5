// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// Infine stampa separatamente i 3 array.




// Crea un array composto da 10 automobili.
const carsArray= [
    {
        "brand": "Fiat",
        "model": "A1",
        "fuel": "benzina"
    },
    {
        "brand": "Mercedes",
        "model": "B3",
        "fuel": "diesel"
    },

    {
        "brand": "Mercedes",
        "model": "B2",
        "fuel": "GPL"
    },

    {
        "brand": "Opel",
        "model": "Zafira",
        "fuel": "elettrico"
    },

    {
        "brand":
        "model":
        "fuel": "metano"
    },

    {
        "brand":
        "model":
        "fuel": "GPL"
    },

    {
        "brand":
        "model":
        "fuel": "benzina"
    },

    {
        "brand":
        "model":
        "fuel": "metano"
    },

    {
        "brand":
        "model":
        "fuel": "GPL"
    },

    {
        "brand":
        "model":
        "fuel": "benzina"
    }
]

// USARE FILTER DENTRO MAP ??? (chiedere)


const fuelType = carsArray.map("fuel", "benzina");

console.log(fuelType);