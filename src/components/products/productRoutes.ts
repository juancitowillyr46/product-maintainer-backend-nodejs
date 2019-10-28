import { Application, Router, Request, Response } from "express";
import express from "express";
import { ProductController } from "./productController";

export class ProductRoutes {

    public productController: ProductController;
    private router: Router = express.Router();

    constructor(app: Application) {
        this.productController = new ProductController();
        this.routes(app);
    }

    public routes(app: Application): void {
        
        // GET Read Products
        this.router.get('/', this.productController.getProducts);

        // GET Read Product
        this.router.get('/:id', this.productController.getProduct);

        // POST Product
        this.router.post('/', this.productController.postProduct);

        // PUT Product
        this.router.put('/:id', this.productController.putProduct);
        
        // DELETE Product
        this.router.delete('/:id', (request: Request, response: Response) => {
            
            this.productController.deleteProduct(request, response);

        });

        app.use('/products', this.router);
    }


}

// export default ProductRoutes;