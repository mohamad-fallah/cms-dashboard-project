let xAxisData = [
    {
        "Name": "Jan",
        "Sale": 112_000,
    },
    {
        "Name": "Feb",
        "Sale": 99_000,
    },
    {
        "Name": "Mar",
        "Sale": 12_090,
    },
    {
        "Name": "Apr",
        "Sale": 99_000,
    },
    {
        "Name": "May",
        "Sale": 54_000,
    },
    {
        "Name": "Jun",
        "Sale": 85_000,
    },
    {
        "Name": "Jul",
        "Sale": 34_000,
    },
    {
        "Name": "Agu",
        "Sale": 18_598,
    },
    {
        "Name": "Sep",
        "Sale": 0,
    },
    {
        "Name": "Oct",
        "Sale": 73_078,
    },
    {
        "Name": "Nov",
        "Sale": 12_900,
    },
    {
        "Name": "Des",
        "Sale": 97_000,
    }
];

const newMembers = [
    {
        id: 1,
        username: 'MohammadReza',
        title: 'Web Developer',
        img: 'images/Mohamad-fallah.jpg'
    },
    {
        id: 2,
        username: 'AmirMohammad',
        title: 'Graphic Designer',
        img: 'images/download (1).webp'
    },
    {
        id: 3,
        username: 'MehdiKhosroparast',
        title: 'Acconting',
        img: 'images/download (2).webp'
    },
    {
        id: 4,
        username: 'MohammadAmin',
        title: 'Full Stack',
        img: 'images/download.webp'
    },
] 

const Transactions = [
    {
        id: 1,
        customer: 'MohammadReza',
        date: '12 June 2024',
        amount: '$45',
        status: 'Declined',
        img: 'images/Mohamad-fallah.jpg',
    },
    {
        id: 2,
        customer: 'AmirMohammad',
        date: '1 Feb 2024',
        amount: '$3120',
        status: 'Pending',
        img: 'images/download (1).webp',
    },
    {
        id: 3,
        customer: 'MehdiKhosroparast',
        date: '22 May 2024',
        amount: '$1240',
        status: 'Approved',
        img: 'images/download (2).webp',
    },
    {
        id: 4,
        customer: 'MohammadAmin',
        date: '1 June 2024',
        amount: '$120',
        status: 'Pending',
        img: 'images/download.webp',
    },
]

let userRow = [
    {
        id: 1,
        username: 'Mohammad Falalh',
        avatar: "images/Mohamad-fallah.jpg",
        status: "active",
        transactions: '$129.34',
        email: 'mfallahfaal@gmail.com'
    },
    {
        id: 2,
        username: 'Mohammad Mohammadi',
        avatar: "images/download (1).webp",
        status: "active",
        transactions: '$110',
        email: 'lorem@gmail.com'
    },
    {
        id: 3,
        username: 'Amir Jalilvand',
        avatar: "images/download (2).webp",
        status: "active",
        transactions: '$0',
        email: 'test@gmail.com'
    },
    {
        id: 4,
        username: 'Mehdi zarriz',
        avatar: "images/download.webp",
        status: "active",
        transactions: '$105',
        email: 'test2@gmail.com'
    },
]

let product = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'images/21.webp',
        price: '$890'
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'images/212.webp',
        price: '$1230'
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'images/3232.webp',
        price: '$1600'
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'images/3323.webp',
        price: '$450'
    },
]

const productsData = [
    {
        Name: "Jan",
        sales: 7050,
    },
    {
        Name: "Feb",
        sales: 580,
    },
    {
        Name: "Mur",
        sales: 5_000,
    },
]

export {
    xAxisData ,
    newMembers,
    Transactions,
    userRow,
    product,
    productsData,
};
