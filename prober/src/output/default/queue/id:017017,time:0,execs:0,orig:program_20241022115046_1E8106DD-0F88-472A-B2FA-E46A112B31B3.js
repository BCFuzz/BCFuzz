function f0(a1, a2, a3) {
    return f0;
}
const o20 = {
    set d(a5) {
        for (let i = 0; i < 10; i++) {
            function f6() {
                return a5;
            }
            function f7() {
                this.toString = f0;
                const o9 = {
                };
                const v11 = new Proxy(this, o9);
                v11.toString(f7, a5, f0, v11.name);
            }
            f6[Symbol.toPrimitive] = f7;
            const o16 = {
                __proto__: f6,
            };
            const t20 = o16.bind.constructor;
            t20(o16);
        }
    },
};
o20.d = o20;
gc();
