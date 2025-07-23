const v3 = new Uint8Array(8);
try { v3.toSorted(Uint32Array); } catch (e) {}
gc();
