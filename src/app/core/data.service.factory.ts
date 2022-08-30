import { LoggerService } from './logger.service';
import { DataService } from './data.service';

export function dataServiceFactory (logger: LoggerService) {
  let dataService: DataService = new DataService(logger);

// Do more stuff to configure the service if neccessary

  logger.log('Creating a new Data Service with a factory function.');

  return DataService
}
