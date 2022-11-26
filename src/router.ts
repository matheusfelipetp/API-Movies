import { Router } from 'express';
import {
  createMovie,
  deleteMovie,
  findMovieById,
  getAllMovies,
  updateMovie,
} from './controllers/movieController';
import { validate } from './middleware/handleValidation';
import { movieCreateValidation } from './middleware/movieValidation';

export const router = Router();

router.get('/movies', getAllMovies);

router.get('/movies/:id', findMovieById);

router.post('/movies', movieCreateValidation(), validate, createMovie);

router.delete('/movies/:id', deleteMovie);

router.patch('/movies/:id', movieCreateValidation(), validate, updateMovie);
