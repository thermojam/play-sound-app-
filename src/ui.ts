import { SoundPlayer } from './audio';
import type { SoundName } from './audio';

const images: Record<SoundName, string> = {
    rain: '/images/rainy-bg.jpg',
    summer: '/images/summer-bg.jpg',
    winter: '/images/winter-bg.jpg'
};

export function createUI(player: SoundPlayer) {
    const app = document.getElementById('app');
    if (!app) return;

    const sounds: SoundName[] = ['rain', 'summer', 'winter'];

    sounds.forEach(sound => {
        const btn = document.createElement('button');
        btn.classList.add('sound-btn');
        btn.textContent = sound.toUpperCase();

        btn.addEventListener('click', () => {
            const paused = player.toggle(sound);

            if (paused) {
                btn.classList.remove('active');
                document.body.style.backgroundImage = '';
                return;
            }

            setBackground(sound);

            document.querySelectorAll('.sound-btn')
                .forEach(el => el.classList.remove('active'));

            btn.classList.add('active');
        });

        app.appendChild(btn);
    });

    const volume = document.createElement('input');
    volume.type = 'range';
    volume.min = '0';
    volume.max = '1';
    volume.step = '0.01';
    volume.value = '0.5';

    volume.addEventListener('input', () =>
        player.setVolume(Number(volume.value))
    );

    app.appendChild(volume);
}

function setBackground(sound: SoundName) {
    document.body.style.backgroundImage = `url(${images[sound]})`;
}
