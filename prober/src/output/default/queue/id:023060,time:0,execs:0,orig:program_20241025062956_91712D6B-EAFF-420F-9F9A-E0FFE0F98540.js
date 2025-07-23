const v2 = new Uint8ClampedArray();
const v3 = `
    /\u{12345}/myvis;
`;
const v5 = v3.split(v2);
try { v5.flatMap(eval); } catch (e) {}
gc();
