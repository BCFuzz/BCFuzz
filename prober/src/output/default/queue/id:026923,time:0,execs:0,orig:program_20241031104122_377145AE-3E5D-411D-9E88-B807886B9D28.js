const t0 = createGlobalObject().Float16Array;
const v3 = new t0();
const v4 = v3.buffer;
v4.transferToFixedLength(createGlobalObject, v4);
const o11 = {
    n(a7, a8, a9) {
        try { this.copyWithin(); } catch (e) {}
        return a8;
    },
};
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
o11.n.apply(v3);
gc();
