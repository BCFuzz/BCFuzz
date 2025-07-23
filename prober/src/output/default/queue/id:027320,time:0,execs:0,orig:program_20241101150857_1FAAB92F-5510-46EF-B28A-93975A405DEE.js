const v1 = new Uint16Array();
const v2 = /((((.).).).)a(?:b)*/vgi;
function f3(a4) {
    const v5 = /a\nW/vgi;
    function f6(a7, a8) {
        const v10 = [f3];
        v10[3329] = -4;
        (2147483648 + v10.toLocaleString()).replaceAll(v2, v1);
    }
    v5[Symbol.toPrimitive] = f6;
    const o22 = {
        [v5](a18, a19, a20, a21) {
        },
    };
    for (let i25 = 0, i26 = 10;
        (() => {
            const v27 = i25 !== i26;
            return v27 || v27;
        })();
        i26--) {
    }
    return v2;
}
for (let i36 = 0, i37 = 10; i36 !== i37; i37--) {
}
class C44 {
}
const v45 = C44.__defineSetter__;
v45.constructor = f3;
const t29 = v45.constructor;
t29();
gc();
