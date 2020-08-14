import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  logStatusChange(status : string) {
    console.log(`A service status change ${status}`);
  }
}
