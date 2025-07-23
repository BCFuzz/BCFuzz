for (let v0 = 0; v0 < 5; v0++) {
    const o12 = {
        set d(a2) {
            for (let i = 0; i < 5; i++) {
                function f3() {
                    return f3;
                }
                function f4() {
                    class C5 {
                        1;
                        2;
                    }
                    new C5();
                }
                f3[Symbol.toPrimitive] = f4;
                const o9 = {
                    __proto__: f3,
                };
                Math.f16round(o9);
            }
        },
    };
    o12.d = o12;
}
gc();
