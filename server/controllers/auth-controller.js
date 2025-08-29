const home = async (req, res) => {
    try{
        res.status(200).send('Hello World! using controller');
    }catch(error){
        console.log(error);
    }
}
const register = async (req, res) => {
    try{
        res.status(200).send('Hello World! using controller again');    
    }catch(error){
        res.status(500).send({message: "Error in register controller"});
    }
}
module.exports = { home , register   };    
