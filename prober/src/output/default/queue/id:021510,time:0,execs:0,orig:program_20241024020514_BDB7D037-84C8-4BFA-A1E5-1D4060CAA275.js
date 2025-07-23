function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4) {
        for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
        }
        super();
        const o17 = {
            "maxByteLength": 1780,
        };
        const v19 = new ArrayBuffer(0, o17);
        const v21 = new Uint16Array(v19);
        new Int8Array(v21.fill(0, 0, a3).subarray());
    }
}
new C1();
gc();
