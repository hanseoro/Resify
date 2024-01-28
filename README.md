## Inspiration
Many UCI students searching for housing often fall victim to rental scams. With this project, our group aims to develop a tool that allows students to prevent housing scams by first asking for proof of ownership from homeowners. Below are links to articles of some unfortunate instances of UCI student renters being subject to rental fraud scams while trying to get student housing.

[Housing Scam through Facebook Groups](https://www.reddit.com/r/UCI/comments/wrogkn/housing_scams_beware_of_facebook_group_uc_irvine/)

[Rental Scam Posting on Apartments.com](https://www.reddit.com/r/UCI/comments/15arz1r/beware_of_rental_scams/)

[Fake Student Housing Listings](https://www.reddit.com/r/UCI/comments/smei7c/housing_scam_alert/)


## What it does
Resify helps prevent rental scams by generating property certificates of verified homeowners using the Melissa API. Users can enter a unique code provided to them by a homeowner to view a certificate verifying the property ownership. Resify employs a two-layered verification procedure for homeowners to become a verified owner of a property. The first layer involves checking the homeowner's identity using the SSN-Name Verify Web API, then comparing their property address and name to the actual property deed owner name to ensure a match using the Melissa Property Web API. The second layer of verification involves using Melissa's Global IP Web API and Reverse GeoCoder Web API where homeowners need to be physically inside the property they want to verify. After verification is passed, the owner will receive a code distinct to their property that we randomly generate to share with potential renters or other users to prove ownership.

## How we built it
Our backend was built with NodeJS for the API implementation, and MongoDB in Python for the database, while our frontend was developed using TypeScript, React, NextJS, Clerk, and Tailwind CSS.

## Challenges we ran into
We ran into several challenges during development, including issues with our font implementations causing various errors in our frontend interface, figuring out how to link our frontend interface to our backend, routing different pages on our website, as well as with attempting to get UI to function as intended. However, in the end, we were able to iron out most of these problems and deploy a working property verification service.

## Accomplishments that we're proud of
Combined Group Total of 0 mg of caffeine consumed. On a real note, we are proud of the overall functionality and UI/UX design of our web app, the value it provides to prospective property owners and renters, as well as all the web development skills we learned while overcoming challenges along the way. 

## What we learned
We learned not only about how to operate on no sleep, but also about the benefits and drawbacks of various frontend frameworks and APIs as we tried utilizing several along the way before settling on our current stack. We also expanded our knowledge on building a backend and connecting our database to work seamlessly with both the API implementation and our web application's frontend interface.

## What's next for Resify
To launch Resify at full scale, we plan to deploy to a publicly available website and showcase its value of preventing users such as college students as well as people in general looking to rent properties from getting scammed by individuals falsely claiming to be homeowners. Resify also has plans to utilize Web3 and blockchain technology to add another layer of security to our verification method by creating unique NFT tokens for each homeowner's certificates we generate.
