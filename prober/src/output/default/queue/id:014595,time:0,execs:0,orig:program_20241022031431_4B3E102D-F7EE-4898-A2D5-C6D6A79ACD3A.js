const v1 = new Uint32Array();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        class C9 {
        }
        class C10 extends C9 {
            [v1] = F4;
        }
        Object.defineProperty(C9, 2, { value: NaN });
    }
    new F4();
}
new F2();
function f13() {
    return f13;
}
class C14 {
}
const v17 = new Float64Array(257);
for (const v18 of v17) {
    const v19 = new Float64Array();
    const v21 = new Uint16Array();
    const v22 = new C14();
    v22[Symbol.iterator] = f13;
    try { v19(...v21, ...v21, ...v22); } catch (e) {}
}
gc();
