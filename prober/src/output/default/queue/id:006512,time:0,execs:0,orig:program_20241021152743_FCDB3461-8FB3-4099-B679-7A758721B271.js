class C1 {
}
const v2 = new C1();
const v3 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v6 = new BigUint64Array();
const v8 = Date[v6.every(Date)];
const v9 = `
    Map.length = Map;
    const v11 = new Map();
    const v12 = v11?.has;
    const v13 = v12?.bind;
    try { v13("buffer"); } catch (e) {}
    let v15;
    try { v15 = v12(Map); } catch (e) {}
    function f16() {
        return v3;
    }
    f16.b = f16;
    v11.valueOf = f16;
    let v17 = v11 | v3;
    v17 / v17;
    v17++;
    Float32Array.prototype = Float32Array;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v22 = new Float32Array(7);
    for (let v23 = 0; v23 < 5; v23++) {
        const v25 = "p" + v23;
        try { v25.search(v2); } catch (e) {}
        const v27 = v25.codePointAt;
        let v28;
        try { v28 = v27.call(); } catch (e) {}
        v28 - v28;
        try { v27(v22); } catch (e) {}
    }
    new Float64Array(v8, v15);
`;
eval(v9);
gc();
