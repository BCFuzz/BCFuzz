const v1 = new Int16Array();
v1.buffer.transferToFixedLength();
const o8 = {
    n(a5, a6, a7) {
        return v1;
    },
};
const v10 = o8.n.apply();
try { v10.slice(); } catch (e) {}
gc();
