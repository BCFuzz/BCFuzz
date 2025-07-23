const v1 = new Uint32Array(Uint32Array, Uint32Array);
const v4 = new Uint8ClampedArray();
const v5 = `
    -v1 || 15;
`;
const v9 = v5.split(v4);
v9.reverse();
try { v9.flatMap(eval); } catch (e) {}
gc();
