//Active email finder
const Verifier = require("email-verifier");
require("dotenv").config();

const key = process.env.API_KEY;
//deactive email -> kapiladah@gmail.com

// let verifier = new Verifier(key);
// verifier.verify("siampathan005@gmail.com", (err, data) => {
//   if (err) throw err;

//   if (
//     data.formatCheck == "true" &&
//     data.smtpCheck == "true" &&
//     data.dnsCheck == "true" &&
//     data.disposableCheck == "false"
//   ) {
//     console.log(data);

//     console.log(data.emailAddress, "Active");
//   } else console.log("This Email not Active");
//'at_dB7Bc8Ay80WXXQv421p5QqjSjwXuG'
//});

//multiple times gmail address
//
//
//
//
//
//
//
//using array
// const list_1 = [
//   "siampathan005@gmail.com",
//   "arumugamvaladi@gmail.com",
//   "kapiladah@gmail.com",
//   "siam@gmail.com",
//   "mmahadihassan@gmail.com",
// ];

// let verifier = new Verifier(key);

// function emailTest(gmailTest) {
//   gmailTest.forEach((email) => {
//     verifier.verify(email, (err, data) => {
//       if (err) {
//         console.error(`Error verifying ${email}: ${err}`);
//         return;
//       }

//       if (
//         data.formatCheck == "true" &&
//         data.smtpCheck == "true" &&
//         data.dnsCheck == "true" &&
//         data.disposableCheck == "false"
//       )
//         console.log(data.emailAddress, "Active");
//       else console.log(data.emailAddress, "Not Active");

// console.log(
//   `${email} - SMTP Check: ${data.smtpCheck} ${data.freeCheck} ${data.formatCheck}`
// );
//     });
//   });
// }

// emailTest(list_1);

//find LinkedIn Profile gmail associated
//
//
//
//
//
//filter this type gmail

//const API_KEY = "sk_live_653d361280aaf705ed17243c_key_y0wuva9wy";
//bse URL =  https://api.reversecontact.com
//Lst Url = /enrichment?apikey=API_KEY&email=TARGET_EMAIL

// const request = require("request");

// const API_KEY = "sk_live_653d361280aaf705ed17243c_key_y0wuva9wy";
// const gmailAddress = "siampathan005@gmail.com";

// async function findLinkedInProfileURL(gmailAddress) {
//   const options = {
//     url: `https://api.reversecontact.com/enrichment?apikey=${API_KEY}&email=${gmailAddress}`,
//     method: "GET",
//   };

//   const response = await request(options);

//   return JSON.parse(response.body);
// }

// async function findLinkedInProfileURLData(gmailAddress) {
//   const targetEmailData = await findLinkedInProfileURL(gmailAddress);

//   if (targetEmailData.linkedinProfileUrl) {
//     console.log(
//       "The LinkedIn profile URL is:",
//       targetEmailData.linkedinProfileUrl
//     );
//   } else {
//     console.log("The LinkedIn profile URL could not be found.");
//   }
// }

// findLinkedInProfileURLData(gmailAddress);