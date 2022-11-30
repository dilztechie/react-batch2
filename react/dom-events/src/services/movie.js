const movies = {
    bollywood: {
        title: 'Drishyam 2',
        year: 2022,
        stars: 'Ajay Devgn, Tabu, Akshaye Khanna, Shriya Saran',
        language: 'Hindi'
    },
    sandalwood: {
        title: 'Kantara',
        year: 2022,
        stars: 'Rishab Shetty, Kishore Kumar, Achyuth Kumar, Sapthami Gowda',
        language: 'Kannada'
    },
    tollywood: {
        title: 'Sita Ramam',
        year: 2022,
        stars: 'Dulquer Salmaan, Mrunal Thakur, Rashmika Madanna',
        language: 'Telugu'
    },
    kollywood: {
        title: 'Kumari',
        year: 2022,
        stars: 'Aishwarya, Swasika, Surabhi',
        language: 'Tamil'
    }
}

export default function getMovieInformation(type) {
    return new Promise((resolve) => {
        resolve(movies[type])
    })
}