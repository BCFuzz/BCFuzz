const v0 = /5/mvis;
function f1(a2) {
    const o5 = {
        "maxByteLength": 128,
    };
    const v7 = new SharedArrayBuffer(10, o5);
    const v9 = new Uint32Array(v7);
    return v9.reverse();
}
v0.valueOf = f1;
for (let v11 = 0; v11 < 5; v11++) {
    v0 < v11;
}
gc();
