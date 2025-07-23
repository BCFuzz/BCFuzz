const v1 = new Int16Array();
const v2 = v1.sort();
v2.buffer.transferToFixedLength();
const o10 = {
    n(a6, a7, a8) {
        delete this[3295];
        return this;
    },
};
o10.n.apply(v2);
gc();
