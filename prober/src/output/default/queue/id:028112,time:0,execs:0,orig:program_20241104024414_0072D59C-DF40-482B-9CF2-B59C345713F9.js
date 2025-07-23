const v2 = `
    const v3 = /\u{12345}/myvis;
    let v5;
    try { v5 = v3.compile(v2); } catch (e) {}
    v5.ignoreCase = v5;
    v5.global = v5;
    v5.g = v5;
    function f6() {
        return -753.4427748575381;
    }
    try { f6(); } catch (e) {}
    const v8 = v5 === 1000.0;
    v8 || v8;
    v8 && v8;
    const v11 = createGlobalObject();
    try { v11.load(v3); } catch (e) {}
`;
eval(v2);
gc();
