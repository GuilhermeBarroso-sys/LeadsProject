# LeadsProject


### This simple Node.js project allows you to catch leads and send messages to a Telegram chat group. It's a simples but a effective tool for helping your lead generation process and keeping your sales team informed in real-time.

### Features ✨

  - Leads Reports (save the leads to a CSV file for further analysis)
  - Send Lead to an E-mail
  - Send Reports to an E-mail
  
### Usage 

  #### Requirements 📝
  - Telegram Bot (API TOKEN)
  - Telegram Chat group (CHAT_ID)
  - Node.js (Version 16.x in this project)
  - E-mail (gmail)
  - pnpm 
  #### Running the project 🚀
  
  1. First, rename the `.env.example` file to `.env` in the `autoProjectTelegramServer` and `autoProjectApi` folder  and complete the required environments .
  2. Run `pnpm i` in all folders (`autoProjectTelegramServer`, `autoProjectFront`, `autoProjectApi`)
  3. In the `autoProjectApi` folder, run this command:
 
    npx prisma migrate dev
    
  4. Then, start all folders (`autoProjectTelegramServer`, `autoProjectFront`, `autoProjectApi`) with this command:

    npm run dev
 
  ### Telegram available commands:
  ```
  /email [email] [id] - This command send a specific lead to an E-mail

  Example:
  /email guibarrosodeoliveira5@gmail.com 36
  ```
  ```
  /report - This command generate a CSV with all leads. (You can pass an E-mail to sent this CSV. Example: /report example@gmail.com ) 
  ```
  ```
  /deleteLead id - Delete an specific lead by Id

  Example:
  /deleteLead 36

  ```
 And that's it! Contributions are welcome, feel free to open a pull request if you have any ideas or improvements.



