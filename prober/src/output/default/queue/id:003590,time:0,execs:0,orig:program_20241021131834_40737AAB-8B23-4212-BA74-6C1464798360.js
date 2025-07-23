for (let v0 = 0; v0 < 250; v0++) {
    v0++;
    v0--;
    class C4 {
        ["R"] = "R";
    }
    new C4();
    const v6 = new C4();
    class C7 extends C4 {
        #p(a9, a10) {
        }
        130 = v6;
    }
    new C7();
}
gc();
