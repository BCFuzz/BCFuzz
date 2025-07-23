const v0 = [1691822921,595997457,-2147483649,14,1190697000,1];
const o2 = {
    __proto__: v0,
};
const v3 = o2.shift();
const v5 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v8 = `
    const v10 = new Map();
    const v11 = v10.has;
    try { v11(undefined); } catch (e) {}
    let v13;
    try { v13 = v11(Map); } catch (e) {}
    function f14() {
        return Date;
    }
    v10.valueOf = f14;
    let v15 = v10 | v5;
    v15++;
    v15 / v15;
    Float32Array.length;
    const v21 = new Float32Array(7);
    v21.length = 2;
    const v24 = Symbol.iterator;
    const o26 = {
        [v24]() {
        },
    };
    for (let v27 = 0; v27 < 5; v27++) {
        const v30 = ("p" + v27).codePointAt;
        const v31 = new Map();
        v31.valueOf = Date;
        Object.defineProperty(Date, "a", { enumerable: true, get: gc, set: Date });
        v3[Date] = undefined;
        try { v30.apply(); } catch (e) {}
    }
    new Uint8Array(2165, v13);
`;
eval(v8);
gc();
