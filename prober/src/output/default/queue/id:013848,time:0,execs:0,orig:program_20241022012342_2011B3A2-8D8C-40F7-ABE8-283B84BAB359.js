class C1 {
}
const v4 = new Float64Array(257);
for (const v5 of v4) {
    const v6 = new Float64Array();
    const v8 = new Map(v6);
    const v9 = new C1();
    Object.defineProperty(v9, Symbol.iterator, { value: Array });
    try { v6(...v8, ...v8, ...v9); } catch (e) {}
}
gc();
