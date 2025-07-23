const o9 = {
    toString(a2, a3) {
        class C4 {
        }
        class C5 extends C4 {
        }
        Object.defineProperty(C4, 6, { configurable: true, value: 2.220446049250313e-16 });
        const v6 = /6(a\1)/dis;
        v6.exec(v6);
        for (let v8 = 0; v8 < 100; v8++) {
        }
    },
};
o9.toString();
-o9;
gc();
