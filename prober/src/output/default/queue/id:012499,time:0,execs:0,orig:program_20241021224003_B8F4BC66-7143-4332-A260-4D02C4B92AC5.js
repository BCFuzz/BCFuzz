const v0 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v2 = `
    try { Map(); } catch (e) {}
    Map.length = Map;
    let v5 = 0;
    while ((() => {
            const o7 = {
            };
            return v5 < 3;
        })()) {
        v5++;
    }
    const v10 = new Map();
    try { Symbol(); } catch (e) {}
    class C13 {
        get c() {
        }
    }
    try { C13(); } catch (e) {}
    new C13();
    const v17 = Symbol.toPrimitive;
    v10[v17] = Date;
    try { new Int8Array(v10, Int8Array, v17); } catch (e) {}
    function f20() {
        return f20;
    }
    try { f20.toString(); } catch (e) {}
    let v22 = v10 | v0;
    v22 === v22;
    v22++;
    Float32Array.name = Float32Array;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v27 = new Float32Array(7);
    v27.BYTES_PER_ELEMENT = v27;
    class C28 {
    }
    C28.prototype;
    const v30 = new C28();
    try { v30.constructor(); } catch (e) {}
    for (let i = 0; i < 5; i++) {
        v30[268435439] = v30 && -5.0;
    }
    for (let v34 = 0; v34 < 5; v34++) {
        v34 >> v34;
        const v36 = v34 <= v34;
        !v36;
        const v38 = v36 || v36;
        !(v38 && v38);
        const v42 = "p" + v34;
        try { v42.sup(); } catch (e) {}
        let v44 = 129;
        v44 * v44;
        v44++;
        const v47 = \`
        \`;
    }
`;
eval(v2);
gc();
