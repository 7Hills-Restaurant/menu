export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  subcategory?: string;
  isVeg: boolean;
  description?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  subcategories?: string[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    subcategories: ["Vegetarian", "Non Vegetarian"]
  },
  {
    id: "tandoori",
    name: "Tandoori Specials"
  },
  {
    id: "idli-dosa",
    name: "Idli & Dosa Corner",
    subcategories: ["Dosa", "Idli", "Vada"]
  },
  {
    id: "veg-main",
    name: "Veg Main Course"
  },
  {
    id: "chicken-main",
    name: "Chicken Main Course"
  },
  {
    id: "lamb-main",
    name: "Lamb Main Course"
  },
  {
    id: "fish-main",
    name: "Fish Main Course"
  },
  {
    id: "prawn-main",
    name: "Prawn Main Course"
  },
  {
    id: "naan-rice",
    name: "Naan & Rice",
    subcategories: ["Naan & Breads", "Rice"]
  },
  {
    id: "biryani",
    name: "Biryani"
  },
  {
    id: "soft-drinks",
    name: "Soft Drinks",
    subcategories: ["Cool Drinks", "Masala", "Water", "Lassi", "Lemonade"]
  },
  {
    id: "alcohol",
    name: "Alcohol Drinks",
    subcategories: ["Cocktails", "Beer Indian", "Beer European", "O.Z Beer", "Draught", "Wine", "Digestive", "Sparkling"]
  }
];

