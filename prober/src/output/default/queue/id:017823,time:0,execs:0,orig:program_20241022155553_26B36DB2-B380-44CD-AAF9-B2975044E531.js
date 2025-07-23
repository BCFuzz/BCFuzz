function f0() {
    for (let v1 = 0; v1 < 25; v1++) {
        const v3 = 0.4064352496610042 / 0.4064352496610042;
        function f4() {
            0 < v3;
            const o7 = {
            };
            function f8() {
                return o7;
            }
            return v3;
        }
        class C9 extends f4 {
        }
        const v10 = new C9();
        const t15 = v10.constructor;
        const v12 = new t15();
        const t17 = v12.constructor;
        new t17();
    }
    return f0;
}
const v15 = f0();
v15.call(f0, v15, f0, v15, f0);
gc();
