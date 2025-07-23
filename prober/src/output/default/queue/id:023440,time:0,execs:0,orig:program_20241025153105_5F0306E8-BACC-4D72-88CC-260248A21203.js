for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
class C10 {
}
class C11 extends C10 {
    valueOf(a13, a14) {
        Reflect.apply();
    }
}
const v17 = new C11();
const o25 = {
    n(a19, a20, a21) {
        new Uint16Array(a20);
        a20.length = a20;
        try { a21(v17, v17, a19); } catch (e) {}
        return v17;
    },
};
const v26 = o25.n;
v26(v26, o25, v26);
gc();
