class C0 {
}
function f1() {
}
const v4 = new Float64Array(257);
for (const v5 of v4) {
    const v6 = new Float64Array();
    const v8 = new Uint16Array();
    const v9 = new C0();
    Object.defineProperty(v9, Symbol.iterator, { configurable: true, enumerable: true, value: f1 });
    try { v6(...v8, ...v8, ...v9); } catch (e) {}
}
gc();
