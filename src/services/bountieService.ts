import Constants from '../constants';

export default async () => {
    try {
        const response = await fetch(Constants.API_ENDPOINT);
        return await response.json();
        
    } catch (error) {
        console.error(error);
    }
};