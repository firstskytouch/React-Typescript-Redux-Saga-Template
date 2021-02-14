import apisauce from 'apisauce';

const baseURL = '/';

const api = apisauce.create({ baseURL });

const getAllUser = () => {
  return api.get('users');
};

// let's return back our create method as the default.
export default {
  getAllUser,
};
