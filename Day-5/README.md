# 🎓 Day 5 – Interview Prep App with Supabase & Gemini API

Welcome to Day 5!  
Today, we started building an **Interview Preparation App** using:

- 🧠 Gemini API – to generate interview questions
- 🗃️ Supabase – to store questions and user attempts in a PostgreSQL database
- 🛠️ Next.js + React – for building the frontend

---

## 🧩 What We Built

- A basic interface to **generate interview questions**
- Connected to the **Gemini API** to fetch questions based on topics
- Stored the questions in **Supabase** (PostgreSQL)
- Displayed saved questions on the UI

---

## 🔧 Features

- Input field for selecting a topic (e.g., "JavaScript", "React", "Data Structures")
- Button to generate AI-powered questions using Gemini
- Questions saved to Supabase (with topic, question text, and timestamp)
- List of all stored questions displayed on the page

---

## 🛠 Tech Stack

- **Next.js** (React Framework)
- **Supabase** (as PostgreSQL database + API)
- **Gemini API** (Google's AI model for question generation)
- **CSS Modules** or Tailwind (optional)

---

## 🛠 Project Setup

### 1. Clone the Repo or Start a New App

```bash
npx create-next-app@latest interview-app
cd interview-app
npm install
npm run dev
