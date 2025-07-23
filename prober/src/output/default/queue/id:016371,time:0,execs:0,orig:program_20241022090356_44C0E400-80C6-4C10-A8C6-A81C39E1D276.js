const v1 = new Uint8Array();
const v3 = new Int16Array(v1, Uint8Array, Int16Array);
new WeakSet(v3);
Int8Array.d = Int8Array;
function F7() {
    if (!new.target) { throw 'must be called with new'; }
    new Uint32Array(v3);
}
const v11 = new F7();
const v13 = new BigInt64Array(v11, Int8Array, Int8Array);
new Float64Array(v11, WeakSet, BigInt64Array);
new Map(v13);
Date.true = 1024;
const v20 = `
    function f21() {
        return v11;
    }
    function f22() {
        return f22;
    }
`;
eval(v20);
function f25() {
    this.h = true;
    return delete this.h;
}
f25();
f25();
for (let i33 = 0, i34 = 10; i34--, i33 < i34;) {
}
gc();
