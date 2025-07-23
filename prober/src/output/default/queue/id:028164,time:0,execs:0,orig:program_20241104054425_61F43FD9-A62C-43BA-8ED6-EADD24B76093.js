const v2 = `
    [Reflect,Reflect];
`;
const v5 = v2.split();
v5[Symbol.toPrimitive] = Date;
try { v5.flatMap(Function); } catch (e) {}
gc();
