const v2 = Date();
const v3 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v5 = `
    Map.length = Map;
    let v7 = 0;
    while ((() => {
            let v8 = 3;
            v8++;
            return v7 < v8;
        })()) {
        v7++;
    }
    const v12 = new Map();
    let v13 = v12 | v3;
    const v14 = v13++;
    const o18 = {
        valueOf() {
            return v3;
        },
    };
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v19 = new Float32Array(7);
    const o20 = {
    };
    o20.e = -15;
    const o21 = {
    };
    o21.e = -15;
    o21.g = v19;
    const o22 = {
    };
    o22.e = -15;
    o22.g = v19;
    o22.f = Uint8Array;
    const o23 = {
    };
    o23.e = -15;
    o23.g = v19;
    o23.h = v14;
    v19.BYTES_PER_ELEMENT = v19;
    Math.expm1(268435441);
    Math.tan(-536870912);
    Math.asin(v2);
    v2 && -536870912;
    -268435441;
    Math.acos(v2);
    for (let v33 = 0; v33 < 5; v33++) {
        const v34 = v33 <= v33;
        v34 || v34;
        const v37 = "p" + v33;
        const o40 = {
            "maxByteLength": 51,
        };
        const v42 = new SharedArrayBuffer(51, o40);
        new Int16Array(v42);
        try { v37.sup(); } catch (e) {}
        let v46 = v37?.codePointAt;
        v46.d = v46;
        try { v46(v19); } catch (e) {}
        for (let i49 = 0; i49 < 4; i49++) {
            v46[16];
            v46 = i49;
            continue;
        }
    }
`;
eval(v5);
gc();
