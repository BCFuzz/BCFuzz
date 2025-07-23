const v2 = new Uint8ClampedArray(4, 4, 4);
v2.buffer.transferToFixedLength(Uint8ClampedArray, Uint8ClampedArray);
const o9 = {
    n(a6, a7, a8) {
        super[4] = this;
        return this;
    },
};
o9.n.apply(v2);
gc();
