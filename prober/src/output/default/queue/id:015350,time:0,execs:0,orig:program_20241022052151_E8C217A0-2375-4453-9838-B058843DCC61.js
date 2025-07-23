function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 5; v2++) {
        async function f3(a4, a5, a6, a7) {
            return a6;
        }
        f3(v2, this, this, v2).catch();
    }
    let {...v11} = Promise;
}
new F0();
new F0();
for (let i16 = 0, i17 = 257; i17--, i16 < i17;) {
}
gc();
