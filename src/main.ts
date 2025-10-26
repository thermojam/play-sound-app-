import { SoundPlayer } from './audio';
import { createUI } from './ui';
import './style.css'

const player = new SoundPlayer();
createUI(player);
