const v2 = new Uint8Array(2147483648);
try { new Float64Array(v2); } catch (e) {}
gc();
