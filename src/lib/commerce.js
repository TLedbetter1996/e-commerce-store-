import Commerce from '@chec/commerce.js';

//creating our commerce key connected from Commercejs
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true); //inputing our public key 