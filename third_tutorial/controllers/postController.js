

let posts = [
    {id: 1, title: 'Post one'},
    {id: 2, title: 'Post two'},
    {id: 3, title: 'Post tree'}
];


// Get all posts
export const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    
    res.status(200).json(posts);
};

// Get single post
export const getPost =  (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post) { 
        const error = new Error(`A post with the id of: ${id} was not found`);
        error.status = 404 ;
        return next(error);
    }
    
        res.status(200).json(post)
    
};

// Create a post

export const createPost =  (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }

    if (!newPost.title){
        const error = new Error(`Please include a title`);
        error.status = 400;
        return next(error);
    }

    posts.push(newPost);
    res.status(201).json(posts);
};


// Update a post

export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({msg: `A post wit the ${id} was not found`});
    }

    post.title = req.body.title;
    res.status(200).json(posts);
};

// Delete a post

export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({msg: `A post wit the ${id} was not found`});
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
};