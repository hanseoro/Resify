## About
Resify helps prevent rental scams by generating property certificates of verified homeowners using the Melissa API. 
Resify employs a two-layered verification procedure for homeowners to become a verified owner of a property. The first 
layer involves checking the homeowner's identity using the SSN-Name Verify Web API and comparing their property address using
the Melissa Property Web API. The second layer of verification involves using Melissa's Global IP Web API and Reverse 
GeoCoder Web API where homeowners need to be physically inside the property they want to verify.

## Inspiration
Many UCI students searching for housing often often fall victim to rental scams. With this project, our group aims to develop a tool that allows students to prevent housing scams by first asking for proof of ownership from homeowners.

## How we built it
Our backend was built with NodeJS for the API implementation, and MongoDB in Python for the database, while our frontend was developed using TypeScript, React, NextJS, Clerk, and Tailwind CSS.

## Challenges we ran into
We ran into several challenges during development, including issues with our font implementations causing various errors in our frontend interface, figuring out how to link our frontend interface to our backend, routing different pages on our website, as well as with attempting to get UI to function as intended. However, in the end, we were able to iron out most of these problems and deploy a working property verification service.

## Accomplishments that we're proud of
We are proud of the overall functionality and UI/UX design of our web app, the value it provides to prospective property owners and renters, as well as all the skills we learned while overcoming challenges along the way. 

## What we learned
We learned about the benefits and drawbacks of various frontend frameworks and APIs as we tried utilizing several along the way before settling on our current stack. We also expanded our knowledge on building a backend and connecting our database to work seamlessly with both the API implementation and our web application's frontend interface.

## What's next for Resify
To launch Resify at full scale, we plan to deploy to a publicly available website and showcase its value of preventing users such as college students as well as people in general looking to rent properties from getting scammed by individuals falsely claiming to be homeowners. Resify also has ideas of using blockchain technology to add another layer of security to our verification method as well as creating NFT tokens for the certificates we generate.
