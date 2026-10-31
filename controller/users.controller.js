
const getUsers =(req, res)=>{
    res.send("all users are available")
}


const createUsers =(req, res)=>{
    res.send("user created successfully")
}



const updateUser =(req, res)=>{
    res.send("updated the user")
}





module.export ={
    getUsers, createUsers, updateUser
}