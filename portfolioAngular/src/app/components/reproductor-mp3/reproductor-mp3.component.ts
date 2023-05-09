import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor-mp3',
  templateUrl: './reproductor-mp3.component.html',
  styleUrls: ['./reproductor-mp3.component.css']
})
export class ReproductorMp3Component implements OnInit {

  audio = new Audio();
  playing = false;

  constructor() {
    this.audio.src = './assets/Mp3/Spirit of Fire.mp3';
    this.audio.load();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  playPause() {
    if (this.playing) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.playing = !this.playing;
  }
}





