# Project Compare: Import and Bundle Size between import and check tree shaking work or not

## Case 1: No index file, No import Massive Component
```
Route (app)                              Size     First Load JS
┌ ○ /                                    367 B          84.5 kB
└ ○ /_not-found                          882 B            85 kB
+ First Load JS shared by all            84.1 kB
  ├ chunks/69-969bdb6d85338ea6.js        28.9 kB
  ├ chunks/fd9d1056-473e7e1246c7970a.js  53.4 kB
  └ other shared chunks (total)          1.87 kB
```
  