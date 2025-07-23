class C0 {
    constructor(a2) {
        function f3() {
            return a2;
        }
        f3.toString = f3;
        for (let v4 = 0; v4 < 10; v4++) {
            for (let i = 0; i < 5; i++) {
                const o11 = {
                    toString(a7, a8) {
                        a7.toString(f3);
                        return a7.toString(transferArrayBuffer);
                    },
                };
                o11.toString(o11);
            }
        }
    }
}
new C0();
gc();
