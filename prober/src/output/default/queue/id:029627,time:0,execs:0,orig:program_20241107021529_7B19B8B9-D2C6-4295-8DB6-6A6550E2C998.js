function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
    `;
}
const v4 = `
    \`match${F0}getUint32\`;
`;
const v6 = v4.split();
try { v6.flatMap(runString); } catch (e) {}
gc();
