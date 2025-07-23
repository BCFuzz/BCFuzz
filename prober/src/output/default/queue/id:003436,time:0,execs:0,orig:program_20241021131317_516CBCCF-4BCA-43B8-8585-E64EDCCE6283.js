const v1 = new Uint8Array();
v1.set(v1);
try { BigInt64Array.from(v1); } catch (e) {}
gc();
