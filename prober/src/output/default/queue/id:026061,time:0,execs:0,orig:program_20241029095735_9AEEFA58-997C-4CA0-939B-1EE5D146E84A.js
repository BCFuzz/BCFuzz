const v0 = `
    /\u{12345}/myvis;
`;
for (let v2 = 0; v2 < 10; v2++) {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        v0.replace("function", v0);
    }
    new F4();
}
gc();
