for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v11 = `
    for (let [i15, i16] = (() => {
            function f12() {
            }
            return [0, 10];
        })();
        i15 < i16;
        ) {
    }
    /\u{12345}/myvis;
`;
for (let i25 = -3, i26 = 10; i25 < i26; i26--) {
}
const v33 = v11.split(3);
const v34 = [2.0,-4.0];
function f35(a36, a37, a38) {
}
const v39 = f35();
function F40(a42, a43, a44, a45) {
    if (!new.target) { throw 'must be called with new'; }
    try { a45.constructor(v33); } catch (e) {}
}
new F40(v34, f35, v39, F40);
for (let i50 = 0, i51 = 10;
    i50 < i51;
    (() => {
        i51--;
        for (let i58 = 0, i59 = 10; i58 < i59; i59--) {
        }
    })()) {
}
gc();
