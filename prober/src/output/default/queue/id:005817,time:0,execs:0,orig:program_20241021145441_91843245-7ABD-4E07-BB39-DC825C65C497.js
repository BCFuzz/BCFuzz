const v0 = [6.046904918519349e+307,5.473307372656365e+307,0.6359613782172343,0.1315940986846329,0.2751311183170043,-74.42187645211402];
function f1() {
    return v0;
}
class C2 extends f1 {
    constructor(a4) {
        super();
        function F5(a7, a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            function f10() {
                for (let v11 = 0; v11 < 5; v11++) {
                    v0.__proto__ = a8;
                }
                return a9;
            }
            f10();
            f10();
        }
        new F5(F5, a4, v0);
        new F5(v0, f1, this);
    }
}
new C2();
new C2();
gc();
