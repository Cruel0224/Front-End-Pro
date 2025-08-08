'use strict';

// Class for parsing URLs into parts
class URLParser {
    constructor(url) {

        // Create a standard URL class object that itself splits the string into parts
        this.url = new URL(url);
    };

    // Returns the protocol (http: or https:)
    get protocol() {
        return this.url.protocol;
    };

    // Returns the hostname (domain)
    get hostname() {
        return this.url.hostname;
    };

    // Returns the path (e.g. /products/item)
    get path() {
        return this.url.pathname;
    };

    // Returns an object with all query parameters (search, page, etc.)
    get queryParams() {
        const params = {};

        // this.url.searchParams — a special object for working with parameters
        for (const [key, value] of this.url.searchParams.entries()) {
            params[key] = value;
        }
        return params;
    };
}

// Example of use in the console according to the homework example
console.log('====== URLParser ======');
const parser = new URLParser("https://example.com/products/item?search=book&page=2");
console.log(parser.protocol);     // "https:"
console.log(parser.hostname);     // "example.com"
console.log(parser.path);         // "/products/item"
console.log(parser.queryParams);  // { search: "book", page: "2" }



/*
I modified the page a little on my own and first made an example of a DZ in the console
and made a small page where you can enter any URL, click a button and see all its parts.
*/


// Event handler for the "Parse URL" button
document.getElementById('parseBtn').addEventListener('click', () => {
    const urlValue = document.getElementById('urlInput').value.trim();
    const output = document.getElementById('output');

    // Check: if the field is empty
    if (!urlValue) {
        output.innerHTML = "<span style='color:red;'>Будь ласка, введіть URL</span>";
        return;
    }

    try {
        // Create a parser object
        const parser = new URLParser(urlValue);

        // Beautiful display of queryParams as a list
        let paramsHTML;
        const params = parser.queryParams;
        if (Object.keys(params).length > 0) {
            paramsHTML = "<ul>";
            for (const key in params) {
                paramsHTML += `<li><strong>${key}:</strong> ${params[key]}</li>`;
            }
            paramsHTML += "</ul>";
        } else {
            paramsHTML = "немає параметрів";
        }

        // Generate HTML with the results
        output.innerHTML = `
      <strong>Protocol:</strong> ${parser.protocol}<br>
      <strong>Hostname:</strong> ${parser.hostname}<br>
      <strong>Path:</strong> ${parser.path}<br>
      <strong>Query Params:</strong> ${paramsHTML}
    `;
    } catch (e) {

        // If the URL is invalid or unrecognized
        output.innerHTML = "<span style='color:red;'>Некоректний URL</span>";
    }
});
