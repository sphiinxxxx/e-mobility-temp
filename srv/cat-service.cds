using my.e_mobility as my from '../db/data-model';

service CatalogService {
  entity Books @readonly as projection on my.Books;
  entity ChargingSessions as projection on my.ChargingSessions;
  // entity ChargeX as projection on my.ChargeX;
  entity forecast as projection on my.forecast;
  entity energy as projection on my.energy;
  entity GeoLocation as projection on my.GeoLocation;
  entity evse as projection on my.evse;
  // Function callApi()    returns String;
  
}
