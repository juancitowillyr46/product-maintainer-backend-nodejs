import { Container } from 'typedi';
import { Request, Response } from "express";
import ProductService from "./productService";

class ProductController {

    // private container: any = Container.get(ProductService);

    // private productService_: ProductService;
    // private productService: ProductService
    constructor(
        
    ) {
        // this.container = Container.get(ProductService);

        // this.productService_ = this.productService;
        // // this.productService = productService;
        // console.log(this.productService_);
    }

    public getProducts(request: Request, response: Response){
        const ps = Container.get(ProductService);
        return response.status(200).send({data: ps.getProducts(true)});
    }

    public getProduct(request: Request, response: Response) {
        const ps = Container.get(ProductService);
        return response.status(200).send({data: ps.getProduct(request.params.id)});
    }

    public postProduct(request: Request, response: Response) {
        const ps = Container.get(ProductService);
        return response.status(200).send({data: ps.postProduct(request.body)});
    }

    public putProduct(request: Request, response: Response) {
        const ps = Container.get(ProductService);
        return response.status(200).send({data: ps.putProduct(request.params.id, request.body)});
    }

    public deleteProduct(request: Request, response: Response) {
        const ps = Container.get(ProductService);
        return response.status(200).send({data: ps.deleteProduct(request.params.id)});
    }

}

export default ProductController;