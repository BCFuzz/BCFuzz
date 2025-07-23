const v0 = `
    const v1 = /8dOh?/myvis;
    let v3;
    try { v3 = v1.compile(v0); } catch (e) {}
    v3.ignoreCase = v3;
    const o4 = {
        "apply": createGlobalObject,
        "call": createGlobalObject,
        "construct": createGlobalObject,
        "defineProperty": createGlobalObject,
        "deleteProperty": createGlobalObject,
        "preventExtensions": createGlobalObject,
    };
    function f5() {
        return v3;
    }
    const v6 = createGlobalObject();
    try { v6.load(v1); } catch (e) {}
`;
eval(v0);
gc();
