makesvgfont
===========

Pullls svgs out of a directory, and outputs a font.

Using https://github.com/FontCustom/fontcustom/ through [gulp-fontcustom](https://www.npmjs.com/package/gulp-fontcustom) a grunt version should be easy to realize using [grunt-fontcustom)](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=grunt%20fontcustom).

Al svgs inside ./svg will become glyphs in the font.
The font will appear in the /output file.

Naming your svgs with some sort of order or "a_name","b_name" will ensure that when adding glyphs each character continues to represent the same symbol.

