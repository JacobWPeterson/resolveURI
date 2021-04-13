# ResolveURI
Resolve a shortened URI to track its path, number of redirects, and final destination

## Usage

### Getting Started
This project uses standard npm package structure. ResolveURI is currently configured to simply log the resolved URI, but can easily be changed to return the resolved URI to a function that calls it.

### Install Dependencies (axios)
```bash
npm install
```

### Testing a URI
The process is scripted via package-json, so run
```bash
npm run start [your URI in quotes]
```

If you would like to see additional options for loggin the number of redirects or the redirected URIs, see the comments at the top of [Index.js](https://github.com/JacobWPeterson/resolveURI/blob/main/index.js)

### Example
A URI with two redirects

<img src="https://github.com/JacobWPeterson/resolveURI/blob/main/example.png" alt="example with two redirects" width=360px/>
