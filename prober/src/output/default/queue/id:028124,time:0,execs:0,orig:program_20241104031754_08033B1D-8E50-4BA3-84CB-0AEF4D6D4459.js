const v1 = new ArrayBuffer();
const v3 = new BigUint64Array();
const v6 = `
    const v7 = /\u{12345}/myvis;
    try { v7.compile(); } catch (e) {}
    let v10;
    try { v10 = v7.compile(v6); } catch (e) {}
    v10.ignoreCase = v10;
    v10.global = v10;
    v10.g = v10;
    function f11() {
        return -753.4427748575381;
    }
    f11.length = f11;
    try { f11.__defineSetter__(v3, v3); } catch (e) {}
    let v13;
    try { v13 = f11(); } catch (e) {}
    v13 * v13;
    const v15 = v10 === 1000.0;
    v15 || v15;
    const v17 = v15 || v15;
    function f18(a19) {
        return v1;
    }
    class C20 extends f18 {
        #e = 1000.0;
        2380;
        static f;
    }
    v15 && v15;
    const v22 = createGlobalObject();
    try { v22.EvalError(v17); } catch (e) {}
    v22.EvalError;
    try { v22.load(v7); } catch (e) {}
`;
eval(v6);
gc();
