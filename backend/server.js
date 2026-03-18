const express = require("express");
const cors = require("cors");
const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

const EXCEL_FILE = path.join(__dirname, "contacts.xlsx");

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required" });
  }

  try {
    const workbook = new ExcelJS.Workbook();
    let worksheet;

    if (fs.existsSync(EXCEL_FILE)) {
      await workbook.xlsx.readFile(EXCEL_FILE);
      worksheet = workbook.getWorksheet("Contacts");
    } else {
      worksheet = workbook.addWorksheet("Contacts");
      worksheet.columns = [
        { header: "Time", key: "time", width: 25 },
        { header: "Name", key: "name", width: 25 },
        { header: "Email", key: "email", width: 30 },
        { header: "Message", key: "message", width: 50 },
      ];
    }

    worksheet.addRow({
      time: new Date().toLocaleString(),
      name,
      email,
      message,
    });

    await workbook.xlsx.writeFile(EXCEL_FILE);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
