class C0 {
    constructor(a2, a3) {
        const o6 = {
            "maxByteLength": 65535,
        };
        const v8 = new ArrayBuffer(19, o6);
        const v10 = new Float32Array(v8);
        v10.byteLength;
    }
}
const v12 = new C0();
for (let v13 = 0; v13 < 5; v13++) {
    const t12 = v12["valueOf"]().constructor;
    new t12();
}
gc();
