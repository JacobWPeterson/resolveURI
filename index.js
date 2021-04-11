const axios = require('axios');

// If you would like to count the number of redirects, uncomment out lines 6, 15, & 19
// If you would like to track the redirects, also uncommment line 21

// let redirects = 0;
const resolveURI = async (link) => {
  try {
    await axios({
      method: 'get',
      url: link,
      maxRedirects: 0,
    })
    .then((response) => {
      // console.log("Redirects: ", redirects)
      console.log('Resolved URI: ', response.config.url)
    });
  } catch (e) {
    redirects++;
    if (Math.trunc(e.response.status / 100) === 3) {
      // console.log(`Redirect ${redirects}: ${e.response.headers.location}`);
      return resolveURI(e.response.headers.location);
    }
    if (Math.trunc(e.response.status / 100) === 9) {
      // console.log('Resolved URI: ', e.response.config.url);
      return;
    }
    throw e;
  }
};

module.exports.resolveURI = resolveURI;
