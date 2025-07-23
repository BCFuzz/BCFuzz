const v1 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v2 = `
    const v4 = new Map();
    function f5() {
    }
    v4 | v1;
    for (let v7 = 0; v7 < 5; v7++) {
        "p" + v7;
    }
    const v11 = new Uint8Array();
    -5;
    -v11[842];
`;
eval(v2);
gc();
