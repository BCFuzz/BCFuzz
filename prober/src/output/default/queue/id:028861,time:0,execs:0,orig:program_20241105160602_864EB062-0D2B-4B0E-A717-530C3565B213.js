const v0 = `
    8 === 8;
    const v4 = new SharedArrayBuffer(8);
    /\u{12345}/myvis;
    new Uint8Array(v4);
`;
const v9 = eval(v0);
const v10 = v9.sort(eval, eval, eval, v9, v9);
try { v10.setFromBase64(v0); } catch (e) {}
gc();
