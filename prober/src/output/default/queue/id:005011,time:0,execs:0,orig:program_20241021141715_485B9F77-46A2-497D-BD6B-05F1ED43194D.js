for (let [v1] of "register") {
    const v4 = ["-4294967297",["register"]];
    for (let v5 = 0; v5 < 25; v5++) {
        class C6 {
            [v4] = v5;
        }
        new C6();
        new C6();
    }
}
gc();
