/**
 * Working on this using recursion
 * If a path exxists from start to target will return true 
 * If there is no path from start to target at all return false
 * 
 * In reccursive solution we call all neighbors path so
 * if start is same as target there is a path
 * else we have to loop through all neighbors if any of these return true return true
 * If alll neighbors fail  to find a path return false
 * This false is supposed to be outside the loop
 * 
 * Applicable only on non-cyclic graphs
 */

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

const hasPathR = (graph, start, target) => {
    if (start === target) return true;

    for (let neighbor of graph[start]) {
        if (hasPathR(graph, neighbor, target) === true) return true
    }
    return false
}

const hasPath = (graph, start, target) => {
    if (start === target) return true
    const stack = [start]
    while (stack.length > 0) {
        const current = stack.pop()
        if (current === target) return true
        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
    return false
}

const hasPathB = (graph, start, target) => {
    if (start === target) return true
    const queue = [start]
    while (queue.length > 0) {
        const current = queue.shift()
        if (current === start) return true
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
    return false
}


// console.log(graph['g'])
console.log('While loop : ', hasPath(graph, 'f', 'k'))
console.log('Recursion : ', hasPathR(graph, 'f', 'k'))
console.log('Breadth first : ', hasPathB(graph, 'f', 'k'))
/**
 * stack 
 * [f]
 * [g,i]
 * [g,k]
 * []
 */