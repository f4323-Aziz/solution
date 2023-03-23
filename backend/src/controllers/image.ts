import { Request, Response } from 'express';
import { FileNotFoundError } from '../errors/file-not-found-error';
import { logger } from '../services/logger-service';

const uploadImage = async (req: Request, res: Response) => {
  if (!req.files) {
    throw new FileNotFoundError();
  }

  logger.info(JSON.stringify(req.files));

  res.send({ uploadedFiles: req.files });
};

export { uploadImage };
