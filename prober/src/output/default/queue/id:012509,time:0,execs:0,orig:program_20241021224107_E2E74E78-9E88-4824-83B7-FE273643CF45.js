const v2 = new Uint8ClampedArray(257, 257, 257);
v2.constructor = 257;
try { v2.slice(257, 257); } catch (e) {}
gc();
