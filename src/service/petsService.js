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

async function create (name, description, imageURL, category) {
    let body = JSON.stringify({name, description, imageURL, category, likes: 0});
    try {
        return fetch('http://localhost:5000/pets',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body
        });
        
    } catch(err) {
        console.error(err);
    }
}

async function update (pet) {
    let body = JSON.stringify(pet);
    try {
        return fetch(`http://localhost:5000/pets/${pet.id}`,
        {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body
        });
        
    } catch(err) {
        console.error(err);
    }
}

export {
    getAll,
    getOne,
    create,
    update
};