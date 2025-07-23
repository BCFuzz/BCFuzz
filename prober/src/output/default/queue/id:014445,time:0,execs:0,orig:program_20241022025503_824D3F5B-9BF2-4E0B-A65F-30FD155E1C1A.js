const v0 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
const v4 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
function f5(a6, a7) {
    return a6;
}
const v9 = [1024,1024,1024,1024,1024];
const v12 = `
    for (let v14 = 0; v14 < 5; v14++) {
        function F15() {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F15();
    }
    try { Map(); } catch (e) {}
    Map.length = Map;
    const v19 = new Map();
    const v20 = v19?.has;
    v20.name;
    let v22;
    try { v22 = v20(Map); } catch (e) {}
    function f23() {
        return F1;
    }
    try { f23(); } catch (e) {}
    f23.b = f23;
    v19.valueOf = f23;
    let v25 = v19 | v4;
    v25 & v25;
    v25 / v25;
    v25++;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v31 = new Float32Array(7);
    v31[4];
    for (let v33 = 0; v33 < 5; v33++) {
        const v35 = "p" + v33;
        const v36 = v35.codePointAt;
        let v37;
        try { v37 = v36.call(v0); } catch (e) {}
        v37 / v37;
        try { v36(v31); } catch (e) {}
        v9[v35] = v33;
    }
    let v40 = 128;
    v40--;
    const v43 = new Float64Array(v40);
    try { v43.findLast(1024, v19); } catch (e) {}
    Uint8Array.prototype = Uint8Array;
    const v46 = new Uint8Array(2165, v22, v31, v3);
    const v47 = [];
    try { v47.findLast(Float32Array); } catch (e) {}
    const v50 = new Int16Array();
    try { v50.sort(v50); } catch (e) {}
    Int8Array.prototype = Int8Array;
    function f53() {
    }
    f53.e = f53;
    f53();
    for (let v55 = 0; v55 < 5; v55++) {
        ("p")?.small;
        try { v55(); } catch (e) {}
        "p" + v55;
    }
    let v63 = ([1535927747,-3775,257,1,7]).f;
    new Map();
    let v65 = undefined;
    v65 = 20;
    try { Float32Array.toString(); } catch (e) {}
    new Float32Array();
    const v69 = new Uint8ClampedArray();
    delete v69[53343n];
    function f72(a73, a74, a75) {
        return a73;
    }
    f72();
    v63 = Uint32Array;
    eval();
    Int8Array[2] = BigUint64Array;
    const v79 = new Int8Array(Int8Array);
    try { v79.findLast(v65); } catch (e) {}
    const v81 = v79?.d;
    try { v81(f5, v25, v25); } catch (e) {}
    class C84 {
        static set e(a86) {
        }
        static get e() {
        }
        ["string"];
    }
    const v89 = new Uint8ClampedArray(2502);
    for (const v90 in v89) {
        const o91 = {
        };
        function f92() {
            return f92;
        }
        function f93(a94) {
            return a94;
        }
        Object.defineProperty(o91, "a", { configurable: true, enumerable: true, get: f92, set: f93 });
        o91.a = v90;
    }
    for (let v95 = 0; v95 < 5; v95++) {
        let v96 = 5;
        v96--;
        v95[v96];
    }
    1000.0 - 1000.0;
    v46[842];
`;
eval(v12);
gc();
