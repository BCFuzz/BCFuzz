class C0 {
}
const v2 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F3();
const v6 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v8 = [v5,v5,v5];
const v10 = `
    Map.length = Map;
    const v12 = new Map();
    const v13 = v12.has;
    try { v13(C0); } catch (e) {}
    let v15;
    try { v15 = v13(Map); } catch (e) {}
    function f16() {
        return v13;
    }
    try { f16(); } catch (e) {}
    f16.b = f16;
    v12.valueOf = f16;
    let v18 = v12 | v6;
    v18 / v18;
    v18++;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v23 = new Float32Array(7);
    for (let v24 = 0; v24 < 5; v24++) {
        const v26 = "p" + v24;
        v26 == v26;
        const v28 = v26.codePointAt;
        try { v28.call(v2); } catch (e) {}
        try { v28(v23); } catch (e) {}
        v8[v26] = v24;
    }
    let v31 = 128;
    const v32 = v31--;
    const v34 = new Float64Array(v31);
    try { v34.subarray(4294967297, v13); } catch (e) {}
    try { v34.findLast(1024, v12); } catch (e) {}
    2165 - 2165;
    Uint8Array.prototype = Uint8Array;
    const v39 = new Uint8Array(2165, v15, v23, v5);
    [];
    new Int16Array();
    Int8Array.prototype = Int8Array;
    function f44() {
    }
    const v45 = f44();
    try { v45.lastIndexOf(v32); } catch (e) {}
    for (let v47 = 0; v47 < 5; v47++) {
    }
    v39[842];
`;
eval(v10);
gc();
