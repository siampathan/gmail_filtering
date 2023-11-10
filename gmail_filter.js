//Active email finder
// const Verifier = require("email-verifier");
// require("dotenv").config();

// const key = process.env.API_KEY;
//deactive email -> kapiladah@gmail.com
//concorsomusic2@yahoo.it
//hemapt1@yahoo.com
//delgadosergio@ig.com.br
//anatorresmz@hotmail.com
//ef.chou@msa.hinet.net
//tiwi1@mac.com
//justkelly@comcast.net

// let verifier = new Verifier(key);
// verifier.verify("justkelly@comcast.net", (err, data) => {
//   if (err) throw err;

//   if (
//     data.formatCheck == "true" &&
//     data.smtpCheck == "true" &&
//     data.dnsCheck == "true" &&
//     data.disposableCheck == "false"
//   ) {
//console.log(data);

//   console.log(data.emailAddress, "Active");
// } else {
//   console.log(data);
//   console.log(data.emailAddress, "This Email not Active");
// }
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

// let start = performance.now();

// emailTest(list_1);

// let end = performance.now();
// let time = end - start;
// console.log("run time for this program", time);

//find LinkedIn Profile gmail associated
//
//
//
//
//
//filter this type gmail

//bse URL =  https://api.reversecontact.com
//Lst Url = /enrichment?apikey=API_KEY&email=TARGET_EMAIL
//

// const request = require("request");

//const API_KEY = process.env.REVERSE_API;
// const gmailAddress = "siampathan005@gmail.com";
//sk_live_653d361280aaf705ed17243c_key_y0wuva9wy

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

//add simple object for test purpose
// const info = {
//   email: "siampathan005@gmail.com",
//   emailType: "personal",
//   person: {
//     publicIdentifier: "mahadi-hassan-siam-pathan-0235a124a",
//     linkedInIdentifier: "ACoAAD2qzNsBhtTxL597GT0RdnrKUaw5qhuxbyI",
//     firstName: "Mahadi Hassan",
//     lastName: "Siam Pathan",
//     headline: "Student at Institute of Science and Technology (IST)",
//     location: "Dhaka Bangladesh",
//     followerCount: 26,
//     connectionCount: 26,
//     skills: [
//       "Git",
//       "SASS",
//       "Firebase",
//       "Front-End Development",
//       "React.js",
//       "JavaScript",
//       "Cascading Style Sheets (CSS)",
//     ],
//     linkedInUrl: "https://linkedin.com/in/mahadi-hassan-siam-pathan-0235a124a",
//   },
// };

// let find = info.person.linkedInUrl;

// console.log(`linkedInUrl: ${find}`);

//clearbit API use
//
//
//
//

//gmail scrap from excel file
const readXlsxFile = require("read-excel-file/node");

let gmail_list = [];
readXlsxFile("./email_list.xlsx").then((rows) => {
  rows.forEach((ele, indx) => {
    if (indx < 10) {
      gmail_list.push(ele);
    }
  });
  console.log(gmail_list);
});
