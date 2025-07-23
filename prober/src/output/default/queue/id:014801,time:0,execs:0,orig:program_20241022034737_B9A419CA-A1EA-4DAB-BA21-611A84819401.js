function f0() {
    const v2 = ("symbol").match(f0);
    const o14 = {
        n(a4, a5) {
            const v6 = a4.__proto__;
            const v8 = v6.toLocaleString(v2, v6).constructor;
            const v9 = [-3.5999525369051106];
            v8 % ("symbol" || v9);
            return v9;
        },
    };
    return o14;
}
f0();
gc();
