import 'dotenv/config';
import { app } from './app';
import { logger } from './services/logger-service';

const PORT = process.env.PORT || 4000;

/**
 * The application needs to be started in this way for enabling Jest tests.
 */
const start = async () => {
  app.listen(PORT, () => {
    logger.info(`Initialization successful -> Listening on port ${PORT}!`);
  });
};

start();
