class C0 {
}
const v1 = C0.bind();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    class C6 {
    }
    class C7 extends C6 {
    }
    for (let v8 = 0; v8 < 250; v8++) {
        v8++;
        v8--;
        function f11(a12, a13, a14, a15) {
            return C7;
        }
    }
}
Reflect.construct(F2, [F2,F2,F2,F2], v1);
gc();
