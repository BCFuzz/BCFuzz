const v1 = `
    [/abc|def|ghi\p{Script=Greek}/mdgisu];
    /\u{12345}/myvis;
`;
const v5 = v1.split();
try { v5.flatMap(eval); } catch (e) {}
gc();
