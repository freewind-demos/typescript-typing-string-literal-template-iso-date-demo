import {SameShape} from "./SameShape";

// T doesn't make sense
type MyInvalidType<T> = {}

// They are actually same
const myInvalidTypesAreSame: SameShape<MyInvalidType<string>, MyInvalidType<number>> = true

// compilation error:
// const myInvalidTypesAreSame: SameShape<MyInvalidType<string>, MyInvalidType<number>> = false

type MyValidType<T> = {
  __taggedType?: T
}

// They are not same now
const sameMyValidType: SameShape<MyValidType<string>, MyValidType<number>> = false

// compilation error:
// const sameMyValidType: SameShape<MyValidType<string>, MyValidType<number>> = true
