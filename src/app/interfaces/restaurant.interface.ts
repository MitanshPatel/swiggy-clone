export interface FoodItem {
    food_name: string;
    food_price: number;
    food_description: string;
    food_photo: string;
    nonveg: boolean;
    count?: number
}

export interface MenuCategory {
    menu_category: string;
    food_items: FoodItem[];
    isOpen?: boolean
}

export interface Restaurant {
    restaurant_name: string;
    category: string;
    restaurant_image: string;
    restaurant_location: string;
    restaurant_reviews: string[];
    restaurant_rating: number;
    menu: MenuCategory[];
}

