import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.net",
    port: 465,
    secure: true,
    auth:{
        user:"alaajawachi5@gmail.com",
        pass:"",

    }
})


async function nodemailersend(){
    const info = await transporter.sendMail({
        from:"alaajawachi5@gmail.com",
        to:"jawachijawachi245@gmail.com,elkadhioussama@gmx.fr, moslem.marzougui@gmail.com",
        subject:" test application send ",
        text :" just for testing first application that's all "

    })
    console.log("mail sended successfully ",info.messageId)



}


nodemailersend()