class C0 {
}
class C1 extends C0 {
}
for (let v2 = 0; v2 < 100; v2++) {
    class C3 {
        #n(a5, a6, a7) {
        }
        constructor(a9, a10, a11, a12) {
            a11.e = a11;
            try {
                a11.#n();
            } catch(e14) {
            }
        }
    }
    new C3(v2, v2, C3);
    new C3(C1, C1, C1);
}
gc();
