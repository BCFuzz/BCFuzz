const v1 = (-4294967296).toLocaleString();
try { Uint8Array.fromHex(v1); } catch (e) {}
gc();
