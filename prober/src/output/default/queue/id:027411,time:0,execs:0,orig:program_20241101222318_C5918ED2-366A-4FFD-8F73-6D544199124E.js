class C0 {
}
for (let i3 = 0, i4 = 127;
    i3 < i4;
    (() => {
        i4--;
        class C9 extends C0 {
        }
        const v10 = new C9();
        function f11(a12, a13) {
            function f14(a15, a16, a17, a18) {
                return a12;
            }
            try { a12.toString(); } catch (e) {}
            C0 = C9;
            return v10;
        }
        v10.constructor = f11;
        const v20 = v10.constructor;
        const v21 = v20(v20);
        v21.constructor(v21);
    })()) {
}
gc();
