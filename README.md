# Diablo 4 Boss Tracker

This project is a static website that shows the next spawn time for a Diablo 4 world boss. The world boss spawns every 3.5 hours, with the initial spawn time set to November 14, 2024, at 10:30 PM New York time.

## Setup

### Prerequisites

- A GitHub account
- A Cloudflare account

### Local Development

1. Clone the repository:
  ```sh
  git clone https://github.com/your-username/D4BossTracker.git
  cd D4BossTracker
  ```

2. Open `index.html` in your browser to test locally

### Deployment

1. Push your code to GitHub

2. Deploy to Cloudflare Pages:
   - Log in to Cloudflare Dashboard
   - Go to Pages
   - Create a new project
   - Connect your GitHub repository
   - Configure the build settings:
     - Build command: (leave empty)
     - Build output directory: /

Your site will be deployed automatically and will be available at a `.pages.dev` domain.

### Usage

Once deployed, the website will automatically show the next spawn time for the Diablo 4 world boss in New York time. The time updates automatically every minute.