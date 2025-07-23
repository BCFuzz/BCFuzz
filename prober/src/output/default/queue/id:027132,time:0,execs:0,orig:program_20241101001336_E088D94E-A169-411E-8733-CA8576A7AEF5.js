const v0 = `
    this.decodeURIComponent(/\u{12345}/myvis);
`;
const v6 = new Uint8Array(7);
try { v6.setFromBase64(v0); } catch (e) {}
gc();
