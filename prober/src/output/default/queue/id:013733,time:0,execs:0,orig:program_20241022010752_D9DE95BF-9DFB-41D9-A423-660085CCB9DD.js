function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = `
    eval();
    --F0;
`;
eval(v2);
gc();
