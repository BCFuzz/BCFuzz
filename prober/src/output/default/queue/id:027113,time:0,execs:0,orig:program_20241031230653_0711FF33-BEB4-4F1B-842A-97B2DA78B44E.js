const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v3 = new v2(v1, createGlobalObject, v2);
v3.buffer.transferToFixedLength();
const o11 = {
    n(a7, a8, a9) {
        try { this.lastIndexOf(this); } catch (e) {}
        return createGlobalObject;
    },
};
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
o11.n.apply(v3);
gc();
