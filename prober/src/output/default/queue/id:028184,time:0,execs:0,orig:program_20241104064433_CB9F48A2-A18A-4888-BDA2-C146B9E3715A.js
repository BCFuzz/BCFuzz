function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = `
    new v2(/\P{Decimal_Number}/mvgi);
`;
const v7 = v4.split();
try { v7.flatMap(eval); } catch (e) {}
gc();
