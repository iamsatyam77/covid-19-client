import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { GloablErrorHandler } from './gloabl-error-handler';

@NgModule({
  declarations: [],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GloablErrorHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule],
})
export class CoreModule {}
