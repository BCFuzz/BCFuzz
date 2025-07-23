for (let i = 0; i < 5; i++) {
    const o14 = {
        toString(a1, a2) {
            class C3 {
            }
            const v4 = new C3();
            const o5 = {
            };
            const v7 = new Proxy(v4, o5);
            function f8(a9) {
                this[Symbol.match];
                return this;
            }
            v7.constructor = f8;
            return v7.constructor();
        },
    };
    o14.toString();
}
gc();
