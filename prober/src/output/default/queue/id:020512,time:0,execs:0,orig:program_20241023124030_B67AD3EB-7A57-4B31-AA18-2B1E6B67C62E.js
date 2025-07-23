function f0(a1, a2, a3, a4) {
    const o7 = {
        "maxByteLength": 194,
    };
    const v9 = new ArrayBuffer(194, o7);
    const v11 = new Float64Array(v9);
    v11.byteOffset;
    return o7;
}
const v13 = f0(f0, f0, f0, f0);
const v14 = f0.prototype;
const v15 = v14.constructor(v14);
class C16 extends f0 {
}
class C17 extends C16 {
    constructor(a19, a20, a21) {
        super();
        f0(C16, C17, v15, a20);
    }
}
new C17(v15, v13, v15);
for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
}
gc();
