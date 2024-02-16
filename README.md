# Project Compare: Import and Bundle Size between import and check tree shaking work or not

## Case 1: No index file, Import Massive Component (branch: main)
```
Route (app)                              Size     First Load JS
┌ ○ /                                    367 B          84.5 kB
└ ○ /_not-found                          882 B            85 kB
+ First Load JS shared by all            84.1 kB
  ├ chunks/69-969bdb6d85338ea6.js        28.9 kB
  ├ chunks/fd9d1056-473e7e1246c7970a.js  53.4 kB
  └ other shared chunks (total)          1.87 kB
```
  
## Case 2: Import index file, Import Massive Component (branch: case-2)
```
Route (app)                              Size     First Load JS
┌ ○ /                                    367 B          84.5 kB
└ ○ /_not-found                          882 B            85 kB
+ First Load JS shared by all            84.1 kB
  ├ chunks/69-d9de6eccb25cbf38.js        28.9 kB
  ├ chunks/fd9d1056-473e7e1246c7970a.js  53.4 kB
  └ other shared chunks (total)          1.87 kB
```
Result is identical with case 1

## Case 3: Import index file, Import Massive Component, Use Massive (branch: case-2)
```
Route (app)                              Size     First Load JS
┌ ○ /                                    3.8 MB         3.88 MB
└ ○ /_not-found                          882 B            85 kB
+ First Load JS shared by all            84.1 kB
  ├ chunks/69-6b95fd684766eba9.js        28.9 kB
  ├ chunks/fd9d1056-473e7e1246c7970a.js  53.4 kB
  └ other shared chunks (total)          1.87 kB
```
Size is super big now

# Conclusion:
There is no different in bundle size if using index (But be aware when import from library, because that library may not handle build sideEffect properly)