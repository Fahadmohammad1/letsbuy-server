const sendToken = (user, statusCode, res) => {
  const token = user.getToken();
  return res.status(statusCode).send({ success: true, accesToken: token });
};

export default sendToken;
