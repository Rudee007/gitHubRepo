# GitHub Repository Finder 🚀

**Roadmap.sh Project URL:**  
https://roadmap.sh/projects/github-random-repo

A minimal and clean **GitHub Repository Finder** built using **React + Vite**.  
Users can select a programming language and discover **popular GitHub repositories**, one at a time, with a refresh option to explore more.

---

## ✨ Features

- 🔽 Language selection via dropdown
- 🔍 Fetches top GitHub repositories by language
- ⭐ Displays stars, forks, open issues, and description
- 🔄 Refresh button to show a new random repository
- ⚡ Fast performance with Vite + HMR
- 🎨 Clean UI with custom CSS & React Icons
- 🔐 Secure GitHub API access using fine-grained token

---

## 🛠️ Tech Stack

- **React** – UI library  
- **Vite** – Fast build tool & dev server  
- **Axios** – HTTP client for API requests  
- **GitHub REST API** – Repository data  
- **React Icons** – UI icons  
- **CSS** – Custom styling  

---

## 📦 Project Structure

src/
├── assets/
│ └── languages.json
├── components/
│ └── Repo.jsx
├── Repo.css
├── App.jsx
├── main.jsx
└── .env

---

## 🔑 Environment Setup

Create a `.env` file in the project root:

```env
VITE_GITHUB_TOKEN=your_fine_grained_github_token
```

---

## gitHub Api used 
```
GET https://api.github.com/search/repositories
```

**Example Query**

`q=language:JavaScript`

---

## Roadmap & Learning Objective

This project was built as part of the roadmap.sh GitHub Random Repository project to strengthen:

React fundamentals (useState, useEffect, controlled inputs)

API integration using Axios

Working with external REST APIs

Secure environment configuration

UI state handling (loading, error, empty states)

Clean component-based design