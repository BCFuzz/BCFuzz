const o2 = {
    "maxByteLength": 2147483647,
};
const v4 = new ArrayBuffer(255, o2);
const v6 = new Uint16Array(v4);
class C8 extends Float32Array {
    constructor(a10, a11, a12) {
        super(v6);
    }
}
new C8();
gc();
