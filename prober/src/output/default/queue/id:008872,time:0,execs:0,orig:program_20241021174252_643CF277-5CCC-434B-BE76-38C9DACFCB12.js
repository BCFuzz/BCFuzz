for (let i2 = 5, i3 = 10; i2 < i3;) {
    i3--;
}
class C10 {
    constructor(a12, a13) {
        const v17 = Reflect.construct(EvalError, [Reflect,Reflect]);
        for (let v18 = 0; v18 < 100; v18++) {
            const o19 = {
                __proto__: v17,
            };
            o19.constructor;
        }
    }
}
new C10(C10, C10);
new C10();
gc();
