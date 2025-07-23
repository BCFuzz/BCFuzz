const v2 = ("MKBC")[1];
const v5 = ("unicode").replaceAll().bold();
const v7 = [v5,v5,v5,v5,v5];
const v8 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v11 = `
    let v13;
    try { v13 = Map(); } catch (e) {}
    try { v13.entries(); } catch (e) {}
    const v15 = new Map();
    let v16;
    try { v16 = v15.delete(1000.0); } catch (e) {}
    v16 || v16;
    const v18 = v15.has;
    const v19 = v18.__lookupGetter__;
    try { v19(v2); } catch (e) {}
    const v21 = v18.toString;
    v21.e = v21;
    try { v21(); } catch (e) {}
    v18.name;
    let v24 = v18.length;
    v24++;
    v24 - v24;
    let v27 = v24 ^ v24;
    v27++;
    let v29;
    try { v29 = v18(Map); } catch (e) {}
    function f30() {
        return f30;
    }
    v15.valueOf = f30;
    const v31 = v15 | v8;
    const v32 = v31 * v31;
    v32 >>> v32;
    const v34 = v31 / v31;
    v34 >> v34;
    v34 - v34;
    let v37 = 7;
    const v38 = v37--;
    let v40;
    try { v40 = new Float32Array(Float32Array, v31, "f"); } catch (e) {}
    v40[1] = v40;
    const v41 = Float32Array.length;
    v41 ^ v41;
    const v43 = new Float32Array(v37);
    const v44 = v43[2];
    v44 >>> v44;
    const v46 = v44 >> v44;
    const v47 = v46 >> v46;
    v47 >> v47;
    for (let v49 = 0; v49 < 5; v49++) {
        v49 >> v49;
        const v51 = v49 / v49;
        v51 % v51;
        const v54 = "p" + v49;
        v54 == v54;
        const v56 = v54?.constructor;
        try { v56.fromCodePoint(v5); } catch (e) {}
        let v58;
        try { v58 = v56(Uint8Array); } catch (e) {}
        v58[23] = v58;
        const v59 = v54.codePointAt;
        try { v59(v51); } catch (e) {}
        try { v59(v15); } catch (e) {}
        const v62 = new Map();
        try { v62.toString(); } catch (e) {}
        try { v62.clear(); } catch (e) {}
        v62.valueOf = Date;
        (v62 + v7).toLocaleLowerCase();
        ([3.795135803527102e+307,1.6159940152271077e+307,NaN,-3.0,-904.9582059838543,-5.0]).map;
    }
    let v69 = 128;
    const v70 = v69--;
    v70 ^ v70;
    const v73 = Float64Array.constructor;
    try { v73.apply(Map, v38); } catch (e) {}
    new Uint8Array(2165, v29);
`;
eval();
eval(v11);
gc();
