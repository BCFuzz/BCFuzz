const v0 = `
    class C1 {
    }
    let v2;
    try { v2 = C1.call(); } catch (e) {}
    const t5 = Symbol.toPrimitive;
    t5.description ||= v2;
`;
eval(v0);
gc();
