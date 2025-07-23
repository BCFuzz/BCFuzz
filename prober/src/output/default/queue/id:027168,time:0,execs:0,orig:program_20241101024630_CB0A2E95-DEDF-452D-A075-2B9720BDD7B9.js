let v0 = -4294967297;
const v3 = new Uint8ClampedArray();
const v4 = `
    -(++v0) ^ 15;
`;
const v9 = v4.split(v3);
v9.reverse(Uint8ClampedArray, Uint8ClampedArray, v0);
try { v9.flatMap(eval); } catch (e) {}
gc();
