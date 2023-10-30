import {answer} from '../answer'

// subject: FizzBuzz
// make a function which, given a number will return :
// 1. if the number is divisible by 3 and 5, returns "FizzBuzz"
// 2. if the number is divisible by 3, returns "Fizz"
// 3. if the number is divisible by 5, returns "Buzz"
// Use a TDD approach (
//   (red) write a failing test, 
//   (green) then fix the code to get the test to pass, 
//   (refactor) finally refactor your code for readability, if needed (check after every green step / passing test
// )

describe('It should give the answer to live', () => {
  test.each([
    [3]
  ])( 
  "it should give the answer to life",
  (num: number) => { expect(answer(num)).toBe(42) } 
  )
})