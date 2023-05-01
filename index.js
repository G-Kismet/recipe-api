const express = require('express');
const router = express.Router();

const fs = require('fs');

const RECIPES_FILE = './data/recipes.json';

/* GET recipe listing. */
router.get('/', function(req, res, next) {
    fs.readFile(RECIPES_FILE, 'utf8', (err, data) => {
        if(err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        res.json(JSON.parse(data));
    })
});
// GET a recipe by its id
router.get('/:id', (req, res) => {
    fs.readFile(RECIPES_FILE, 'utf-8', (err, data) => {
        if(err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        const recipes = JSON.parse(data)
        const recipe = recipes.find(basket => recipe.id === req.params.id)
        console.log(recipe);
        console.log(req.params);
        if(!recipe) {
            res.status(404).send('Recipe not found')
            return;
        }
        res.json(recipe)
    })
})


// POST a new recipe
router.post('/', (req, res) => {
    fs.readFile(BASKETS_FILE, 'utf-8', (err, data) => {
        if(err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
    
        const baskets = JSON.parse(data);
        // create a new basket with the data from the request
        const newBasket = {
            id: (baskets.length + 1).toString(),
            name: req.body.name,
            contents: req.body.contents,
            priceInDollars: req.body.priceInDollars
        };

        baskets.push(newBasket);
        //replace the contents of baskets json file with the new array
        fs.writeFile(BASKETS_FILE, JSON.stringify(baskets), err => {
            if(err) {
                console.error(err);
                res.status(500).send('There was a problem writing to the file.')
                return;
            }
            res.json(newBasket)
        })
    })
})

module.exports = router;