const v2 = new Int32Array(10);
const v4 = new Float64Array(10, 10, 10);
const v5 = `
    try { v2.subarray(); } catch (e) {}
    v2.__proto__ = v4;
`;
eval(v5);
eval(v5);
gc();
