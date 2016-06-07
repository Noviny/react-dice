# react-dice
A drop-in react component for creating dice, with a robust information set to allow easy use.

Basic component usage:

`import { StaticRoll } from 'react-dice';`

Then the component should be composed as follows:

```
<StaticRoll
  dieCount={3}
  dieType={6}
  bonus={5}
/>
```

This will generate a component with a button, which will generate a new total for you from the three properties entered.

The second component is the SimpleDie component. This takes the same props as the StaticRoll, but renders input fields based on these components, and so can be modified for additional rolling.

```
<SimpleDie
  dieCount={3}
  dieType={6}
  bonus={5}
/>
```

The logic is also importable on its own through `{ generateRoll }`. This returns a function that can be invoked using a similar order as above.

`var ourRoll = generateRoll(1, 20, 0)` outputs an object with a dieCount of 1, a dieType of 20 and a bonus of 0, as well as a lastRoll of 0. If we want to roll this dice, we can call ourRoll.get(), which will roll all the dice, save the new value to lastRoll in the object, and then return the result if you want to use it immediately.

If you only need a single roll, you can export that from `{ newRoll }`, and invoke it as you would generateRoll, only it returns nothing but an answer number.

A number of preset generateRoll functions can be found for common dice types from d4 to d20, and can be pulled out using `{ d4 }` etc.
