const v1 = Date();
const v2 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v4 = [1024];
const v6 = `
    Map.length = Map;
    let v8 = 0;
    while ((() => {
            let v9 = 3;
            v9++;
            return v8 < v9;
        })()) {
        v8++;
    }
    const v13 = new Map();
    let v14 = v13 | v2;
    v14++;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v18 = new Float32Array(7);
    v18.BYTES_PER_ELEMENT = v18;
    Math.expm1(268435441);
    Math.tan(-536870912);
    Math.asin(v1);
    v1 && -536870912;
    -268435441;
    Math.acos(v1);
    for (let v28 = 0; v28 < 5; v28++) {
        const v29 = v28 <= v28;
        v29 || v29;
        const v32 = "p" + v28;
        try { v32.sup(); } catch (e) {}
        let v34 = v32?.codePointAt;
        v34.d = v34;
        try { v34(v18); } catch (e) {}
        for (let i37 = 0; i37 < 4; i37++) {
            v34[16];
            v34 = i37;
            continue;
        }
        v4[v32] = v28;
    }
    const v46 = new Float64Array(128);
    const v47 = v46?.constructor;
    try { v47(Map, Map, v14); } catch (e) {}
    v46.length = v46;
    try { v46.findLast(1024); } catch (e) {}
    2165 * 2165;
    Uint8Array.prototype = Uint8Array;
    const v52 = new Uint8Array(2165);
    v52[2006];
    v52[842];
    for (let i56 = 0; i56 < 0; i56++) {
        delete v18?.BYTES_PER_ELEMENT;
    }
`;
eval(v6);
gc();
