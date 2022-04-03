// //// FIELDS ///////////////////////////////////////////////////////
const AuthorController = require("../controllers/author.controller");
console.log("********************** 5-Routes **********************");

// //// ROUTES ///////////////////////////////////////////////////////

module.exports = (app) => {

    // //// CREATE //////////////////////////////////////////////////
    app.post("/api/authors",AuthorController.createAuthor);
    // //// READ ///////////////////////////////////////////////////
    app.get("/api/authors",AuthorController.findAllAuthors);
    app.get("/api/author/:id",AuthorController.findAuthorById);
    // //// UPDATE ////////////////////////////////////////////////
    app.put("/api/authors/:id",AuthorController.updateAuthor);
    // //// DELETE ///////////////////////////////////////////////
    app.delete("/api/authors/:id",AuthorController.deleteAuthor);
}
console.log("----------------------- 5-Routes -----------------------");