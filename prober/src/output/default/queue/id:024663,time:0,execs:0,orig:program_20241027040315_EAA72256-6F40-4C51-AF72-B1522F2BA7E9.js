function f1(a2, a3, a4) {
    return a4;
}
const o21 = {
    set d(a6) {
        for (let i = 0; i < 10; i++) {
            function f7() {
                return f7;
            }
            function f8() {
                this.toString = f1;
                const o10 = {
                };
                const v12 = new Proxy(this, o10);
                v12.toString(f8, this, f8, v12.prototype);
            }
            f7[Symbol.toPrimitive] = f8;
            const o17 = {
                __proto__: f7,
            };
            const t20 = o17.bind.constructor;
            t20(o17);
        }
    },
};
o21.d = o21;
const v22 = new Int8Array();
const o23 = {
};
const v25 = new Proxy(v22, o23);
function f26() {
    function f27() {
        return f26;
    }
    const v28 = f27.apply();
    try { v28(); } catch (e) {}
    return v25.__proto__;
}
f26();
gc();
