const v1 = /(?!\1(a\1)\1)\1/misu;
try { ("DW").replace(v1, Uint8Array); } catch (e) {}
gc();
