const v1 = new BigInt64Array();
const v2 = v1.slice();
const v4 = `
    let [,...v5] = v2;
`;
const v7 = v4.toLocaleUpperCase(eval, v1, v1, v1).split();
try { v7.flatMap(eval); } catch (e) {}
gc();
