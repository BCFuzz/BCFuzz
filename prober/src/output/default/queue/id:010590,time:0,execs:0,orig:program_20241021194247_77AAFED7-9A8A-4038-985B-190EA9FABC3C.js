const v1 = Uint8Array.prototype;
try { v1.toHex(); } catch (e) {}
const v3 = `
    /\u{12345}/myvis;
    const o6 = {
    };
    const v9 = o6.constructor.entries(Uint32Array)?.includes;
    [v9,v9,v9,v9,v9];
`;
eval(v3);
gc();
