console.log(process.argv);
console.log(process.argv[2]);

console.log(process.env);

console.log(process.pid);

console.log(process.cwd());         


console.log(process.title); 

console.log(process.memoryUsage()); 

console.log(process.uptime()); 

process.on('exit', (code) =>{
    console.log(`about to exti the code ${code}`); 
});

process.exit(0);

console.log('hi whore'); 