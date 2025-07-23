function f0(a1) {
    return a1;
}
const v2 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
function f3(a4) {
    Object.defineProperty(a4.propertyIsEnumerable(), "g", { writable: true, configurable: true, get: f0, set: f0 });
    return f0;
}
v2[Symbol.toPrimitive] = f3;
const v8 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
function f9() {
    return f0;
}
function f10(a11) {
}
const v12 = `
    Map.length = Map;
    const v14 = new Map();
    v14[Symbol.toPrimitive] = f10;
    v14.toString = f9;
    const v16 = v14.has;
    v16.length = v16;
    let v17;
    try { v17 = v16(Map); } catch (e) {}
    function f18() {
        return v17;
    }
    f18.b = Symbol;
    f18.b = f18;
    v14.valueOf = f18;
    let v19 = v14 | v8;
    v19 / v19;
    let v21 = v19++;
    v21++;
    Float32Array.length;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v26 = new Float32Array(7);
    for (let v27 = 0; v27 < 5; v27++) {
        try { ("p").substr(v17, v27); } catch (e) {}
        const v31 = ("p" + v27).codePointAt;
        try { v31.call(v2); } catch (e) {}
        try { v31(v26); } catch (e) {}
    }
`;
eval(v12);
gc();
