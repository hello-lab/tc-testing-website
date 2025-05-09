# 📖 Simple Exam Login and Tab Tracker

## 📦 Features

- **Tab/Application Change Detection**  
  Detects when the user switches tabs or applications and logs it to `log.txt`. Logs off the user on the **second attempt**.

- **Client-Side Timer**  
  Lightweight, browser-based timer (no server-side implementation to save bandwidth).

- **Login Logging**  
  Records each successful login along with the timestamp in `logged.txt`.

- **Single Login Mode**  
  If enabled, prevents a user from logging in again until `logged.txt` is cleared.

- **Google Forms Integration**  
  Customizable Google Form embedded via an iframe in `actual.html`.

- **Input Sanitization**  
  User-entered names are processed — capitalization is standardized and whitespaces removed.

- **Full Login Logs**  
  All login attempts and activity are neatly stored in `logged.txt` and `log.txt`.

---

## 📖 Instructions

1. **Add User Names**  
   Add the list of allowed usernames inside `names.json`.  
   - No spaces between names.  
   - Write names in a block or array format.

2. **Set Up Google Form**  
   Replace the iframe link inside `actual.html` with your own Google Form link.

3. **Enable/Disable Single Login Mode**  
   - To **enable** Single Login: set the **first line** of `logged.txt` to `TRUE`.
   - To **disable**: set the **first line** to `FALSE`.

4. **Change the Timer**  
   Modify the timer duration by editing **line 19** in `/src/script.js`.

   Example:
   - `20` for **20 minutes**
   - `15.5` for **15 minutes 30 seconds**

---

## 📁 Files Overview

| File/Folder     | Purpose                                                   |
|:----------------|:-----------------------------------------------------------|
| `names.json`     | List of allowed usernames.                                 |
| `logged.txt`     | Tracks login timestamps and names. Controls Single Login Mode. |
| `log.txt`        | Logs tab/application change events with timestamps.        |
| `src/`           | Contains client-side files like `index.html`, `actual.html`, and `script.js`. |
| `server.js`      | Express backend handling logins and activity monitoring.   |

---

## 📸 Demo Screenshots

### 🔐 Login Page  
![Screenshot 2025-05-09 221413](https://github.com/user-attachments/assets/be9a54e7-5d17-4fe5-9169-95717154b897)
#### When user not in names.json/already logged in once in Single Login Mode
![Screenshot 2025-05-09 221426](https://github.com/user-attachments/assets/239964ea-7b1c-4a39-820e-07b1a41dcd99)

---

### 📄 Actual Exam Page with Timer and Google Form  
![Screenshot 2025-05-09 221657](https://github.com/user-attachments/assets/3a58fb3e-d8be-48fe-bba4-dcedc0060bab)

---
### ⚠️ Tab Change Detected Alert  
![Screenshot 2025-05-09 221707](https://github.com/user-attachments/assets/40251e43-e05b-4af4-b4ee-3262ac0dfacd)

---

### 📜 Log Files Example  
`logged.txt`  
![Screenshot 2025-05-09 221752](https://github.com/user-attachments/assets/4aef4a24-048c-4f1c-8795-6fd34b15e748)


`log.txt`  
![Screenshot 2025-05-09 221800](https://github.com/user-attachments/assets/253e5c3f-3f25-4a90-93a0-493782a55589)

`names.json`  
![Screenshot 2025-05-09 221815](https://github.com/user-attachments/assets/998d56a7-3a1f-4dd3-8172-150aef242bf4)

---




## ✅ Notes

- Single Login Mode blocks users from re-logging in until `logged.txt` is cleared.
- All login and tab switch events are timestamped for easy tracking.
- Make sure to customize your Google Form link before deploying.

---

## 🚀 Quick Start

```bash
npm install
node app.js
