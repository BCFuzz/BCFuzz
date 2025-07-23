const v1 = `
    const o11 = {
        toString(a3, a4) {
            function F5(a7, a8) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v9 = new F5(a4, F5);
            v9.constructor();
            return a4;
        },
    };
    /\u{12345}/myvis;
`;
const v13 = v1.split(3);
const v14 = [2.0,-4.0];
function f15(a16, a17, a18) {
    return v13;
}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
const v29 = f15(f15, v13, v13);
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    try { a35.constructor(v13); } catch (e) {}
}
new F30(v14, f15, v29, F30);
gc();
