let v0 = -4294967297;
const v3 = new Uint8ClampedArray();
const v4 = `
    let v6 = ++v0;
    v6-- % 15;
`;
const v9 = v4.split(v3);
v9.reverse();
try { v9.flatMap(eval); } catch (e) {}
gc();
