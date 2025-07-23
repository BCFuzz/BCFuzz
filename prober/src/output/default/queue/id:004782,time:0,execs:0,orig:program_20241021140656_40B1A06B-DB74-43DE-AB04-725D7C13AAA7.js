const v2 = new Uint8Array();
const v3 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F4();
const v7 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v9 = [Uint8Array];
const v11 = `
    Map.length = Map;
    const v13 = new Map();
    const v14 = v13.has;
    try { v14.call(null); } catch (e) {}
    let v16;
    try { v16 = v14(Map); } catch (e) {}
    function f17() {
        0 >>> 0;
        return v11;
    }
    f17.b = f17;
    v13.valueOf = f17;
    let v20 = v13 | v7;
    v20 !== v20;
    v20 / v20;
    v20++;
    Float32Array.prototype;
    v2.BYTES_PER_ELEMENT = Float32Array;
    const v27 = new Float32Array(7);
    for (let v28 = 0; v28 < 5; v28++) {
        const v30 = "p" + v28;
        const v31 = v30.codePointAt;
        try { v31.call(v3); } catch (e) {}
        try { v31(v27); } catch (e) {}
        v9[v30] = v28;
    }
    let v34 = 128;
    v34--;
    const v37 = new Float64Array(v34);
    v37[3] = v37;
    try { v37.findLast(1024, v13); } catch (e) {}
    Uint8Array.prototype = Uint8Array;
    const v40 = new Uint8Array(2165, v16, v27, v6);
    [];
    new Int16Array();
    Int8Array.prototype = Int8Array;
    function f45() {
        return 1024;
    }
    for (let v46 = 0; v46 < 5; v46++) {
        const v48 = "p" + v46;
        try { v48.link(v46); } catch (e) {}
    }
    let v50 = 20;
    v50--;
    [1535927747,-3775,257,1,7];
    53343n / 53343n;
    eval();
    Int8Array[2] = BigUint64Array;
    class C58 {
        ["string"];
    }
    -5;
    15 * 15;
    let v64 = 9493;
    v64--;
    const o66 = {
    };
    o66.d = -2;
    const v68 = [-0.888876439764374,5.0,-31075.940693754004,0.0,-5.0,2.326945587547197,2.220446049250313e-16,-0.0,9.993763252577222e+307];
    const o69 = {
        119: 1000.0,
        __proto__: v68,
    };
    v40[842];
`;
eval(v11);
gc();
