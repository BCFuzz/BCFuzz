const v1 = new Int16Array();
const v2 = v1.sort();
v2.buffer.transferToFixedLength();
const o10 = {
    n(a6, a7, a8) {
        try { this.with(); } catch (e) {}
        return v1;
    },
};
o10.n.apply(v2);
gc();
