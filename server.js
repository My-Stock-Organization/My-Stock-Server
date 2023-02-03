require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose")
const app = express();
const PORT  = process.env.PORT || 3000;
const dbURL  = process.env.dbURL;



mongoose.connect(dbURL, () => {
    app.listen(PORT, () => {
      console.log('server listening on http://localhost:' + PORT);
      console.log("connected DB");
    });
});
