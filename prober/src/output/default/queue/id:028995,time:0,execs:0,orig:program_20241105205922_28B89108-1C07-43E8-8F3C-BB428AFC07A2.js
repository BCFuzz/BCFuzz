function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
        /x[\u{12345}\u{23456}jA(?:ab)|cde+]/yvgis;
    `;
}
const v5 = `
    \`match${F0}getUint32\`;
`;
const v7 = v5.split();
try { v7.flatMap(eval); } catch (e) {}
gc();
