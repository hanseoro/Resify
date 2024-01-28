const { getUserInput } = require('./UserInput.js');
const { closeInput } = require('./UserInput.js');
const verifySSN = require('./LookupSSN.js');
const fetchMAK = require('./MAKLookup.js');
const lookupProperty = require('./LookupProperty.js');

async function main() {
    try {
        const firstName = await getUserInput('Please enter your first name: ');
        const lastName = await getUserInput('Please enter your last name: ');
        const ssn = await getUserInput('Please enter your SSN: ');

        // Call closeInput() if you're done with user input at this stage
        // closeInput(); // Uncomment this if you want to close the input interface here

        const isSSNVerified = await verifySSN(firstName, lastName, ssn);
        if (!isSSNVerified) {
            console.log("SSN verification failed. The SSN does not match the name.");
            closeInput(); 
            return;
        }
        const addressDetails = {
            'a1': await getUserInput('Enter address line 1: '),
            'a2': await getUserInput('Enter adresss line 2 (e.g. Suite/Apt #, if applicable): '),
            'loc': await getUserInput('Enter city: '),
            'admarea': await getUserInput('Enter state: '),
            'postal': await getUserInput('Enter postal code: '),
            'ctry': "USA"
        };

        let MAK;
        do {
            MAK = await fetchMAK(addressDetails);

            if (!MAK) {
                console.log("Unable to find a MAK for the provided address. Please try again.");
            }
        } while (!MAK);

        closeInput();

        const ownerName = await lookupProperty(MAK);
        if (ownerName) {
            const isNameMatch = (firstName + " " + lastName).trim().toLowerCase() === ownerName.trim().toLowerCase();
            console.log(`Does the user's name match the property owner's name? ${isNameMatch}`);
        }
    } catch (error) {
        console.error("Error in main application flow:", error);
        closeInput();
    }
}

main();
