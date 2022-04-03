// //// FIELDS //////////////////////////////////////////
const Author = require("../models/author.model");
console.log("***************** 4-Controller ******************");



// //// CREATE /////////////////////////////////////////////////
/**
 * Create a new Author
 * @param {*} request 
 * @param {*} response 
 */
const createAuthor = (request, response) =>{
    console.log("Controller-create-author-body");
    console.log("Body", request.body);
    Author.create(request.body)
        .then(author => {
            response.statusMessage = "Author Created"
            response.status(200).json({author})
        })
        .catch(err => {
            response.statusMessage = "Something went Wrong"
            response.status(400).json({error:err})
        })
}

/**
 * Find all Authors
 * @param {*} request 
 * @param {*} response 
 */
const findAllAuthors = (request,response) => {
    console.log("Controller-find-authors");
    Author.find()
        .then(authors=>{
            response.statusMessage = 'Authors Found'
            response.status(200).json({authors})
        })
        .catch(err=>{
            response.statusMessage="Something Went Wrong"
            response.status(400).json({error:err})
        })
}

/**
 * Update an Author
 * @param {*} request 
 * @param {*} response 
 */
const updateAuthor = (request,response) =>{
    console.log("Controller-update-author");
    Author.findByIdAndUpdate(request.params.id, request.body, {new:true, runValidators:true})
        .then(newAuthor => {
            response.statusMessage = 'author updated'
            response.status(200).json({author:newAuthor})
        })
        .catch(err =>{
            response.statusMessage = 'Something went Wrong'
            response.status(400).json({error:err})
        })
}

const deleteAuthor = (request, response) => {
    console.log("Controller-delete");
    Author.findByIdAndDelete(request.params.id)
        .then(()=>{
            response.statusMessage = 'Deleted Success'
            response.status(204).end()
        })
        .catch(err=>{
            response.statusMessage = 'Something went wrong'
            response.status(400).end()
        })
}

const findAuthorById = (request, response) =>{
    console.log("controller-find-by-id");
    Author.findById(request.params.id)
        .then(author=>{
            response.statusMessage = 'Author found'
            response.status(200).json({author})
        })
        .catch(err=>{
            response.statusMessage = 'Something went wrong'
            response.status(400).json({error:err})
        })
}
// //// EXPORTS //////////////////////////////////////////////////
module.exports = {
    createAuthor,
    findAllAuthors,
    updateAuthor,
    deleteAuthor,
    findAuthorById
}
console.log("------------------ 4-controller ------------------");