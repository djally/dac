module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        message: 'Please enter your names'
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        message: 'Please enter your username'
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: {
        args: false,
        message: 'Please enter your email'
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        message: 'Please enter your phone number'
      }
    },
    sociaId: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      },
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      }
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: {
        args: false,
        comment: 'verified must be false or true'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      }
    }
  }, {
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hashSync(user.password, 8);
      },
    },
    instanceMethods: {
      validatePassword: async function(password) {
        return await bcrypt.compareSync(password, this.password);
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};