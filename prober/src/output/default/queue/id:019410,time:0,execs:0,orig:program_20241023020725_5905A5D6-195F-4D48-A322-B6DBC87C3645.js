function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4) {
        super();
        for (let i = 0; i < 100; i++) {
            const o19 = {
                toString(a6, a7) {
                    class C8 {
                    }
                    const v9 = new C8();
                    const o10 = {
                    };
                    const v12 = new Proxy(v9, o10);
                    function f13(a14) {
                        this[Symbol.match];
                        return this;
                    }
                    v12.constructor = f13;
                    v12.constructor(a4, this);
                    return a3;
                },
            };
            o19.toString(a3);
        }
    }
}
new C1(C1, C1);
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
gc();
