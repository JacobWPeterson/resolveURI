const axios = require('axios');

/*If you would like to count the number of redirects, uncomment out the following line and lines 13
If you would also like to track the redirects, uncommment line 20*/
let redirects = 0;
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
    throw e;
  }
};

module.exports.resolveURI = resolveURI;