function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
    `;
    eval(v2);
    const v5 = this?.constructor;
    new v5();
    const v7 = `
    `;
    try { v7.valueOf(v5, this, v5); } catch (e) {}
}
const v10 = `
    \`match${F0}getUint32\`;
`;
const v12 = v10.split();
try { v12.flatMap(eval); } catch (e) {}
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
gc();
