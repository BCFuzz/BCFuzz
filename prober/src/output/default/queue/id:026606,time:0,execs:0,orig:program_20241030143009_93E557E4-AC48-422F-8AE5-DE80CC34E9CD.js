const v0 = `
    /\u{12345}/myvis;
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
    }
`;
for (let v4 = 0; v4 < 10; v4++) {
    function F6() {
        if (!new.target) { throw 'must be called with new'; }
        v0.replace("function", v0);
    }
    new F6();
}
for (let i12 = -3, i13 = 10; i12 < i13; i13--) {
}
gc();
