//Active email finder
const Verifier = require("email-verifier");
require("dotenv").config();

const key = process.env.API_KEY;
//deactive email -> kapiladah@gmail.com

let verifier = new Verifier(key);
verifier.verify("siampathan005@gmail.com", (err, data) => {
  if (err) throw err;

  if (
    data.formatCheck == "true" &&
    data.smtpCheck == "true" &&
    data.dnsCheck == "true" &&
    data.disposableCheck == "false"
  ) {
    console.log(data);

    console.log(data.emailAddress, "Active");
  } else console.log("This Email not Active");
  //'at_dB7Bc8Ay80WXXQv421p5QqjSjwXuG'
});
