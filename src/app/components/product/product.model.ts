export class ProductModel {
    title: string;
    description: string;
    email: string;
    price: string;
    image: string;
}

export class ProductViewModel {
    public title: string;
    public description: string;
    public email: string;
    public price: number;
    public image: string;
    public favorite: boolean;
    public hidden: boolean;

    constructor(productModel: ProductModel) {
        this.title = productModel.title;
        this.description = productModel.description;
        this.email = productModel.email;
        this.price = Number(productModel.price);
        this.image = productModel.image;
        this.favorite = false;
        this.hidden = false;
    }

    public getImageUrl(): string {
        return this.image;
    }
}