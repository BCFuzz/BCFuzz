class C0 {
}
class C1 extends C0 {
    constructor(a3, a4) {
        function f5() {
            const o7 = {
                get g() {
                    return f5;
                },
            };
            return f5;
        }
        for (let v8 = 0; v8 < 1000; v8++) {
        }
        class C9 extends f5 {
        }
        super();
    }
}
new C1();
gc();
