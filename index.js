import moment from 'moment-timezone';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Initial spawn time in New York time zone
  const initialSpawnTime = moment.tz('2024-11-14 22:30', 'America/New_York')
  const spawnInterval = 3.5 * 60 * 60 * 1000 // 3.5 hours in milliseconds

  // Calculate the next spawn time
  const now = moment.tz('America/New_York')
  let nextSpawnTime = initialSpawnTime.clone()

  while (nextSpawnTime <= now) {
    nextSpawnTime = nextSpawnTime.add(spawnInterval, 'milliseconds')
  }

  // Create the JSON response
  const jsonData = {
    next_spawn_time: nextSpawnTime.format()
  }

  // Create HTML with embedded JSON
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diablo 4 Boss Tracker</title>
</head>
<body>
    ${JSON.stringify(jsonData, null, 4)}
</body>
</html>
  `.trim()

  return new Response(html, {
    headers: { 
      'content-type': 'text/html',
      'Access-Control-Allow-Origin': '*'
    }
  })
}