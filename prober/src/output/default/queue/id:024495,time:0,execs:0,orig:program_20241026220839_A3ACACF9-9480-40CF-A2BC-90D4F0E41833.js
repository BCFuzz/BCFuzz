const v2 = `
    /a\nW/vgi[189];
    /\u{12345}/myvis;
`;
const v6 = v2.split(8);
const v7 = v6.reverse(v6, v2, v6);
try { ("toString").matchAll(v7); } catch (e) {}
gc();
