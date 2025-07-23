const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const t3 = v5.Intl.Segmenter;
        const v8 = new t3();
        return v8;
    },
};
const v10 = o9.n;
const v11 = v10(o9);
const v12 = v11.segment(o9, v10, v11, o9);
const v13 = [7.557860512229595,-1e-15,319.89261808269794];
const v15 = gc();
const v16 = v11.segment(v12, v11, v15, v15, v13);
function f17(a18, a19) {
    return a18(1, a19, a19, ...v13, ...v12);
}
v16.toString = f17;
try { v16.toLocaleString(o9); } catch (e) {}
gc();
