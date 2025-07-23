const v0 = [];
function f1() {
    function f2(a3, a4) {
        return f1;
    }
    new Promise(f2);
    class C7 {
    }
    class C8 extends C7 {
        #m(a10, a11, a12, a13) {
            Object.defineProperty(v0, f1, { enumerable: true, set: f2 });
        }
    }
    for (let v14 = 0; v14 < 250; v14++) {
        v14++;
        v14--;
    }
    return v0;
}
class C17 extends f1 {
}
new C17();
gc();
