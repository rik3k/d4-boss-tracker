# Diablo 4 Boss Tracker API

This project provides a JSON API that returns the next spawn time for a Diablo 4 world boss. The world boss spawns every 3.5 hours, with the initial spawn time set to November 14, 2024, at 10:30 PM New York time.

## API Usage

Once deployed, you can fetch the next spawn time by making a GET request to:
```
https://your-project.pages.dev/api/spawn
```

The API returns JSON in this format:
```json
{
  "nextSpawnTime": "2024-11-14T22:30:00-05:00"
}
```

## Setup

### Prerequisites

- A GitHub account
- A Cloudflare account

### Deployment

1. Push your code to GitHub

2. Deploy to Cloudflare Pages:
   - Log in to Cloudflare Dashboard
   - Go to Pages
   - Create a new project
   - Connect your GitHub repository
   - Configure the build settings as shown below

## Build Settings

### Basic Build Settings
- Build command: (leave empty)
- Build output directory: `/`
- Root directory: (leave empty)

### Functions
This project uses Cloudflare Pages Functions. The API endpoint is automatically created from the file structure in the `/functions` directory.

### Environment Variables
No environment variables are needed.

### Framework Preset
- None

Your API will be deployed automatically and will be available at `https://your-project.pages.dev/api/spawn`

### Troubleshooting

If you can't access your API after deployment:

1. Wait 1-5 minutes for DNS propagation
2. Check the Cloudflare Pages dashboard for:
   - The correct project URL
   - Deployment status (should show "Success")
3. Verify the Functions are properly enabled in your Pages project
4. Check the Functions logs in the Cloudflare Dashboard

### iOS Shortcut Usage

To use this API in an iOS Shortcut:

1. Add a "Get Contents of URL" action
2. Set the URL to your deployed API endpoint
3. Make sure "Method" is set to "GET"
4. The response will be JSON that you can parse in your shortcut