const express = require('express')
const router = express.Router()

const recipeList = [
    {
      "id": 1,
      "name": "Classic Margherita Pizza",
      "style": "Italian",
      "prep_time": "1 hour",
      "cook_time": "10-15 minutes",
      "instructions": "1. Preheat oven to 500 degrees F. \n2. Roll out pizza dough on a floured surface. \n3. Spread tomato sauce on top of dough. \n4. Add sliced mozzarella cheese and fresh basil. \n5. Bake in oven for 10-15 minutes or until crust is golden brown. \n6. Slice and serve hot."
    },
    {
      "id": 2,
      "name": "Pad Thai",
      "style": "Thai",
      "prep_time": "20 minutes",
      "cook_time": "10 minutes",
      "instructions": "1. Soak rice noodles in cold water for 20 minutes. \n2. In a wok, heat oil and add garlic and onions. \n3. Add shrimp or tofu and stir-fry for 2-3 minutes. \n4. Push the shrimp or tofu to one side and add beaten eggs. \n5. Stir-fry until the eggs are cooked. \n6. Drain the noodles and add them to the wok. \n7. Add fish sauce, sugar, and tamarind paste. \n8. Stir-fry until all ingredients are mixed and the noodles are coated. \n9. Serve hot with crushed peanuts and lime wedges."
    },
    {
      "id": 3,
      "name": "Braised Beef Short Ribs",
      "style": "American",
      "prep_time": "30 minutes",
      "cook_time": "2-3 hours",
      "instructions": "1. Preheat oven to 325 degrees F. \n2. Season beef short ribs with salt and pepper. \n3. In a large Dutch oven, heat oil over medium-high heat. \n4. Brown the short ribs on all sides. \n5. Remove short ribs and set aside. \n6. Add onions, carrots, and celery to the Dutch oven and sauté for 5 minutes. \n7. Add garlic and sauté for another minute. \n8. Add red wine, beef broth, tomato paste, and herbs. \n9. Bring to a boil, then reduce heat to a simmer. \n10. Return the short ribs to the Dutch oven. \n11. Cover and bake in the oven for 2-3 hours or until the meat is tender. \n12. Serve hot with mashed potatoes or polenta."
    },
    {
      "id": 4,
      "name": "Shakshuka",
      "style": "Middle Eastern",
      "prep_time": "10 minutes",
      "cook_time": "20-25 minutes",
      "instructions": "1. Heat oil in a skillet over medium heat. \n2. Add onions and sauté until soft. \n3. Add garlic and cook for another minute. \n4. Add canned tomatoes and their juices. \n5. Add salt, pepper, cumin, paprika, and red pepper flakes. \n6. Simmer for 10-15 minutes. \n7. Make wells in the tomato mixture and crack eggs into them. \n8. Cover the skillet and cook until the eggs are set, about 5-7 minutes. \n9. Sprinkle with feta cheese and chopped parsley."
    },
    {
        "id": 5,
        "name": "Chicken Teriyaki",
        "style": "Japanese",
        "prep_time": "10 minutes",
        "cook_time": "20 minutes",
        "instructions": "1. In a saucepan, combine soy sauce, mirin, sugar, and sake. \n2. Bring to a boil and simmer until the sauce thickens. \n3. Heat oil in a skillet over medium-high heat. \n4. Add chicken and cook until browned on both sides. \n5. Pour the teriyaki sauce over the chicken and simmer for 5-10 minutes. \n6. Serve hot with rice and steamed vegetables."
      },
      {
        "id": 6,
        "name": "Spaghetti Carbonara",
        "style": "Italian",
        "prep_time": "10 minutes",
        "cook_time": "15 minutes",
        "instructions": "1. Cook spaghetti according to package instructions. \n2. In a skillet, cook bacon until crispy. \n3. Remove bacon and set aside. \n4. Add garlic to the skillet and cook until fragrant. \n5. Remove skillet from heat. \n6. Beat eggs in a bowl and add Parmesan cheese. \n7. Drain spaghetti and add it to the skillet. \n8. Pour the egg mixture over the spaghetti and toss until the spaghetti is coated. \n9. Add bacon and toss again. \n10. Serve hot with extra Parmesan cheese."
      },
      {
        "id": 7,
        "name": "Beef Stroganoff",
        "style": "Russian",
        "prep_time": "20 minutes",
        "cook_time": "30 minutes",
        "instructions": "1. Cook egg noodles according to package instructions. \n2. Cut beef into thin strips. \n3. In a skillet, heat oil over medium-high heat. \n4. Add beef and cook until browned. \n5. Remove beef and set aside. \n6. Add onions and mushrooms to the skillet and sauté for 5-7 minutes. \n7. Add beef broth, Worcestershire sauce, and mustard. \n8. Return beef to the skillet and simmer for 10 minutes. \n9. Stir in sour cream and heat through. \n10. Serve hot over egg noodles."
      },
      {
        "id": 8,
        "name": "Taco Salad",
        "style": "Mexican",
        "prep_time": "20 minutes",
        "cook_time": "10 minutes",
        "instructions": "1. In a skillet, cook ground beef until browned. \n2. Add taco seasoning and water. \n3. Simmer for 5-7 minutes. \n4. In a bowl, mix together lettuce, tomatoes, and cheese. \n5. Add the cooked beef and toss. \n6. Top with crushed tortilla chips and drizzle with ranch dressing. \n7. Serve immediately."
      },
      {
        "id": 9,
        "name": "Chicken Parmesan",
        "style": "Italian",
        "prep_time": "15 minutes",
        "cook_time": "25 minutes",
        "instructions": "1. Preheat oven to 375 degrees F. \n2. Dip chicken breasts in beaten eggs, then coat with bread crumbs. \n3. Heat oil in a skillet over medium-high heat. \n4. Add chicken and cook until browned on both sides."
      }     
]

router.get('/', (req, res) => {
    res.send('')
  })
  
  router.get('/:id', (req, res) => {
    const recipeId = parseInt(req.params.id)
    console.log(req.params)
    const rec = recipeList.find(recipe => recipe.id === recipeId)
    
    res.json(rec)
  })
  
  router.post('/', (req, res) => {
    res.send('your recipe has been uploaded')
  })
  
  module.exports = router