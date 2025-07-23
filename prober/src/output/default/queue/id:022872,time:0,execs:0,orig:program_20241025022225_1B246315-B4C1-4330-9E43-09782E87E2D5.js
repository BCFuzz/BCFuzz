const v1 = new Float32Array();
const v2 = v1.toReversed();
const v4 = new ArrayBuffer();
const v6 = new Uint8Array(v4);
v6.set(v2);
gc();
