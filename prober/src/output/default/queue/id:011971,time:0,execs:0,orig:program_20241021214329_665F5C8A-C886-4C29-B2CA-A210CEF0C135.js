const v2 = new Float64Array(1024);
const v3 = `
    /\u{12345}/myvis;
`;
v3.match(v2);
gc();
