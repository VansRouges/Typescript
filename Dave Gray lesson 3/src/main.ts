let stringArr:string[] = ['one', 'hey', 'Vance']

let bibleNames = ['David', 'Jonah', 30]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'great'
stringArr.push('hello')

bibleNames[0] = 7
bibleNames.unshift('Micah')

bibleNames = stringArr

let test = []
let bands: string[] = []
bands.push('Joshua')

// Tuple
let myTuple: [string, number, boolean] = ['Jesus', 33, true]

//Objects
let myObj: object
myObj = []
myObj = {}

const exampleObj = {
    prop1: 'Vance',
    prop2: true
}

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'JIMMY',
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist : Guitarist) => {
    if(guitarist.name){
        return `Hello ${guitarist.name?.toUpperCase()}!`
    }
    return 'Hello!'
}

console.log(greetGuitarist(jp))

//Enums
//"Unlike most Typescript features, Enums are not a type-level addition to javascript but something added to the language and runtime"

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)