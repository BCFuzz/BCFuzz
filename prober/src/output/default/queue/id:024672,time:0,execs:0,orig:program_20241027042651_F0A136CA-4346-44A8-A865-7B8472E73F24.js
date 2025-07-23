const v3 = `
    const t1 = 5;
    delete t1[Float32Array];
    const o5 = {
    };
    o5.EPSILON = v3;
`;
const v6 = v3.repeat(13085);
try { v6.matchAll(v6); } catch (e) {}
gc();
