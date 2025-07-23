function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = 329972.86501403153 / 329972.86501403153;
const v5 = `
    v2.b &= v4;
`;
eval(v5);
gc();
