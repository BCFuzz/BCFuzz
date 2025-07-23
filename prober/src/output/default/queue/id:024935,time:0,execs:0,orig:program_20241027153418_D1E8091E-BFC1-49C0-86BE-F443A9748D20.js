const v2 = new Uint8ClampedArray();
const v3 = `
    ArrayBuffer();
`;
const v6 = v3.split(v2);
v6[17] = v6;
v6.reverse();
try { v6.flatMap(eval); } catch (e) {}
gc();
