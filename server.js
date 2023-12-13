const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const path = require("path");
require("dotenv").config();

//email-verifier
const Verifier = require("email-verifier");
const key = "at_dB7Bc8Ay80WXXQv421p5QqjSjwXuG";
let verifier = new Verifier(key);

const app = express();
const port = 3000;

// Set up Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve static files from the "public" directory
app.use(express.static("public"));

// Handle GET request to display the HTML form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//gmil filter function
//"at_dB7Bc8Ay80WXXQv421p5QqjSjwXuG"
// function emailTest(gmailTest) {
//   //const verifiedEmails = [];
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
//         //return 1;
//         console.log(data.emailAddress);
//       else return 0;
//     });
//   });
//   //return verifiedEmails;
// }
//for verify email checker

// function emailVerifiers(email) {
//   return new Promise((resolve, reject) => {
//     verifier.verify(email, (err, data) => {
//       console.log(data);
//       if (err) {
//         reject();
//       }
//       if (
//         data?.formatCheck == "true" &&
//         data?.smtpCheck == "true" &&
//         data?.dnsCheck == "true" &&
//         data?.disposableCheck == "false"
//       ) {
//         resolve(data.emailAddress);
//       } else {
//         resolve(null);
//       }
//     });
//   });
// }

//for deactive email verifey

function emailUnVerifiers(email) {
  return new Promise((resolve, reject) => {
    verifier.verify(email, (err, data) => {
      if (err) {
        reject();
      }
      if (
        data?.formatCheck == "false" ||
        data?.smtpCheck == "false" ||
        data?.dnsCheck == "false" ||
        data?.disposableCheck == "true"
      ) {
        resolve(data.emailAddress);
      } else {
        resolve(null);
      }
    });
  });
}

async function emailTester(emailList) {
  try {
    const promises = emailList.map((email) => emailUnVerifiers(email));
    const results = await Promise.all(promises);
    const filteredResults = results.filter((result) => result !== null);
    return filteredResults;
  } catch (error) {
    console.log("err >>", error);
    return [];
  }
}

// Handle POST request for file upload
//let email_list = [];

app.post("/upload", upload.single("excelFile"), async (req, res) => {
  const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  const excelData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], {
    header: 1,
  });
  const newEmails = [].concat(...excelData);
  const verifiedEmails = await emailTester(newEmails);
  // const verifiedEmails = emailTest(newEmails);
  // const list = email_list.push(verifiedEmails);

  //console.log(verifiedEmails);
  res.json(verifiedEmails);
});

// Start the server
app.listen(process.env.PORT || port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
