const v0 = `
    /\u{12345}/myvis;
    this.decodeURIComponent(v0);
`;
const v5 = eval(v0);
try { Uint8Array.fromBase64(v5); } catch (e) {}
gc();