export const menuItems: MenuItem[] = [
  // Starters - Vegetarian
  { id: "1", name: "Paani Puri", price: 10.00, category: "starters", subcategory: "Vegetarian", isVeg: true },
  { id: "2", name: "Samosa", price: 6.50, category: "starters", subcategory: "Vegetarian", isVeg: true },
  { id: "3", name: "Samosa Ragaada", price: 9.00, category: "starters", subcategory: "Vegetarian", isVeg: true },
  { id: "4", name: "Spring Roll", price: 7.00, category: "starters", subcategory: "Vegetarian", isVeg: true },
  { id: "5", name: "Veg Platter", price: 13.50, category: "starters", subcategory: "Vegetarian", isVeg: true },
  { id: "6", name: "Aloo Chana Chaat", price: 7.50, category: "starters", subcategory: "Vegetarian", isVeg: true },
  { id: "7", name: "Kachori", price: 6.50, category: "starters", subcategory: "Vegetarian", isVeg: true },
  { id: "8", name: "Onion Bhaji", price: 8.00, category: "starters", subcategory: "Vegetarian", isVeg: true },
  { id: "9", name: "Gobi Pakoda", price: 7.00, category: "starters", subcategory: "Vegetarian", isVeg: true },
  { id: "10", name: "Paneer Pakoda", price: 9.50, category: "starters", subcategory: "Vegetarian", isVeg: true },
  { id: "11", name: "Paneer 65", price: 10.50, category: "starters", subcategory: "Vegetarian", isVeg: true },
  { id: "12", name: "Chili Paneer", price: 11.00, category: "starters", subcategory: "Vegetarian", isVeg: true },
  { id: "13", name: "Mirchi Bhaji", price: 8.00, category: "starters", subcategory: "Vegetarian", isVeg: true },
  { id: "14", name: "Masala Papad", price: 8.50, category: "starters", subcategory: "Vegetarian", isVeg: true },

  // Starters - Non Vegetarian
  { id: "15", name: "Chicken Samosa", price: 8.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false },
  { id: "16", name: "Lamb Samosa", price: 8.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false },
  { id: "17", name: "Chicken Pakoda", price: 8.50, category: "starters", subcategory: "Non Vegetarian", isVeg: false },
  { id: "18", name: "Chicken Spring Roll", price: 7.50, category: "starters", subcategory: "Non Vegetarian", isVeg: false },
  { id: "19", name: "Chicken 65", price: 10.50, category: "starters", subcategory: "Non Vegetarian", isVeg: false },
  { id: "20", name: "Prawn Pakoda", price: 9.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false },
  { id: "21", name: "Fish Amritsar", price: 10.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false },
  { id: "22", name: "Egg Bonda", price: 9.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false },
  { id: "23", name: "Chili Chicken", price: 11.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false },
  { id: "24", name: "Non Veg Platter", price: 17.50, category: "starters", subcategory: "Non Vegetarian", isVeg: false },

  // Tandoori Specials
  { id: "25", name: "Paneer Tikka", price: 15.50, category: "tandoori", isVeg: true },
  { id: "26", name: "Chicken Tikka", price: 15.50, category: "tandoori", isVeg: false },
  { id: "27", name: "Chicken Tandoori", price: 17.50, category: "tandoori", isVeg: false },
  { id: "28", name: "Lamb Seekh Kebab", price: 15.50, category: "tandoori", isVeg: false },
  { id: "29", name: "Chicken Seekh Kebab", price: 16.50, category: "tandoori", isVeg: false },
  { id: "30", name: "Fish Tandoori", price: 16.50, category: "tandoori", isVeg: false },

  // Idli & Dosa Corner - Dosa
  { id: "31", name: "Plain Dosa", price: 9.50, category: "idli-dosa", subcategory: "Dosa", isVeg: true },
  { id: "32", name: "Cheese Plain Dosa", price: 6.00, category: "idli-dosa", subcategory: "Dosa", isVeg: true },
  { id: "33", name: "Paneer Plain Dosa", price: 6.00, category: "idli-dosa", subcategory: "Dosa", isVeg: true },
  { id: "34", name: "Masala Dosa", price: 6.00, category: "idli-dosa", subcategory: "Dosa", isVeg: true },
  { id: "35", name: "Cheese Masala Dosa", price: 6.50, category: "idli-dosa", subcategory: "Dosa", isVeg: true },
  { id: "36", name: "Paneer Masala Dosa", price: 5.50, category: "idli-dosa", subcategory: "Dosa", isVeg: true },
  { id: "37", name: "Onion Dosa", price: 5.50, category: "idli-dosa", subcategory: "Dosa", isVeg: true },
  { id: "38", name: "Butter Dosa", price: 5.50, category: "idli-dosa", subcategory: "Dosa", isVeg: true },

  // Idli & Dosa Corner - Idli
  { id: "39", name: "Plain Idli 3pc", price: 5.50, category: "idli-dosa", subcategory: "Idli", isVeg: true },
  { id: "40", name: "Sambar Idli 3pc", price: 5.50, category: "idli-dosa", subcategory: "Idli", isVeg: true },

  // Idli & Dosa Corner - Vada
  { id: "41", name: "Plain Vada", price: 5.50, category: "idli-dosa", subcategory: "Vada", isVeg: true },
  { id: "42", name: "Sambar Vada", price: 5.50, category: "idli-dosa", subcategory: "Vada", isVeg: true },
  { id: "43", name: "Punugulu", price: 5.50, category: "idli-dosa", subcategory: "Vada", isVeg: true },

  // Veg Main Course
  { id: "44", name: "Mix Veg", price: 15.50, category: "veg-main", isVeg: true },
  { id: "45", name: "Paneer Jalfrezi", price: 16.00, category: "veg-main", isVeg: true },
  { id: "46", name: "Paneer Butter Masala", price: 17.00, category: "veg-main", isVeg: true },
  { id: "47", name: "Paneer Vindaloo", price: 15.50, category: "veg-main", isVeg: true },
  { id: "48", name: "Dal Thadka", price: 15.50, category: "veg-main", isVeg: true },
  { id: "49", name: "Mushroom Paneer", price: 14.50, category: "veg-main", isVeg: true },
  { id: "50", name: "Bagara Baingan", price: 16.50, category: "veg-main", isVeg: true },
  { id: "51", name: "Sambar", price: 16.50, category: "veg-main", isVeg: true },
  { id: "52", name: "Dal Makhani", price: 15.50, category: "veg-main", isVeg: true },
  { id: "53", name: "Rajma", price: 14.50, category: "veg-main", isVeg: true },
  { id: "54", name: "Mutter Paneer", price: 16.50, category: "veg-main", isVeg: true },
  { id: "55", name: "Aloo Mutter Paneer", price: 15.50, category: "veg-main", isVeg: true },
  { id: "56", name: "Paneer Korma", price: 16.50, category: "veg-main", isVeg: true },
  { id: "57", name: "Aloo Baingan", price: 16.50, category: "veg-main", isVeg: true },
  { id: "58", name: "Palak Paneer", price: 16.50, category: "veg-main", isVeg: true },
  { id: "59", name: "Paneer Do Piaza", price: 15.50, category: "veg-main", isVeg: true },
  { id: "60", name: "Baingan Bharta", price: 15.50, category: "veg-main", isVeg: true },

  // Chicken Main Course
  { id: "61", name: "Chicken Jalfrezi", price: 16.50, category: "chicken-main", isVeg: false },
  { id: "62", name: "Butter Chicken", price: 16.50, category: "chicken-main", isVeg: false },
  { id: "63", name: "Chicken Vindaloo", price: 15.50, category: "chicken-main", isVeg: false },
  { id: "64", name: "Chicken Korma", price: 15.50, category: "chicken-main", isVeg: false },
  { id: "65", name: "Palak Chicken", price: 16.50, category: "chicken-main", isVeg: false },
  { id: "66", name: "Chicken Do Piaza", price: 15.00, category: "chicken-main", isVeg: false },
  { id: "67", name: "Pepper Chicken", price: 15.00, category: "chicken-main", isVeg: false },
  { id: "68", name: "Chicken Dhansak", price: 15.00, category: "chicken-main", isVeg: false },
  { id: "69", name: "Chicken Tikka Masala", price: 16.50, category: "chicken-main", isVeg: false },

  // Lamb Main Course
  { id: "70", name: "Lamb Jalfrezi", price: 15.50, category: "lamb-main", isVeg: false },
  { id: "71", name: "Lamb Vindaloo", price: 14.50, category: "lamb-main", isVeg: false },
  { id: "72", name: "Lamb Korma", price: 15.00, category: "lamb-main", isVeg: false },
  { id: "73", name: "Palak Lamb", price: 14.50, category: "lamb-main", isVeg: false },
  { id: "74", name: "Lamb Do Piaza", price: 15.50, category: "lamb-main", isVeg: false },
  { id: "75", name: "Lamb Kebab Masala", price: 14.50, category: "lamb-main", isVeg: false },
  { id: "76", name: "Pepper Lamb", price: 15.00, category: "lamb-main", isVeg: false },
  { id: "77", name: "Lamb Dhansak", price: 14.50, category: "lamb-main", isVeg: false },
  { id: "78", name: "Lamb Tikka Masala", price: 16.50, category: "lamb-main", isVeg: false },

  // Fish Main Course
  { id: "79", name: "Fish Jalfrezi", price: 15.50, category: "fish-main", isVeg: false },
  { id: "80", name: "Goan Fish Curry", price: 15.00, category: "fish-main", isVeg: false },
  { id: "81", name: "Fish Vindaloo", price: 15.50, category: "fish-main", isVeg: false },

  // Prawn Main Course
  { id: "82", name: "Prawn Jalfrezi", price: 15.50, category: "prawn-main", isVeg: false },
  { id: "83", name: "Prawn fry", price: 14.50, category: "prawn-main", isVeg: false },
  { id: "84", name: "Prawn Vindaloo", price: 15.00, category: "prawn-main", isVeg: false },
  { id: "85", name: "Prawn Masala", price: 14.50, category: "prawn-main", isVeg: false },

  // Naan & Rice - Naan & Breads
  { id: "86", name: "Naan", price: 4.50, category: "naan-rice", subcategory: "Naan & Breads", isVeg: true },
  { id: "87", name: "Butter Naan", price: 5.00, category: "naan-rice", subcategory: "Naan & Breads", isVeg: true },
  { id: "88", name: "Garlic Naan", price: 5.50, category: "naan-rice", subcategory: "Naan & Breads", isVeg: true },
  { id: "89", name: "Roti Tandoori", price: 4.50, category: "naan-rice", subcategory: "Naan & Breads", isVeg: true },
  { id: "90", name: "Cheese Naan", price: 6.00, category: "naan-rice", subcategory: "Naan & Breads", isVeg: true },
  { id: "91", name: "Lachha Paratha", price: 5.00, category: "naan-rice", subcategory: "Naan & Breads", isVeg: true },
  { id: "92", name: "Plain Paratha", price: 5.00, category: "naan-rice", subcategory: "Naan & Breads", isVeg: true },

  // Naan & Rice - Rice
  { id: "93", name: "Bagara Rice", price: 5.00, category: "naan-rice", subcategory: "Rice", isVeg: true },
  { id: "94", name: "Plain Rice", price: 4.50, category: "naan-rice", subcategory: "Rice", isVeg: true },
  { id: "95", name: "Fried Rice", price: 5.50, category: "naan-rice", subcategory: "Rice", isVeg: true },
  { id: "96", name: "Saffron Rice", price: 5.50, category: "naan-rice", subcategory: "Rice", isVeg: true },

  // Biryani
  { id: "97", name: "Mix Biryani", price: 21.50, category: "biryani", isVeg: false },
  { id: "98", name: "Lamb Biryani", price: 19.50, category: "biryani", isVeg: false },
  { id: "99", name: "Chicken Biryani", price: 18.50, category: "biryani", isVeg: false },
  { id: "100", name: "Prawn Biryani", price: 19.50, category: "biryani", isVeg: false },
  { id: "101", name: "Chicken Tikka Biryani", price: 19.50, category: "biryani", isVeg: false },
  { id: "102", name: "Fish Biryani", price: 18.50, category: "biryani", isVeg: false },
  { id: "103", name: "Paneer Biryani", price: 18.50, category: "biryani", isVeg: true },
  { id: "104", name: "Vegetable Biryani", price: 18.50, category: "biryani", isVeg: true },

  // Soft Drinks - Cool Drinks
  { id: "105", name: "Coca Cola (Normal / Zero)", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true },
  { id: "106", name: "Fanta", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true },
  { id: "107", name: "Sprite", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true },
  { id: "108", name: "Ice Tea", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true },
  { id: "109", name: "Thums Up", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true },
  { id: "110", name: "Limca", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true },
  { id: "111", name: "Indian Tonic", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true },

  // Soft Drinks - Masala
  { id: "112", name: "Shikanji", price: 5.50, category: "soft-drinks", subcategory: "Masala", isVeg: true },
  { id: "113", name: "Chaas", price: 5.50, category: "soft-drinks", subcategory: "Masala", isVeg: true },

  // Soft Drinks - Water
  { id: "114", name: "Sparkling / Still (1/2 ltr)", price: 4.00, category: "soft-drinks", subcategory: "Water", isVeg: true },
  { id: "115", name: "Still / Sparkling (1 ltr)", price: 6.50, category: "soft-drinks", subcategory: "Water", isVeg: true },

  // Soft Drinks - Lassi
  { id: "116", name: "Special Lassi", price: 9.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true },
  { id: "117", name: "Mango Lassi", price: 6.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true },
  { id: "118", name: "Rose Lassi", price: 6.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true },
  { id: "119", name: "Jeera Lassi", price: 5.50, category: "soft-drinks", subcategory: "Lassi", isVeg: true },
  { id: "120", name: "Salt Lassi", price: 5.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true },
  { id: "121", name: "Sweet Lassi", price: 5.50, category: "soft-drinks", subcategory: "Lassi", isVeg: true },
  { id: "122", name: "Natural Lassi", price: 5.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true },
  { id: "123", name: "Chocolate Lassi", price: 7.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true },

  // Soft Drinks - Lemonade
  { id: "124", name: "Lemon Juice", price: 5.00, category: "soft-drinks", subcategory: "Lemonade", isVeg: true },
  { id: "125", name: "Lemon Soda", price: 6.00, category: "soft-drinks", subcategory: "Lemonade", isVeg: true },
  { id: "126", name: "Ginger Juice", price: 6.00, category: "soft-drinks", subcategory: "Lemonade", isVeg: true },

  // Alcohol Drinks - Cocktails
  { id: "127", name: "Mojito", price: 10.00, category: "alcohol", subcategory: "Cocktails", isVeg: true },
  { id: "128", name: "Aperol Spritz", price: 10.00, category: "alcohol", subcategory: "Cocktails", isVeg: true },
  { id: "129", name: "Nigroni", price: 7.00, category: "alcohol", subcategory: "Cocktails", isVeg: true },
  { id: "130", name: "Blue Lagoon", price: 7.00, category: "alcohol", subcategory: "Cocktails", isVeg: true },
  { id: "131", name: "Margarita", price: 7.50, category: "alcohol", subcategory: "Cocktails", isVeg: true },
  { id: "132", name: "Martini", price: 7.00, category: "alcohol", subcategory: "Cocktails", isVeg: true },

  // Alcohol Drinks - Beer Indian
  { id: "133", name: "Cobra Large 650ml", price: 9.50, category: "alcohol", subcategory: "Beer Indian", isVeg: true },
  { id: "134", name: "King Fisher Large 650ml", price: 9.50, category: "alcohol", subcategory: "Beer Indian", isVeg: true },
  { id: "135", name: "Cobra Small 330ml", price: 5.00, category: "alcohol", subcategory: "Beer Indian", isVeg: true },
  { id: "136", name: "King Fisher Small 330ml", price: 5.00, category: "alcohol", subcategory: "Beer Indian", isVeg: true },

  // Alcohol Drinks - Beer European
  { id: "137", name: "Duvel", price: 5.00, category: "alcohol", subcategory: "Beer European", isVeg: true },
  { id: "138", name: "Chinmay Blue", price: 5.00, category: "alcohol", subcategory: "Beer European", isVeg: true },
  { id: "139", name: "Jupiller", price: 5.00, category: "alcohol", subcategory: "Beer European", isVeg: true },
  { id: "140", name: "Leffe Blonde", price: 5.00, category: "alcohol", subcategory: "Beer European", isVeg: true },

  // Alcohol Drinks - O.Z Beer
  { id: "141", name: "Hoegaarden", price: 5.00, category: "alcohol", subcategory: "O.Z Beer", isVeg: true },
  { id: "142", name: "Stella", price: 5.00, category: "alcohol", subcategory: "O.Z Beer", isVeg: true },

  // Alcohol Drinks - Draught
  { id: "143", name: "Stella", price: 6.00, category: "alcohol", subcategory: "Draught", isVeg: true },
  { id: "144", name: "Hoegaarden", price: 6.00, category: "alcohol", subcategory: "Draught", isVeg: true },
  { id: "145", name: "Triple Karmeliet", price: 6.00, category: "alcohol", subcategory: "Draught", isVeg: true },

  // Alcohol Drinks - Wine (simplified for space)
  { id: "146", name: "House Wine Red - Glass", price: 7.00, category: "alcohol", subcategory: "Wine", isVeg: true },
  { id: "147", name: "House Wine White - Glass", price: 6.50, category: "alcohol", subcategory: "Wine", isVeg: true },
  { id: "148", name: "House Wine Rose - Glass", price: 7.50, category: "alcohol", subcategory: "Wine", isVeg: true },
  { id: "149", name: "La Croisade (White)", price: 24.00, category: "alcohol", subcategory: "Wine", isVeg: true },
  { id: "150", name: "Cote du Rhone (Red)", price: 24.00, category: "alcohol", subcategory: "Wine", isVeg: true },

  // Alcohol Drinks - Digestive
  { id: "151", name: "Amaretto", price: 8.00, category: "alcohol", subcategory: "Digestive", isVeg: true },
  { id: "152", name: "Grappa", price: 8.00, category: "alcohol", subcategory: "Digestive", isVeg: true },
  { id: "153", name: "Cognac", price: 8.00, category: "alcohol", subcategory: "Digestive", isVeg: true },
  { id: "154", name: "Campari", price: 8.00, category: "alcohol", subcategory: "Digestive", isVeg: true },
  { id: "155", name: "Ricard", price: 8.00, category: "alcohol", subcategory: "Digestive", isVeg: true },
  { id: "156", name: "Porto", price: 8.00, category: "alcohol", subcategory: "Digestive", isVeg: true },

  // Alcohol Drinks - Sparkling
  { id: "157", name: "Cava", price: 7.00, category: "alcohol", subcategory: "Sparkling", isVeg: true },
  { id: "158", name: "Champaign", price: 7.00, category: "alcohol", subcategory: "Sparkling", isVeg: true },
  { id: "159", name: "Chardonnay", price: 7.00, category: "alcohol", subcategory: "Sparkling", isVeg: true },
];