"use strict";

var _dotenv = require("dotenv");

(0, _dotenv.config)();
module.exports = {
  URL_MONGO: process.env.URL_MONGO,
  URL_MONGO_SESSION: process.env.URL_MONGO_SESSION,
  ANONYMOUS_AVATAR: 'https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded-41-256.png',
  MAIL_ACCOUNT: process.env.MAIL_ACCOUNT,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  TWILIO_ID: process.env.TWILIO_ID,
  TWILIO_TOKEN: process.env.TWILIO_TOKEN,
  TWILIO_NUMBER: process.env.TWILIO_NUMBER,
  ADMIN_PHONE: '+51937888325',
  TWILIO_WSP_NUMBER: process.env.TWILIO_WSP_NUMBER
};