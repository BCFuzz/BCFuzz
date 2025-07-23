let v1 = -4294967297;
const v4 = new Uint8ClampedArray();
const v5 = `
    -(++v1) >> "5";
`;
const v9 = v5.split(v4);
v9.reverse(v9, eval, eval, eval);
try { v9.flatMap(eval); } catch (e) {}
gc();
