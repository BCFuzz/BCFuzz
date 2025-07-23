const v2 = `
    const v3 = /\u{12345}/myvis;
    let v5;
    try { v5 = v3.compile(v2); } catch (e) {}
    v5.global = v5;
    v5.g = v5;
    function f6() {
        return -753.4427748575381;
    }
    const v7 = v5 === 1000.0;
    v7 && v7;
    const v9 = createGlobalObject();
    v9.e = v9;
    try { v9.load(v3); } catch (e) {}
`;
eval(v2);
gc();
