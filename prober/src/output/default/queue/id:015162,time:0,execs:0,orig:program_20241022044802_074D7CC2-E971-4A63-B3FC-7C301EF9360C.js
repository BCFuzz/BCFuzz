const v0 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v1 = `
    const v3 = new Map();
    const v5 = v3.has.name;
    let v6 = v3 | v0;
    v6++ > v5;
    if (v6) {
    }
    for (let v9 = 0; v9 < 5; v9++) {
    }
`;
eval(v1);
gc();
