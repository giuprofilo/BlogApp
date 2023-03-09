import User from "../models/User";

export const getAllUsers = async (req, res, next) => {
  // get em nos usuarios do bd
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    // se n for encontrado usuario, retorna o status 404 not found
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json({users});

};
