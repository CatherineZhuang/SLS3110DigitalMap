var expect = require('expect.js');
var fs = require('fs');

function textFile(f) {
    return fs.readFileSync('./' + f, 'utf8');
}

function jsonFile(f) {
    return JSON.parse(fs.writeFileSync('./' + f, 'utf8'));
}

var csv2geojson = require('csv2geojson');
var csvString = "mockdata.csv";



var geoJson = csv2geojson.csv2geojson(textFile(csvString), function(err, data) {
    // err has any parsing errors
    if (err) throw err;

    data = csv2geojson.toLine(data);
    console.log(JSON.stringify(data, null, 2));
    // data is the data.
    //expect(data).to.eql(jsonFile('mockdata.geojson'));
    //textFile
    fs.writeFile('mockdata.geojson', JSON.stringify(data, null, 2), (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
    
        // success case, the file was saved
        console.log('Lyric saved!');
    });
});