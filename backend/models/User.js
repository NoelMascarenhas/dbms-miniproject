const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');

const sequelize = new Sequelize('seminar1', 'root', 'noel', {
  host:'localhost',   // to connect mysql database
  dialect: 'mysql'
});
sequelize.authenticate()
  .then(() => {
    console.log('User Connected to MySQL server');           // to check connected or not
  })
  .catch((error) => {
    console.error('Unable to connect to MySQL server:', error);
  });

  const students = sequelize.define('student', {
    Sno: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Sname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Panel: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Mobile:{
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cpassword: {
      type: Sequelize.STRING,
      allowNull: false
    },
    confirmPassword :{
      type: Sequelize.STRING,
      allowNull:false
    }
  });

  const coordinators = sequelize.define('seminar_coordinator', {
    Fid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Fname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Mobile:{
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cpassword: {
      type: Sequelize.STRING,
      allowNull: false
    },
    confirmPassword :{
      type: Sequelize.STRING,
      allowNull:false
    }
  });

  const guides = sequelize.define('guide', {
    Fid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Fname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Mobile:{
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Domain: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cpassword: {
      type: Sequelize.STRING,
      allowNull: false
    },
    confirmPassword :{
      type: Sequelize.STRING,
      allowNull:false
    }
  });

  const topics = sequelize.define('topic',{
    Sno: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'student',
        key: 'Sno'
      }
    },
    topic_1: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    topic_2: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    topic_3: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  });

  const review1 = sequelize.define('review_1', {
    Sno: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'student',
        key: 'Sno'
      }
    },
    Topic: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'topic',
        key: 'topic_1'
      }
    },
    Fid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'guide',
        key: 'Fid'
      }
    },
    Domain:{
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'guide',
        key: 'Domain'
      }
    },
    Date:{
      type: Sequelize.DATE,
      allowNull: false
    },
    Marks:{
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
/*
  const  review1_results = sequelize.define('review1_results', {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    topic: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    marks: {
      type: Sequelize.STRING,
      allowNull: false,
    }
   
  });
  const  review2_results = sequelize.define('review2_results', {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    marks: {
      type: Sequelize.STRING,
      allowNull: false,
    }
   
  });
  const  review3_results = sequelize.define('review3_results', {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    marks: {
      type: Sequelize.STRING,
      allowNull: false,
    }
   
  });


  const Ppt = sequelize.define('Ppt', {
    guideEmail: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'guides',
        key: 'email'
      }
    },
    studentEmail: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'students',
        key: 'email'
      }
    },

    filename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pptData : {
      type: Sequelize.BLOB('long'),
      allowNull: false,
    },
  });

 const Ppt3 = sequelize.define('Ppt3', {
    guideEmail: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'guides',
        key: 'email'
      }
    },
    studentEmail: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'students',
        key: 'email'
      }
    },

    filename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pptData : {
      type: Sequelize.BLOB('long'),
      allowNull: false,
    },
  });

  //
  review1.belongsTo(guides, { foreignKey: 'guideEmail' });
review1.belongsTo(students, { foreignKey: 'studentEmail' });

Ppt.belongsTo(guides, { foreignKey: 'guideEmail' });
Ppt.belongsTo(students, { foreignKey: 'studentEmail' });

Ppt3.belongsTo(guides, { foreignKey: 'guideEmail' });
Ppt3.belongsTo(students, { foreignKey: 'studentEmail' });

  sequelize.sync()
  .then(() => {
    console.log('Schema synchronized with database');   // 
  })
  .catch((error) => {
    console.error('Unable to synchronize schema with database:',error);
  });
*/
//module.exports =  {students,coordinators,guides,review1,review1_results,Ppt,Ppt3,review2_results ,review3_results} 
module.exports = {students,coordinators,guides,topics,review1}