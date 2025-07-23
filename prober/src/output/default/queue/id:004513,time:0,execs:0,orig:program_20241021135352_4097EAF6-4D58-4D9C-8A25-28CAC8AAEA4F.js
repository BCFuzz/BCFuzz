function f0() {
    for (let v1 = 0; v1 < 32; v1++) {
        function F2() {
            if (!new.target) { throw 'must be called with new'; }
            function f4(a5) {
                return F2;
            }
            f4.d = f4;
        }
        new F2();
        new F2();
    }
    return f0;
}
f0();
f0();
gc();
