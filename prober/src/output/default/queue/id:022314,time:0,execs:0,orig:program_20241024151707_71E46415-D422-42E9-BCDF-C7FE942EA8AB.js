const v1 = new Uint8Array();
v1.buffer.transferToFixedLength();
const o9 = {
    n(a5, a6, a7) {
        try { this.slice(); } catch (e) {}
        return v1;
    },
};
o9.n.apply(v1);
gc();
