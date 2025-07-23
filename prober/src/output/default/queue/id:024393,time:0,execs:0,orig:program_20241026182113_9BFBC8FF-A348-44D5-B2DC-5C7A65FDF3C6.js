function f0() {
    const o1 = {
    };
    const v3 = new Proxy(f0, o1);
    for (let i6 = -3, i7 = 10;
        (() => {
            const o9 = {
                get h() {
                    this.get = v3;
                    return this;
                },
            };
            const o10 = {
            };
            o10.constructor.defineProperties(v3, o9);
            return i6 < i7;
        })();
        i7--) {
    }
    return f0;
}
f0();
gc();
