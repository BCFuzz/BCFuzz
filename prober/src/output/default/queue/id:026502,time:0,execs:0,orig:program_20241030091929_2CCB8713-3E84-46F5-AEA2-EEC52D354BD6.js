const v1 = new Uint32Array(Uint32Array);
function f2(a3) {
    return v1;
}
f2[Symbol.species] = f2;
v1.constructor = f2;
const v7 = v1.buffer.transferToFixedLength();
const o12 = {
    n(a9, a10, a11) {
        return v1;
    },
};
const v14 = o12.n.apply(f2);
try { v14.subarray(v7); } catch (e) {}
gc();
