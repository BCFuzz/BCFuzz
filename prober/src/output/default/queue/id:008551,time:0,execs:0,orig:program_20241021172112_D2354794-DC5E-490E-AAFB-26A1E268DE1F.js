function f0() {
    for (let v1 = 0; v1 < 25; v1++) {
        function f2() {
            return f2;
        }
        const v3 = f2();
        v3.a = v3;
        f2.bind(f2);
        for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
        }
    }
    return f0;
}
f0.call(f0, f0);
gc();
