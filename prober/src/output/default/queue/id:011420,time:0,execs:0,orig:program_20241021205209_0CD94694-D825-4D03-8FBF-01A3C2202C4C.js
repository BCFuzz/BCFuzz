for (let i = 0; i < 10; i++) {
    function f2(a3, a4) {
        let v5 = parseInt("seal");
        v5--;
        return "seal";
    }
    f2.call(f2, parseInt, "seal");
}
gc();
