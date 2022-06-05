import { config } from 'dotenv';

config();

module.exports = {
    URL_MONGO: process.env.URL_MONGO,
    URL_MONGO_SESSION: process.env.URL_MONGO_SESSION,
    ANONYMOUS_AVATAR: 'https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded-41-256.png'
}
