const app = require("./app");
require("dotenv").config();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Running on port ${process.env.PORT || 3000}`);
});