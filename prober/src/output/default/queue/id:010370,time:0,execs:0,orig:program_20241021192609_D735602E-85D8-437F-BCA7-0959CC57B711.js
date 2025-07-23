const v2 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
function f3() {
    return v2;
}
function f4(a5) {
}
const v6 = `
    const v10 = new Float64Array(122);
    v10["fill"]("fill", 79, 122);
    Map.length = Map;
    const v13 = new Map();
    v13[Symbol.toPrimitive] = f4;
    v13.toString = f3;
    const v15 = v13.has;
    v15.length = v15;
    let v16;
    try { v16 = v15(Map); } catch (e) {}
    function f17() {
        return v16;
    }
    f17.b = Symbol;
    f17.b = f17;
    v13.valueOf = f17;
    let v18 = v13 | v2;
    v18 / v18;
    let v20 = v18++;
    v20++;
    Float32Array.length;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v25 = new Float32Array(7);
    const v27 = ([]).entries;
    const o28 = {
        ...v27,
    };
    for (let v29 = 0; v29 < 5; v29++) {
        const v32 = ("p" + v29).codePointAt;
        try { v32(v25); } catch (e) {}
    }
`;
eval(v6);
gc();
