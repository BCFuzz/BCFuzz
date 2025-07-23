const v2 = new Int8Array(128);
v2[103] = v2;
for (const v3 in v2) {
    v3[0] = v3;
    const o6 = {
        "maxByteLength": 3439449941,
    };
    new SharedArrayBuffer(3439449941, o6);
}
gc();
