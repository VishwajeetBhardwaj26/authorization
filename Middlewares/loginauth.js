const jwt=require("jsonwebtoken");
const JWTPRIVATEKEY='dhsgkjljhgsdofghwoiitjwefnsdfjkhdfoidf';

 const isAuthenticatedUser = async(req,res,next)=>{
    try {
        const {token} = req.cookies;
        const decodedData =jwt.verify(token,JWTPRIVATEKEY);
        if(decodedData)
              next();
        
    } catch (error) {
        res.send("kindly login first");
    }
    
    
};
module.exports={isAuthenticatedUser}