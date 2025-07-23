const v2 = new Float32Array();
const v3 = v2.buffer;
v3.transferToFixedLength();
const o9 = {
    n(a6, a7, a8) {
        super[4] = this;
        return v3;
    },
};
o9.n.apply(v2);
gc();
