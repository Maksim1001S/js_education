// Ex1

for (let i = 0; i < 11; i++) {
    if (i == 0) {
        console.log(i + " - ноль");
    } else if (i % 2 == 0) {
        console.log(i + " - нечетное число");
    } else if (i % 2 == 1) {
        console.log(i + " - четное число");
    }
}


// Ex2
const post = {

    author: "John", //вывести этот текст

    postId: 23,

    comments: [

        {

            userId: 10,

            userName: "Alex",

            text: "lorem ipsum",

            rating: {

                likes: 10,

                dislikes: 2 //вывести это число

            }

        },

        {

            userId: 5, //вывести это число

            userName: "Jane",

            text: "lorem ipsum 2", //вывести этот текст

            rating: {

                likes: 3,

                dislikes: 1

            }

        },

    ]

};


console.log(post.author)
console.log(post.comments[0].rating.dislikes)
console.log(post.comments[1].userId)
console.log(post.comments[1].text)


// Ex3
const products = [

    {

        id: 3,

        price: 200,

    },

    {

        id: 4,

        price: 900,

    },

    {

        id: 1,

        price: 1000,

    },

];


products.forEach(sale => { sale.price *= 0.85 });

console.log(products);


// Ex4
const productses = [

    {

        id: 3,

        price: 127,

        photos: [

            "1.jpg",

            "2.jpg",

        ]

    },

    {

        id: 5,

        price: 499,

        photos: []

    },

    {

        id: 10,

        price: 26,

        photos: [

            "3.jpg"

        ]

    },

    {

        id: 8,

        price: 78,

    },

];


const filterPhotos = productses.filter(client => "photos" in client && client.photos.length > 0);
console.log(filterPhotos);


// Ex6
let b = "x"

for (let i = "x"; i.length <= 20; i = i + "x") {
    console.log(i);
}