const { getAllCategories } = require("./categories.controller");
const {createItem , getAllItems } = require('./item.controller');
const { getAllHighlights } = require("./highlight.controller");

module.exports = {
    getAllItems,
    createItem,
    getAllCategories,
    getAllHighlights
};
