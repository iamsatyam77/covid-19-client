import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable()
export class GloablErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}
  handleError(error: any) {
    const notifier = this.injector.get(NotificationService);
    let message = '';
    let stackTrace = '';

    if (error instanceof HttpErrorResponse) {
      // Server Error
      message = this.getServerMessage(error);
      stackTrace = this.getServerStack(error);
      notifier.showError(message);
    } else {
      // Client Error
      message = this.getClientMessage(error);
      stackTrace = this.getClientStack(error);
      notifier.showError(message);
    }
  }

  getClientMessage(error: Error): string {
    if (!navigator.onLine) {
      return 'No Internet Connection';
    }
    return error.message ? error.message : error.toString();
  }

  getClientStack(error: Error): string {
    return error.stack || '';
  }

  getServerMessage(error: HttpErrorResponse): string {
    if (error.status === 400) {
      return error.error.error;
    }
    return error.statusText;
  }

  getServerStack(error: HttpErrorResponse): string {
    // handle stack trace
    return 'stack';
  }
}
