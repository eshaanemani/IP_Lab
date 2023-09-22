var http = require('http');
var fs = require('fs');

//Read a file
http.createServer(function (req, res) {
  fs.readFile('demo1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(data);
    res.write(data);
    return res.end();
  });
}).listen(3000);

//Create a file
const fileContent = 'This is the content of the new file.';
fs.writeFile('demo2.txt', fileContent, (err) => {
  if (err) {
    console.error('Error creating the file:', err);
  } else {
    console.log(`File has been created.`);
  }
});

//Rename a file
const oldFilePath = 'oldfile.txt';
const newFilePath = 'newfile.txt';
fs.rename(oldFilePath, newFilePath, (err) => {
  if (err) {
    console.error('Error renaming the file:', err);
  } else {
    console.log(`File has been renamed.`);
  }
});

//Append data to a file
const file1 = 'example.txt';
const dataToAppend = 'This is new data that will be appended to the file.\n';
const stream = fs.createWriteStream(file1, { flags: 'a' });
stream.write(dataToAppend);
stream.end();
stream.on('finish', () => {
  console.log('Data has been appended to the file.');
});
stream.on('error', (err) => {
  console.error('Error appending to the file:', err);
});


//Delete a file
const file2 = 'example2.txt';
fs.unlink(file2, (err) => {
  if (err) {
    console.error('Error deleting the file:', err);
  } else {
    console.log(`File has been deleted.`);
  }
});