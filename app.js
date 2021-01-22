const fs = require('fs').promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

readFile('input_countries.csv');

fs.unlink("Canada.txt")

fs.unlink("Canada.txt", (err) => {
    console.log("File Deleted Successfully...")
})

async function openFile() {
    try {
      const csvHeaders = 'Turkey'
      await fs.writeFile('Turkey.txt', csvHeaders);
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }

  async function addData(country,year,population) {
    try {
      const csvLine = `\n${country},${year},${population}`
      await fs.writeFile('Turkey.txt', csvLine, { flag: 'a' });
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }

  (async function () {
    await openFile();
    await addData('country : ', 'Turkey');
    await addData('year', 2010);
    await addData('population', '75million');
    await addData('country : ', 'Turkey');
    await addData('year', 2018);
    await addData('population', '85million');

  })();
