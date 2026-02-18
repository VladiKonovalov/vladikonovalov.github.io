# Contact form API (Cloudflare Worker)

The contact form in this portfolio sends a POST request to a Cloudflare Worker. The **Worker must send CORS headers** or the browser will block the request when the site is served from GitHub Pages (different origin).

## Fixing the CORS error

1. Open your Worker in the [Cloudflare dashboard](https://dash.cloudflare.com/) (Workers & Pages → your `portfolio-contact-api` worker).
2. Ensure **every response** (including OPTIONS for preflight) includes at least:
   - `Access-Control-Allow-Origin: https://vladikonovalov.github.io` (or `*` for any origin)
   - For **OPTIONS** (preflight): also `Access-Control-Allow-Methods` and `Access-Control-Allow-Headers`.

See `contact-api-cors.example.js` for a full example. Minimal change to an existing Worker:

- **OPTIONS** request: return `204` with headers:
  - `Access-Control-Allow-Origin: https://vladikonovalov.github.io`
  - `Access-Control-Allow-Methods: GET, POST, OPTIONS`
  - `Access-Control-Allow-Headers: Content-Type`
- **POST** response: add `Access-Control-Allow-Origin: https://vladikonovalov.github.io` to the response headers.

After redeploying the Worker, the portfolio contact form should work from GitHub Pages.
