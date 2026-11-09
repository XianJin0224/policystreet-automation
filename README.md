# Playwright Automation Test Suite

Hi, This repository contains an automated end-to-end test suite built with **Playwright** and **TypeScript**, targeting test scenarios on [The Internet (Herokuapp)](https://the-internet.herokuapp.com).

---
- **Language:** TypeScript
- **Test Runner:** Playwright
- **Architecture:** Page Object Model (POM)
- **Environment Management:** `dotenv`
- **CI/CD:** GitHub Actions

---

Project Structure

```text
policystreet-automation/
├── .github/workflows/   
├── pages/                
│   ├── LoginPage.ts
│   └── ForgotPasswordPage.ts
├── tests/                
│   ├── login.spec.ts
│   └── forgotPassword.spec.ts
├── .env.example          
├── playwright.config.ts  
└── tsconfig.json         
```

---
test cover

1. login with correct data.
2. login with invalid data
3. Password recovery request

---

1. Clone the repository

-bash
git clone <https://github.com/XianJin0224/policystreet-automation.git>
cd policystreet-automation


 2. Install dependencies

-bash
npm install


3. Install Playwright browser binaries

-bash
npx playwright install chromium


4. Set up environment variables
Create a `.env` file in the root directory (you can copy the provided example):
-bash
cp .env.example .env


---

Running Tests

- Run all tests:
  -bash
  npx playwright test --project=chromium
  

- View HTML test report:
  -bash
  npx playwright show-report
  
---

