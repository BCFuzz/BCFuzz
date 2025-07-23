const v0 = /oabc\x60(s\P{Decimal_Number})/vis;
function f1(a2) {
    const o5 = {
        "maxByteLength": 2000,
    };
    const v7 = new ArrayBuffer(8, o5);
    const v9 = new Uint32Array(v7);
    return v9;
}
v0.toString = f1;
v0.toString()[29];
gc();
