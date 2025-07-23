const v1 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v2 = [v1];
const v5 = `
    Map.length = Map;
    const v7 = new Map();
    v7[Symbol.toPrimitive] = Date;
    v7.toString = Date;
    const v10 = v7.has;
    let v11;
    try { v11 = v10(Map); } catch (e) {}
    function f12() {
        return Uint8Array;
    }
    f12.b = v7;
    f12.b = f12;
    v7.valueOf = f12;
    let v13 = v7 | v1;
    const v14 = v13 / v13;
    const v15 = v13++;
    Float32Array.length;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v19 = new Float32Array(7, f12, v15, 4);
    for (let v20 = 0; v20 < 5; v20++) {
        const v22 = "p" + v20;
        const v23 = v22.caller;
        try { v23.apply("p", "p"); } catch (e) {}
        v2[v22] = v20;
    }
    new Uint8Array(2165, v11, v19);
    const v27 = [-0.888876439764374,5.0,-31075.940693754004,0.0,-5.0,2.326945587547197,2.220446049250313e-16,-0.0,9.993763252577222e+307];
    const o28 = {
        __proto__: v27,
    };
    o28.slice().push(v14);
`;
eval(v5);
gc();
