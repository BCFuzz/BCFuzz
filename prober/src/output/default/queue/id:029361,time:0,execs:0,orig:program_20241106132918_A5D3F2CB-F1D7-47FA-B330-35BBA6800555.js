function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
    `;
    eval(v2);
    const t4 = this?.constructor;
    new t4();
    const v7 = `
    `;
    try { v7.valueOf(); } catch (e) {}
}
const v10 = `
    \`match${F0}getUint32\`;
`;
const v12 = v10.split();
try { v12.flatMap(eval); } catch (e) {}
gc();
