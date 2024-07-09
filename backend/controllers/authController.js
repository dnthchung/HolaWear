const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//gọi ra các đối tượng từ db
const User = db.user;
const Role = db.role;

//generate access token : chứa thông tin user trả về, muốn nó trả về cái gì thì thêm vào object
//thiếu hạn sử dụng, nếu không thì nó sẽ mặc định là 15 phút :       expiresIn: "15m",
function generateAccessToken(user) {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_ACCESS_KEY,
    {
      expiresIn: "15m",
    },
  );
}

// Generate refresh token
async function generateRefreshToken(user) {
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_REFRESH_KEY, { expiresIn: "1d" });

  user.refreshToken = token;
  await user.save();

  return token;
}

// Request refresh token
async function requestRefreshToken(req, res, next) {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json({ message: "You're not Authenticated." });

    const foundUser = await User.findOne({ refreshToken }).populate("role").exec();
    if (!foundUser) return res.status(403).json({ message: "Refresh token is not valid" });

    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, async (err, user) => {
      if (err) return res.status(403).json({ message: "Refresh token is not valid" });

      const newAccessToken = generateAccessToken(foundUser);
      const newRefreshToken = await generateRefreshToken(foundUser);

      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
        path: "/",
      });

      res.status(200).json({ accessToken: newAccessToken });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

//sign up action
async function signup(req, res, next) {
  try {
    if (req.body) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });

      if (req.body.role) {
        const roleFound = req.body.role;
        const roleFoundInDB = await Role.findOne({ name: roleFound }).exec();
        newUser.role = roleFoundInDB._id;
      } else {
        const defaultRole = await Role.findOne({ name: "user" }).exec();
        newUser.role = defaultRole._id;
      }

      await newUser.save();
      res.status(201).json({ message: "ok", user: newUser });
    }
  } catch (error) {
    next(error);
  }
}

// Sign in action
async function signin(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate("role").exec();
    if (!user) return res.status(404).json({ message: "User not found" });

    //check status account

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ message: "Wrong password" });

    const accessToken = generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      path: "/",
    });

    res.status(201).json({
      message: "Logged in successfully",
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role.name,
        phone: user.phone,
        gender: user.gender,
        shippingAddress: user.shippingAddress,
      },
    });
  } catch (error) {
    next(error);
  }
}

//log out
async function logout(req, res, next) {
  try {
    // Decode access token to get user ID
    const token = req.headers.token.split(" ")[1];
    const payload = jwt.decode(token);
    const userId = payload.id;

    // Update refresh token of user to null
    await User.findByIdAndUpdate(userId, { refreshToken: null }).exec();

    // Clear the refresh token cookie
    res.clearCookie("refreshToken");

    // Send success response
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signup,
  signin,
  logout,
  requestRefreshToken,
};
