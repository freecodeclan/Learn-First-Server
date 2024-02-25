//-- Connecting with Server
const expess = require("express");
const app = expess();

//--Defining route

app.get("/", (request, response) => {
  response.send("Hi, we are live now");
});

//-- Defining PORT

const PORT = process.env.PORT || 5000;

//-- Now listening to server using function

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} Yes, I am live now`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
