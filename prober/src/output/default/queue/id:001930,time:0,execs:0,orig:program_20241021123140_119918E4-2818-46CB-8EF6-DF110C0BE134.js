class C5 {
    constructor(a7, a8, a9, a10) {
        let v11;
        try { v11 = a10(a9, a7); } catch (e) {}
        a10.__proto__ = v11;
    }
}
new C5(129, 129, 872385820, -1024);
new C5(872385820, 201497018, 1450505164, 1450505164);
gc();
