for (let i = 0; i < 5; i++) {
    const o8 = {
        toString(a1, a2) {
            const t3 = this.__proto__.toLocaleString().constructor;
            const v6 = new t3();
            v6.normalize();
        },
    };
    o8.toString();
    class C11 {
        constructor(a13, a14) {
            a13 += 2147483648;
            for (let v15 = 0; v15 < 10; v15++) {
                "p" + a14;
            }
        }
    }
    new C11();
}
gc();
