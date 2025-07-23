const v2 = new Float32Array(255);
let v3 = v2[182];
[...v3] = v2;
const v6 = new ArrayBuffer(1000);
let v8 = new Uint32Array(v6);
[...v8] = v8;
gc();
