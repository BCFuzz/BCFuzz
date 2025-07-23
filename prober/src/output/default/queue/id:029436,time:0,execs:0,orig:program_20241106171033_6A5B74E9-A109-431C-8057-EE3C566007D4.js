const v0 = /(x\u003z)/m;
const v2 = `
    \`match${v0}getUint32\`;
`;
const v4 = v2.split();
try { v4.flatMap(eval); } catch (e) {}
gc();
