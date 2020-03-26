const exec = require('child_process').exec;

exec('npm run start', (err, stdout, stderr) => {
    if (err){
        console.error(err);
    }else{
        console.log(stdout);
        console.log(stderr);
    };
    return; 
});

