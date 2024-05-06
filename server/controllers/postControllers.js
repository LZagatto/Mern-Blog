//============================create a post
//POST : api/posts
//protected
const createPost = async(req, res, next) => {
    res.json("Create Post")
}

//============================get all post
//POST : api/posts
//unprotected
const getPosts = async(req, res, next) => {
    res.json("Get all posts")
}

//============================get single post
//GET : api/posts/:id
//unprotected
const getPost = async(req, res, next) => {
    res.json("Get single Post")
}

//============================get posts by category
//GET : api/posts/categories/:category
//unprotected
const getCatPosts = async(req, res, next) => {
    res.json("Get Post by category")
}

//============================get author post
//GET : api/posts/users/:id
//unprotected
const getUserPosts = async(req, res, next) => {
    res.json("Get user posts")
}

//============================edit post
//PATCH : api/posts/:id
//protected
const editPost = async(req, res, next) => {
    res.json("Edit Post")
}

//============================delete post
//DELETE : api/posts/:id
//protected
const deletePost = async(req, res, next) => {
    res.json("Delete Post")
}

module.exports = {createPost, getPosts, getPost, getCatPosts, getUserPosts, editPost, deletePost}