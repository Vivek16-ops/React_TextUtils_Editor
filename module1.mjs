console.log("Understanding named and default exports")

//default import
import owner from './module2.mjs'

//named import
import { b, c, d } from './module2.mjs'

console.log(owner)
console.log(b, c, d)