# Toi

a little lib to help people to translate json object's attribute name.

eg.

you might have a json object like:

```
{
  a: 1,
  b: 1
}
```

and you want to rename its attribute to

```
{
  c: 1, // original name is a
  d: 1 // original name is b
}
```

so you can use toi to help you do this. just use like this:

```javascript
toi.transpile({
  a: 'c',
  b: 'd'
}, srcObject);
```

then toi will do everything for you.
