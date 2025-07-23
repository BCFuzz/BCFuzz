let v2 = 5;
v2--;
const o6 = {
    "maxByteLength": 760,
};
const v8 = new ArrayBuffer(512, o6);
const v9 = new Float32Array(v8, v2);
v8.resize();
v9[342] = 8;
gc();
