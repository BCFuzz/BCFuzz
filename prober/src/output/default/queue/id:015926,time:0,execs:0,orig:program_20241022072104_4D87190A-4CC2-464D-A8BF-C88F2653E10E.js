const v0 = `
    let v1 = 0;
    v1++;
    /\u{12345}/myvis;
`;
try { Proxy.constructor(v0, 1338); } catch (e) {}
gc();
