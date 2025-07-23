let v0 = 0.5534344452193884;
class C2 {
    constructor(a4, a5, a6, a7) {
        try { new a4(65536); } catch (e) {}
        function f9(a10, a11) {
            ~a11.length;
            ({"length":v0,} = arguments);
        }
        for (let i = 0; i < 5; i++) {
            f9(a5, a4);
        }
    }
}
new C2(C2);
gc();
