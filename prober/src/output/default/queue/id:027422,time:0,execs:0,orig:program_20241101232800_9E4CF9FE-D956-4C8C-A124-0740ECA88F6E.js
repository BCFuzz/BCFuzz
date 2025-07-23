class C1 {
}
for (let i4 = 0, i5 = 127;
    i4 < i5;
    (() => {
        i5--;
        class C10 extends C1 {
        }
        C10.e = C10;
        const v11 = new C10();
        v11.constructor = eval;
        const v12 = v11.constructor;
        try { new v12(C10, C1); } catch (e) {}
        const v14 = v11.constructor;
        try { new v14(); } catch (e) {}
        function f16(a17, a18) {
            C1 = C10;
            return eval;
        }
        v11.constructor = f16;
        const t15 = v11.constructor;
        t15();
    })()) {
}
gc();
