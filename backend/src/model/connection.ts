import { connect } from 'mongoose';

const options = {
  user: 'user',
  pass: 'password',
  dbName: 'applicationManager',
};

connect('mongodb://localhost:27017/', options);
