const axios = require('axios');

async function verifySSN(firstName, lastName, ssn) {
    // simulate SSN valid match
    console.log("SSN Verified: True")
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;

    ////// Real API call, uncomment in production

    // const baseURL = "https://namessn.melissadata.net/v4/web/SSN/doLookup";
    // const apiKey = "SHBGtiLe_REq5r4mUY3WPo**nSAcwXpxhQ0PC2lXxuDAZ-**"; // Replace with your actual API key

    // const params = new URLSearchParams({
    //     'id': apiKey,
    //     'SSN': ssn,
    //     'first': firstName,
    //     'last': lastName
    // });

    // const urlWithParams = baseURL + '?' + params.toString();

    // try {
    //     const response = await axios.get(urlWithParams);
        
    //     // Check the 'Results' field for the verification status
    //     const verificationResult = response.data.Records[0].Results;
    //     const isSSNVerified = verificationResult === 'SN04'; // 'SN04' means valid match
    //     return isSSNVerified;
    // } catch (error) {
    //     console.error("Error during SSN verification:", error);
    //     return false;
    // }
}

module.exports = verifySSN;
