import jwt from "jsonwebtoken";

const genrateAndSetToken = (data, res) => {
  try {
    // Generate a JWT token
    const token = jwt.sign({ data }, process.env.PASS_KEY, {
      expiresIn: "1d", // Token expiration time (1 day)
    });

    // Set the token as a cookie
    res.cookie("token", token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Ensures cookies are sent over HTTPS in production
      sameSite: "strict", // Prevents CSRF attacks
      maxAge: 24 * 60 * 60 * 1000, // Cookie expiration time (1 day)
    });

    return token;
  } catch (error) {
    console.error("Error generating token:", error.message);
    throw new Error("Failed to generate authentication token");
  }
};

export default genrateAndSetToken;
