for (let v0 = 0; v0 < 100; v0++) {
    class C2 {
        #e;
        [-2] = v0;
    }
    new C2();
}
gc();
