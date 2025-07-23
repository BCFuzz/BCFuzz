const v0 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
const v1 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v2 = [];
let v6 = ([1535927747,-3775,257,1,7]).f;
const v7 = `
    Map.length = Map;
    const v9 = new Map();
    const v10 = v9?.has;
    try { v10(Map); } catch (e) {}
    function f12() {
        return v0;
    }
    f12.b = f12;
    v9.valueOf = f12;
    let v13 = v9 | v1;
    v13 / v13;
    v13++;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v18 = new Float32Array(7);
    for (let v19 = 0; v19 < 5; v19++) {
        const v21 = "p" + v19;
        const v22 = v21.codePointAt;
        try { v22.call(v0); } catch (e) {}
        try { v22(v18); } catch (e) {}
        v2[v21] = v19;
    }
    let v25 = 128;
    const v26 = v25--;
    const v28 = new Float64Array();
    let v29;
    try { v29 = v28.findLast(); } catch (e) {}
    const v30 = new Uint8Array();
    const v32 = new Int8Array(v26, v6, v29);
    const v33 = v32.constructor;
    try { v33(); } catch (e) {}
    const v35 = v30[842];
    v35 >>> v35;
    v6 = Uint32Array;
`;
eval(v7);
gc();
