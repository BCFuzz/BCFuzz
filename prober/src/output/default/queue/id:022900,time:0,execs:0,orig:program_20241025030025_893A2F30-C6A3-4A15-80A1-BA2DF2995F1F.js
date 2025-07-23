const v1 = new Uint32Array(Uint32Array);
const v2 = v1.buffer;
const v3 = v2.transferToFixedLength();
const o9 = {
    n(a5, a6, a7) {
        try { this.with(Uint32Array, v1, v3, v2, this); } catch (e) {}
        return a7;
    },
};
o9.n.apply(v1);
gc();
