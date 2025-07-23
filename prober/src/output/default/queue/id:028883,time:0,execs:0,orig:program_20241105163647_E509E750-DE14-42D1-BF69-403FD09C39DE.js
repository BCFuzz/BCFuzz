const v2 = new Uint8Array(3557);
const v3 = v2.toBase64();
const v5 = new Uint8Array(3129);
try { v5.setFromHex(v3); } catch (e) {}
gc();
