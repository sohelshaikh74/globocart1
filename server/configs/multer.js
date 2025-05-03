import multer from "multer";
export const upload = multer({
  // set the stoarge location
  storage: multer.diskStorage({}),
});
