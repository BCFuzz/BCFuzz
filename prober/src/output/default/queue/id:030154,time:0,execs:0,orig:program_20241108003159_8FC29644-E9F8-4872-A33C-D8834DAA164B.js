const v0 = [];
const v1 = /(?:ab)?/vgi;
class C2 {
}
function f3(a4) {
    const v5 = /a\nW/vgi;
    function f6(a7, a8) {
        const v10 = [f3];
        v10[3329] = -4;
        const v13 = 2147483648 + v10.slice();
        v0[v13] = f3;
        const v15 = Symbol.iterator;
        const o20 = {
            [v15]() {
                const o19 = {
                    next() {
                        const o18 = {
                        };
                        return f6;
                    },
                };
            },
        };
        try { v13.replaceAll(v1, C2); } catch (e) {}
    }
    v5[Symbol.toPrimitive] = f6;
    const o29 = {
        [v5](a25, a26, a27, a28) {
        },
    };
    for (let i32 = 0, i33 = 10;
        (() => {
            const v34 = i32 !== i33;
            return v34 || v34;
        })();
        i33--) {
    }
}
f3();
gc();
