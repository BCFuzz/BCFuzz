const o2 = {
    "maxByteLength": 658249368,
};
const v4 = new SharedArrayBuffer(4010, o2);
const v6 = new Float32Array(v4);
for (const v10 of (1.7976931348623157e+308).toString().link()) {
    v6[v10] /= 658249368;
}
gc();
