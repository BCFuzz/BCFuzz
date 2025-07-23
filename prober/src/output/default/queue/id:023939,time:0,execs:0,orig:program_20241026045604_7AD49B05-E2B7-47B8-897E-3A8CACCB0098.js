for (let v0 = 0; v0 < 25; v0++) {
    const o16 = {
        set d(a2) {
            for (let i = 0; i < 5; i++) {
                function f3() {
                    return a2;
                }
                function f4() {
                    const v7 = new Proxy(this, this);
                    v7.name;
                    let v9 = v7.length;
                    v9--;
                    return v0;
                }
                f3[Symbol.toPrimitive] = f4;
                const o13 = {
                    __proto__: f3,
                };
                Math.f16round(o13);
            }
        },
    };
    o16.d = o16;
}
gc();
