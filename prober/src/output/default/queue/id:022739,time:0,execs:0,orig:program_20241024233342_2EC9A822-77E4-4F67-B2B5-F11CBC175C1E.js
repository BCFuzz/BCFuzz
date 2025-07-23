const v2 = new Uint8Array(2);
const v3 = v2.toBase64(v2, 2, v2);
const v5 = new Uint8Array(3129);
v5.setFromBase64(v3);
gc();
