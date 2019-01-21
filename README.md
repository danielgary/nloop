# nloop

```
Usage: nloop -n [num] -m -- <command to execute>

Options:
  --help                      Show help                                [boolean]
  --version                   Show version number                      [boolean]
  -m, --Enable multi-thread                           [boolean] [default: false]
  -n, --Number of iterations                                          [required]
```

When multi-thread is enabled, it will create a process for each iteration immediately.  Be careful with this option.

Installation:
```
npm install -g @gatewayapps/nloop
```

Example:
```
> nloop -n 5 -- echo "Hello, world!"
Hello, world!
Hello, world!
Hello, world!
Hello, world!
Hello, world!

> nloop -n 5 -- ntimer -s -u milliseconds curl www.google.com
 curl www.google.com  completed in 172 milliseconds
 curl www.google.com  completed in 172 milliseconds
 curl www.google.com  completed in 181 milliseconds
 curl www.google.com  completed in 173 milliseconds
 curl www.google.com  completed in 168 milliseconds
```
