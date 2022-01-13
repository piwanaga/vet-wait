import axios from 'axios';

const BASE_URL = 'https://textbelt.com/text'
const KEY ='753f4a473e3773b284219c6a3c94828de43f199c8k3LNLnNfLQRsoes0stOdBGDn'

const sendText = async (phone, ownerName, petName) => {
    const phoneStripped = phone.replace('-', '').replace('-', '')
    try {
        console.log('URL:', BASE_URL, 'KEY:', KEY, 'phone:', phone, 'stripped:', phoneStripped, 'owner:', ownerName, 'pet:', petName)
        const res = await axios.post(BASE_URL, {
            phone: phoneStripped,
            message: `Hi ${ownerName}, ${petName} is ready to be checked in! Please come to the front desk in the next 10 muinutes to start your appointment. (This is a test message from VetWait)`,
            key: KEY
        });
        return res
    } catch (e) {
        console.error(e)
    }
    
}

export default sendText