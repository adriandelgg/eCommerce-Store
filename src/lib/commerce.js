import Commerce from '@chec/commerce.js';
require('dotenv').config();

export const commerce = new Commerce(process.env.REACT_APP_PUBLIC_KEY, true);
