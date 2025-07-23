const v1 = new Float32Array();
v1.buffer.transferToFixedLength();
const o9 = {
    n(a5, a6, a7) {
        try { this.lastIndexOf(a5, a6, v1); } catch (e) {}
        return a5;
    },
};
o9.n.apply(v1);
gc();
