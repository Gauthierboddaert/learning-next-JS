import { AxiosResponse } from 'axios';
import axios  from '../../axios';

const getCategories = async () => {
    return await axios.get('/categories').then(
        response => response.data
    );
}

export default getCategories;