function f0() {
    return f0;
}
function f1() {
    function f2(a3, a4) {
        const v6 = new Int32Array();
        return v6;
    }
    return f2;
}
function f7(a8) {
    return f7;
}
Object.defineProperty(f0, Symbol.species, { enumerable: true, get: f1, set: f7 });
const o13 = {
    "maxByteLength": 1780,
};
const v15 = new ArrayBuffer(0, o13);
const v17 = new Uint16Array(v15);
v17.constructor = f0;
v17.fill().subarray();
gc();
