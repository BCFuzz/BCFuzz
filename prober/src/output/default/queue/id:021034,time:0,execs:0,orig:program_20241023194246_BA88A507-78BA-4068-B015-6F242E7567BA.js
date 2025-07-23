for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
const v15 = new F10();
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i23 = v15, i24 = 10;
        (() => {
            const v25 = i23 < i24;
            function F26(a28, a29) {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f30(a31, a32) {
                return a19;
            }
            Reflect.construct(Promise, [f30], F26);
            return v25;
        })();
        ) {
    }
}
new F16(F16, F16, v15, F16);
gc();
