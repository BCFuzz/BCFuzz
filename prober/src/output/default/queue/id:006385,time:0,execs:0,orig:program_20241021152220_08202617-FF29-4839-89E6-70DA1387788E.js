for (let v0 = 0; v0 < 50; v0++) {
    class C2 {
        ["R"] = "R";
    }
    new C2();
    class C4 extends C2 {
    }
    new C4();
}
gc();
