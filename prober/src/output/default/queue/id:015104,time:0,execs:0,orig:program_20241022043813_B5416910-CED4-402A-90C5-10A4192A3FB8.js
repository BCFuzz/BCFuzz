const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const t3 = v5.Intl.Segmenter;
        const v8 = new t3();
        return v8;
    },
};
const v10 = o9.n;
const v11 = v10(1, 1);
const v12 = v11.segment(v11, v10, v11, o9, v11);
const v13 = [7.557860512229595,-1e-15,319.89261808269794];
const v14 = v11.segment();
function f15(a16, a17) {
    a16(1, a17, a17, ...v13, ...v12);
    return a16;
}
v14.toString = f15;
try { v14.toLocaleString(); } catch (e) {}
gc();
