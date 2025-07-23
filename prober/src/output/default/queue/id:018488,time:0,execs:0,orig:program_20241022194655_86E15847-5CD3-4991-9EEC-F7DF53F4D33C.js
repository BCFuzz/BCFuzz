for (let v0 = 0; v0 < 5; v0++) {
    const o16 = {
        set d(a2) {
            for (let i = 0; i < 25; i++) {
                function f3() {
                    return a2;
                }
                function f4() {
                    const o6 = {
                    };
                    const v8 = new Proxy(this, o6);
                    try { v8.toString(); } catch (e) {}
                    v8.prototype = v8;
                }
                new f4();
                f3[Symbol.toPrimitive] = f4;
                const o13 = {
                    __proto__: f3,
                };
                Math.f16round(o13);
            }
        },
    };
    o16.d = o16;
}
gc();
