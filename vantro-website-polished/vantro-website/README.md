# Vantro public website

Responsive static marketing website for Vantro Digital Solutions.

## Preview locally
Open `index.html` in a browser. No build step is required.

## Before publishing
1. In `static/script.js`, replace `hello@vantro.co.zw` with the real Vantro business email address.
2. Add real work examples, social links and testimonials only when you have them; current copy intentionally avoids fabricated claims.
3. Add the real business WhatsApp number if you want a WhatsApp CTA.
4. Check the domain you want to use before buying it. The `.co.zw` email in the script is a placeholder and does not mean the domain is registered.

## Deploy on Render
Create a **Static Site** in Render and connect the GitHub repository containing these files. Set the root directory to the repository root, and leave Build Command and Publish Directory blank if Render detects static content automatically; otherwise use Publish Directory `.`. Then deploy. HTTPS is provided by Render for the deployed site.

This project is a static site. The contact form opens the visitor's email application; it does not store submissions on a server.
