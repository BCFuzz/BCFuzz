class C0 {
}
for (let i3 = 0, i4 = 10; i4--, i3 < i4;) {
}
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v14 = 0; v14 < 25; v14++) {
        function F15(a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            for (let [i24, i25] = (() => {
                    C0 instanceof F15;
                    try { a19(); } catch (e) {}
                    a17.__proto__ = this;
                    return [0, 10];
                })();
                i24 !== i25;
                i25--) {
            }
        }
        new F15(v14);
    }
}
new F11(F11);
gc();
