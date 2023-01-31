const sendToken = (user, statusCode, res) => {
  const token = user.getToken();
  res.status(statusCode).send({ success: true, accesToken: token });
};

module.exports = sendToken;
