const v0 = /[foo(?=bar)baz*]/mdygisu;
for (let i4 = -3, i5 = 10; i5--, i4 < i5;) {
}
const v12 = `
    /\u{12345}/myvis;
    for (let i16 = 0, i17 = 10;
        (() => {
            let {"unicode":v18,} = v0;
            return i16 !== i17;
        })();
        ) {
    }
`;
const v24 = v12.split(8);
v24[1] = v24;
const v25 = [2.0,-4.0];
function f26(a27, a28, a29) {
    return a29;
}
const v30 = f26();
function F31(a33, a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    try { a36.constructor(v24); } catch (e) {}
}
new F31(v25, f26, v30, F31);
gc();
