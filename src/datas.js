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
        amount: 123,
        status: 'Declined',
        img: 'images/Mohamad-fallah.jpg',
    },
    {
        id: 2,
        customer: 'AmirMohammad',
        date: '1 Feb 2024',
        amount: 123,
        status: 'Pending',
        img: 'images/download (1).webp',
    },
    {
        id: 3,
        customer: 'MehdiKhosroparast',
        date: '22 May 2024',
        amount: 123,
        status: 'Approved',
        img: 'images/download (2).webp',
    },
    {
        id: 4,
        customer: 'MohammadAmin',
        date: '1 June 2024',
        amount: 123,
        status: 'Pending',
        img: 'images/download.webp',
    },
]

export {xAxisData , newMembers, Transactions};
