const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const path = require("path");
const app = express();
const port = 8000;
require("dotenv").config();

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '"public", "index.html"'));
});

const API_KEY = process.env.API_KEY;

const quickemailverification = require("quickemailverification")
  .client(API_KEY)
  .quickemailverification();

// let email = "john.saragih@wanaarthalife.com";
// quickemailverification.verify(email, (err, data) => {
//   console.log(data);
//data.body.result === 'valid'
// });
//0b301cb5b7d72721f51ab2e77e87b8a0928f55d97160eaf913a987c914a3

function emailUnVerifiers(email) {
  return new Promise((resolve, reject) => {
    quickemailverification.verify(email, (err, data) => {
      let response = data.body;
      //console.log(response.body.result);
      if (err) reject();
      if (response.result === "invalid") resolve(response.email);
      else resolve(null);
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

app.post("/upload", upload.single("excelFile"), async (req, res) => {
  const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  const excelData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], {
    header: 1,
  });
  const newEmails = [].concat(...excelData);
  const verifiedEmails = await emailTester(newEmails);

  console.log(verifiedEmails);
  res.json(verifiedEmails);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
