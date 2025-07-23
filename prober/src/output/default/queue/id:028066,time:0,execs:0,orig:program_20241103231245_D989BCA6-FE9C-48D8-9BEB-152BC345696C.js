const t0 = createGlobalObject().Float16Array;
const v5 = new t0();
v5.buffer.transferToFixedLength();
const o12 = {
    n(a9, a10, a11) {
        super[127] = Int8Array;
        return this;
    },
};
o12.n.apply(v5);
gc();
