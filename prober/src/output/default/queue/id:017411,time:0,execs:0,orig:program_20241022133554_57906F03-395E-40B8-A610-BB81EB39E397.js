function f0(a1, a2, a3) {
    return a2;
}
const o23 = {
    set d(a5) {
        for (let i = 0; i < 10; i++) {
            function f6() {
                return f0;
            }
            function f7() {
                this.toString = f0;
                const o9 = {
                };
                const v11 = new Proxy(this, o9);
                v11.__defineSetter__;
                v11.toString();
                v11.name;
                v11.toString();
            }
            f6[Symbol.toPrimitive] = f7;
            const o18 = {
                __proto__: f6,
            };
            const v20 = o18.bind.constructor;
            v20(o18);
            v20(o18);
        }
    },
};
o23.d = o23;
gc();
