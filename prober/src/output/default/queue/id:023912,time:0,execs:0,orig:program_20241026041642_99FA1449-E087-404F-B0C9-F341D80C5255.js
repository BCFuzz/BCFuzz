function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0, i5 = 10;
        i4 != i5;
        (() => {
            const v9 = [F0,F0,F0,F0,F0];
            Object.defineProperty(v9, 10, { configurable: true, enumerable: true, get: eval });
            for (let v11 = 0; v11 < 100; v11++) {
                function f12(a13, a14, a15, a16) {
                    v9.length;
                    return arguments;
                }
                f12();
            }
            i5--;
        })()) {
    }
}
new F0();
new F0();
gc();
