function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
        Symbol.toPrimitive;
        /x[\u{12345}\u{23456}jA(?:ab)|cde+]/yvgis;
    `;
}
const v7 = `
    \`match${F0}getUint32\`;
`;
const v9 = v7.split();
try { v9.flatMap(eval); } catch (e) {}
gc();
