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

  // Return the next spawn time in JSON format
  const response = {
    nextSpawnTime: nextSpawnTime.toISOString()
  }

  return new Response(JSON.stringify(response), {
    headers: { 'content-type': 'application/json' }
  })
}