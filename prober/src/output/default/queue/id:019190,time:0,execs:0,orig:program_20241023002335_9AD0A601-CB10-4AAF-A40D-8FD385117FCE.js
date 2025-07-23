for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const v9 = [27805n,27805n,27805n,27805n,27805n];
        function f10(a11) {
            for (let v12 = 0; v12 < 5; v12++) {
                class C13 {
                    constructor(a15, a16, a17, a18) {
                        const v20 = new Map();
                        const v22 = v20["has"](a17);
                        v22 && v22;
                    }
                }
                const v24 = new C13(a11, v12, a11);
                const t12 = v24.constructor;
                new t12(i3, a11, 27805n);
            }
            return a11;
        }
        v9[Symbol.toPrimitive] = f10;
        27805n <= v9;
    })()) {
}
gc();
