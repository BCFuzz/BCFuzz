const v0 = `
    const v3 = new SharedArrayBuffer(8);
    new Uint8Array(v3);
`;
const v8 = eval(v0).sort();
try { v8.setFromBase64(v0); } catch (e) {}
gc();
