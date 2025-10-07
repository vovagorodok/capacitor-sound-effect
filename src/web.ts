import { WebPlugin } from '@capacitor/core';

import type { SoundEffectPlugin } from './definitions';

export class SoundEffectWeb extends WebPlugin implements SoundEffectPlugin {

  private audioMap: { [id: string]: HTMLAudioElement | undefined } = {}

  constructor() {
    super()
  }

  async loadSound({ id, path }: { id: string, path: string }): Promise<void> {
    const audio = new Audio()
    audio.setAttribute('src', path)
    audio.load()
    this.audioMap[id] = audio
  }

  async play({ id }: { id: string }): Promise<void> {
    const audio = this.audioMap[id]
    if (audio) audio.play()
  }
}

