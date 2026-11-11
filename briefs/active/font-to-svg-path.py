import sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen

font = TTFont(sys.argv[1])
text = sys.argv[2]
glyph_set = font.getGlyphSet()
cmap = font.getBestCmap()
units = font['head'].unitsPerEm
scale = float(sys.argv[3]) / units
x = 0
for char in text:
    name = cmap[ord(char)]
    pen = SVGPathPen(glyph_set)
    glyph_set[name].draw(pen)
    print(f'<path d="{pen.getCommands()}" transform="translate({x * scale:.3f} 0) scale({scale:.6f} {-scale:.6f})"/>')
    x += font['hmtx'][name][0]
