const bcrypt = require('bcrypt');


const hashPassword = async (pw)=>{

const hash = await bcrypt.hash(pw,12);

console.log(hash);
}

const login = async(pw,hashedPw)=>{
  const result = await bcrypt.compare(pw,hashedPw);
  if(result){
    console.log("LOGGED YOU IN! SUCCESSFUL MATCH!")
  }else{
    console.log("INCORRECT!")
  }
}

// hashPassword('monkey');
login('monkey122','$2b$12$QspSKj/TlDjfIx/mgPYAgOKQNeehCcDxsnkE7cms2jrn80cBTGxcq')
