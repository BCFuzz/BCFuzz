const v1 = new Int16Array();
const v2 = v1.buffer;
v2.transferToFixedLength(v1, v2, Int16Array, Int16Array, v1);
const o8 = {
    n(a5, a6, a7) {
        return v1;
    },
};
const v10 = o8.n.apply();
try { v10.reverse(); } catch (e) {}
gc();
