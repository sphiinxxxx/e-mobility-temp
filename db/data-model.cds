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
  }

entity ChargeX{
  key id: String;
  // time: DateTime;
  price: Integer;
  co2: Integer;
}

entity forecast{
    time:String;
    co2: Integer;
}


