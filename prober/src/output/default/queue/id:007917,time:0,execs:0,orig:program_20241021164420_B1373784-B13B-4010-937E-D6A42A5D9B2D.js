function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F1(F1, BigUint64Array, BigUint64Array);
const v7 = `
    const v9 = ("-13").substring;
    try { v9(); } catch (e) {}
    function f12(a13, a14) {
        return v6;
    }
    const v15 = f12();
    const v16 = v15.__defineSetter__;
    let v17;
    try { v17 = v16.bind(); } catch (e) {}
    let v18;
    try { v18 = v16(); } catch (e) {}
    try { v16(); } catch (e) {}
    const v20 = v15.constructor;
    v20.arguments;
    let v22;
    try { v22 = v20.toString(); } catch (e) {}
    let v23;
    try { v23 = v22.toLowerCase(); } catch (e) {}
    let v24;
    try { v24 = v20(v15); } catch (e) {}
    const v25 = v24?.constructor;
    let v26;
    try { v26 = v25.apply(); } catch (e) {}
    let v27;
    try { v27 = v25(BigUint64Array, v26, "-13"); } catch (e) {}
    const v28 = v27?.constructor;
    try { v28(); } catch (e) {}
    const v30 = v24?.constructor;
    let v31;
    try { v31 = v30(); } catch (e) {}
    let v32;
    try { v32 = v30(); } catch (e) {}
    try { v32.valueOf(); } catch (e) {}
    const v34 = f12();
    try { v34.__defineSetter__(v25, v31, v34, v7); } catch (e) {}
    const v36 = v34.constructor;
    try { v36(v23, v18, v7, v36, v15); } catch (e) {}
    let v38;
    try { v38 = v36(); } catch (e) {}
    try { v36.apply(v38, v17, v34, v36, BigUint64Array); } catch (e) {}
    function F40(a42, a43) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v44 = new F40(v34, v28);
    const v47 = new BigUint64Array(v6, v38, (v44 - v44) && Uint32Array);
    for (const v48 of v47) {
    }
`;
eval(v7);
gc();
