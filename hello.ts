type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'

type Day =
  '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30'
  | '31'


// TS2590: Expression produces a union type that is too complex to represent.
// type IsoDate = `${Digit}${Digit}${Digit}${Digit}-${Month}-${Day}`

type IsoDate = `${'19' | '20'}${Digit}${Digit}-${Month}-${Day}`

const date1: IsoDate = '2000-01-02';
console.log("### date1", date1)

function throwNewError(message: string): never {
  throw new Error(message);
}

function optional(date: IsoDate | undefined): IsoDate {
  // TS2590: Expression produces a union type that is too complex to represent.
  return date ?? throwNewError('no date')
}

