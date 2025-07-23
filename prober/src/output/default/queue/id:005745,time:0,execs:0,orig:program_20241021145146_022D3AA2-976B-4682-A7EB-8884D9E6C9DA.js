function f0(a1) {
    const o20 = {
        n(a3, a4) {
            for (let i = 0; i < 5; i++) {
                const v5 = [-9007199254740992,-2147483648,9131];
                const v6 = [10,18152,7,26995,-25327,-562145012,9007199254740991,255,-536870912];
                const v7 = [2147483648,256,1416239338,-9007199254740990,15593,536870887,2,2005829964,14];
                const v8 = [1030290479,6,-9223372036854775807,4294967295,-4];
                class C9 {
                    constructor(a11, a12, a13, a14) {
                        a11.copyWithin();
                        a12[1] = a12;
                    }
                }
                new C9(v7, v8);
                class C17 extends C9 {
                }
                const v18 = new C17(v5, v6);
                new C17(v8, v18);
            }
            return a1;
        },
    };
    return o20;
}
const v21 = f0(f0);
const v22 = f0();
function f23(a24, a25) {
    a24.n(a24, v22);
    return f0;
}
f23(v21);
f23(v22);
gc();
