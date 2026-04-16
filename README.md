# Task Manager App

A minimal task manager built using Next.js App Router with a focus on clean architecture, state separation, and real-world patterns.

---

## 🚀 Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## 🧱 Tech Stack

* Next.js 14 (App Router)
* TypeScript (strict mode)
* Redux Toolkit (local state)
* TanStack Query v5 (server state)
* Axios (API client)
* Tailwind CSS (styling)

---

## ⚙️ Features

### Task List

* Fetches tasks from public API
* Search with debounce (300ms)
* Filter by status (All / Completed / Pending)

### Task Detail

* Dynamic route `/tasks/[id]`
* Data fetched using React Query
* Loading + error states handled

### Create Task

* Add new tasks via form
* Stored in Redux (local state)
* Validation: minimum 3 characters

### State Handling

* API data handled via React Query
* Locally created tasks merged with API results

---

## 🧠 Architecture Decisions

* **React Query for server state**
  Avoids manual fetching logic and handles caching automatically

* **Redux for local tasks only**
  Keeps separation between server data and client-created data

* **Client-side filtering & search**
  Since API does not support filtering, operations are done locally

---

## 📁 Folder Structure

```
src/
  app/
    tasks/
    tasks/[id]/
  components/
  store/
  hooks/
  lib/
  types/
```

---

## 🌙 Bonus Features

* Dark mode support using Tailwind
* Optimistic UI for toggling local tasks

---

## ⚠️ Limitations

* API is static (no real backend updates)
* Infinite scroll is client-side only
* No unit tests added due to time constraints

---

## 🔮 Improvements (if given more time)

* Add unit tests (Jest + RTL)
* Improve accessibility (ARIA roles)
* Add server-side pagination if API supports it
* Persist local tasks in localStorage

---
