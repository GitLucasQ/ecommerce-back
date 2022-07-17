import { CartService } from '../services/CartService';
import { ProductService } from '../services/ProductService';
import { UserService } from '../services/UserService';
import logger from '../shared/logger';
import { sendMailConfirmShop } from '../util/MailNotification';
import { sendMessageToAdmin, sendSMSNotificationToUser } from '../util/PhoneNotification';

const cartService = CartService.getInstance();
const productService = ProductService.getInstance();
const userService = UserService.getInstance();

export const addNewProduct = async (req, res) => {
    const { productId, quantity, user } = req.body;
    // const user = req.session.passport.use;
    const foundedProduct = await productService.getProductById(productId);
    const foundedCart = await cartService.findCart(user);
    // const foundedUser = await userService.getById(req.session.passport.user);

    if (foundedCart) {
        let indexProduct = foundedCart.products.findIndex(product => product.productId.toString() === productId);

        if (indexProduct > -1) {
            let productCart = foundedCart.products[indexProduct];
            productCart.quantity = quantity;
            foundedCart.products[indexProduct] = productCart;
        }
        else {
            foundedCart.products.push({
                productId,
                name: foundedProduct.name,
                quantity,
                price: foundedProduct.price
            });
        }

        await foundedCart.save();

        res.status(201).json(foundedCart);
    }
    else {
        const createdCart = await cartService.createNewCart({
            user,
            products: [{
                productId,
                name: foundedProduct.name,
                quantity,
                price: foundedProduct.price
            }]
        });

        res.status(201).json(createdCart);
    }

    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const confirmShop = async (req, res) => {
    const { idcart } = req.body;
    const foundedCart = await cartService.getById(idcart);    
    const foundedUser = await userService.getById(foundedCart.user.toString());

    await sendMailConfirmShop(foundedCart, foundedUser);
    await sendSMSNotificationToUser(foundedUser.name, foundedUser.phone);
    await sendMessageToAdmin(foundedUser);

    res.status(200).json({
        message: "Compra realizada con éxito",
        data: foundedCart
    });

    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};