import axios from 'axios';
import { API_KEY } from './secrets';

const BASE_URL = 'https://textbelt.com/text'

const sendText = async (phone, ownerName, petName) => {
    const phoneStripped = phone.replace('-', '').replace('-', '')
    try {
        const res = await axios.post(BASE_URL, {
            phone: phoneStripped,
            message: `Hi ${ownerName}, ${petName} is ready to be checked in! Please come to the front desk in the next 10 muinutes to start your appointment. (Created by Phillip Iwanaga)`,
            key: API_KEY
        });
        return res
    } catch (e) {
        console.error(e)
    }
    
}

export default sendText