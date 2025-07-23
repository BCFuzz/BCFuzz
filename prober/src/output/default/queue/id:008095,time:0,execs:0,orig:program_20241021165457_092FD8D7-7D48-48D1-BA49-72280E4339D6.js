class C0 {
    constructor(a2, a3) {
        const o6 = {
            "maxByteLength": 65535,
        };
        const v8 = new ArrayBuffer(19, o6);
        const v10 = new Float32Array(v8);
        v10[2] = v10;
    }
}
const v11 = new C0();
for (let v12 = 0; v12 < 10; v12++) {
    const v15 = v11["valueOf"]().constructor;
    new v15("valueOf", v15);
}
gc();
