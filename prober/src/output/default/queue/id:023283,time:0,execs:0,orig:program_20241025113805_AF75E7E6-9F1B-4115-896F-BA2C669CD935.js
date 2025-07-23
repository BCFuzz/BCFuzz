const v1 = new Uint32Array();
const v2 = v1.buffer;
v2.transferToFixedLength(v1);
const o8 = {
    n(a5, a6, a7) {
        return v1;
    },
};
const v10 = o8.n.apply(v2, o8, o8, o8, o8);
try { v10.toReversed(); } catch (e) {}
gc();
