const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 7000;

// Setup static folder
//app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {id: 1, title: 'Post one'},
    {id: 2, title: 'Post two'},
    {id: 3, title: 'Post tree'}
];

// Get all posts
app.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit));
    }
    else {
        res.json(posts);
    }
    res.status(200).json(posts);
});

// Get single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post) {
        res.status(404).json({msg: `A post wit the ${id} was not found`})
    }
    else {
        res.status(200).json(post)
    }
});

app.listen(port, () => console.log(`server is running on port ${port}`));