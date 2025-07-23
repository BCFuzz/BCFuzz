const v0 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v1 = `
    const v3 = new Map();
    const v4 = v3.has;
    const v5 = v3 | v0;
    for (let v6 = 0; v6 < 5; v6++) {
        v4[v5] **= v6 + v6;
        const v11 = new BigInt64Array(3852);
        for (const v12 in v11) {
        }
        const v13 = "p" + v6;
        for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
        }
        v13.codePointAt;
    }
`;
eval(v1);
gc();
