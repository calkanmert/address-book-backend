import jwt from 'jsonwebtoken';

const generateAccessToken = (data: any) => {
  return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET_KEY || 'PmRZjuSWSF', { expiresIn: '1h' });
}

const generateRefreshToken = (data: any) => {
  return jwt.sign(data, process.env.REFRESH_TOKEN_SECRET_KEY || 'PmRZjuSWSF', { expiresIn: '1y' });
}

export default {
  generateAccessToken,
  generateRefreshToken,
}
