const t0 = createGlobalObject().Float16Array;
const v3 = new t0();
v3.buffer.transferToFixedLength();
const o10 = {
    n(a7, a8, a9) {
        return v3;
    },
};
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
const v22 = o10.n.apply();
try { v22.slice(v22, createGlobalObject, v22); } catch (e) {}
gc();
