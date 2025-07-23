function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
let v5 = Float64Array;
const v6 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v7 = `
    const v9 = new Map();
    const v10 = v9?.has;
    function f11() {
        return f11;
    }
    f11.b = f11;
    let v12 = v9 | v6;
    v12 & v12;
    const v14 = v12++;
    v14 >>> v14;
    for (let v16 = 0; v16 < 5; v16++) {
        const v17 = v16 + v16;
        v10[v12] **= v17;
        v4[v17] = v5;
        const v19 = ("p").search();
        const v20 = v19 - v19;
        v20 + v20;
        const v23 = ("p" + v16).codePointAt;
        let v24;
        try { v24 = v23.call(); } catch (e) {}
        let v25 = v24 * v24;
        v25++;
    }
    let v27 = 128;
    ({"c":v27,"length":v5,} = v6);
`;
eval(v7);
gc();
