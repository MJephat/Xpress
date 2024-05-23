import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";

const app = express();
  console.log("starting connecting.... 0");


app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
  })
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../blog/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

console.log("starting connecting.... 1");

const upload = multer({ storage });

app.post("/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  // console.log(file.size);
  console.log("Done uploading");
  res.status(200).json(file.filename);
});

  console.log("starting connecting.... 2");


app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// app.listen(8080, () => {
//   console.log("starting connecting....3 ");
//   console.log("Connected and running on port 8080");
// });
const PORT = process.env.port || 8080;
app.listen(PORT, console.log(`Connected and running on port ${PORT}`));