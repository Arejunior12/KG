KG Foods & Events - 3D Mesmerizing Website

This is the official repository for the KG Foods & Events brand website, a modern, fully responsive, and feature-rich single-page application designed to captivate users and showcase the brand's delicious food and event planning services.

✨ Live Demo

Link to Your Live Website Here
(Note: Replace the link above with your actual deployed website URL once it's live.)

🚀 Features

This website is packed with modern features to provide a premium and engaging user experience on both desktop and mobile devices.

🎬 Full-Screen Video Hero: An immersive video background on the homepage to instantly grab user attention.

✍️ Stylish Typography: A stretched, uppercase headline overlay on the hero section and elegant fonts used throughout the site for a professional feel.

🎨 Light/Dark Theme Toggle: A user-controlled theme switcher that saves the user's preference in their browser (localStorage) for future visits.

🎠 Seamless Scrolling Marquee: An infinite horizontal scroller to dynamically display key services like "Catering" and "Event Planning".

🍲 Categorized Food Gallery: A beautiful grid layout showcasing different food categories (Nigerian, Intercontinental, Grills) with interactive hover effects.

📱 Fully Responsive Design: Meticulously crafted to look and work perfectly on all screen sizes, from large desktops to mobile phones.

🍔 Mobile-Friendly Navigation: A clean, functional "hamburger" menu for easy navigation on smaller devices.

📝 Integrated Contact Form: A ready-to-use contact form. Just add your Formspree URL to start receiving messages.

🗺️ Embedded Google Maps: An interactive map showing the brand's location for easy discovery.

✨ Smooth Scroll Animations: Elements gracefully fade and slide into view as the user scrolls down the page, powered by the Intersection Observer API.

🛠️ Tech Stack

HTML5: For the semantic structure of the website.

CSS3: For all styling, including:

CSS Variables (Custom Properties) for easy theme management.

Flexbox and Grid for modern, responsive layouts.

Animations and Transitions for interactive effects.

JavaScript (ES6+): For all interactivity, including:

DOM Manipulation

Event Handling

Theme Switching Logic

Intersection Observer API for scroll animations.

Google Fonts: For embedding custom, high-quality fonts (Playfair Display, Poppins, Lora, Birthstone Bounce).

Font Awesome: For scalable vector icons used throughout the site.

📦 Getting Started

To get a local copy up and running, follow these simple steps.

Prerequisites

You only need a modern web browser (like Chrome, Firefox, or Edge) and a code editor (like VS Code).

Installation

Clone the repo (or download the ZIP file):

Generated sh
git clone https://github.com/your-username/your-repo-name.git


Navigate to the project directory:

Generated sh
cd your-repo-name
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Sh
IGNORE_WHEN_COPYING_END

Open index.html in your web browser. That's it! No complex build steps or servers are required.

🎨 Customization

This template is designed to be easily customized. Here’s how to change the key parts:

Logo:

In index.html, find the <a href="#" class="logo"> tag.

Change the image source from src="images/steamy.jpg" to your logo's path.

Change the <span>KGfoods</span> text to your brand name.

Hero Video:

In index.html, find the <video> tag.

Change the src="video/bg_vid.mp4" to the path of your video file.

Food Gallery Images:

In index.html, navigate to the <section id="gallery">.

Replace all the placeholder <img> sources with your own food photography.

Contact Form:

In index.html, find the line <form action="#" ...>.

Replace the # with your unique Formspree endpoint URL.

Google Map:

In index.html, find the .map-container div.

Go to Google Maps, find your location, click "Share" -> "Embed a map", and copy the HTML.

Replace the placeholder <iframe> inside the .map-container with the code you just copied.

Colors & Fonts:

Open style.css. At the very top, you will find the :root block.

You can change the entire site's color scheme by modifying these variables:

Generated css
:root {
    --primary-color: #A94A2F; 
    --secondary-color: #F3D5A3;
    /* ...and more */
}
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Css
IGNORE_WHEN_COPYING_END
📁 File Structure

The project uses a simple and organized file structure. It is recommended to place your assets in the images and video folders.

Generated code
/
├── index.html       (The main HTML file)
├── style.css        (All custom CSS styles)
├── script.js        (All JavaScript functionality)
├── images/
│   └── steamy.jpg   (Your logo image)
│   └── ...          (Your food images)
└── video/
    └── bg_vid.mp4   (Your hero background video)
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
IGNORE_WHEN_COPYING_END
📜 License

This project is open-source and available under the MIT License.
