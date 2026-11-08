# Samdrup Tshering: Personal Portfolio

Plain HTML, CSS and JavaScript. No build step or dependencies.

## Structure
```
portfolio/
  index.html
  style.css
  script.js      <- all your content lives in the DATA object at the top
  assets/profile.jpg
  README.md
```

## Run locally
Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit http://localhost:8000.

## Edit content
Open `script.js` and update `DATA`. Replace every `TODO` (projects 2 and 3, technologies, LinkedIn). Put project screenshots in `assets/` and set `image: "assets/your-file.png"`.

## Upload to GitHub
1. Create a new repository on github.com (for example `portfolio`).
2. In this folder run:
   ```
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

## Deploy with GitHub Pages
Repository > Settings > Pages > Source: "Deploy from a branch" > Branch `main`, folder `/ (root)` > Save. Your link will be `https://YOUR-USERNAME.github.io/portfolio/`.

## Deploy with Vercel
Sign in at vercel.com with GitHub, click Add New > Project, import the repository, and press Deploy (no settings needed).

## submission.txt
```
Student Name: Samdrup Tshering
Student ID: 05240147
GitHub Repository Link: https://github.com/YOUR-USERNAME/portfolio
Deployed Website Link: https://YOUR-USERNAME.github.io/portfolio/
```
