const v0 = [];
const v2 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v5 = Date(6) ** v0;
const v7 = `
    const v9 = new Map();
    function f10() {
        v9.size >>= v5;
        const t7 = "symbol";
        t7[2] = 6;
        return v5;
    }
    v9.valueOf = f10;
    v9 | v2;
`;
eval(v7);
gc();
