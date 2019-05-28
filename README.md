# ES-6 AND TS COMPILATION STEPS
```
{
  "compilerOptions": {
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "allowJs": true,                       /* Allow javascript files to be compiled. */
    "sourceMap": true,                     /* Generates corresponding '.map' file. */
    "outDir": "./bin",                        /* Redirect output structure to the directory. */
    "rootDir": "./src",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
  }
}    
```

* TSC Compile Script at package.json
```
    "scripts": {
        "compile" : "tsc -w -p tsconfig.json"
    },
```

* DEBUG SCRIPT at Debug Config File
```
    {
        "type": "node",
        "request": "launch",
        "name": "Launch Program",
        "sourceMaps": true,
        "program": "${workspaceFolder}/src/main.js",
        "outFiles": [
            "${workspaceRoot}/bin/**/*.js"
        ]
    }
```