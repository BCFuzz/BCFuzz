function f0(a1) {
    const o10 = {
        n(a3, a4) {
            for (let i = 0; i < 5; i++) {
                for (let v5 = 0; v5 < 250; v5++) {
                    v5++;
                    v5--;
                }
                this[Symbol.toPrimitive] = a1;
            }
            return f0;
        },
    };
    function f11() {
        return o10;
    }
    return o10;
}
const v12 = f0();
const v13 = f0();
function f14(a15, a16) {
    a15.n();
    return v13;
}
f14(v12);
f14(v13);
gc();
