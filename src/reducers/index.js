import { combineReducers } from 'redux';
import auth from './auth.js';
import notifications from './notifications.js';
import loading from './loading.js';
import users from './users.js';
import resources from './resources.js';


export default combineReducers({
	auth, notifications, loading, users, resources
});