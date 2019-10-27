import { Service } from 'typedi';
@Service()
class ProductService {

    public getProducts(active: boolean) {
        if(active == true){
            return [
                {"idProduct": "PROD0001", "name": "Iphone", "Description": "IOS 11"},
                {"idProduct": "PROD0002", "name": "Huawei", "Description": "Androis 12"},
            ]
        }
    }
    
    public getProduct(idProduct: string) {
        if(idProduct){
            return {"idProduct": "PROD0001", "name": "Iphone", "Description": "IOS 11"};
        }
    }

    public postProduct(body: any) {
        if(body) {
            return body;
        }
    }

    public putProduct(idProduct: string, body: any) {
        if(body) {
            return body;
        }
    }

    public deleteProduct(idProduct: string) {
        if(idProduct) {
            return idProduct;
        }
    }

}

export default ProductService;