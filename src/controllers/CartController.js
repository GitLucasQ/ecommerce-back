import { CartService } from '../services/CartService';
import { ProductService } from '../services/ProductService';
import logger from '../shared/logger';

const cartService = new CartService();
const productService = new ProductService();

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
}