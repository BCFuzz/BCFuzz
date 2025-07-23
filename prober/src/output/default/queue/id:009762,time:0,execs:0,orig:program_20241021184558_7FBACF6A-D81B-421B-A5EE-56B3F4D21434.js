const v3 = new Uint8Array();
const v4 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F5();
const v8 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v10 = [v4,v4];
const v11 = `
    Map.length = Map;
    const v13 = new Map();
    const v14 = v13.has;
    const v16 = v14.name?.constructor;
    try { v16(Map); } catch (e) {}
    try { v14.call(null); } catch (e) {}
    let v19;
    try { v19 = v14(Map); } catch (e) {}
    function f20() {
        return v11;
    }
    f20.a = f20;
    f20.b = f20;
    v13.valueOf = f20;
    let v21 = v13 | v8;
    const v22 = v21 !== v21;
    v21 / v21;
    v21++;
    7 + 7;
    try { Float32Array.apply(Float32Array, v14); } catch (e) {}
    const v29 = Float32Array.prototype;
    let v30;
    try { v30 = v29.filter(v22); } catch (e) {}
    v3.BYTES_PER_ELEMENT = Float32Array;
    const v31 = new Float32Array(7);
    for (let v32 = 0; v32 < 5; v32++) {
        const t35 = "p";
        t35[0] = "p";
        const v34 = "p" + v32;
        v34?.indexOf;
        const v36 = v34.codePointAt;
        v36.d = v36;
        v36.length = v36;
        let v37;
        try { v37 = v36.call(v4); } catch (e) {}
        v37 << v37;
        v37 << v37;
        try { v36(v31); } catch (e) {}
        v10[v34] = v32;
    }
    let v41 = 128;
    v41--;
    try { Float64Array.call(v30); } catch (e) {}
    const v45 = new Float64Array(v41);
    try { v45.sort(Map); } catch (e) {}
    v45[3] = v45;
    try { v45.findLast(1024, v13); } catch (e) {}
    Uint8Array.prototype = Uint8Array;
    const v49 = new Uint8Array(2165, v19, v31, v7);
    const v51 = ([v49,v49,v49]).length;
    Int16Array.name = Int16Array;
    new Int16Array();
    Int8Array.prototype = Int8Array;
    function f55() {
        return v19;
    }
    for (let v56 = 0; v56 < 5; v56++) {
        try { ("p").startsWith("p"); } catch (e) {}
        const v59 = "p" + v56;
        v59.fontcolor(-11n);
        v59.link();
    }
    function f62(a63, a64) {
        return Float32Array;
    }
    f62(v51);
`;
eval(v11);
gc();
