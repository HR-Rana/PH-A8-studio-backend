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





export const updateStudiosController = (req, res) => {
  const studioData = req.body;

  console.log(studioData);

  res.status(200).json({
    success: true,
    message: "Studio updated successfully",
    data: studioData,
  });
};



export const deleteStudiosController = (req, res) => {
  const studioData = req.body;

  console.log(studioData);

  res.status(200).json({
    success: true,
    message: "Studio deleted successfully",
    data: studioData,
  });
};




// module.exports = {
//     getAllStudiosController,
//     createStudiosController,
//     updateStudiosController,
//     deleteStudiosController
// };