import User from "../models/user.js";

// updated user cartData : api/cart/update
export const updateCart = async (req, res) => {
  try {
    // const { userId, cartItems } = req.body;
    const { cartItems } = req.body;
    const userId = req.user.id; // Get from auth middleware
    await User.findByIdAndUpdate(userId, { cartItems });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};
