let v1 = -4294967297;
const v4 = new Uint8ClampedArray();
const v5 = `
    -(++v1) >> "5";
`;
const v9 = v5.split(v4);
v9.reverse(v1);
try { v9.flatMap(runString); } catch (e) {}
gc();
