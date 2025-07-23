const v1 = `
    [Reflect,Reflect];
`;
const v4 = v1.split();
try { v4.flatMap(Function); } catch (e) {}
gc();
