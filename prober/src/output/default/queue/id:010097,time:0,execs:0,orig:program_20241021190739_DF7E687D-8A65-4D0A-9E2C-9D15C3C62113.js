function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const o5 = {
    "maxByteLength": 1637,
};
const v7 = new ArrayBuffer(9, o5);
const v9 = new DataView(v7);
v9.getBigUint64(v2);
gc();
