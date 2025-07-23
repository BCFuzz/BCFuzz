const v0 = `
    this.decodeURIComponent(/\u{12345}/myvis);
`;
const v5 = eval(v0);
try { Uint8Array.fromBase64(v5); } catch (e) {}
gc();
