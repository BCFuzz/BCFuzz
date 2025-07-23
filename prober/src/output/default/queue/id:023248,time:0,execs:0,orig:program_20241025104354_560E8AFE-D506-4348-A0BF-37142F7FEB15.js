const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const t3 = v5.Intl.Segmenter;
        const v8 = new t3();
        return v8;
    },
};
const t8 = o9.n;
const v11 = t8();
const v12 = v11.segment();
const v13 = [7.557860512229595,-1e-15,319.89261808269794];
const v14 = v11.segment();
function f15(a16, a17) {
    a16(1, a17, a17, ...v13, ...v12);
    return v14;
}
v14.toString = f15;
const v20 = new SharedArrayBuffer();
const v21 = v20.slice();
try { v21.grow(v14); } catch (e) {}
createGlobalObject();
try { v14.toLocaleString(); } catch (e) {}
gc();
