function updateNextSpawnTime() {
    // Initial spawn time in New York time zone
    const initialSpawnTime = moment.tz('2024-11-14 22:30', 'America/New_York');
    const spawnInterval = 3.5 * 60 * 60 * 1000; // 3.5 hours in milliseconds

    // Calculate the next spawn time
    const now = moment.tz('America/New_York');
    let nextSpawnTime = initialSpawnTime.clone();

    while (nextSpawnTime <= now) {
        nextSpawnTime = nextSpawnTime.add(spawnInterval, 'milliseconds');
    }

    // Update the DOM
    document.getElementById('nextSpawn').textContent = 
        `Next spawn time: ${nextSpawnTime.format('YYYY-MM-DD HH:mm:ss')} New York Time`;
}

// Update immediately and then every minute
updateNextSpawnTime();
setInterval(updateNextSpawnTime, 60000); 