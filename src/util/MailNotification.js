import { createTransport } from 'nodemailer';
import { MAIL_ACCOUNT, MAIL_PASSWORD } from '../config';
import logger from '../shared/logger';

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: MAIL_ACCOUNT,
        pass: MAIL_PASSWORD
    }
});


export const sendRegisterMail = async (userData) => {
    const mailOptions = {
        from: 'Ecommerce notificaciones',
        to: MAIL_ACCOUNT,
        subject: `Nuevo registro de usuario - ${userData.name}`,
        html: `
            <style>
                #tabla {
                font-family: Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
                }

                #tabla td, #tabla th {
                border: 1px solid #ddd;
                padding: 8px;
                }

                #tabla tr:nth-child(even){background-color: #f2f2f2;}

                #tabla tr:hover {background-color: #ddd;}

                #tabla th {
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                background-color: #04AA6D;
                color: white;
                }
            </style>

            <h1>Nuevo usuario registrado</h1>
                <table id="tabla">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Dirección</th>
                            <th>Edad</th>
                            <th>Teléfono</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${userData.name}</td>
                            <td>${userData.email}</td>
                            <td>${userData.address}</td>
                            <td>${userData.age}</td>
                            <td>${userData.phone}</td>
                            <td>${userData.createdAt}</td>
                        </tr>
                    </tbody>
                </table>`
    };

    try {
        await transporter.sendMail(mailOptions);
    }
    catch (error) {
        logger.error('Sucedió un error:', error);
    }
};


export const sendMailConfirmShop = async (cartData, userData) => {
    const productData = () => {
        let data = "";
        cartData.products.forEach(product => {
            data += `<tr>
                        <td>${product.name}</td>
                        <td>${product.quantity}</td>
                        <td>$${product.price}</td>
                        <td>$${Number(product.quantity) * Number(product.price)}</td>
                    </tr>`;
        });

        return data;
    };

    const mailOptions = {
        from: 'Ecommerce Notificaciones',
        to: MAIL_ACCOUNT,
        subject: `Nuevo pedido de ${userData.name} <${userData.email}>`,
        html: `
            <style>
                #tabla {
                font-family: Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
                }

                #tabla td, #tabla th {
                border: 1px solid #ddd;
                padding: 8px;
                }

                #tabla tr:nth-child(even){background-color: #f2f2f2;}

                #tabla tr:hover {background-color: #ddd;}

                #tabla th {
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                background-color: #04AA6D;
                color: white;
                }
            </style>
            <h1>Se ha registrado un nuevo pedido:</h1>
            <table id="tabla">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Total</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        ${productData()}
                    </tbody>
                </table>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
    }
    catch (error) {
        logger.error('Sucedió un error:', error);
    }
};
