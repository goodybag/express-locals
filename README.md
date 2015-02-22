# Express Locals

> Mixin properties into the `res.locals` object for each request

__Usage__

```javascript
app.get('/my-route'
, require('express-locals')({
    hello: 'world'
  , objects: [{ a: 1 }, { a: 2 }, a: 3 }]
  })
, function( req, res ){
    res.send( res.locals.hello );
  }
);
```

__Install__

```
npm i -S express-locals
```