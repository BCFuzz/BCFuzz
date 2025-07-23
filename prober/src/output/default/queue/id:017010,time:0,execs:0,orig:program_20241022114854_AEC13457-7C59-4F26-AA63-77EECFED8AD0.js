function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 25; v3++) {
        function F4(a6, a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            for (let i11 = 0, i12 = 10; i11 <= i12; i12--) {
                for (let v19 = 0; v19 < 5; v19++) {
                }
                function f20(a21, a22) {
                    ([3,255,-9223372036854775808,512,14504,10]).toSorted();
                    return arguments;
                }
                f20(F4, i12);
            }
        }
        new F4(v3, F0, v3);
    }
}
new F0();
gc();
