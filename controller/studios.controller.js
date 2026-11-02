

export const getAllStudiosController = (req, res) => {
  const studioData = req.body;

  console.log(studioData);

  res.status(201).json({
    success: true,
    message: "Studio created successfully",
    data: studioData,
  });
}



export const createStudiosController = (req, res) => {
  const studioData = req.body;

  console.log(studioData);

  res.status(201).json({
    success: true,
    message: "Studio created successfully",
    data: studioData,
  });
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