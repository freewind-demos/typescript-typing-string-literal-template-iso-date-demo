TypeScript Typing String Literal Template ISO Date Demo
===========================

typescript 4.1中提供了string literal template形式的类型定义，可以利用它定义一些复杂结构的string

可惜union类型不能太复杂，所以想定义一个`YYYY-MM-DD`还是做不到，会报:

```
TS2590: Expression produces a union type that is too complex to represent.
```

的错误，只能先定义成`19YY-MM-DD`或者`20YY-MM-DD`

```
npm install
npm run demo
```
