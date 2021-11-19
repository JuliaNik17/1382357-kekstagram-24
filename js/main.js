import './util.js';
import './render-user-pictures.js';
import './render-big-picture.js';
import './get-social-comments.js';
import {onImgUploadCancelElementClick} from './img-upload.js';
import './effect-level-slider-element.js';
import './server.js';
import './on-scale-control-bigger-element-click.js';
import './on-scale-control-smaller-element-click.js';
import {setImgUploadFormSubmit} from './set-img-upload-form-submit.js';
import './render-random-picture-cards.js';
import './render-discussed-picture-cards.js';
import './on-img-upload-input-element-change.js';

setImgUploadFormSubmit(onImgUploadCancelElementClick);
