import { createServer} from 'http';
const PORT = process.env.PORT;

const users = [
    { id: 1, name: 'John doe' },
    { id: 2, name: 'Niki Malmsten' },
    { id: 3, name: 'Lullu Huttunen' },
];

// Logeer midelware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route ahndler foir GET /api/users
const getUserHandler = (req,res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// Route handler for GET api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));

    if(user){
        res.write(JSON.stringify(user));
    }
    else { 
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not found'}));
    }
    res.end();
}

// Route handler for PST  /api/users
const createUserahndler = (req, res) => {
    let body = '';
    //Listen for data
    req.on('data', (chunk) => {
    body += chunk.toString();
});

req.on('end', () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
})
}


// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end();
}

const server= createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if(req.url === '/api/users' && req.method === 'GET'){
                getUserHandler(req, res);
            }
            else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                getUserByIdHandler(req, res);
            }
            else if (req.url === '/api/users' && req.method === 'POST') {
                createUserahndler(req,res);
            }
            else {
                notFoundHandler(req, res);
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`server runnin on ${PORT}`)
});