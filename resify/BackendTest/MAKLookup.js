const axios = require('axios');

async function fetchMAK(addressDetails) {

    const baseURL = "https://address.melissadata.net/v3/WEB/GlobalAddress/doGlobalAddress";

    const params = new URLSearchParams({
        'id': "SHBGtiLe_REq5r4mUY3WPo**nSAcwXpxhQ0PC2lXxuDAZ-**",
        ...addressDetails
    });


    const urlWithParams = baseURL + '?' + params.toString();
    
    try {
        const response = await axios.get(urlWithParams);
        
        if (response.data && response.data.Records && response.data.Records.length > 0) {

            const firstRecord = response.data.Records[0];
            const MAK = firstRecord.MelissaAddressKey;
            console.log("MelissaAddressKey: " + MAK);
            return MAK;
        } else {
            console.log("No records found or the structure of the response is unexpected.");
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = fetchMAK;
