for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
    }
    function F21() {
        if (!new.target) { throw 'must be called with new'; }
        eval("");
    }
    /\u{12345}/myvis;
`;
eval(v10);
gc();
