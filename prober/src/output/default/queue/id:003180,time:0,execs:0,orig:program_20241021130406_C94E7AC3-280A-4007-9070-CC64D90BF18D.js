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
    return o10;
}
const v11 = f0();
const v12 = f0();
v12.valueOf = v12;
function f13(a14, a15) {
    return a14.n();
}
f13(v11);
f13(v12);
gc();
