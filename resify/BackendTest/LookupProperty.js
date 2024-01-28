const axios = require('axios');

async function lookupProperty(MAK) {
    const baseURL = "https://property.melissadata.net/v4/WEB/LookupProperty/";

    const params = new URLSearchParams({
        'id': "SHBGtiLe_REq5r4mUY3WPo**nSAcwXpxhQ0PC2lXxuDAZ-**",
        'cols': "1",
        'format': "json",
        'mak': MAK
    });

    const urlWithParams = baseURL + '?' + params.toString();

    try {
        const response = await axios.get(urlWithParams);
        
        if (response.data && response.data.Records && response.data.Records.length > 0) {
            const firstRecord = response.data.Records[0];
            if (firstRecord.PrimaryOwner) {
                const primaryOwner = firstRecord.PrimaryOwner;
                const ownerName = primaryOwner.Name1Full;
                console.log("Primary Owner: " + ownerName);
                return ownerName;
            } else {
                console.log("PrimaryOwner object not found in the record.");
                return null;
            }
        } else {
            console.log("No records found or the structure of the response is unexpected.");
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = lookupProperty;
