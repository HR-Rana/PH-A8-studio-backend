import { studiosCollection } from "../databaseCofig/databaseConfig.js";



export const getAllStudiosController = async (req, res) => {
  const data = await studiosCollection.find().toArray()
  res.send(data)

  console.log(data);
}



export const createStudiosController = (req, res) => {
  const studioData = req.body;
  console.log(studioData);
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