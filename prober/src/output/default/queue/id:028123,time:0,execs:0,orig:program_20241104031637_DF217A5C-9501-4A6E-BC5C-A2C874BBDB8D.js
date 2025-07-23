function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2() {
    return ([Infinity]).toLocaleString();
}
F0[Symbol.toPrimitive] = f2;
const v7 = `
    \`match${F0}getUint32\`;
`;
v7.split();
gc();
