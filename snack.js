const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

// SNACK 1
// const longBooks = books.filter(book => book.pages > 300)
// console.log(longBooks)

// const longBooksTitles = longBooks.map(book => book.title)
// console.log(longBooksTitles)

// SNACK 2
// const availableBooks = books.filter(book => book.available === true)
// console.log(availableBooks)

// const discountedBooks = availableBooks.map((book) => {
//     return { ...book, price: `${parseFloat(book.price) - (parseFloat(book.price) * 20 / 100)}€` }
// })
// console.log(discountedBooks)

// const fullPricedBook = discountedBooks.find((book) => {
//     return Number.isInteger(parseFloat(book.price))

// })
// console.log(fullPricedBook)

// SNACK 3
// const authors = books.map((book) => {
//     return structuredClone(book.author)
// })
// console.log("Autori", authors)

// const areAuthorsAdults = authors.every((a) => { a.age > 18 })
// console.log(areAuthorsAdults)

// authors.sort((a, b) => {
//     if (areAuthorsAdults) {
//         return a.age - b.age
//     }
//     else {
//         return b.age - a.age
//     }
// })

// console.log("Autori ordinati", authors)

// SNACK 3.2
// const ages = books.map((book) => {
//     return structuredClone(book.author.age)
// })
// console.log(ages)

// const agesSum = ages.reduce((acc, curr) => {
//     return acc + curr
// }, 0)
// console.log(agesSum)

// const averageAge = agesSum / ages.length
// console.log(averageAge)

// SNAKC 5
// async function getObj(url) {
//     const response = await fetch(url)
//     const obj = await response.json()
//     return obj
// }

// async function getBooks() {
//     try {
//         const ids = [2, 13, 7, 21, 19]
//         const booksPromises = ids.map((id) => {
//             return getObj(`http://localhost:3333/books/${id}`)
//         })
//         const books = await Promise.all(booksPromises)
//         return books
//     }
//     catch (error) {
//         throw new Error(`Errore nel recuperare i libri ${error.message}`)
//     }

// }

// (async () => {
//     try {
//         const books = await getBooks()
//         console.log("books", books)
//     }
//     catch (error) {
//         console.error(error)
//     }
// })()

// SNACK 6
const areThereAvailableBooks = books.some(book => book.available === true)
console.log(areThereAvailableBooks)

const booksByPrice = books.sort((a, b) => {
    let c = parseFloat(a.price)
    let d = parseFloat(b.price)
    return c - d
})
console.log("Books by price", booksByPrice)

booksByPrice.sort((a, b) => {
    return (a.available ? 0 : 1) - (b.available ? 0 : 1)
})

console.log(booksByPrice)