# Pyramid Straw

The first tool you should use to analyze whats going on with
your database.

    
---
![screenshots/cover.png](screenshots/cover.png)


## Installing

Include project after debug_toolbar.

```
pyramid.includes =
    pyramid_debugtoolbar
    pyramid_straw.profiler
    pyramid_straw.panel
```

# Configuration

If you want to limit what is backtraced for 
 each query. For example:
```
pyramid_straw.only_paths = ['/home/dz0ny/ebn/src/']
```

And if you want to send reports somewhere else you can use 
```
pyramid_straw.pyramid_straw.dsn = https://straw.io/060694b4b5cc2ed303db73f25ef604a8
```

