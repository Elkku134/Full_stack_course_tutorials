import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello' + name);
}

function goodbyeHandler(name){
    console.log('Goodbye world' + name);
}

myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

myEmitter.emit('greet', ' Jhon') ;
myEmitter.emit('goodbye', ' Jooohn'); 

myEmitter.on('error', (err) => {
    console.log('AN error occurred', err)
});

myEmitter.emit('error', new Error('somethinf went wronf'));