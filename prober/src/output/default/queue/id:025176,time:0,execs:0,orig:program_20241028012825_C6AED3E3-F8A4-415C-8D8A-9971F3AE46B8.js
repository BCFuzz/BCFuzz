let v0 = -4294967297;
const v3 = new Uint8ClampedArray();
const v4 = `
    ++v0;
`;
const v6 = v4.split(v3);
try { v6.flatMap(eval); } catch (e) {}
gc();
