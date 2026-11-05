import { ObjectId } from "mongodb";
import { studiosCollection } from "../databaseCofig/databaseConfig.js";



export const getAllStudiosController = async (req, res) => {
  const data = await studiosCollection.find().toArray()
  res.send(data)


}



export const createStudiosController = async (req, res) => {
  try {
    const { name, category, location, price } = req.body;

    if (!name || !category || !location || !price) {
      return res.status(400).json({
        success: false,
        message: "Studio name, category, location and price are required",
      });
    }

    let tags = [];
    try {
      if (req.body.tags) {
        tags = JSON.parse(req.body.tags);
      }
    } catch (error) {
      tags = [];
    }

    const imageUrl = req.file?.path ?? "";

    const studioData = {
      name,
      category,
      location,
      price: Number(price),
      description: req.body.description ?? "",
      capacity: req.body.capacity ? Number(req.body.capacity) : "",
      rating: req.body.rating ? Number(req.body.rating) : 0,
      image: imageUrl || "White Cyc",
      tags,
      status: "Pending",
      bookings: 0,
    };

    const result = await studiosCollection.insertOne(studioData);

    res.status(201).json({
      success: true,
      message: "Studio created successfully",
      data: {
        _id: result.insertedId.toString(),
        ...studioData,
        imageUrl,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create studio",
      error: error.message,
    });
  }
};





export const updateStudiosController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid studio id",
      });
    }

    const updateData = { ...req.body };

    if (req.body.tags) {
      try {
        updateData.tags = JSON.parse(req.body.tags);
      } catch (error) {
        delete updateData.tags;
      }
    }

    if (updateData.price !== undefined) {
      updateData.price = Number(updateData.price);
    }

    if (updateData.rating !== undefined && updateData.rating !== "") {
      updateData.rating = Number(updateData.rating);
    }

    delete updateData._id;

    const imageUrl = req.file?.path;
    if (imageUrl) {
      updateData.image = imageUrl;
    }

    const response = await studiosCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    res.status(200).json({
      success: true,
      message: "Studio updated successfully",
      data: {
        modifiedCount: response.modifiedCount,
        imageUrl,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update studio",
      error: error.message,
    });
  }
};



export const deleteStudiosController = async (req, res) => {
  const { id } = req.params;

  const response = await studiosCollection.deleteOne({
    _id: new ObjectId(id)
  })

  console.log(response);

  res.status(200).json({
    success: true,
    message: "Studio deleted successfully",
    data: response,
  });
};



