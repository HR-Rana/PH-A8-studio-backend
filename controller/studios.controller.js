import { ObjectId } from "mongodb";
import { studiosCollection } from "../databaseCofig/databaseConfig.js";



export const getAllStudiosController = async (req, res) => {
  const data = await studiosCollection.find().toArray()
  res.send(data)

  console.log(data);
}



export const createStudiosController = async (req, res) => {
  const studioData = req.body;
  console.log(studioData);

  try {
    const result = await studiosCollection.insertOne(studioData);

    res.status(201).json({
      success: true,
      message: "Studio created successfully",
      data: { _id: result.insertedId, ...studioData },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create studio",
      error: error.message,
    });
  }
};





export const updateStudiosController = async(req, res) => {
 const id = req.params;

 const updateData = await studiosCollection.updateOne(
  {_id: new ObjectId(id)},
  {$set:req.body}
 )


 res.status(200).json({
  success: true,
  message: "Studio updated successfully",
  data: updateData,
 })


};



export const deleteStudiosController = async (req, res) => {
  const id = req.params;

  const response = await studiosCollection.deleteOne({
    _id:new ObjectId(id)
  })

  console.log(response);

  res.status(200).json({
    success: true,
    message: "Studio deleted successfully",
    data: response,
  });
};



