const v2 = new Uint8ClampedArray();
const v3 = `
    [-8.481459703944337,5.90596328995101e+307,-7.509925213131483e+307,-1.7976931348623157e+308];
`;
const v5 = v3.split(v2);
v5.reverse(v3, v5, v5, v5);
try { v5.flatMap(eval); } catch (e) {}
gc();
