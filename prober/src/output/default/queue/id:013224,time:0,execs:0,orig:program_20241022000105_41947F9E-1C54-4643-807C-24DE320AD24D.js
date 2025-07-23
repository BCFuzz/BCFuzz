function f0() {
    const o31 = {
        toString(a2, a3) {
            for (let i6 = 0, i7 = 10;
                i6 < i7;
                (() => {
                    function f11() {
                        const v12 = /u?/y;
                        const v14 = [];
                        const v15 = v12.compile;
                        for (let v16 = 0; v16 < 5; v16++) {
                        }
                        Reflect.apply(v15, v12, v14);
                        Reflect.ownKeys();
                        return Reflect;
                    }
                    f11.call(i6, f0, i6);
                    i7--;
                })()) {
            }
            try { this.toString(); } catch (e) {}
            return this != a3;
        },
        get g() {
            function f26(a27) {
                const o30 = {
                    o(a29) {
                        return a29;
                    },
                };
                return a27;
            }
            return this;
        },
    };
    return f0;
}
const v32 = f0();
function f34(a35, a36, a37, a38) {
    const v40 = 2147483648 * 257;
    const v41 = v40 * v40;
    const v42 = v32.toString(a37, v41, a35, v41, f34);
    for (const v44 of v42.link(v42)) {
    }
    return a37;
}
f34();
gc();
