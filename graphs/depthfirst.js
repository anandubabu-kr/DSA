/**
 * We are using adjucency list to implement an stack 
 * Implemented using stack
 * 1 start from a node
 * push its neghiburs to the stack
 * pop each nighbr and push its neigbours
 * repeate till no elements in stack
 * 
 */

const graph = {
    a: ['b', 'c'],
    c: ['e'],
    b: ['d'],
    d: ['f'],
    e: [],
    f: []
}

const depthFirstTraversal = (graph, start) => {
    const stack = [start]

    while (stack.length > 0) {
        // console.log(stack)
        const current = stack.pop() // collecting last element
        console.log(current)
        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}

depthFirstTraversal(graph,'d')

/**
 * expecting a c e b d f
 * stack 
 * [a]
 * [b,c]
 * [b,e]
 * [b]
 * [d]
 * [f]
 * 
 */