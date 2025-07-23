const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v3 = new v2();
const v4 = v3.buffer;
v4.transferToFixedLength(createGlobalObject, v2, v4, v1, v4);
const o12 = {
    n(a7, a8, a9) {
        try { this.toReversed(); } catch (e) {}
        try { this.with(); } catch (e) {}
        return v3;
    },
};
o12.n.apply(v3);
gc();
