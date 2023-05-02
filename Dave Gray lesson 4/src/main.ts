// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number )[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

type userId = stringOrNumber

// Literal types
let myName: 'Vance'

let userName: `Monica` | 'ross' | 'joey'

// functions
const add = (a:number, b:number): number =>{
    return a + b
}

const logMSg = (message : any): void => {
   console.log(message) 
}

logMSg('Hello!')
logMSg(add(2, 3))

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number

// interface mathFunction {
//     (a:number, b: number): number
// }

let multiply: mathFunction = function(c, d){
    return c * d
}

logMSg(multiply(2, 3))

// Optional Parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
}

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMSg(addAll(2, 3, 4))
logMSg(addAll(2, 3))
logMSg(sumAll(2, 3))
logMSg(sumAll(undefined, 3))

// Rest parameters
const total = (a:number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMSg(total(10, 2, 3))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinte = () =>{
    let i: number = 1
    while (true) {
        i++
        if(i > 100) break
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
    if(typeof value === 'string') return 'string'
    if(isNumber(value)) return 'number'
    return createError('This is should never happen')
}