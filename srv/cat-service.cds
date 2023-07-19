using my.e_mobility as my from '../db/data-model';

service CatalogService {
  entity Books @readonly as projection on my.Books;
  entity ChargingSessions as projection on my.ChargingSessions;
  entity ChargeX as projection on my.ChargeX;
  entity forecast as projection on my.forecast;
  // Function callApi()    returns String;
  
}
