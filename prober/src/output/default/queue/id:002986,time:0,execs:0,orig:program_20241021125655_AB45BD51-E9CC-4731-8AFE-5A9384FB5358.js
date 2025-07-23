const v0 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
let v2 = 128;
const v3 = v2++;
const v4 = [];
const v6 = Date(v3);
const v7 = [1535927747,-3775,257,1,7];
const v11 = new BigUint64Array();
const v12 = v11.every(Date);
let v13 = v7.f;
const v14 = Date[v12];
const v15 = `
    Map.length = Map;
    const v17 = new Map();
    let v18 = v17 | v0;
    v18++;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v22 = new Float32Array(7);
    for (let v23 = 0; v23 < 5; v23++) {
        const v25 = "p" + v23;
        const v26 = v25?.codePointAt;
        try { v26(v22); } catch (e) {}
        v4[v25] = v23;
    }
    const v30 = new Float64Array(128);
    try { v30.findLast(1024); } catch (e) {}
    Uint8Array.prototype = Uint8Array;
    const v33 = new Uint8Array(2165);
    const v34 = v33[842];
    v34 + v34;
    v4.__proto__ = v14;
    v6.g = Uint8Array;
    v7[6] -= v2;
    v13 = Uint32Array;
`;
eval(v15);
gc();
