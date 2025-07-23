const v0 = `
    8 === 8;
    const v4 = new SharedArrayBuffer(8);
    new Uint8Array(v4);
`;
const v9 = eval(v0).sort();
try { v9.setFromBase64(v0); } catch (e) {}
gc();
