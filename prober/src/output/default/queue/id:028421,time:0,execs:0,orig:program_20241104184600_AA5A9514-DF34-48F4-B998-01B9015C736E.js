function F0() {
    if (!new.target) { throw 'must be called with new'; }
    /i\1\2(a(?:\1(b\1\2))\2)\1*/ygu;
}
const v4 = `
    \`match${F0}getUint32\`;
`;
const v6 = v4.split();
try { v6.flatMap(eval); } catch (e) {}
gc();
