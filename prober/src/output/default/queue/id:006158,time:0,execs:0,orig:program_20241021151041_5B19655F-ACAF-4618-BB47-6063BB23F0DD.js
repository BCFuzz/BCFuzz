const v1 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
const v2 = new Uint8Array();
const v3 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v5 = [Uint8Array,Uint8Array];
const v6 = `
    Map.length = Map;
    const v8 = new Map();
    const v9 = v8.has;
    let v10;
    try { v10 = v9(Map); } catch (e) {}
    function f11() {
        return f11;
    }
    f11.b = f11;
    v8.valueOf = f11;
    let v12 = v8 | v3;
    const v13 = v12 / v12;
    const v14 = v12++;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v17 = new Float32Array(7);
    for (let v18 = 0; v18 < 5; v18++) {
        const v20 = "p" + v18;
        const v21 = v13.codePointAt;
        try { v21.call(v1); } catch (e) {}
        try { v21(v17); } catch (e) {}
        v5[v20] = v14;
        function f24() {
            return "p";
        }
        class C25 extends f24 {
        }
    }
    let v26 = 128;
    v26--;
    const v29 = new Float64Array(7);
    try { v29.findLast(1024, v8); } catch (e) {}
    Uint8Array.prototype = Uint8Array;
    const v32 = new Uint8Array(2165, v10, v17, v2);
    [];
    new Int16Array();
    v9.prototype = Int8Array;
    function f37() {
        return v17;
    }
    const v38 = f37();
    for (let v39 = 0; v39 < 5; v39++) {
        "p" + v39;
    }
    let v44 = ([1535927747,-3775,257,1,7]).f;
    new Map();
    let v46 = undefined;
    v46 = 20;
    new Float32Array();
    const v49 = new Uint8ClampedArray();
    delete v49[53343n];
    v44 = v38;
    v32[842];
`;
eval(v6);
gc();
