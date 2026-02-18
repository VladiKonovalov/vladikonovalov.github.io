/**
 * Cloudflare Worker for portfolio contact form – with CORS headers.
 * Deploy this (or add these CORS headers to your existing Worker) so the
 * portfolio on GitHub Pages can POST from a different origin.
 *
 * Required response headers for CORS:
 *   - Access-Control-Allow-Origin
 *   - Access-Control-Allow-Methods (for preflight)
 *   - Access-Control-Allow-Headers (for preflight)
 *   - Access-Control-Max-Age (optional, for preflight cache)
 */

// Allow your GitHub Pages origin, or use '*' for any origin (less secure)
const ALLOW_ORIGIN = 'https://vladikonovalov.github.io';
// Or: const ALLOW_ORIGIN = '*';

function corsHeaders(extra = {}) {
  return {
    'Access-Control-Allow-Origin': ALLOW_ORIGIN,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    ...extra,
  };
}

export default {
  async fetch(request, env, ctx) {
    // Handle preflight (OPTIONS) – browser sends this before POST
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(),
      });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      });
    }

    try {
      const body = await request.json();
      const { name, email, message } = body || {};

      // Optional: validate and store (e.g. send to email, KV, etc.)
      if (!name || !email || !message) {
        return new Response(
          JSON.stringify({ error: 'Missing name, email, or message' }),
          { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders() } }
        );
      }

      // TODO: your logic (e.g. send email, write to KV/D1)
      // await env.YOUR_BINDING.write(...)

      return new Response(
        JSON.stringify({ success: true }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json', ...corsHeaders() },
        }
      );
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'Server error' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders() } }
      );
    }
  },
};
