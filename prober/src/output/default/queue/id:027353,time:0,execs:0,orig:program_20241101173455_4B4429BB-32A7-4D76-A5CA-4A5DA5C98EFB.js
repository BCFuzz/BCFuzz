const v3 = new Uint8Array(127, 127, 127);
v3.buffer.transferToFixedLength(Int8Array);
const o10 = {
    n(a7, a8, a9) {
        super[127] = Int8Array;
        return a8;
    },
};
o10.n.apply(v3);
gc();
