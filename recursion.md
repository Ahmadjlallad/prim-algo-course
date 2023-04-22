# recursion

- soled base case important
- so we need 3 value return address, returned value, args

## to break up the recursion

1. base case
2. recurse
    - pre we can do something before the recurse
    - recurse
    - post
   ```typescript
   function foo(n: number): number {
      if (n === 1) {
         return 1
      }
      // here the n + is pre
      const out = n + foo(n - 1);
      // loging the resut is post
      console.log(out)
      return
   }
   ```
3. in the recursion we first go down then go up in the stack
