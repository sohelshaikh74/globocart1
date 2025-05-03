import Address from "../models/address.js";

// add address : /api/address/add
export const addAddress = async (req, res) => {
  try {
    // const { address, userId } = req.body;
    const { address } = req.body;
    const userId = req.user.id; // Get from auth middleware
    await Address.create({ ...address, userId });
    res.json({ success: true, message: "Address added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// get address : /api/address/get
export const getAddress = async (req, res) => {
  try {
    // const { userId } = req.body;
    const userId = req.user.id;
    const addresses = await Address.find({ userId });
    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
