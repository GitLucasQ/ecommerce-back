import { ProductService } from "../services/ProductService";
import logger from "../shared/logger";

const productService = new ProductService();

export const getAllProducts = async (req, res) => {
    const products = await productService.getAllProducts();

    res.json(products);
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const foundedProduct = await productService.getProductById(id);

    res.json(foundedProduct);
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const createNewProduct = async (req, res) => {
    const { name, price, photo } = req.body;
    const createdProduct = await productService.createNewProduct({ name, price, photo });

    res.status(201).json(createdProduct);
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, photo } = req.body;
    const updatedProduct = await productService.updateProduct(id, { name, price, photo });

    res.status(200).json(updatedProduct);
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await productService.delete(id);

    res.status(200).send('Producto eliminado con éxito');
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};