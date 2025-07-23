function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
    `;
    const v3 = `
    `;
}
const v5 = `
    \`match${F0}getUint32\`;
`;
const v7 = v5.split();
try { v7.flatMap(runString); } catch (e) {}
gc();
