const v2 = ["-4294967297",["-4294967297"]];
for (let v3 = 0; v3 < 50; v3++) {
    class C4 {
        [v2] = v3;
    }
    new C4();
    new C4();
}
gc();
