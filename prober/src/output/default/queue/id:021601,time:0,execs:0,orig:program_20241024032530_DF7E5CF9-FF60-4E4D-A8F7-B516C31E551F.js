const v0 = `
    /\u{12345}/myvis;
`;
const v2 = v0.normalize();
const o3 = {
    ...v2,
};
JSON.stringify(o3);
gc();
