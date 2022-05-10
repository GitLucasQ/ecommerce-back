import { ProductService } from "../services/ProductService";

const productService = new ProductService();

export const getAllProducts = async (_req, res) => {
    const products = await productService.getAllProducts();

    res.json(products);
};

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const foundedProduct = await productService.getProductById(id);

    res.json(foundedProduct);
};

export const createNewProduct = async (req, res) => {
    const { name, price, photo } = req.body;
    const createdProduct = await productService.createNewProduct({ name, price, photo });

    res.status(201).json(createdProduct);
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, photo } = req.body;
    const updatedProduct = await productService.updateProduct(id, { name, price, photo });

    res.status(200).json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await productService.delete(id);

    res.status(200).send('Producto eliminado con éxito');
};