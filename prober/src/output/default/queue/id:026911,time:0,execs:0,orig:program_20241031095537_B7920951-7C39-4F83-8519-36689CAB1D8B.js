const v2 = /(?!(a))\1a+/mdsu;
const v3 = new Uint16Array(4);
const v4 = v3.buffer;
v4.transferToFixedLength(v4, 4, v2);
const o10 = {
    n(a7, a8, a9) {
        super[4] = v2;
        return v3;
    },
};
o10.n.apply(v3);
gc();
