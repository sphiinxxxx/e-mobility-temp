using my.e_mobility as my from '../db/data-model';

service CatalogService {
  entity Books @readonly as projection on my.Books;
  entity ChargingSessions as projection on my.ChargingSessions;
  Function callApi()    returns String;
  
}
