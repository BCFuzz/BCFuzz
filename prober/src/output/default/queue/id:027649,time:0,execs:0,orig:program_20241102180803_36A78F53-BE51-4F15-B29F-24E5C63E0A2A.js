const v1 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
function f2(a3) {
    return v1;
}
f2[Symbol.species] = f2;
v1.constructor = f2;
v1.buffer.transferToFixedLength(v1);
const o12 = {
    n(a9, a10, a11) {
        return v1;
    },
};
const v14 = o12.n.apply();
try { v14.subarray(); } catch (e) {}
gc();
