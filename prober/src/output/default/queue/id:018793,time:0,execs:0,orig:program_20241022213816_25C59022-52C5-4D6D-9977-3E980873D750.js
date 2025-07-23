const v0 = [];
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 25; v4++) {
        function F5(a7, a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            for (let i12 = 0, i13 = 10; i12 <= i13; i13--) {
                for (let v20 = 0; v20 < 5; v20++) {
                }
                function f21(a22, a23) {
                    v0.toSorted();
                    return arguments;
                }
                f21();
            }
        }
        new F5(this, F5, this);
    }
}
new F1();
gc();
