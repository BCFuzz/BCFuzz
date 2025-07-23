for (let i = 0; i < 5; i++) {
    const o0 = {
    };
    function f1(a2, a3) {
        const v4 = [-1.7976931348623157e+308,-1000000000000.0,954013.0023006662,-225473.7616957347,-1000000000.0,3.0];
        const v5 = [0.12047409602076997,6.07843761791781];
        class C6 {
        }
        const v7 = new C6();
        function f8(a9) {
            v7[v5] >>>= a9.toSpliced(v7);
        }
        for (let v11 = 0; v11 < 5; v11++) {
            f8(v4);
        }
    }
    o0[Symbol.toPrimitive] = f1;
    -o0;
}
gc();
