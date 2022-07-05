import twilio from 'twilio';
import {
    TWILIO_ID,
    TWILIO_TOKEN,
    TWILIO_NUMBER,
    TWILIO_WSP_NUMBER,
    ADMIN_PHONE
} from '../config';
import logger from '../shared/logger';

const client = twilio(TWILIO_ID, TWILIO_TOKEN);

export const sendSMSNotificationToUser = async (nameUser, phoneUser) => {
    try {
        await client.messages.create({
            body: `Hola ${nameUser.split(' ')[0]}! Tu pedido ha sido recibido y se está procesando`,
            from: TWILIO_NUMBER,
            to: phoneUser
        })
    }
    catch (error) {
        logger.error('Sucedió un error:', error);
    }
};

export const sendMessageToAdmin = async (userData) => {
    try {
        await client.messages.create({
            body: `Nuevo pedido de ${userData.name} <${userData.email}>`,
            from: `whatsapp:${TWILIO_WSP_NUMBER}`,
            to: `whatsapp:${ADMIN_PHONE}`
        })
    }
    catch (error) {
        logger.error('Sucedió un error:', error);
    }
};
