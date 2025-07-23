function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = /(?:ab)?/vgi;
    class C5 {
    }
    function f6(a7) {
        const v8 = /a\nW/vgi;
        function f9(a10, a11) {
            const v13 = [f6];
            v13[3329] = -4;
            const v16 = 2147483648 + v13.slice();
            v16[v16] = f6;
            const v18 = Symbol.iterator;
            const o20 = {
                [v18]() {
                },
            };
            try { v16.replaceAll(v4, C5); } catch (e) {}
        }
        v8[Symbol.toPrimitive] = f9;
        const o32 = {
            [v8](a25, a26, a27, a28) {
            },
            o(a30, a31) {
                return f9;
            },
        };
        for (let i35 = 0, i36 = 10;
            (() => {
                const v37 = i35 !== i36;
                return v37 || v37;
            })();
            i36--) {
        }
        return F0;
    }
    f6(F0);
}
new F0();
const v46 = /(?:ab)?/vgi;
const v47 = /a\nW/vgi;
function f48(a49, a50) {
    (2147483648 + ([F0,F0,F0,F0]).slice()).replaceAll(v46);
}
v47[Symbol.toPrimitive] = f48;
const o63 = {
    [v47](a59, a60, a61, a62) {
    },
};
for (let i66 = 0, i67 = 10;
    (() => {
        const v68 = i66 !== i67;
        return v68 || v68;
    })();
    i67--) {
}
gc();
