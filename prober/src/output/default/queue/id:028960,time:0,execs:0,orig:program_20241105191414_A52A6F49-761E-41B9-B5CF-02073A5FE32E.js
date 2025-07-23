let v2 = [3];
let o15 = {
    n(a5, a6, a7) {
        const v8 = this;
        const v9 = v8.Intl;
        const v10 = v9.Segmenter;
        const v12 = new ArrayBuffer(255);
        v12.minimumFractionDigits = v2;
        v12.maximumFractionDigits = 5.0;
        const t9 = v9.PluralRules;
        new t9(v10, v12);
        return v2;
    },
};
const v16 = o15.n;
class C17 {
}
let v18;
try {
const t0 = 255;
v18 = t0(v2);
} catch (e) {}
({"g":C17,"h":o15,"length":v2,...v18} = "bigint");
try { v16(); } catch (e) {}
for (let i22 = 0, i23 = 10; i22 != i23; i23--) {
}
gc();
