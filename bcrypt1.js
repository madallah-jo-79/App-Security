const bcrypt = require('bcrypt');

let name="Madallah";
const saltRound=10;

bcrypt.hash(name,saltRound,(err,hashname)=>{
    if(err){
        console.log("Error in Hashing");
        return;
    }

    console.log('Hashing name=', hashname);

    name="Madallah1";
    bcrypt.compare(name,hashname,(err,result)=>{
        if(err){
            console.log("Error in Hashing");
            return;
        }
    if (result){
        console.log('Correct Password');}
        else{
        console.log("Wrong Password")
    }
    });
});

