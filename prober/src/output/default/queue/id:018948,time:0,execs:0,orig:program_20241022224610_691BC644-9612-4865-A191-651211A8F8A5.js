function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    class C4 {
    }
    const v5 = new C4();
    function f6() {
        function f7() {
            for (let v8 = 0; v8 < 25; v8++) {
                const o23 = {
                    set d(a10) {
                        for (let i = 0; i < 5; i++) {
                            function f11() {
                                return this;
                            }
                            function f12() {
                                const o14 = {
                                };
                                const v16 = new Proxy(this, o14);
                                v16.length;
                            }
                            f11[Symbol.toPrimitive] = f12;
                            const o20 = {
                                __proto__: f11,
                            };
                            Math.f16round(o20);
                        }
                    },
                };
                o23.d = o23;
            }
            return a2;
        }
        return f7;
    }
    Object.defineProperty(v5, "constructor", { enumerable: true, get: f6 });
    const t35 = v5.constructor;
    t35();
    const t36 = v5.constructor;
    new t36();
}
new F0(F0, F0);
gc();
