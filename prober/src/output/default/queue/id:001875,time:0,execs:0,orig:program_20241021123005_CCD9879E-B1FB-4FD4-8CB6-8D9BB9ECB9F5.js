const v1 = new Int32Array();
try { Uint8Array.fromBase64(v1); } catch (e) {}
("getFloat32").toWellFormed();
gc();
