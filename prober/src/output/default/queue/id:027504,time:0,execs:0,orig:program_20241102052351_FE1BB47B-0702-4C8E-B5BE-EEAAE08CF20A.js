function f0(a1, a2, a3) {
    return a1;
}
const o23 = {
    set d(a5) {
        for (let i = 0; i < 5; i++) {
            function f6() {
                return f6;
            }
            function f7() {
                this.toString = f0;
                const o9 = {
                };
                const v11 = new Proxy(this, o9);
                v11.toString(f0, o9, v11);
                v11.__defineSetter__;
                v11.name;
            }
            new f7();
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
