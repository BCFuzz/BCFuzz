function f0(a1, a2, a3) {
    return a1;
}
const o20 = {
    set d(a5) {
        for (let i = 0; i < 10; i++) {
            function f6() {
                return this;
            }
            function f7() {
                this.toString = f0;
                const o9 = {
                };
                const v11 = new Proxy(this, o9);
                const v12 = v11.prototype;
                v11.toString(Proxy, v12, f7, v12, this);
            }
            f6[Symbol.toPrimitive] = f7;
            const o16 = {
                __proto__: f6,
            };
            const t21 = o16.bind.constructor;
            t21(o16);
        }
    },
};
o20.d = o20;
gc();
