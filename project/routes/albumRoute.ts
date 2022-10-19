import express from 'express'
import { AlbumController } from "../controllers/album-controller"
import { AlbumService } from "../services/album-service"
import { knex } from '../utils/db';
import { isLoggedIn } from '../utils/guard';


export const albumRoute = express.Router();

let albumService = new AlbumService(knex)
let albumController = new AlbumController(albumService)

albumRoute.post('/upload', isLoggedIn, albumController.uploadToAlbum);
albumRoute.post('/me', albumController.me);
albumRoute.get('/', isLoggedIn, albumController.getAlbum);
albumRoute.delete('/', isLoggedIn, albumController.deletePhotoFromAlbum);


