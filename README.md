# 𝖘𝖚𝖕𝖊𝖗 𝖘𝖊𝖈𝖗𝖊𝖙 𝖆𝖌𝖊𝖓𝖙 𝖒𝖊𝖘𝖘𝖆𝖌𝖊𝖘

First create an API that takes in a message and saves that message. No matter what kind of request comes into your API, you should look at the request body and if that contains a message, you should save the message.

Then you must secure the API with a password. Try out different ways to save the correct password. Don't commit the password. Don't commit node_modules. Also try different hashing algorithms for the password. There are multiple levels how to make it work; how far can you get?

1. Level 1: password comes from request body
2. Level 2: password comes from request url (params)
3. Level 3: password comes from request url (query)
4. Level 4: password comes from custom header

Save the messages to app memory (regular) OR optionally save message to database.

- **BONUS** Research: What is "basic auth"
- **SUPER BONUS** Level X: password and username comes from basic auth
