const o6 = {
    toString(a2, a3) {
        class C4 {
        }
        class C5 extends C4 {
        }
        Object.defineProperty(C4, 6, { configurable: true, value: 2.220446049250313e-16 });
        return a3;
    },
};
const v7 = o6.toString(o6, o6);
class C9 extends Set {
}
const o27 = {
    toString(a11) {
        function f12(a13) {
            new C9();
            return arguments;
        }
        f12(Set);
        for (let i19 = 0, i20 = 10; i19 !== i20; i20--) {
        }
    },
};
function f28(a29, a30, a31, a32) {
    a29 >> a29;
    return f28;
}
for (let v34 = 0; v34 < 5; v34++) {
    const t29 = f28(v34, v34, f28, v7);
    t29(o27);
}
gc();
