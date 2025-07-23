const v0 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v2 = [v0,v0,v0];
const v5 = `
    Map.length = Map;
    const v7 = new Map();
    function f8() {
        return v2;
    }
    v7.valueOf = f8;
    let v9 = v7 | v0;
    v9++;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v13 = new Float32Array(7);
    for (let v14 = 0; v14 < 5; v14++) {
        const v16 = "p" + v14;
        const v17 = v16?.codePointAt;
        try { v17(v13); } catch (e) {}
        v2[v16] = v14;
    }
    function f19(a20, a21, a22) {
        return BigUint64Array;
    }
    const v25 = new Float64Array(128);
    try { v25.findLast(1024); } catch (e) {}
    Uint8Array.prototype = Uint8Array;
    const v28 = new Uint8Array(2165);
    [v0];
    new Int16Array();
    Int8Array[2] = BigUint64Array;
    v28[842];
`;
eval(v5);
gc();
