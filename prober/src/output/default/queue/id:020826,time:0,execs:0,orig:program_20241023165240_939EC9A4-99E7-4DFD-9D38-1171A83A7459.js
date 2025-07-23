for (let v2 = 0; v2 < 50; v2++) {
    function f3(a4, a5, a6) {
        for (let v7 = 0; v7 < 5; v7++) {
            for (const v8 in a6) {
            }
        }
        return a6;
    }
    f3("some", "some", Uint32Array);
    f3();
}
gc();
