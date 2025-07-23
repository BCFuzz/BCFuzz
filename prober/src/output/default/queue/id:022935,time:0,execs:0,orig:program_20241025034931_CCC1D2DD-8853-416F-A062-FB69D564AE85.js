const v1 = new Uint32Array();
v1.buffer.transferToFixedLength();
const o8 = {
    n(a5, a6, a7) {
        return this;
    },
};
const v10 = o8.n.apply(v1);
try { v10.slice(); } catch (e) {}
gc();
