const exec = require('child_process').exec;


exec('NODE_ENV=production npm run build', (err, stdout, stderr) => {
    if (err){
        console.error(err); 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(err)
            }, 1000);
        })
    }else{
        console.log(stdout);
        console.log(stderr);
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('All Good');
        }, 1000);
    })
    
    .then(() => {
        exec('NODE_ENV=production npm run start', (err, stdout, stderr) => {
        if (err){
            console.error(err);
        }else{
            console.log(stdout);
            console.log(stderr);
        };
        return;    
        })
    });
});



