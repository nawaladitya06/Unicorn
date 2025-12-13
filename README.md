UNICORN 2026 Website 🦄The official website for **UNICORN 2026**, the flagship entrepreneurship festival organized by the **E-Cell of K.P.B. Hinduja College**.

This project features a modern, gamified interface ("Mission Select" theme) with a unique **Time-Lock System** that keeps specific content (events, schedule, registration) hidden until a designated launch date.

##🚀 Key Features* **Gamified UI:** A futuristic, gaming-inspired interface using a "Pitch Black", "Gold", and "Emerald Glow" color palette.
* **Time-Lock Mechanism:**
* **Pre-Launch:** Shows "Classified" or "Locked" screens with countdowns and mystery placeholders.
* **Post-Launch:** Automatically unlocks full event details, timelines, and registration forms based on a JavaScript date check.
* **Bypass:** Includes a developer bypass via LocalStorage.


* **Dynamic Content Injection:** Event grids and timelines on the homepage switch automatically from "Mystery Cards" to "Real Event Data" upon unlocking.
* **Serverless Forms:**
* **Registration:** Handles file uploads (ID cards, Payment screenshots) by converting them to Base64 and sending them to Google Sheets via Google Apps Script.
* **Contact:** Simple inquiry form connected to Google Sheets.


* **Interactive Animations:** Scroll-triggered reveals, glassmorphism effects, and custom CSS animations (glitch text, scanning lines).
* **Responsive Design:** Fully mobile-responsive layout using **Tailwind CSS**.

##🛠️ Tech Stack* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN with custom `tailwind-config.js`)
* **Icons:** [Font Awesome 6](https://fontawesome.com/)
* **Fonts:** Google Fonts (Cinzel, Orbitron, Inter, VT323)
* **Backend (Forms):** Google Apps Script & Google Sheets

##📂 Project Structure```text
UNICORN-WEBSITE/
├── index.html              # Landing page (Hero, Featured Events, Timeline)
├── about.html              # About the E-Cell and the Fest
├── events.html             # Full events grid with filtering logic
├── schedule.html           # Itinerary with "Locked" badges logic
├── registration.html       # Form with file upload & lock screen
├── glimpse.html            # Photo gallery (Bento grid layout)
├── contact.html            # Contact info & form
│
├── assets/
│   ├── css/
│   │   └── style.css       # Custom styles, animations, & glassmorphism
│   │
│   ├── js/
│   │   ├── main.js         # Global logic (Loader, Navbar, Scroll Reveal)
│   │   ├── home.js         # Homepage countdown & dynamic locked/unlocked data
│   │   ├── events.js       # Events page rendering & filtering
│   │   ├── schedule.js     # Schedule page lock/unlock logic
│   │   ├── registration.js # Form submission & page lock logic
│   │   ├── contact.js      # Contact form submission logic
│   │   ├── glimpse.js      # Gallery rendering logic
│   │   └── tailwind-config.js # Custom Tailwind theme configuration
│   │
│   └── images/             # Logos, backgrounds, and event assets

```

##⚙️ Configuration###1. Setting the Unlock DateThe website is designed to "reveal" itself after a specific date. You must update this date in **three** files to ensure the entire site unlocks simultaneously.

**Format:** `YYYY-MM-DDTHH:MM:SS` (ISO 8601)

* **`assets/js/home.js`**:
```javascript
const EVENTS_REVEAL_DATE = new Date("2025-12-13T21:30:00");

```


* **`assets/js/registration.js`**:
```javascript
const UNLOCK_DATE = new Date("2025-12-13T21:30:00");

```


* **`assets/js/schedule.js`**:
```javascript
const UNLOCK_DATE = new Date("2025-12-13T21:30:00");

```



###2. Connecting Forms to Google SheetsThe Registration and Contact forms use Google Apps Script to save data.

1. Create a Google Sheet.
2. Open **Extensions > Apps Script**.
3. Deploy a script that accepts `POST` requests and handles file uploads/data appending.
4. Copy the **Web App URL** (ensure permissions are set to "Anyone").
5. Update the URL in the following files:

* **`assets/js/registration.js`**:
```javascript
const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

```


* **`assets/js/contact.js`**:
```javascript
const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

```



##🖥️ Local Development1. **Clone the repository** (or download the files).
2. **Open `index.html**` in your browser.
* *Note: For the file upload logic to work strictly as intended without CORS issues during development, it is recommended to use a local server (e.g., Live Server in VS Code).*



###Developer Bypass ModeTo test the "Unlocked" state without changing the code date:

1. Open the browser console (F12).
2. Run the command:
```javascript
localStorage.setItem('unicorn_bypass', 'true');
localStorage.setItem('unicorn_schedule_bypass', 'true');

```


3. Refresh the page. The lock screens will disappear, and the "Real" data will load.

##🎨 Customization* **Colors:** Defined in `assets/js/tailwind-config.js`. Key colors are:
* `pitch`: `#050505` (Background)
* `gold`: `#D4AF37` (Accents)
* `emerald`: `#047857` (Primary Theme)


* **Images:** Replace placeholder images in `assets/images/`. Ensure `Unicorn_Logo.png` exists.

##© CreditsDeveloped for **E-Cell K.P.B. Hinduja College**.

* **Design Theme:** Cyberpunk / Luxury Gaming ("Mission Select")
* **Font Families:** Cinzel (Headers), Orbitron (Gaming UI), Inter (Body).
