const axios=require("axios");
var querystring = require('querystring');

const { ChargingSessions } = cds.entities('my.e_mobility');



module.exports= (srv) => {
   
    srv.on ('READ', 'ChargingSessions', async ()=>{
    // [
    //   { ID:2868193, sessionId:'a60b0914-c057-4c82-a81d-d46eab9cbbd7', 
    //   pricePerKwh: 15,currency : 'EUR', totalDuration :53363, 
    //   cumulatedPrice : 0.21, totalEnergyDelivered : 1451.85}

    // ]

    let access_token='mannnnnnnnn';

    try
    {
     const response= await axios.post('https://hacks-for-innovation-emo.authentication.eu10.hana.ondemand.com/oauth/token',
    querystring.stringify({
      'grant_type': 'client_credentials',
      'client_id':'sb-5e9a3c03-e7dc-45e4-a96c-8960f5f49059!b195897|emobility-preprod-cpo-emobility!b101280',
      'client_secret': '1f9fd6d3-f323-4224-9419-a5ea6d4fdf33$P2h6etdTnVLDG3gCM-tFFjHD5keBTxHFqk83agq7ty8=',
    }), {
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
         access_token=response.data.access_token;
        //  console.log("hiiii" +access_token);
        
        
        // console.log(access_token);
      let apiUrl='https://e-mobility-emobility-preprod-cpo.cfapps.eu10.hana.ondemand.com/api/cpo/odata/ChargingSession/v1/ChargingSessions';
      const response1 = await axios.get('https://e-mobility-emobility-preprod-cpo.cfapps.eu10.hana.ondemand.com/api/cpo/odata/ChargingSession/v1/ChargingSessions', {
        headers: {
          'Authorization': `Bearer ${access_token}`,
          // 'Content-Type' : 'application/json'
        }
      });
      let d= response1.data.value;

      let ans=[];

      d.forEach(e => {
        ans.push({
          id:e.id,
          sessionId:e.sessionId,
          pricePerKwh: e.pricePerKwh,
          currency: e.currency,
          totalDuration: e.totalDuration,
          cumulatedPrice :e.cumulatedPrice,
          totalEnergyDelivered :e.totalEnergyDelivered
        })
        
      });

      // ans= JSON.stringify(ans);
    // d='hello';
    // console.log(ans);
    //   let ID = d.id;
    // console.log(d);
    // console.log(ID);
  //  const f=JSON.parse(response1);
  //  console.log("reached herer");
  //  console.log(f);

  const res= await INSERT(ans).into(ChargingSessions);
  const allChargingSessions = await SELECT.from(ChargingSessions).where({ID:74 });;
  console.log(res);
  console.log(allChargingSessions);
     return  ans;
      
      const data = JSON.parse(response1.data);
      // console.log(response1);

    }
    catch(err)
    {
      // console.log(err);
    }
  }
    )

    
   
   }
   



  

   axios.post('https://hacks-for-innovation-emo.authentication.eu10.hana.ondemand.com/oauth/token',
    querystring.stringify({
      'grant_type': 'client_credentials',
      'client_id':'sb-5e9a3c03-e7dc-45e4-a96c-8960f5f49059!b195897|emobility-preprod-cpo-emobility!b101280',
      'client_secret': '1f9fd6d3-f323-4224-9419-a5ea6d4fdf33$P2h6etdTnVLDG3gCM-tFFjHD5keBTxHFqk83agq7ty8=',
    }), {
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(function(response) {
        console.log(response);
    });