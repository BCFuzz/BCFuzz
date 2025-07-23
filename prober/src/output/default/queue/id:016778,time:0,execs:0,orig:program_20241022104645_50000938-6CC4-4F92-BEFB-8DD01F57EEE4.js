const o2 = {
    "maxByteLength": 1073741824,
};
const v5 = createGlobalObject().Float16Array;
const v7 = new ArrayBuffer(1622, o2);
const v8 = new v5(v7);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    new Uint16Array(v8);
}
new F9();
gc();
