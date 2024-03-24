
const express = require('express');
const app = express();
const fs = require('fs');
const request = require('request');

app.get('/', (req, res) => {
    const ip_address = req.connection.remoteAddress;
    request.get(https://ipapi.co/${ip_address}/json, (error, response, body) => {
        const location_data = JSON.parse(body);
        const browser_name = req.headers['user-agent'];

        // Write the output to a file
        fs.writeFile('file.txt', 
            IP Address: ${ip_address}\nBrowser Name: ${browser_name}\nLocation: ${location_data.city}, ${location_data.region}, ${location_data.country}, 
            (err) => {
                if (err) throw err;
                console.log('Output written to file.txt');
            });

        res.send('Output written to file.txt');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



function openNav() {
    document.getElementById("mobile-nav").style.display = "block";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.getElementById("close").style.transition = "display 0.50s";
}

function closeNav() {
    document.getElementById("mobile-nav").style.display = "none";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.transition = "display 0.50s";
}


function mobileClose() {
    document.getElementById("mobile-nav").style.display = "none";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "block";
}

var date = new Date();
var c_year = date.getFullYear();
// console.log("Year "+c_year);
document.getElementById("date").innerText=c_year;
