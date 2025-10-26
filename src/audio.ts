export type SoundName = 'rain' | 'summer' | 'winter';

const soundFiles: Record<SoundName, string> = {
    rain: '/sounds/rain.mp3',
    summer: '/sounds/summer.mp3',
    winter: '/sounds/winter.mp3'
};

export class SoundPlayer {
    private audio: HTMLAudioElement | null = null;
    private current: SoundName | null = null;

    toggle(sound: SoundName): boolean {
        if (this.current === sound && this.audio) {
            this.audio.paused ? this.audio.play() : this.audio.pause();
            return this.audio.paused;
        }

        this.play(sound);
        return false;
    }

    play(sound: SoundName): void {
        if (this.audio) this.audio.pause();

        this.audio = new Audio(soundFiles[sound]);
        this.audio.loop = true;
        this.audio.play();

        this.current = sound;
    }

    setVolume(v: number): void {
        if (this.audio) this.audio.volume = v;
    }
}
