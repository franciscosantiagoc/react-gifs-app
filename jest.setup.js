import 'whatwg-fetch';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

jest.mock('./src/Config/config.js',()=>({
    getEnvironments: () => ({...process.env})
}))