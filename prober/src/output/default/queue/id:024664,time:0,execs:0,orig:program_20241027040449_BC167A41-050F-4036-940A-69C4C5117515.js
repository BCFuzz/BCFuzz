function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 100; v2++) {
        function f3(a4, a5) {
            for (let i = 0; i < 5; i++) {
            }
            for (let [i10, i11] = (() => {
                    eval(a5);
                    return [0, 257];
                })();
                i10 >= i11;
                i11--) {
            }
            return f3;
        }
        f3();
    }
}
new F0();
new F0();
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
gc();
