import {encode, decode} from 'js-base64';

export const encrypt_password = pass => encode(pass);

export const decrypt_password = pass => decode(pass);
