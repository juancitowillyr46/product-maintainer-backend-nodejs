import { Service } from 'typedi';
@Service()
export class ProductService {

    getProducts(active: boolean) {
        if(active == true){
            return [
                {"idProduct": "PROD0001", "name": "Iphone", "Description": "IOS 11"},
                {"idProduct": "PROD0002", "name": "Huawei", "Description": "Androis 12"},
            ]
        }
    }
    
    getProduct(idProduct: string) {
        if(idProduct){
            return {"idProduct": "PROD0001", "name": "Iphone", "Description": "IOS 11"};
        }
    }

    postProduct(body: any) {
        if(body) {
            return body;
        }
    }

    putProduct(idProduct: string, body: any) {
        if(body) {
            return body;
        }
    }

    deleteProduct(idProduct: string) {
        console.log("Eliminado satisfactoriamente");
        if(idProduct) {
            return idProduct;
        }
    }

}

// export default ProductService;