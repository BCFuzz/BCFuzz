class C2 {
}
function f3() {
}
const v6 = new Float64Array(257);
for (const v7 of v6) {
    const v8 = new Float64Array();
    const v10 = new Uint16Array();
    const v11 = new C2();
    Object.defineProperty(v11, Symbol.iterator, { configurable: true, enumerable: true, value: f3 });
    try { v8(...v10, ...v10, ...v11); } catch (e) {}
}
gc();
