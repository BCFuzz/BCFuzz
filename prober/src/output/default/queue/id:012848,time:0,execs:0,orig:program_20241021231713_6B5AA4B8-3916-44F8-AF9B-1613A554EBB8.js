class C0 {
    constructor(a2, a3, a4, a5) {
    }
}
function f6(a7, a8, a9) {
    const o12 = {
        "maxByteLength": 268435439,
    };
    const v14 = new SharedArrayBuffer(1000, o12);
    const v16 = new Uint32Array(v14);
    v16.byteLength;
}
f6();
f6();
new C0();
gc();
