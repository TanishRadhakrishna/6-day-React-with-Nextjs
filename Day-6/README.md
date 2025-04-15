# 🎓 Day 6 – Student App with Supabase & Google Auth

Welcome to Day 6!  
Today we built a simple **Student Management App** using:

- 🗃️ Supabase – to handle the database
- 🔐 Google Authentication – for login/signup
- ⚛️ Next.js + React – for the frontend

---

## 🧩 What We Built

- A login system using **Google Sign-In** via Supabase Auth
- A simple dashboard that shows user info after login
- A "Student List" stored in Supabase (name, course, email, etc.)
- Ability to view/add students (connected to Supabase DB)

---

## ✨ Features

- Google Sign Up / Sign In
- Protected dashboard (only visible when logged in)
- Student records stored in Supabase
- Add new students via a form
- Show all students in a table/list

---

## 🛠 Tech Stack

- **Next.js** (React Framework)
- **Supabase** (Database + Auth)
- **Google Auth** (via Supabase)
- **CSS Modules** or TailwindCSS (optional)

---

## 🚀 Setup Instructions

### 1. Create Your Project

```bash
npx create-next-app@latest student-app
cd student-app
npm install @supabase/supabase-js
npm run dev
