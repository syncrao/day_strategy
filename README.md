# 🚀 TradeFi Next Scanner

A **full-stack trading strategy scanner** built with **Next.js (App Router)**.

This application integrates with **Angel One SmartAPI** using **secure server-side API routes**, and scans Stocks & Futures for **volatility expansion patterns**.

---

## 🧠 Strategy Logic

We detect **Expansion Candle Pattern**:

* ✅ Today's High > Yesterday's High
* ✅ Today's Low < Yesterday's Low

```ts
if (todayHigh > yesterdayHigh && todayLow < yesterdayLow) {
  // Expansion Detected
}
```

📌 Indicates strong volatility → breakout opportunity.

---

## 🏗️ Tech Stack

* Next.js 14+ (App Router)
* TypeScript
* Server-side API Routes
* Tailwind CSS (optional)
* Angel One SmartAPI

---

## 📂 Project Structure

```
tradefi-next-scanner/

├── app/
│   ├── page.tsx              # Stocks Scanner
│   ├── fut/page.tsx          # Futures Scanner
│   ├── backtest/page.tsx     # Backtesting UI
│   │
│   ├── api/
│   │   ├── auth/route.ts     # SmartAPI Login (JWT)
│   │   ├── candle/route.ts   # Stock Data API
│   │   └── fut/route.ts      # Futures Data API
│   │
│   ├── components/
│   │   ├── ScannerCard.tsx
│   │   ├── Navbar.tsx
│   │   └── Loader.tsx
│
├── lib/
│   ├── smartapi.ts           # SmartAPI logic
│   ├── tokens.ts             # symbol-token mapping
│   └── utils.ts
│
├── .env.local
├── package.json
└── README.md
```

---

## ⚙️ Setup

### 1️⃣ Clone Repo

```bash
git clone https://github.com/syncrao/day_strategy.git
cd day_strategy
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Environment Variables

Create `.env.local`

```env
SMART_API_KEY=your_api_key
CLIENT_CODE=your_client_code
PASSWORD=your_password
TOTP_SECRET=your_totp_secret
```

---

### 4️⃣ Run App

```bash
npm run dev
```

App runs at:

```
http://localhost:3000
```

---

## 🔐 SmartAPI Integration (Important)

* Never call SmartAPI directly from frontend
* Always use Next.js API routes (`/app/api/*`)
* Keep API keys and credentials server-side only

---

## 🔌 API Routes

### 📊 Stock Data

```
GET /api/candle?token=1333&symbol=HDFCBANK
```

---

### 📈 Futures Data

```
GET /api/fut?token=66854&symbol=ICICIBANK28APR26FUT
```

---

## 🔁 Data Flow

```
Frontend (React)
     ↓
Next.js API Route
     ↓
SmartAPI (Angel One)
     ↓
Response → UI
```

---

## 🧠 Features

* 📊 Stock Scanner (NSE EQ)
* 📈 Futures Scanner (F&O + MCX)
* 🔄 Refresh Button
* ⚡ Sequential Fetching (rate-limit safe)
* 🟢 Highlight Expansion Stocks
* 🧪 Backtesting (extendable)

---

## 🧪 Future Improvements

* 📊 TradingView Charts Integration
* ⚡ WebSocket Live Data
* 🧠 Strategy Builder UI
* ☁️ Deployment on Vercel
* 🗄️ Redis caching for API calls
* 📉 Backtesting engine

---

## ⚠️ Notes

* SmartAPI requires TOTP (generate server-side)
* Avoid parallel API calls (may hit rate limits)
* Cache JWT token to avoid repeated logins
* Secure your credentials properly

---

## 📜 License

MIT License

---

## 💡 Author

**Shah Rukh Rao**
