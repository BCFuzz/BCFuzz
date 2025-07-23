const v1 = (256).constructor;
const v2 = new v1();
try { v2(v1, 256, v2, v1); } catch (e) {}
const v5 = `
    ("includes").length;
`;
eval(v5);
gc();
