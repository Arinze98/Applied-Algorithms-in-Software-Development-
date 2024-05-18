function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = [];

    // Initialize distances and queue
    for (let vertex in graph) {
        distances[vertex] = Infinity;
        visited[vertex] = false;
        queue.push(vertex);
    }

    distances[start] = 0;

    while (queue.length > 0) {
        let currentVertex = queue.shift();
        visited[currentVertex] = true;

        for (let neighbor in graph[currentVertex]) {
            let distanceToNeighbor = distances[currentVertex] + graph[currentVertex][neighbor];
            if (distanceToNeighbor < distances[neighbor]) {
                distances[neighbor] = distanceToNeighbor;
            }
        }

        // Re-sort the queue based on updated distances
        queue.sort((a, b) => distances[a] - distances[b]);
    }

    return distances;
}

// Example usage:
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

const startVertex = 'A';
console.log(dijkstra(graph, startVertex));
