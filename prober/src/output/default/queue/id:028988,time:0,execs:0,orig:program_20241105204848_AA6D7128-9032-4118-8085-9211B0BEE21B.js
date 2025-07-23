const o1 = {
};
const v2 = o1.h;
const v4 = `
    /\u{12345}/myvis;
    Uint8Array(v2, 8);
`;
JSON.stringify(v4.split(3));
gc();
