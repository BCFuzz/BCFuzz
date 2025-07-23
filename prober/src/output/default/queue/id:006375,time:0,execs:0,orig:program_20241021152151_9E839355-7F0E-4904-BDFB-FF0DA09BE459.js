function f0() {
    for (let v1 = 0; v1 < 25; v1++) {
        function f2() {
            return f2;
        }
        f2();
        try { f2.bind(f2); } catch (e) {}
        class C5 extends f2 {
        }
        for (let i8 = 0, i9 = 10;
            i8 < i9;
            (() => {
                let v13 = i9--;
                v13++;
            })()) {
        }
    }
    return f0;
}
f0();
gc();
