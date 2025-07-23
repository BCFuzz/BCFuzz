function f0(a1, a2) {
    const v4 = new Uint16Array();
    class C5 {
    }
    for (let i8 = 0, i9 = 10;
        (() => {
            i9--;
            const v11 = i8 < i9;
            v4.__proto__ = C5;
            return v11;
        })();
        ) {
        for (let v16 = 0; v16 < 5; v16++) {
            const v18 = "p" + v16;
            try { v18.localeCompare(v4); } catch (e) {}
        }
    }
    return C5;
}
f0(f0, f0);
for (let i = 0; i < 10; i++) {
    f0();
}
gc();
