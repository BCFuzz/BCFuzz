class C0 {
}
for (let i3 = 0, i4 = 127;
    i3 < i4;
    (() => {
        const v8 = i4--;
        C0[v8];
        class C10 extends C0 {
        }
        const v11 = new C10();
        function f12(a13, a14) {
            C0 = C10;
            return v8;
        }
        v11.constructor = f12;
        const t10 = v11.constructor;
        t10();
    })()) {
}
gc();
