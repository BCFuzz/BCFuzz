const o2 = {
    "maxByteLength": 536870888,
};
const v4 = new SharedArrayBuffer(2439, o2);
const v6 = new Float32Array(v4);
delete v6[536870888];
gc();
