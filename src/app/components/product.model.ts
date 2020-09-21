export class ProductModel {
    title: string;
    description: string;
    email: string;
    price: string;
    image: string;
}

export class ProductViewModel {
    private title: string;
    private description: string;
    private email: string;
    private price: number;
    private image: string;
    private favorite: boolean;

    constructor(productModel: ProductModel) {
        this.title = productModel.title;
        this.description = productModel.description;
        this.email = productModel.email;
        this.price = Number(productModel.price);
        this.image = productModel.image;
        this.favorite = false;
    }

    public getTitle() { return this.title; }

    public getDescription() { return this.description; }

    public getEmail() { return this.email; }

    public getPrice() { return this.price; }

    public getImageUrl() { return this.image; }

    public getFavorite() { return this.favorite; }

    public toggleFavorite() {
        this.favorite = !this.favorite;
    }
}