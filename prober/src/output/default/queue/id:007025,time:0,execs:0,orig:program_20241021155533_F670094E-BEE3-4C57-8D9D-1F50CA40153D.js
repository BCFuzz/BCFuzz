let v1;
try { v1 = Uint32Array.call(); } catch (e) {}
for (let v2 = 0; v2 < 50; v2++) {
    class C3 {
        constructor(a5, a6) {
            try { new a6(); } catch (e) {}
            a6.g = a6;
        }
    }
    const v8 = new C3(v1, C3);
    new C3(C3, v8);
}
gc();
