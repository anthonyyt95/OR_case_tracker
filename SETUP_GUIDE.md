# OR Case Sheet — Setup Guide
## Google Sheets + GitHub Pages

---

## What You'll Have When Done

- A permanent URL (e.g. `https://yourname.github.io/or-sheet`) you can add to your iPhone home screen
- Every case you save goes directly to a Google Sheet you own
- Search and filter cases by attending, procedure, date, EBL, anything — from the Google Sheets iPhone app

**Total setup time: ~15 minutes, one time only.**

---

## Part 1 — Set Up Google Sheets (the database)

### Step 1 — Create your spreadsheet
1. Go to **sheets.google.com** on any computer
2. Click **+ Blank** to create a new spreadsheet
3. Rename it (click "Untitled spreadsheet" at top) to something like **OR Case Log**

### Step 2 — Open Apps Script
1. In your spreadsheet, click **Extensions** in the menu bar
2. Click **Apps Script**
3. A new browser tab will open with a code editor

### Step 3 — Paste the script
1. In the code editor, **select all existing code** (Ctrl+A or Cmd+A) and **delete it**
2. Open the file **`apps_script.gs`** that was provided with this guide
3. Copy the entire contents and paste it into the Apps Script editor
4. Click the **Save** button (💾 icon, or Ctrl+S)
5. You can rename the project (top left, where it says "Untitled project") to **OR Case Log Script**

### Step 4 — Deploy as a Web App
1. Click the blue **Deploy** button (top right)
2. Select **New deployment**
3. Click the **gear icon ⚙** next to "Select type" → choose **Web app**
4. Fill in the settings:
   - **Description:** OR Case Log
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
5. Click **Deploy**

### Step 5 — Authorize the script
1. A dialog will appear asking you to authorize — click **Authorize access**
2. Choose your Google account
3. You may see a warning: *"Google hasn't verified this app"*
   - Click **Advanced** (bottom left of that screen)
   - Click **Go to OR Case Log Script (unsafe)**
   - Click **Allow**
4. ✅ You'll see a "Deployment updated" message

### Step 6 — Copy your Web App URL
1. After deploying, you'll see a **Web app URL** that looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`
2. **Copy this URL** — you'll need it in the next step

> ⚠️ Keep this URL private — anyone with it can add rows to your sheet. Don't share it publicly.

---

## Part 2 — Configure the OR Sheet App

### Step 7 — Enter your URL in the app
1. Open **`or_sheet_v4.html`** in your browser (or your GitHub Pages URL if already deployed)
2. Click **⚙ Setup** in the toolbar
3. Paste your Web App URL into the field
4. Optionally enter your name (e.g. "Dr. Smith") — this appears in the sheet
5. Click **Save Configuration**
6. The toolbar should now show **✓ Sheets connected** in green

### Step 8 — Test it
1. Fill in a few fields (at minimum: Date, Attending, Procedure)
2. Click **📊 Save to Sheets**
3. Go back to your Google Sheet — you should see a new row with your data!
4. The first save will automatically create all the column headers and formatting

---

## Part 3 — Host on GitHub Pages (permanent URL)

### Step 9 — Create a GitHub account
1. Go to **github.com** and sign up for a free account if you don't have one

### Step 10 — Create a repository
1. Click the **+** icon (top right) → **New repository**
2. Name it `or-sheet` (or anything you like)
3. Set it to **Public**
4. Check **Add a README file**
5. Click **Create repository**

### Step 11 — Upload your HTML file
1. In your new repository, click **Add file → Upload files**
2. Drag and drop **`or_sheet_v4.html`** onto the page
3. **Important:** rename it to **`index.html`** before or after uploading
   - If you upload as `or_sheet_v4.html`, click on it after uploading → click the pencil ✏️ icon → rename it at the top to `index.html` → commit
4. Click **Commit changes**

### Step 12 — Enable GitHub Pages
1. Go to your repository's **Settings** tab
2. Click **Pages** in the left sidebar
3. Under "Source", select **Deploy from a branch**
4. Set Branch to **main**, folder to **/ (root)**
5. Click **Save**
6. Wait ~2 minutes, then refresh — you'll see:
   > Your site is live at `https://YOURNAME.github.io/or-sheet`

### Step 13 — Add to iPhone home screen
1. Open that URL in **Safari** on your iPhone
2. Tap the **Share** button (box with arrow pointing up)
3. Scroll down and tap **Add to Home Screen**
4. Name it "OR Sheet" and tap **Add**
5. ✅ It now appears on your home screen and opens fullscreen like an app

---

## Part 4 — Using Google Sheets to Review Cases

### On iPhone
1. Download the **Google Sheets** app (free)
2. Open your **OR Case Log** spreadsheet
3. To filter by attending: tap the column header → **Create a filter**
4. To search: tap the magnifying glass and type any value

### Useful Sheets features for your log
- **Filter views:** Set up saved filters like "All Dr. Smith cases" or "All lap choles"
- **Sort:** Tap any column header → Sort A→Z or Z→A
- **Freeze row 1:** Already done by the script — headers always visible
- **Charts:** Highlight EBL column → Insert chart → instant data visualization

---

## Troubleshooting

| Problem | Solution |
|---|---|
| "Save to Sheets" shows no confirmation | This is normal — `no-cors` mode can't read the response. Check your Sheet for the new row. |
| Row appears but columns are wrong | Re-deploy the Apps Script (Deploy → Manage deployments → edit → new version) |
| "⚠ Save failed" toast | Double-check your URL in ⚙ Setup — make sure it ends in `/exec` not `/dev` |
| Sheet is empty after saving | Make sure "Who has access" is set to **Anyone** in your deployment settings |
| Lost your Web App URL | Go to Apps Script → Deploy → Manage deployments → copy the URL |

---

## Privacy Note

Your Google Sheet is **private to your Google account** — only you can see it. The "Anyone" access setting only means the script can *receive* data without requiring a login. The sheet itself remains private unless you explicitly share it.

---

*OR Case Sheet v4.0 · Google Sheets Edition*
