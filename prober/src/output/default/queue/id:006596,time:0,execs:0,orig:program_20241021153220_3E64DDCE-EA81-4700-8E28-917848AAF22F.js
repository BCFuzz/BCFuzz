for (let v1 = 0; v1 < 32; v1++) {
    function f2() {
        return f2;
    }
    const v3 = f2();
    class C4 extends f2 {
        static #b = Date;
        static [v3];
    }
}
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
}
gc();
