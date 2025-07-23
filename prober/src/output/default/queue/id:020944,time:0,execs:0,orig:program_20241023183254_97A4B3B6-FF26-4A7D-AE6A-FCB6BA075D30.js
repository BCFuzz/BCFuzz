const o3 = {
    "maxByteLength": 3752030606,
};
const v5 = new SharedArrayBuffer(127, o3);
const v7 = new Int32Array(v5);
class C8 extends Uint8ClampedArray {
    constructor(a10, a11, a12, a13) {
        super(v7);
    }
}
new C8();
gc();
