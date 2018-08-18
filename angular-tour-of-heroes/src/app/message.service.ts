import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) //single instance of this service across the whole application.
export class MessageService {

  constructor() { }

  messages: string[] = [];
 
  public add(message: string) {
    this.messages.push(message);
  }
 
  public clear() {
    this.messages = [];
  }
}
