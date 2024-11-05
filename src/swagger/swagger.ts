import swaggerJSDoc from "swagger-jsdoc";
import SwaggerJSDoc, { Options } from "swagger-jsdoc";

const swaggerOptions: Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "backend service API",
            version: "1.0.0",
            description: "API para catalogo de productos"
        },
        servers: [
            {
                url: "http://localhost:3000/"
            }
        ]
    },
    apis: [
        "./src/routes/productRoutes.ts"
    ]
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec



