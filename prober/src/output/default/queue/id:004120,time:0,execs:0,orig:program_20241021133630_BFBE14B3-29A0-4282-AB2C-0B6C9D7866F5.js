function f0(a1, a2, a3, a4) {
    const o10 = {
        toString(a6, a7) {
            const v8 = this.__proto__;
            return v8.isPrototypeOf(v8);
        },
    };
    return o10.toString();
}
f0.call();
gc();
