import { Observable } from 'tns-core-modules/data/observable';
import { Mediapicker } from 'nativescript-mediapicker';

export class HelloWorldModel extends Observable {
  public message: string;
  private mediapicker: Mediapicker;

  constructor() {
    super();

    this.mediapicker = new Mediapicker();
    this.message = this.mediapicker.message;
  }
}
