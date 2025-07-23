const v0 = [642.9532470366476,-1.8970240941903296e+307,-Infinity,-2.220446049250313e-16,2.0,-0.0,5.0,1.0,-2.220446049250313e-16];
function f1() {
    v0.push();
}
for (let v3 = 0; v3 < 10; v3++) {
    const v6 = new Uint8ClampedArray();
    v6.toString = f1;
    v6 | 1000;
}
const v8 = [6.046904918519349e+307,5.473307372656365e+307,0.6359613782172343,0.1315940986846329,0.2751311183170043,-74.42187645211402];
function f9() {
    return v0;
}
class C10 extends f9 {
    constructor(a12) {
        super();
        function F13(a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
                for (let v19 = 0; v19 < 5; v19++) {
                    v8.__proto__ = a16;
                }
                return this;
            }
            f18();
            f18();
        }
        new F13(v0, a12, a12);
        new F13(v8, f9);
    }
}
new C10();
new C10();
gc();
