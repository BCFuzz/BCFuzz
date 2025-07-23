const v1 = new Uint32Array();
try { JSON.parse(v1); } catch (e) {}
gc();
