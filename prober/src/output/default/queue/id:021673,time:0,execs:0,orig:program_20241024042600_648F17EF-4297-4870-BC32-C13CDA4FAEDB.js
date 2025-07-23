const v1 = /0\u0034/ygisu.constructor;
const v2 = `
    /\u{12345}/myvis;
    const v4 = \`
        \\\`e\\\`;
    \`;
`;
v1(v2).toString();
gc();
