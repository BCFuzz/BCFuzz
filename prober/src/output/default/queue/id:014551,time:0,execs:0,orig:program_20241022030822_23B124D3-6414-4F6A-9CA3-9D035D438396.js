const o22 = {
    valueOf(a1, a2) {
        function f3() {
            function f5(a6, a7, a8, a9) {
                const v10 = a7 + a7;
                Number.call(a6, "9007199254740992");
                const v13 = Number.isNaN(v10);
                v13 && v13;
                return f5;
            }
            for (let v15 = 0; v15 < 5; v15++) {
                const t11 = f5();
                t11(v15, "9007199254740992");
            }
            return a2;
        }
        a1[Symbol.toPrimitive] = f3;
        a1 % a1;
        a2.valueOf(this, a1);
        return Symbol;
    },
};
o22.valueOf(65536n, o22);
gc();
