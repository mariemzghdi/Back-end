const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

class PdfService {
  static async createpdf() {
    const browser = await puppeteer.launch({
      handless: true,
    });
    const page = await browser.newPage();
    const html = fs.readFileSync(
      path.join(__dirname, '../html/template.html'),
      'utf8'
    );

    await page.goto(html, {
      waitUntil: 'networkidle0',
    });
    await page.pdf({
      path: 'certif.pdf',
      format: 'a4',
      printBackground: true,
    });
    await console.log('saved pdf');
    await page.close();
    await browser.close();
  }
}

module.exports = PdfService;
