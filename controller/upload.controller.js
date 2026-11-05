import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "studiospace/studios",
    allowed_formats: ["jpg", "jpeg", "png", "webp", "gif"],
    public_id: (req, file) => `studio-${Date.now()}`,
  },
});

export const uploadMiddleware = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
}).single("image");












// import multer from "multer";
// import path from "path";
// import crypto from "crypto";
// import fs from "fs";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export const uploadsDir = path.join(__dirname, "..", "uploads");

// fs.mkdirSync(uploadsDir, { recursive: true });

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadsDir);
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname).toLowerCase();
//     const uniqueName = `studio-${Date.now()}-${crypto.randomBytes(4).toString("hex")}${ext}`;
//     cb(null, uniqueName);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
//   if (!allowedTypes.includes(file.mimetype)) {
//     return cb(new Error("Only jpeg, png, webp and gif images are allowed"));
//   }
//   cb(null, true);
// };

// export const uploadMiddleware = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 },
// }).single("image");

// export const uploadImageController = (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({
//       success: false,
//       message: "No image file uploaded",
//     });
//   }

//   const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

//   res.status(201).json({
//     success: true,
//     message: "Image uploaded successfully",
//     data: { imageUrl },
//   });
// };
