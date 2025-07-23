[];
const v3 = [];
const v4 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
const v5 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v8 = `
    const v10 = new Map();
    const v11 = v10.has;
    let v12;
    try { v12 = v11(Map); } catch (e) {}
    function f13() {
        return v10;
    }
    v10.valueOf = f13;
    const v14 = v10 | v5;
    v14 / v14;
    Float32Array.length;
    const v19 = new Float32Array(7);
    for (let v20 = 0; v20 < 5; v20++) {
        const v23 = ("p" + v20).codePointAt;
        const v24 = new Map();
        v24.valueOf = Date;
        v24 + v3;
        const v27 = ([3.795135803527102e+307,1.6159940152271077e+307,NaN,-3.0,-904.9582059838543,-5.0]).map;
        try { v27(); } catch (e) {}
        try { v23.apply("p", "p"); } catch (e) {}
        v23.call(v4);
    }
    let v31 = 128;
    const v32 = v31--;
    v32 + v32;
    new Float64Array();
    new Uint8Array(2165, v12, v19);
    function f39(a40, a41, a42, a43) {
        a41.flatMap();
        class C45 {
            get c() {
            }
        }
        for (const v48 of BigUint64Array()) {
        }
    }
`;
eval(v8);
gc();
