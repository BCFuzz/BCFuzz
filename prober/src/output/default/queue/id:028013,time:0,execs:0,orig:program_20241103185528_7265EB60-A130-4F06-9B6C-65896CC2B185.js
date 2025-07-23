const v1 = createGlobalObject();
const t1 = v1.Float16Array;
const v3 = new t1();
function f4(a5, a6) {
    return v1;
}
function f7() {
    return v3;
}
f4[Symbol.species] = f7;
v3.constructor = f4;
v3.buffer.transferToFixedLength();
const o16 = {
    n(a13, a14, a15) {
        return v3;
    },
};
const t17 = o16.n;
const v18 = t17();
try { v18.subarray(); } catch (e) {}
gc();
