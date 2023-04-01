import { LogLevel } from '@koakh/typescript-simple-logger';
import { getEnumKeyFromEnumValue } from '../utils';
// env constants
const LOG_LEVEL: LogLevel = (process.env.LOG_LEVEL) ? getEnumKeyFromEnumValue(LogLevel, process.env.LOG_LEVEL) : LogLevel.ERROR;
const HTTP_SERVER_PORT: string = process.env.HTTP_SERVER_PORT || String(8080);
const HTTPS_SERVER_PORT: string = process.env.HTTPS_SERVER_PORT || String(8443);
const HTTP_REQUEST_DEFAULT_TIMEOUT: number = (process.env.HTTP_REQUEST_DEFAULT_TIMEOUT as unknown as number)  || 3000;
// to prevent nodejs https request "unable to verify the first certificate",
// use fullChain.pem in production server with LE Certs in .env, common.env 'HTTPS_SERVER_CERT=fullChain.pem'
const HTTPS_SERVER_CERT: string = process.env.HTTPS_SERVER_CERT || 'server.crt';
const HTTPS_SERVER_KEY: string = process.env.HTTPS_SERVER_KEY || 'server.key';
// simple key for guard
const TOKEN_GUARD_KEY: string = process.env.TOKEN_GUARD_KEY || 'HIDDEN_USE_ENV';
// log filename
const LOG_FILE_PATH: string = process.env.LOG_FILE_PATH || 'server.log';

// export defaults
export default {
  LOG_LEVEL,
  HTTP_SERVER_PORT,
  HTTPS_SERVER_PORT,
  HTTP_REQUEST_DEFAULT_TIMEOUT,
  HTTPS_SERVER_CERT,
  HTTPS_SERVER_KEY,
  TOKEN_GUARD_KEY,
  LOG_FILE_PATH,
};
