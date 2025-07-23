for (let v0 = 0; v0 < 10; v0++) {
    const o13 = {
        set d(a2) {
            function f3() {
                return f3;
            }
            function f5() {
                this.bind();
            }
            f3[Symbol.toPrimitive] = f5;
            const v10 = new Proxy(f3, this);
            Math.expm1(v10);
        },
    };
    o13.d = o13;
}
gc();
