const v2 = new Float64Array(1000, 1000);
const v3 = v2.buffer;
v3.transferToFixedLength(v3, Float64Array, v3);
const o9 = {
    n(a6, a7, a8) {
        super[1000] = v2;
        return a7;
    },
};
o9.n.apply(v2);
gc();
