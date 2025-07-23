const v0 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v2 = `
    Map.length = Map;
    let v4 = 0;
    while ((() => {
            let v5 = 3;
            v5++;
            return v4 < v5;
        })()) {
        v4++;
    }
    const v9 = new Map();
    v9[Symbol.toPrimitive] = Date;
    let v12 = v9 | v0;
    v12++;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v16 = new Float32Array(7);
    v16.BYTES_PER_ELEMENT = v16;
    class C17 {
    }
    const v18 = new C17();
    for (let i = 0; i < 5; i++) {
        v18[268435439] = v18 && -5.0;
    }
    for (let v21 = 0; v21 < 5; v21++) {
        const v22 = v21 <= v21;
        v22 || v22;
        const v25 = "p" + v21;
        try { v25.sup(); } catch (e) {}
        v25?.codePointAt;
    }
`;
eval(v2);
gc();
