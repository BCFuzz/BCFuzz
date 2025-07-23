function f1() {
    return f1;
}
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
for (let v12 = 0; v12 < 50; v12++) {
    function F13() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v15 = new F13();
    v15.constructor = f1;
    class C17 {
        constructor(a19, a20) {
            const t13 = a20.constructor;
            const v22 = t13();
            try { v22(); } catch (e) {}
        }
    }
    new C17(Reflect, 268435441);
    new C17(v15, v15);
}
gc();
