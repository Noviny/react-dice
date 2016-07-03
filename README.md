# React-Dice
A drop-in react component for creating dice, with a robust information set to allow easy use.

The main part of this package is the `<Dice>` component.

The package also contains a number of functions to roll dice, or create dice objects with their own `get()` functions to roll the dice that the object represents.

## The General Use-Case
```
import { Dice, rolls } from 'react-dice';

<Dice
	rolls={[roll(3, 6), roll(1, 8), roll(1, 10)]}
	showResults
	bonus={6}
/>
```

With just this, you can drop a dice roller onto your screen.

Once you have your dice roller on the screen, push the shiny roll button (actual shininess will come with a future patch), to see both a total, as well as your array of rolls. Maximum rolls will be green, while minimum rolls will be red.

If you realise that the dice you have are no longer what you want, you can click on any dice to make it editable, changing the quantity of dice to use, or the type of dice.

```
// TODO: allow you to add another dieType to your set, or delete one, instead of just setting the number to zero
```

## How does it work (and how can I make it work for me)
The `rolls` prop is where most of the heavy lifting is going on. It accepts an array of objects that conform to the following shape:

```
{
	dieCount: 1,
	dieType: 6,
	bonus: 3
}
```

If you want, you can generate these objects in any way you want, and pass them into the rolls array. The rolls array will assign default values to any object in the array missing one or more of the above properties, defaulting `dieCount` to 1, `dieType` to 6, and `bonus` to 0.

Finally, all the bonuses from your dice are bundled together as a single bonus applied to the entire set of dice.

If you pass in `showResults`, you will see a list of what each individual dice rolled is, otherwise you will just have what you are rolling and the total displayed, for when the totals of individual dice is not relevant.

`bonus` is an optional prop to help ease of composure, in case you have bonuses to the total that are not associated with any individual set of dice within the roll.

## `roll` and other logic functions


You may note that we are calling `roll(3, 6)` instead of passing in an object. `roll()` is one of three logic functions that allow you to work more easily. Like an individual dice object, `roll` takes in three variables, which are, in order, the dieCount, the dieType, and the bonus. Like the `<Dice>` component itself, `roll` has fallbacks, however it falls back to 1 die with twenty sides and no bonus.

The object generated by roll also has a `get` method on it, if you have a need for dice logic without a component anywhere, you can do so like this:

```
import { roll } from ‘react-dice’;

var myRoll = roll(3, 6, 5)
total = myRoll.get()

```

Note that `roll()` returns us an object, which has internals that look like this:

```
rollObj = {
	dieCount: 3,
	dieType: 6,
	bonus: 5,
	lastRoll: 0,
	results: [
		{ type: 6, value, 0 },
		{ type: 6, value, 0 },
		{ type: 6, value, 0 }
	]
	get: function()
}
```

If you have a roll object, you are able to go in and manually edit the count, type or bonus, and new calls to `rollObj.get()` will respect the new values. The results will also be regenerated, and the total of our lastRoll is saved.

This leads very neatly into our next logic function, `newRoll()`

`newRoll()` also accepts the same kinds of arguments, and has the same defaults, but instead of returning an object for future use, is responsible for returning immediate results, and will not need that kind of roll again. The standard use-case is as follows:

```
import { newRoll } from 'react-dice';

var total = newRoll(3, 6, 5).total

```

You may note that we are asking here for the total. newRoll returns both the total and the array of results, and so will generally return an object. Here we only want the total, however we could instead run:

```
var ourResults = newRoll(3, 6, 5)
```

Which will store for us both a total and an array of the individual dice values in the same format as the results in our `roll` object.

Our final logic function is `rolls()`, which serves the same purpose as `roll()` but for sets of multiple dice types. Unlike `roll()` or `newRoll()`, `rolls` does not take in dieCount or dieType as arguments, but instead takes in an array of roll objects as its first argument, and a bonus as an optional second argument. As such `rolls()` could be called like so:

```
var complexRoll = rolls({
	{ dieCount: 3, dieType: 6, bonus: 5 },
	{ dieCount: 1, dieType: 8 },
	{ dieCount: 2, dieType: 10 },
}, 5)

```

This mirrors how the `<Dice>` component works, and is what that component is actually using.

The internals of our new complexRoll object will look like this:

```
{
	rolls: [{
		{ dieCount: 3, dieType: 6 },
		{ dieCount: 1, dieType: 8 },
		{ dieCount: 2, dieType: 10 },
	}],
	lastRoll: 0,
	results: [],
	bonus: 10,
	get: function()
}
```

Wherever possible, this mirrors the internals of our singular roll object, however it has an array of rolls that holds an array  of dieCount, dieType pairs. Most importantly it has a `get()` function that will return the total for you, as well as access to your lastRoll total, and the results array.

## Saving Dice objects

As they are javascript objects, it is relatively easy to save a dice object to a mongo database. A word of caution that doing so will strip the get function, so while it is useful to save dice to pass back to the `<Dice>` component, they will no longer be dynamic.

```
// TODO: Add rehydration methods for dice saved in a database.
```
