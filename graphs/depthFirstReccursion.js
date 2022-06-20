const graph = {
    a: ['b', 'c'],
    c: ['e'],
    b: ['d'],
    d: ['f'],
    e: [],
    f: []
}

const depthFirstTraversalR = (graph, start) => {
    console.log(start)
    for(let neighbor of graph[start]){
        depthFirstTraversalR(graph,neighbor)
    }
}

depthFirstTraversalR(graph, 'a')
