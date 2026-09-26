<div align="center">

<img src="src/assets/logo.png" alt="FitLog logo" width="90" />

# FitLog

**Browse a curated workout library, build today's plan, and track what you finish.**

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![daisyUI](https://img.shields.io/badge/daisyUI-5-5A0EF8?logo=daisyui&logoColor=white)

</div>

---

## 📖 About

FitLog is a simple, fast fitness planner built with Next.js. It pulls a library of twelve lifts covering every major muscle group, lets you open each one for full details, and helps you organize your day with a five-lift plan and a "save for later" list. Everything you add is stored in your browser, so your plan is still there when you come back.

## 🛠️ Technologies Used

| Category   | Technology                                      |
| ---------- | ----------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router)   |
| UI Library | [React 19](https://react.dev)                   |
| Language   | [TypeScript](https://www.typescriptlang.org)    |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com) + [daisyUI](https://daisyui.com) |
| Icons      | [React Icons](https://react-icons.github.io/react-icons) |
| Notifications | [React Toastify](https://fkhadra.github.io/react-toastify) |
| State      | React Context API + `localStorage`              |
| Data       | REST API (`api.abcz.workers.dev/api/fitlog`)    |

## ✨ Key Features

1. **Workout Library** – Browse twelve lifts fetched from a live API, each shown as a card with image, muscle groups, and quick stats.
2. **Workout Details Page** – Open any lift to see equipment, difficulty, sets, reps, duration, calories, rating, and step-by-step instructions.
3. **Today's Plan (5-lift cap)** – Add workouts to a daily plan limited to five lifts. Mark a lift as done to clear it and make room for the next one.
4. **Save for Later** – Bookmark workouts you want to try another day and switch between the *Plan* and *Saved* tabs on the My Plan page.
5. **Plan Stats & Sorting** – See total exercises, minutes, and calories at a glance, and sort your list by duration, calories, or rating. Toast messages confirm every action, and everything persists in `localStorage`.

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/fit-log.git
cd fit-log

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Create a production build        |
| `npm run start` | Run the production build         |
| `npm run lint`  | Lint the project with ESLint     |

## 📄 License

This project is for learning and personal use.
