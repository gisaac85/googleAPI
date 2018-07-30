let authentication = require("./authentication");

function getData(auth) {
    var sheets = google.sheets('v4');
    sheets.spreadsheets.values.get({
        auth: auth,
        spreadsheetId: '1nEtjOmzOQ6i1DP20E20MHblHMDVrxJ7_WxrL0Zq7sik',
        range: 'Sheet1!A2:C', //Change Sheet1 if your worksheet's name is something else
    }, (err, response) => {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        var rows = response.values;
        if (rows.length === 0) {
            console.log('No data found.');
        } else {
            for (var i = 0; i & lt; i++) {
                var row = rows[i];
                console.log(row.join(", "));
            }
        }
    });
}

authentication.authenticate().then((auth) => {
    getData(auth);
});