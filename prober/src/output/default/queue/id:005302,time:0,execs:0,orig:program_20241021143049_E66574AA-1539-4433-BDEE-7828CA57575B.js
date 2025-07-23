function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        return f6;
    }
    const v7 = f6.bind();
    for (let i = 0; i < 5; i++) {
        const o13 = {
            set b(a9) {
                for (let v10 = 0; v10 < 5; v10++) {
                    v10++ << v7;
                }
            },
        };
        o13.b = o13;
    }
}
const v14 = new F0(F0, F0, F0, F0);
new F0(v14, F0, v14, F0);
gc();
