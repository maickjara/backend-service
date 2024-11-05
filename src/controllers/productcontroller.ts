import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";

// traemos la tabla o entidad producto de la base de datos
const ProductRepository = AppDataSource.getRepository(Product);

// obtener todos los productos (GET)
export const getAllProduct = async(req: Request, res: Response) => {
    try {
        const Products = await ProductRepository.find();
        res.json(Products);
    } catch(error) {
        res.status(500).json({
        message: "error al obtener los productos."
    });
}
};

// obtener un producto (GET)
export const getProductByID = async(req: Request, res: Response) => {
    try {
        const Product = await ProductRepository.findOneBy({
            id: parseInt(req.params.id)
        });
        if (Product) {
            res.json(Product);
        } else {
            res.status(404).json({
                message: "producto no encontrado."
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "error al obtener el producto."
        });
    }
};

// crear un producto (POST)
export const createProduct = async(req: Request, res: Response) => {
    try {
        const {name, description, price } = req.body;
        const product = new Product();
        product.name = name;
        product.description = description;
        product.price = price;
        await ProductRepository.save(product);
        res.status(201).json(product);
    } catch(error) {
        res.status(500).json({
            message: "error al crear el producto."
        });
    }
};

// actualizar un producto existente
export const updateProduct = async(req: Request, res: Response) => {
    try {
        const { name, description, price } = req.body;

        // buscamos el productp para actualizarlo
        const product = await ProductRepository.findOneBy({
            id: parseInt(req.params.id)
        });

        // validamos que el product tenga informacion
        if (product) {
           product.name = name ?? product.name;
           product.description = description ?? product.description;
           product.price = price ?? product.price;
           await ProductRepository.save(product); // guardamos los cambios del producto
           res.json(Product);
        } else {
            res.status(404).json({
                message: "no se encontro el producto."
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "error al actualizar el producto."
        });
    }
};

// eliminar un producto existente
export const deleteProduct = async(req: Request, res: Response) => {
    try {
        // buscamos el productp para eliminar
        const product = await ProductRepository.findOneBy({
            id: parseInt(req.params.id)
        });

        // validamos que el product tenga informacion
        if (product) {
           await ProductRepository.remove(product); // borramos el producto
           res.json({
            message: "producto"
           });
        } else {
            res.status(404).json({
                message: "no se encontro el producto."
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "error al eliminar el producto."
        });
    }
};
