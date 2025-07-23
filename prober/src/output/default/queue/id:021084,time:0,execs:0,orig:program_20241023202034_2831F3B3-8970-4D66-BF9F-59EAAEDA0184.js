const v0 = `
    /\u{12345}/myvis;
`;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    v0.normalize("NFD");
}
new F2();
gc();
