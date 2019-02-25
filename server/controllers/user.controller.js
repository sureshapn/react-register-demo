import User from '../models/user';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export const register = async(req, res) => {
  const { name, password, email, company } = req.body;
  const user = new User({
    name,
    email,
    password,
    company,
  });
  const data = await user.save();
  res.json({ status: 'success', data });
};
