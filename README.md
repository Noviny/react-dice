# react-dice
A drop-in react component for creating dice, with a robust information set to allow easy use.

The package contains four different features, each of which can be required individually. They are:
* `NewRoll`: Generates an individual dice roll result, useful for when you just need a random number.
* `GenerateRoll`: Returns a dice object with its own roll function, that can also be edited if the situation changes.
* `<StaticRoll />`: A react component that returns a dice, and a roll button to generate a new result and display it.
* `<SimpleDie />`: A react component built on top of `GenerateRoll` to make a changeable dice along with a total.

The entire collection works off the idea of providing a standard set of variables to each different feature, to make predictable results. These are `dieCount`, `dieType`, `bonus`, provided in that order. `NewRoll` and `GenerateRoll` take these as their arguments, while the components require them as properties.

## Example Usage
### NewRoll

If you need to roll 3d6+5 and get the result you can just use the NewRoll function.

```
import { NewRoll } from react-dice

NewRoll(3, 6, 5)
```

Note that NewRoll returns an object with both an array of the results on the individual dice, as well as a total. Often you will just want `NewRoll(3, 6, 0).total`, however you can also get `newRoll(3, 6, 0).resultsArr`.

### GenerateRoll

If you want to return a dice object that you can pass around, that keeps a roll method within it, generateRoll is your best option.

```
import { GenerateRoll } from react-dice

const ourRoll = GenerateRoll(3, 6, 5)
```

This will give us an ourRoll method with a `get()` method. If we call `ourRoll.get()` it will return the result of the roll, as well as saving the result as `ourRoll.lastResult`.

The roll object has the following properties that can be accessed and edited.

```
dieCount
dieType
bonus
lastRoll
resultsArr
```

### <StaticRoll />

Allows you to return a span with information about the dice, as well as a roll button, and display the total.


```
import { StaticRoll } from react-dice

<StaticRoll
  dieCount={3}
  dieType={6}
  bonus={5}
  showResultsArr
/>
```

If you include `showResultsArr` as above, it will also display all the results below the total.

A maximum roll will have the total coloured green, while a minimum roll will have the total coloured red. If you display the results array, the colours of the individual results will use this colouring.

As this is a span, it should be easy to drop this wherever you need within your app.


### <SimpleDie />

A `<SimpleDie />` component is essentially the same as a `<StaticRoll />` in setup, however uses input fields for the options, which allows the kind of the roll to be edited after the creation of the object. This is good for all-purpose fields, or when you know the modifier or some other part might need to be changed.

Under the hood, this is using an object returned from `GenerateRoll` in state to keep track of everything.


```
import { SimpleDie } from react-dice

<SimpleDie
  dieCount={3}
  dieType={6}
  bonus={5}
  showResultsArr
/>
```
