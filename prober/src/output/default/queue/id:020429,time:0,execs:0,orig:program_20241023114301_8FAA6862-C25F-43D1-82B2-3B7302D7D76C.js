const o4 = {
    toString(a2, a3) {
        a2.length = a2;
        return Int8Array;
    },
};
const v5 = o4.toString(o4);
try { new v5(o4); } catch (e) {}
gc();
