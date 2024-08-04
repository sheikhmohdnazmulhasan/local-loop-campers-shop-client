
export interface TCart {
    title: string;
    img: string;
    stock: number;
    quantity: number;
    payable: number;
}


export interface TProduct {
    _id: string;
    category: string;
    createdAt: string;
    description: string;
    images: string[];
    price: number;
    quantity: number;
    title: string;
    updatedAt: string;
    __v: number;
}


export interface TCardProps {
    item: {
        title: string;
        description: string;
        images: string[];
        price: string;
        _id: string;
    }
}

// checkout form
export interface TCheckoutForm {
    city: string;
    country: string;
    email: string;
    phone: string;
    post_code: string;
    name?: string
}


// checkout data

export interface TUserOrders {
    user: TCheckoutForm;
    orders: TCart[];
}
