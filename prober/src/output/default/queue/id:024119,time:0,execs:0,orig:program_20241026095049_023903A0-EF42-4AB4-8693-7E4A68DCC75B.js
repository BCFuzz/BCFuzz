for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v11 = `
    for (let [i19, i20] = (() => {
            function F13(a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            return [0, 10];
        })();
        i19 < i20;
        ) {
    }
    /\u{12345}/myvis;
`;
for (let i29 = -3, i30 = 10; i29 < i30; i30--) {
}
const v37 = v11.split(3);
const v38 = [2.0,-4.0];
function f39(a40, a41, a42) {
    return a41;
}
const v43 = f39();
function F44(a46, a47, a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
    try { a49.constructor(v37); } catch (e) {}
}
new F44(v38, f39, v43, F44);
for (let i54 = 0, i55 = 10; i54 < i55; i55--) {
}
gc();
