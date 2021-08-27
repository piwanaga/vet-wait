import axios from 'axios';

const BASE_URL = 'https://textbelt.com/text'
const KEY ='753f4a473e3773b284219c6a3c94828de43f199c8k3LNLnNfLQRsoes0stOdBGDn_test'

const sendText = async (phone, ownerName, petName) => {
    const phoneStripped = phone.replace('-', '').replace('-', '')
    const res = await axios.post(BASE_URL, {
        phone: phoneStripped,
        message: `Hi ${ownerName}, ${petName} is ready to be checked in! Please come to the front desk in the next 10 muinutes to start your appointment.`,
        key: KEY
    });
    return res
}

export default sendText