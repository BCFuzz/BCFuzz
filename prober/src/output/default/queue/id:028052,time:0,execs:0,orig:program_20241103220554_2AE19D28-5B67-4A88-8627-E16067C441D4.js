class C0 {
}
for (let i3 = 0, i4 = 127;
    i3 < i4;
    (() => {
        i4--;
        class C9 extends C0 {
            #d = C9;
        }
        const v10 = new C9();
        function f11(a12, a13) {
            C0 = C9;
            return a13;
        }
        v10.constructor = f11;
        const t10 = v10.constructor;
        t10(C0);
    })()) {
}
gc();
