import { CategoryService } from "../services/CategoryService";
import logger from "../shared/logger";

const categoryService = new CategoryService();

export const getAllCategories = async (req, res) => {
    const categories = await categoryService.getAllCategories();

    res.json(categories);
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const getCategoryById = async (req, res) => {
    const { id } = req.params;
    const foundedCategory = await categoryService.getCategoryById(id);

    res.json(foundedCategory);
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const createNewCategory = async (req, res) => {
    const { name, price, photo } = req.body;
    const createdCategory = await categoryService.createNewCategory({ name, price, photo });

    res.status(201).json(createdCategory);
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name, price, photo } = req.body;
    const updatedCategory = await categoryService.updateCategory(id, { name, price, photo });

    res.status(200).json(updatedCategory);
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const deleteCategory = async (req, res) => {
    const { id } = req.params;
    await categoryService.delete(id);

    res.status(200).send('Categoría eliminada con éxito');
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};