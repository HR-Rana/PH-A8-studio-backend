 const getStudios =(req, res)=>{
    res.send("api is working successfully")
}



 const createStudios = (req, res)=>{
    res.send("user created succesfully")
 }



 const updateStudio = (req, res)=>{
    const id = req.id;
    const data = req.body


    const result = collection.updateone({_id:id}, $set{body})
    res.send("updated successfully")

 }



 const deleteStudio =(req, res)=>{
    const id = req.params

    res.send("studio deleted successfully..!")
 }