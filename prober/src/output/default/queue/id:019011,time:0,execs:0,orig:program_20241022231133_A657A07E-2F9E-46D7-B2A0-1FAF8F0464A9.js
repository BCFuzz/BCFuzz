function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v10 = new F4();
    function f11() {
        for (let v12 = 0; v12 < 25; v12++) {
            v10.a = v10;
            for (let i15 = 0, i16 = 10;
                i15 < i16;
                (() => {
                    let v20 = 0;
                    delete v10.a;
                    v20++;
                    i16--;
                })()) {
            }
        }
        return f11;
    }
    const v26 = f11.call(F0);
    v26(v26, F0, this, F0);
}
const v28 = new F0();
const v29 = new F0(F0, v28);
new F0(v29, F0);
gc();
