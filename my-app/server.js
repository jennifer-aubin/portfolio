const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require(nodemailer);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "laposte",
  auth: {
    user:"jennifer.aubin@"
    pass: ""
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(Ready to Send);
  };
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const email = {
    from: name,
    to : "******@email.com",
    subject: "Contact From Submission - Portfolio",
    html: `<p>Name: §{name}</p>
           <p>Email: §{email}</p>
           <p>Phone: §{phone}</p>
           <p>Message: §{message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
