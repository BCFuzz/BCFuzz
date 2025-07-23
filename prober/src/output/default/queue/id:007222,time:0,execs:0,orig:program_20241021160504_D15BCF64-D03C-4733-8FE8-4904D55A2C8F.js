function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = f0();
const v3 = f0();
const v4 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v6 = `
    Map.length = Map;
    let v8 = 0;
    v8 == v8;
    let v10 = 3;
    v10++;
    v8 < v10;
    const v13 = v8++;
    v13 >>> v13;
    const v15 = new Map();
    const v17 = Symbol.toPrimitive;
    try { Symbol(v10); } catch (e) {}
    v17.description;
    const v20 = Symbol.for();
    new Uint32Array();
    Symbol.toPrimitive;
    v20.description;
    Symbol.for();
    v15[v17] = Date;
    const v26 = v15 | v4;
    v26 >>> v26;
    let v28 = 7;
    v28--;
    try { Float32Array(v3, Float32Array, v3); } catch (e) {}
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v32 = new Float32Array(v28);
    const v33 = v32?.constructor;
    try { v33(v32, v4); } catch (e) {}
    v32.BYTES_PER_ELEMENT = v32;
    class C35 {
    }
    try { C35(); } catch (e) {}
    let v37;
    try { v37 = C35(); } catch (e) {}
    const v38 = v37?.constructor;
    try { new v38(f0, v38, v38); } catch (e) {}
    const v40 = new C35();
    for (let i = 0; i < 5; i++) {
        const v42 = v40 && -5.0;
        v42 - v42;
        v2[v42] = Symbol;
        [-6349,-1,129,-65262];
        [2147483647,9007199254740992,536870888,1662390562,2,16,-7,-584649857,35494];
        [-4294967297,1128869921,-268435456,5,-4,-48952];
    }
`;
eval(v6);
gc();
