function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const o5 = {
    "maxByteLength": 512,
};
const v7 = new SharedArrayBuffer(496, o5);
const v9 = new BigUint64Array(v7);
let v10 = v9.copyWithin(496, 512);
v10 *= v2;
gc();
