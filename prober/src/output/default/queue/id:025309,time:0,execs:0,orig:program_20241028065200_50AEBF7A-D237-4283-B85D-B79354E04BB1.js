const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
const v2 = v1.buffer;
v2.transferToFixedLength();
const o10 = {
    n(a5, a6, a7) {
        try { Uint8ClampedArray.from(this); } catch (e) {}
        return v2;
    },
};
o10.n.apply(v1);
gc();
