export async function onRequest(context) {
  const initialSpawnTime = new Date('2024-11-14T22:30:00-05:00');
  const spawnInterval = 3.5 * 60 * 60 * 1000; // 3.5 hours in milliseconds
  
  const now = new Date();
  let nextSpawnTime = new Date(initialSpawnTime);
  
  while (nextSpawnTime <= now) {
    nextSpawnTime = new Date(nextSpawnTime.getTime() + spawnInterval);
  }

  return new Response(JSON.stringify({
    nextSpawnTime: nextSpawnTime.toISOString()
  }), {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
} 