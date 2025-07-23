function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0();
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
function f17() {
    const o23 = {
        [v6](a19, a20, a21, a22) {
        },
    };
}
("number").search(f17);
const v26 = `
    for (let i29 = 0, i30 = 10; i29 !== i30; i30--) {
    }
    /\u{12345}/myvis;
`;
eval(v26);
gc();
