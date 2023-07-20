namespace my.e_mobility;
using { Country, managed , Currency,cuid } from '@sap/cds/common';


entity Books {
  key ID : Integer;
  title  : localized String;
  stock  : Integer;
}

entity ChargingSessions {
    key ID: Integer;
    sessionId : String;
    pricePerKwh : Decimal;
    currency : String;
    totalDuration : Integer;
    cumulatedPrice : Decimal;
    totalEnergyDelivered : Decimal;
    timestamp:Timestamp;
    status:String;
    siteId: String;
    siteAreaId:String;
    siteAreaName:String;
    siteName:String;
    connectorId:Integer;
    evseCode:String;
    stateOfCharge: Integer;
    totalInactivity: Integer;
    connectorStatus:String;
  }

// entity ChargeX{
//   key id: String;
//   // time: DateTime;
//   price: Integer;
//   co2: Integer;
// }

entity forecast{
    time:String;
    co2: Integer;
}


entity energy{
  key nuts3:String;
  energyMix:Decimal;
  co2:Decimal;
}

entity GeoLocation{
    postalcode:Integer;
    nuts3:String;
    districtName:String;
    regionCode:Integer;
    regionName:String;
    municipalityLat:Decimal;
    municipalityLon:Decimal;
  }

entity evse{
    key id:String;
    index:Integer;
    code:String;
    chargingStationId:String;
    chargingStationName:String;
  }
