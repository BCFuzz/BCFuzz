function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            for (let v14 = 0; v14 < 5; v14++) {
                const v15 = /\xed\xa0\x80/myu;
                v15.lastIndex = v15;
                function f16(a17, a18) {
                    return b;
                }
                function F20(a22, a23, a24, a25) {
                    if (!new.target) { throw 'must be called with new'; }
                    a22[Symbol.toPrimitive] = f16;
                    try { a22.test(a23); } catch (e) {}
                }
                new F20(v15);
            }
        })()) {
    }
}
new F0();
gc();
