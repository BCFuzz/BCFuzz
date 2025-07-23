const v2 = `
    class C3 {
    }
    const v4 = new C3();
    v4.constructor;
    for (let [i18, i19] = (() => {
            for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
            }
            return [0, 7];
        })();
        i18 < i19;
        i19--) {
    }
    class C26 {
    }
    const v27 = new C26();
    const v28 = v27.constructor;
    const v30 = Error(v2);
    const v31 = Error();
    try { v31.forEach(v2, v4, C3); } catch (e) {}
    function F33(a35, a36, a37, a38) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F33(undefined, v30);
    const v41 = eval();
    class C42 {
    }
    const v43 = new C42();
    for (let i46 = 0, i47 = 10; i46 < i47; i47--) {
    }
    const v54 = Error.constructor;
    let v55;
    try { v55 = v54(v43); } catch (e) {}
    let v56 = 934305.379841754;
    let v57 = v56--;
    const v58 = Error(v57);
    const v59 = v57--;
    const v60 = Error(v58);
    let v61;
    try { v61 = v60.forEach(); } catch (e) {}
    for (let i64 = 10, i65 = 10; -13369 < i65; i65--) {
    }
    const v74 = [SyntaxError()];
    try { v74.every(v61, v74); } catch (e) {}
    const v76 = new Int32Array(v28, v41, v59);
    ([v55,v55]).slice(v76);
`;
eval(v2);
gc();
