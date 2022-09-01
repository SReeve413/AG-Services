import { LoggerService } from './logger.service';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

export function dataServiceFactory (logger: LoggerService, http: HttpClient) {
  let dataService: DataService = new DataService(logger, http);

// Do more stuff to configure the service if neccessary

  logger.log('Creating a new Data Service with a factory function.');

  return DataService
}
