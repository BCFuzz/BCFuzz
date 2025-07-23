const v1 = new Set();
const v2 = /[\011]/dys;
const v3 = /a74f/mdvgis;
const v4 = /Nfoo|(bar|baz)|quux/dgi;
const v6 = new BigUint64Array(v1, BigUint64Array, BigUint64Array);
const v8 = `
    2 << 2;
    const v12 = [4.0,1000000000000.0,-3.0,1000.0,-1e-15];
    try { v12.flat(); } catch (e) {}
    [1.0,-2.2250738585072014e-308];
    const v15 = [0.015937669852188252,109.01975211458421,5.0,-0.27839865911641937];
    v15[2];
    let v18;
    try { v18 = WeakMap(); } catch (e) {}
    try { v18.get(v18); } catch (e) {}
    let v20;
    try { v20 = v18.get(v18); } catch (e) {}
    const v21 = new WeakMap();
    try { v21.get(v15); } catch (e) {}
    let v24 = 2 + 2;
    v24--;
    Uint32Array.c = Uint32Array;
    let v27;
    try { v27 = Uint32Array(v21, v12, v15); } catch (e) {}
    const v28 = new Uint32Array(2);
    with (v1) {
        try { size(); } catch (e) {}
    }
    function f31() {
        return v2;
    }
    const v33 = 16 | 16;
    v33 >> v33;
    const v35 = ~16;
    v2[v28];
    v2.unicode = v18;
    const v38 = new BigInt64Array(v3[16], 16, 1);
    try { v38.copyWithin(v4, v2); } catch (e) {}
    v27 = v21;
    const v41 = new Uint16Array(16);
    v41[2] = v41;
    const v42 = v18 >= v35;
    v42 && v42;
    if (v42) {
        const o44 = {
        };
        Proxy(v28, o44);
    } else {
        [v4,...v6];
    }
    try { Float64Array(v20); } catch (e) {}
`;
eval(v8);
gc();
