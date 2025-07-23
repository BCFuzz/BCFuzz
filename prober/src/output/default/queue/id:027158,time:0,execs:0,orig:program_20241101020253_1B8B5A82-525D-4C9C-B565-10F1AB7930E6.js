for (let i2 = 6n, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    /\x01/yisu;
    /\u{12345}/myvis;
`;
const v14 = JSON.stringify(v10);
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    for (let [i25, i26] = (() => {
            eval(v14);
            return [0, 10];
        })();
        i26--, i25 < i26;
        ) {
    }
}
new F15(6n, 6n, v10, 6n);
gc();
