/* Minimal static preview server for the exported site in ./out.
   Usage:  npm run preview   (then open http://localhost:4173/nur-quran-website/) */
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..", "out");
const PORT = Number(process.env.PORT || 4173);
const BASE = "/nur-quran-website"; // must match basePath in next.config.ts

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};

function send(res, status, body, type) {
  res.writeHead(status, { "Content-Type": type || "text/plain; charset=utf-8" });
  res.end(body);
}

http
  .createServer((req, res) => {
    let url = decodeURIComponent((req.url || "/").split("?")[0]);
    /* Accept both the basePath-prefixed URLs the site generates and bare
       root URLs (handy for quick checks). */
    if (url === BASE || url.startsWith(`${BASE}/`)) url = url.slice(BASE.length) || "/";
    if (url === "/") url = "/index.html";

    let filePath = path.join(ROOT, url);

    if (!filePath.startsWith(ROOT)) return send(res, 403, "Forbidden");

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }
    if (!fs.existsSync(filePath)) {
      if (!path.extname(filePath)) {
        const withExt = `${filePath}.html`;
        if (fs.existsSync(withExt)) filePath = withExt;
        else if (fs.existsSync(path.join(filePath, "index.html"))) {
          filePath = path.join(filePath, "index.html");
        }
      }
      if (!fs.existsSync(filePath)) return send(res, 404, "Not found");
    }

    const type = TYPES[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-store" });
    fs.createReadStream(filePath).pipe(res);
  })
  .listen(PORT, () => {
    console.log(`Preview: http://localhost:${PORT}`);
  });
