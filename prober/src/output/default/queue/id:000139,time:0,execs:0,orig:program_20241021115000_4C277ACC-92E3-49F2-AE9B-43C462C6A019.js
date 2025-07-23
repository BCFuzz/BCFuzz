const v2 = new Uint16Array(512, 512, 512);
const v3 = v2.sort();
try { v3.sort(512); } catch (e) {}
gc();
