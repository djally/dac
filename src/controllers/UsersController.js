import model from '../db/models';

const { User } = model;
/**
 * Users Controller
 */
class UsersController {
  /**
   * @param {Object} req
   * @param {Object} res
   * @returns {Object} list of users
   */
  static async list(req, res) {
    return User.findAll().then(users => res.status(200).send({
      data: users
    }));
  }
}

export default UsersController;
