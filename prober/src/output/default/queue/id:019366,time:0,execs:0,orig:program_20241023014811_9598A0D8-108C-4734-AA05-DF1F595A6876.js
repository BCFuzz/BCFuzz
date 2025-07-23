const o6 = {
    toString(a2, a3) {
        class C4 {
        }
        class C5 extends C4 {
        }
        Object.defineProperty(C4, 6, { configurable: true, value: 2.220446049250313e-16 });
        return 2.220446049250313e-16;
    },
};
o6.toString();
class C9 extends Set {
}
const o27 = {
    toString(a11) {
        function f12(a13) {
            new C9();
            return arguments;
        }
        f12(this);
        for (let i19 = -53532, i20 = 10; i19 !== i20; i20--) {
        }
    },
};
function f28(a29, a30, a31, a32) {
    a29 >> a29;
    return f28;
}
const t28 = f28(C9, C9, o6, f28);
t28(o27);
gc();
