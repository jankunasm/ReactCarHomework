let token = `tbd`

export const server_calls = {
    get: async () => {
        const response = await fetch(`http://127.0.0.1:5000/api/cars` , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data Noob')
        }
        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Beaarer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to Create a new Car on Server')
        }
        return await response.json()
    },
    update: async (id: string, data: any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/cars`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Beaarer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to Update a new Car on Server')
        }
        return await response.json()
    },
    delete: async (id: string) => {
        const response = await fetch(`http://127.0.0.1:5000/api/cars`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Beaarer ${token}`
            },
        });
        if(!response.ok){
            throw new Error('Failed to Delete a new Car on Server')
        }
        return await response.json()
    }
}