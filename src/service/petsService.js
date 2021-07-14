async function getAll (category) {
    try {
        let query = '';
        if(category === 'all') {
            query = '';
        }
        if(category === 'cats') {
            query = '?category=Cat';
        }
        if(category === 'dogs') {
            query = '?category=Dog';
        }
        if(category === 'parrots') {
            query = '?category=Parrot';
        }
        if(category === 'reptiles') {
            query = '?category=Reptile';
        }
        if(category === 'other' ) {
            query = '?category=Other';

        }
        const res = await fetch(`http://localhost:5000/pets${query}`);
        return res.json();
    } catch (err) {
        console.error(err);
    }
}

async function getOne (id) {
    try {
        const res = await fetch(`http://localhost:5000/pets/${id}`);
        return res.json();
    } catch(err) {
        console.error(err);
    }
}

export {
    getAll,
    getOne
};