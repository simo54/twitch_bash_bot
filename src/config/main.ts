import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import initBot from '../../src/app/initBot';
import initAppService from '../../src/app/initAppService';
import express from 'express';

export const app = express();

/**
 * ==== INIT APPLICATIONS ====
 */
initBot(app);
initAppService(app);
