/**
 * This method uses a q to navigate all nodes 
 */

const graph = {
    a: ['b', 'c'],
    c: ['e'],
    b: ['d'],
    d: ['f'],
    e: [],
    f: []
}


const breadthFirst = (graph, start) => {
    const queue = [start]

    while (queue.length > 0) {
        // console.log(queue)
        const current = queue.shift()
        console.log(current)

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}

breadthFirst(graph,'a')

/**
 * Expecting : a b c d e f
 * queue
 * [a]
 * [b,c]
 * [c,d]
 * [d,e]
 * [e,f]
 * [f]
 * 
 */