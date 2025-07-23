const v0 = `
    /\u{12345}/myvis;
`;
function f3(a4) {
    return v0;
}
Date.toString = f3;
new Date(Date);
gc();
