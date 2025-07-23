const v0 = `
    for (let v1 = 0; v1 < 5; v1++) {
    }
    /\u{12345}/myvis;
`;
const v4 = ([v0,v0,v0]).toString();
try { v4.search(v0); } catch (e) {}
gc();
