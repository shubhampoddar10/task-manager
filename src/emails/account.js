const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "poddarshubham.sps@gmail.com",
      subject: "Thanks for joining in",
      text: `Welcome to the app ,${name}. Let me know how you connect to the app`,
    })
    .then(() => {
      console.log("Message Sent");
    })
    .catch((error) => {
      console.log(error.response.body);
    });
};

const sendCancelEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "poddarshubham.sps@gmail.com",
      subject: "Sorry to see you Go",
      text: `Goodbye, ${name}. I hope to see you back sometime soon`,
    })
    .then(() => {
      console.log("Message Sent");
    })
    .catch((error) => {
      console.log(error.response.body);
    });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
