const v1 = /(?!(a))\1a+/mdsu;
const v3 = new Int32Array(4, 4);
v3.buffer.transferToFixedLength(4, v1, 4);
const o10 = {
    n(a7, a8, a9) {
        super[4] = v1;
        return a8;
    },
};
o10.n.apply(v3);
gc();
