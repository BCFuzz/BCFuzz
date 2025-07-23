function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Float64Array();
    const v8 = new Uint16Array(a3, a2, a2);
    const v10 = new Int16Array();
    try { v6(...v8, ...v8, ...v10); } catch (e) {}
    const v13 = new BigInt64Array(3641);
    for (const v14 of v13) {
    }
}
new F0();
gc();
