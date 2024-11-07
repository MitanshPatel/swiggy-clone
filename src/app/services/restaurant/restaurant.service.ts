import { Injectable } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant.interface';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurant_lists: Restaurant[] = [
    {
      restaurant_name: 'Spicy Biryani House',
      category: 'Biryani',
      restaurant_image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/7/16/5e2ec3a8-c3e4-4a60-9e6d-e53bdc992b0b_41a1bfe9-cfbc-4687-b612-f49b353e38fb.jpg',
      restaurant_location: '123 Flavor Street, Food City',
      restaurant_reviews: [
        'Amazing biryani with great flavors!',
        'The best biryani in town, hands down!',
        'A must-visit for biryani lovers.'
      ],
      restaurant_rating: 4.3,
      menu: [
        {
          menu_category: 'Chicken Biryani',
          food_items: [
            {
              food_name: 'Hyderabadi Chicken Biryani',
              food_price: 250,
              food_description: 'Aromatic basmati rice cooked with tender chicken pieces and spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/cwgfdgullqz7jansuphv',
              nonveg: true
            },
            {
              food_name: 'Chicken Dum Biryani',
              food_price: 270,
              food_description: 'Slow-cooked chicken biryani with rich flavors and spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/vgnjarntztsqakb3rwq0',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Mutton Biryani',
          food_items: [
            {
              food_name: 'Hyderabadi Mutton Biryani',
              food_price: 300,
              food_description: 'Aromatic basmati rice cooked with tender mutton pieces and spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/cjfnxqlzsnmwiwg8p4y9',
              nonveg: true
            },
            {
              food_name: 'Mutton Dum Biryani',
              food_price: 320,
              food_description: 'Slow-cooked mutton biryani with rich flavors and spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/i4hpllrjqhfibsr0ufof',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Vegetarian Biryani',
          food_items: [
            {
              food_name: 'Veg Biryani',
              food_price: 200,
              food_description: 'Aromatic basmati rice cooked with mixed vegetables and spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/lcbvnxajyucrvdbxa3rs',
              nonveg: false
            },
            {
              food_name: 'Paneer Biryani',
              food_price: 220,
              food_description: 'Aromatic basmati rice cooked with paneer cubes and spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/j6fdt6fktgstksmjzvgv',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      restaurant_name: 'Royal Biryani Palace',
      category: 'Biryani',
      restaurant_image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wrohceoglapcgvingtqe',
      restaurant_location: '456 Spice Avenue, Flavor Town',
      restaurant_reviews: [
        'A royal experience with every bite!',
        'The mutton biryani is to die for!',
        'Highly recommend the vegetarian options.'
      ],
      restaurant_rating: 4.2,
      menu: [
        {
          menu_category: 'Chicken Biryani',
          food_items: [
            {
              food_name: 'Royal Chicken Biryani',
              food_price: 260,
              food_description: 'Aromatic basmati rice cooked with succulent chicken pieces and royal spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/2/2c7dfbcc-a259-41c4-b79d-e9d43e54d089_a2a56c2d-aea5-4d00-81dc-e13b932443cc.jpeg',
              nonveg: true
            },
            {
              food_name: 'Chicken Tikka Biryani',
              food_price: 280,
              food_description: 'Flavorful chicken tikka pieces cooked with basmati rice and spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/2/fe001b9b-dd6f-4485-a773-47a87e91eaf9_bc9d1d10-d1e3-44ce-8668-926477cff75e.jpeg',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Mutton Biryani',
          food_items: [
            {
              food_name: 'Royal Mutton Biryani',
              food_price: 310,
              food_description: 'Aromatic basmati rice cooked with tender mutton pieces and royal spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/2/147c0b26-a9f3-47b9-a8d3-d760541190e8_27a0b8bd-3b82-4831-99a0-0c54841a0793.jpeg',
              nonveg: true
            },
            {
              food_name: 'Mutton Korma Biryani',
              food_price: 330,
              food_description: 'Slow-cooked mutton korma biryani with rich flavors and spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/11/38616e4a-1df6-4909-9083-d7f932e77395_b5960cd7-063f-4a4e-b313-8e6179ad2788.jpeg',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Vegetarian Biryani',
          food_items: [
            {
              food_name: 'Royal Veg Biryani',
              food_price: 210,
              food_description: 'Aromatic basmati rice cooked with mixed vegetables and royal spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/11/535f696a-1ee3-4fb3-a2a7-b9400bd0e2ec_f4a02b63-fe99-4487-8ca0-b1d3789dc6bd.jpeg',
              nonveg: false
            },
            {
              food_name: 'Paneer Tikka Biryani',
              food_price: 230,
              food_description: 'Aromatic basmati rice cooked with paneer tikka pieces and spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/11/535f696a-1ee3-4fb3-a2a7-b9400bd0e2ec_f4a02b63-fe99-4487-8ca0-b1d3789dc6bd.jpeg',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      restaurant_name: 'Biryani Delight',
      category: 'Biryani',
      restaurant_image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/17/cfb3523f-0709-4b8a-a99e-c8e428e9d7cd_45840.jpg',
      restaurant_location: '789 Aroma Lane, Taste City',
      restaurant_reviews: [
        'Delightful biryani with authentic flavors!',
        'The chicken biryani is a must-try!',
        'Great variety and excellent taste.'
      ],
      restaurant_rating: 4.3,
      menu: [
        {
          menu_category: 'Chicken Biryani',
          food_items: [
            {
              food_name: 'Delight Chicken Biryani',
              food_price: 255,
              food_description: 'Aromatic basmati rice cooked with tender chicken pieces and delightful spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/12/4c8ef940-7a3f-4336-a65d-a97d1ba7bf9e_c8196b3f-c666-4be4-acab-ca967f68af9a.jpeg',
              nonveg: true
            },
            {
              food_name: 'Chicken Malai Biryani',
              food_price: 275,
              food_description: 'Creamy chicken malai pieces cooked with basmati rice and spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/1ed13daf8a2f51f81deeca2cd5e77193',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Mutton Biryani',
          food_items: [
            {
              food_name: 'Delight Mutton Biryani',
              food_price: 315,
              food_description: 'Aromatic basmati rice cooked with tender mutton pieces and delightful spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/d69b95fa67715457dd87854e15e9fa80',
              nonveg: true
            },
            {
              food_name: 'Mutton Rogan Josh Biryani',
              food_price: 335,
              food_description: 'Slow-cooked mutton rogan josh biryani with rich flavors and spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/12/4c8ef940-7a3f-4336-a65d-a97d1ba7bf9e_c8196b3f-c666-4be4-acab-ca967f68af9a.jpeg',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Vegetarian Biryani',
          food_items: [
            {
              food_name: 'Delight Veg Biryani',
              food_price: 215,
              food_description: 'Aromatic basmati rice cooked with mixed vegetables and delightful spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/d0ca58d7176326726281626794862d9c',
              nonveg: false
            },
            {
              food_name: 'Paneer Butter Biryani',
              food_price: 235,
              food_description: 'Aromatic basmati rice cooked with paneer butter masala and spices.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/12/4c8ef940-7a3f-4336-a65d-a97d1ba7bf9e_c8196b3f-c666-4be4-acab-ca967f68af9a.jpeg',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      restaurant_name: 'Dragon Wok',
      category: 'Chinese',
      restaurant_image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/4/831f52d0-8ae0-4d98-9b50-b06b6582591b_23c42635-bdfd-40d1-addf-56a319a027f1.jpg',
      restaurant_location: '101 Noodle Street, Flavor Town',
      restaurant_reviews: [
        'Authentic Chinese flavors!',
        'The best dumplings in town!',
        'A must-visit for Chinese food lovers.'
      ],
      restaurant_rating: 4.2,
      menu: [
        {
          menu_category: 'Appetizers',
          food_items: [
            {
              food_name: 'Spring Rolls',
              food_price: 150,
              food_description: 'Crispy spring rolls filled with vegetables.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/7/ca939afd-fad4-48f0-b0e6-567c81c0f8b9_dc08e37f-95db-49ed-bf51-a876febf53df.jpg_compressed',
              nonveg: false
            },
            {
              food_name: 'Chicken Dumplings',
              food_price: 200,
              food_description: 'Steamed dumplings filled with minced chicken.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/eq7sdxbnoze0ynegspj0',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Main Course',
          food_items: [
            {
              food_name: 'Kung Pao Chicken',
              food_price: 350,
              food_description: 'Spicy stir-fried chicken with peanuts and vegetables.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ecf94fc94b8970e4cac44d7b1668a5e3',
              nonveg: true
            },
            {
              food_name: 'Vegetable Fried Rice',
              food_price: 250,
              food_description: 'Fried rice with mixed vegetables and soy sauce.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/d5vr6j0ckwpl6ck9javh',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      restaurant_name: 'Golden Dragon',
      category: 'Chinese',
      restaurant_image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597',
      restaurant_location: '202 Bamboo Lane, Taste City',
      restaurant_reviews: [
        'Delicious Chinese cuisine!',
        'The best sweet and sour chicken!',
        'Highly recommend the fried rice.'
      ],
      restaurant_rating: 4.3,
      menu: [
        {
          menu_category: 'Appetizers',
          food_items: [
            {
              food_name: 'Vegetable Spring Rolls',
              food_price: 140,
              food_description: 'Crispy spring rolls filled with mixed vegetables.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/d00440d2d24647d9d6880b2a0bf5f691',
              nonveg: false
            },
            {
              food_name: 'Pork Dumplings',
              food_price: 220,
              food_description: 'Steamed dumplings filled with minced pork.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/25/1aee3f55-a78d-4fd2-95f7-b008fc5e26c6_24acdac9-6ab1-479e-895c-1ec6e07614c3.JPG',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Main Course',
          food_items: [
            {
              food_name: 'Sweet and Sour Chicken',
              food_price: 360,
              food_description: 'Chicken pieces cooked in a sweet and sour sauce.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/7/ca939afd-fad4-48f0-b0e6-567c81c0f8b9_dc08e37f-95db-49ed-bf51-a876febf53df.jpg_compressed',
              nonveg: true
            },
            {
              food_name: 'Szechuan Tofu',
              food_price: 280,
              food_description: 'Spicy stir-fried tofu with vegetables.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/d00440d2d24647d9d6880b2a0bf5f691',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      restaurant_name: 'Burger Haven',
      category: 'Burgers',
      restaurant_image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7e611484b6f7df186376a3238a085c87',
      restaurant_location: '303 Patty Lane, Flavor Town',
      restaurant_reviews: [
        'Best burgers in town!',
        'Juicy and delicious!',
        'A burger lover\'s paradise.'
      ],
      restaurant_rating: 4.2,
      menu: [
        {
          menu_category: 'Beef Burgers',
          food_items: [
            {
              food_name: 'Classic Beef Burger',
              food_price: 300,
              food_description: 'Juicy beef patty with lettuce, tomato, and cheese.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/7b7d7c01-d1f5-4983-a49a-55ae6dec0e85_29587c5e-1372-4e3a-956d-f4a2dd78ebdf.jpg',
              nonveg: true
            },
            {
              food_name: 'BBQ Bacon Burger',
              food_price: 350,
              food_description: 'Beef patty with BBQ sauce, bacon, and cheddar cheese.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/13/f3f5253d-2290-499a-a4b4-60fa3bd9625c_d74cf545-382b-40c9-816b-8793baac42e9.jpg',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Chicken Burgers',
          food_items: [
            {
              food_name: 'Grilled Chicken Burger',
              food_price: 280,
              food_description: 'Grilled chicken breast with lettuce, tomato, and mayo.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/9cd490f9-f191-49c2-9043-6dc3e7e58166_34badbda-4128-45d4-87e2-e9c580e8db43.jpg',
              nonveg: true
            },
            {
              food_name: 'Spicy Chicken Burger',
              food_price: 300,
              food_description: 'Spicy chicken patty with jalapenos and pepper jack cheese.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg',
              nonveg: true
            }
          ]
        }
      ]
    },
    {
      restaurant_name: 'Burger Bliss',
      category: 'Burgers',
      restaurant_image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wdfrwjgscyl35xxtyj9w',
      restaurant_location: '404 Bun Boulevard, Taste City',
      restaurant_reviews: [
        'Heavenly burgers!',
        'The veggie burger is amazing!',
        'Great variety and taste.'
      ],
      restaurant_rating: 4.3,
      menu: [
        {
          menu_category: 'Beef Burgers',
          food_items: [
            {
              food_name: 'Cheeseburger Deluxe',
              food_price: 320,
              food_description: 'Beef patty with double cheese, lettuce, and tomato.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/7/22f313d9-f283-42b6-b968-8ca7a861e0f5_f4509fe0-4dc1-4b62-a940-632dc057a686.jpg',
              nonveg: true
            },
            {
              food_name: 'Mushroom Swiss Burger',
              food_price: 340,
              food_description: 'Beef patty with sautéed mushrooms and Swiss cheese.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/7/659f8841-687c-4eef-90e3-bf161658a911_4a149cdc-8e94-4717-84a3-f248bea40a3e.jpg',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Vegetarian Burgers',
          food_items: [
            {
              food_name: 'Veggie Burger',
              food_price: 260,
              food_description: 'Vegetable patty with lettuce, tomato, and avocado.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/14a240a14ce8a1154e471c926091bac8',
              nonveg: false
            },
            {
              food_name: 'Black Bean Burger',
              food_price: 280,
              food_description: 'Black bean patty with spicy mayo and pepper jack cheese.',
              food_photo: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/b43fe48110c47c2255bc2881e88218d9',
              nonveg: false
            }
          ]
        }
      ]
    }
  ];


  constructor() {}

  getRestaurantList() {
    return this.restaurant_lists;
  }

  getMenuList(restaurant_name: string) : Restaurant{
    return this.restaurant_lists.find(restaurant => restaurant.restaurant_name === restaurant_name) || {} as Restaurant;
  }

  getRestaurantsByCategory(category: string): Restaurant[] {
    return this.restaurant_lists.filter(restaurant => restaurant.category === category);
  }
}