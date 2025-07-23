function f0(a1) {
    return 1.7976931348623157e+308;
}
const v5 = new Uint8ClampedArray(f0);
Object.defineProperty(v5, Symbol.toPrimitive, { configurable: true, enumerable: true, value: f0 });
const v8 = `
    [-8.481459703944337,5.90596328995101e+307,-7.509925213131483e+307,-1.7976931348623157e+308];
`;
const v10 = v8.split(v5);
try { v10.flatMap(eval); } catch (e) {}
gc();
