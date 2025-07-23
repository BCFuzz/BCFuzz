class C0 {
}
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
for (let i = 0; i < 5; i++) {
    function f13(a14, a15, a16, a17) {
        const o18 = {
            __proto__: a16,
        };
        o18.e = o18;
        return o18;
    }
    const v19 = f13();
    f13(2, "o", v19);
    v19.__proto__ = C0;
}
gc();
