const v2 = new Uint8Array(2147483648);
try { v2.toHex(); } catch (e) {}
gc();
