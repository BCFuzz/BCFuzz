class C0 {
}
const v1 = new C0();
function f2(a3, a4, a5, a6) {
    const o12 = {
        toString(a8, a9, a10, a11) {
            return a4;
        },
    };
    return o12;
}
const v14 = f2(v1, f2());
const v15 = f2();
try { v15.__lookupSetter__(v14); } catch (e) {}
gc();
