const mongoose=require("mongoose")

const url = "mongodb+srv://quasarkid123:0123456789@cluster0.n63bm9o.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

    const logInSchema=new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    })
    
    const LogInCollection=new mongoose.model('LogInCollection',logInSchema)
    
    module.exports=LogInCollection