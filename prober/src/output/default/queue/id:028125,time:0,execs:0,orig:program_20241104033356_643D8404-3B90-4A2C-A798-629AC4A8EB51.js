function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = `
    new v2(/\P{Decimal_Number}/mvgi);
    /\ud808\udf45*/mdgi;
`;
const v8 = v4.split();
try { v8.flatMap(eval); } catch (e) {}
gc();
