# Talking Calendar

## Task

You'll be given a date as a string (not a `Date` object). The date will always be formatted as `YYYY/MM/DD`. You'll be expected to parse the given string and produce a human readable date.

## Example Inputs

```
"2017/12/02" -> December 2nd, 2017
"2007/11/11" -> November 11th, 2007
"1987/08/24" -> August 24th, 1987
```

## Open Questions

- [x] How do I seperate a string into parts?
- [x] How to convert a number into a month name?
- [x] How to remove leading `0`s from day number?
- [x] How to add `st`, `nd`, `rd` and `th` to the day number?

### Suffix

- `st`: 1, 21, 31
- `nd`: 2, 22
- `rd`: 3, 23
- `th`: 4-20, 24-30




