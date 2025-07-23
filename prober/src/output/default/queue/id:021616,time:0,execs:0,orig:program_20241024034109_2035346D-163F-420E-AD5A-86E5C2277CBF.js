for (let i2 = 6n, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    for (let v11 = 0; v11 < 5; v11++) {
        v11 < v11;
    }
    /\u{12345}/myvis;
`;
const v15 = JSON.stringify(v10);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    for (let [i26, i27] = (() => {
            eval(v15);
            return [0, 10];
        })();
        i27--, i26 < i27;
        ) {
    }
}
new F16();
gc();
