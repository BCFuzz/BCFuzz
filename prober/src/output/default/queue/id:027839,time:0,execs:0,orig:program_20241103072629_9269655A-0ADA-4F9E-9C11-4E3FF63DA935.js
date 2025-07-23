const v0 = /\b(?<=)/dsu;
const v1 = `
    /\u{12345}/myvis;
`;
v1.split(v0);
gc();
