//mail.js normally contains the information of the email that is used to automatically send emails.
//However, for security purposes I have removed the email.
//So, if you want to test this program on your own, feel free to use your own credentials in the mail.js file.
const transport = require("./mail.js")

function MessagePerson(transport, email, address, productName){
        transport.sendMail({
        to: email,
        subject: `Your order has been placed for ${productName} `,
        text: `Hello, thank you for buying ${productName}. It will be sent to ${address}`
            }).then(()=> {
                console.log("Email sent to " + email);
            }).catch(err=>{
                console.error(err);
            });    
}

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

const path = require("path");
const mediaPath = path.join(process.cwd(), "assets");
app.use("/assets", express.static(mediaPath)); //allows the react side to request files


app.use(
    cors({
        origin: ["http://localhost:5173"]
    })
);

//Route
app.get("/", (req, res) => {
    res.send("Welcome to the server");
});

app.get("/api/hello", (req, res) => {
    res.json({ message: "hello from api" });
})

app.get("/api/media", (req, res, next) => {
    res.type("json");
    res.sendFile(path.join(process.cwd(), "data", "products.json"), (err) => {
        if(err) next(err);
    });
});

app.use(express.json());
app.post("/sendPayment", (req, res) => {

    const {email, address, productId, productName} = req.body
    MessagePerson(transport, email, address, productName);
    
    res.json({ received: `Hello, thank you for buying ${productName}. It will be sent to ${address}`});
    
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});