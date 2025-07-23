const v2 = createGlobalObject();
const t1 = v2.Float16Array;
const v4 = new t1(createGlobalObject, Int16Array, v2);
v4.buffer.transferToFixedLength();
const o12 = {
    n(a8, a9, a10) {
        try { this.set(Int16Array); } catch (e) {}
        return v4;
    },
};
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
o12.n.apply(v4);
gc();
