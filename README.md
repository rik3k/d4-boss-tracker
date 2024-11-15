# Diablo 4 Boss Tracker

This project is a Cloudflare Worker that provides the next spawn time for a Diablo 4 world boss. The world boss spawns every 3.5 hours, and the initial spawn time is set to November 14, 2024, at 10:30 PM New York time.

## Setup

### Prerequisites

- Node.js and npm installed
- Cloudflare account
- Wrangler CLI installed (`npm install -g wrangler`)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/D4BossTracker.git
   cd D4BossTracker
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Configure your Cloudflare account ID in `wrangler.toml`:
   ```toml
   account_id = "YOUR_CLOUDFLARE_ACCOUNT_ID"
   ```

### Deployment

1. Publish the worker to Cloudflare:
   ```sh
   wrangler publish
   ```

### Usage

Once deployed, the worker will respond to HTTP requests with the next spawn time for the Diablo 4 world boss in JSON format. You can test it locally using `wrangler dev`:
   ```sh
   wrangler dev
   ```

### Example Response

```json
{
  "nextSpawnTime": "2024-11-15T02:00:00.000Z"
}
```