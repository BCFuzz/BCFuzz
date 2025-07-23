class C1 {
}
const v4 = new Float64Array(257);
for (const v5 of v4) {
    const v6 = new Float64Array();
    const v9 = new Uint16Array(4);
    const v10 = new C1();
    v10[Symbol.iterator] = Symbol;
    try { v6(...v9, ...v9, ...v10); } catch (e) {}
}
gc();
