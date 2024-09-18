const { Item, Category } = require('../models');

exports.createItem = async (req, res) => {
    try {
        const { title, price, categoryId, description, image } = req.body;

        console.log('Request body:', req.body);

        if (!title || !price || !categoryId || !description) {
            return res.status(400).json({
                error: "CreateItem.controller.js: Faltan variables. " +
                    "Title: " + title + ", " +
                    "Price: " + price + ", " +
                    "CategoryId: " + categoryId + ", " +
                    "Description: " + description,
            });
        }

        const NewItem = await Item.create({
            title,
            price,
            description,
            categoryId,
            image,
        });

        res.status(200).json(NewItem);

    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.findAll({
            include: [{
                model: Category,
                as: 'category',
                attributes: ['name']
            }]
        });

        res.status(200).json(items);
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ error: 'Failed to fetch items' });
    }
};
