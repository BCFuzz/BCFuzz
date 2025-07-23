const v1 = [10000n];
try { new Uint8Array(v1); } catch (e) {}
gc();
