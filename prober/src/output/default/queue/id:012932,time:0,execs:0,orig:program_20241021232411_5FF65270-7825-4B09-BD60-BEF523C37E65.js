for (let v2 = 0; v2 < 25; v2++) {
    class C4 {
        constructor(a6, a7, a8, a9) {
            a7.toString(a6);
        }
    }
    const v11 = new C4(8n, "symbol");
    const v12 = v11.constructor;
    try { new v12(v2, 966773.1894690343); } catch (e) {}
}
gc();
