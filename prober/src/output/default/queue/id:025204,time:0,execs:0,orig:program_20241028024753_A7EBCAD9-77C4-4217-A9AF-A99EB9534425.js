function f1() {
    return f1;
}
class C2 extends f1 {
    static {
        const v4 = Date.prototype;
        for (let v5 = 0; v5 < 5; v5++) {
            const v6 = /(.a+b3)/miu;
            function f7(a8, a9, a10, a11) {
                return a8.test(a8);
            }
            try { f7(v4); } catch (e) {}
            f7(v6);
        }
    }
}
gc();
