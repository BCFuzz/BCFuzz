const v1 = new Int32Array();
v1.buffer.transferToFixedLength();
const o9 = {
    n(a5, a6, a7) {
        try { this.lastIndexOf(); } catch (e) {}
        return this;
    },
};
o9.n.apply(v1);
gc();
