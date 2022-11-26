import { Request, Response } from 'express';
import { MovieModel } from '../models/Movie';
import { Logger } from '../../config/logger';

export const createMovie = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newMovie = await MovieModel.create(data);

    return res.status(201).json(newMovie);
  } catch (err: any) {
    Logger.error(`Error: ${err.message}`);
    return res.status(500).json({ error: 'Try again later' });
  }
};

export const findMovieById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    return res.status(200).json(movie);
  } catch (err: any) {
    Logger.error(`Error: ${err.message}`);
    return res.status(500).json({ error: 'Try again later' });
  }
};

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await MovieModel.find();
    return res.status(200).json(movies);
  } catch (err: any) {
    Logger.error(`Error: ${err.message}`);
    return res.status(500).json({ error: 'Try again later' });
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    await movie.delete();
    return res.status(204).send();
  } catch (err: any) {
    Logger.error(`Error: ${err.message}`);
    return res.status(500).json({ error: 'Try again later' });
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    await MovieModel.updateOne({ _id: id }, data);
    return res.status(200).json(data);
  } catch (err: any) {
    Logger.error(`Error: ${err.message}`);
    return res.status(500).json({ error: 'Try again later' });
  }
};
