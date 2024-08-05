
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


// each order

interface User {
    email: string;
    country: string;
    city: string;
    phone: string;
    post_code: string;
    name: string;
    _id: string;
}

interface Order {
    id: string;
    quantity: number;
    img: string;
    value: number;
    title: string;
    _id: string;
}

interface Others {
    track: number;
    status: string;
    _id: string;
}

export interface OrderDocument {
    _id: string;
    user: User;
    orders: Order[];
    others: Others;
    __v: number;
    createdAt: number;
    updatedAt: number
}

export interface EachOrderProps {
    item: OrderDocument;
    setClickedData: (data: OrderDocument) => void;
}

export interface DataResponse {
    data: OrderDocument[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any;
}


