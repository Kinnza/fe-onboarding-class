## Add typescript to the project

- install typescript 
- Arrange your files. I would suggest putting your source typescript files into one lib (lets say 'src'), and your other static files in 'public' library. Than your js files can compile to public/js
- Rename your js file to ts.
- Add types to the model, to function arguments and etc. 
- Add tsconfig.json to the project with some basic configuration. 
If you are struggling with this, try to use:

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true,
    "target": "es6",
    "outDir": "./public/js"
  },
  "include": ["src/**/*"]
}
```

- run 'npm tsc' to fun typescript. This will compile your typescript files into js files. 
- Change the reference in your index.html file to point to the new generated js files. 


