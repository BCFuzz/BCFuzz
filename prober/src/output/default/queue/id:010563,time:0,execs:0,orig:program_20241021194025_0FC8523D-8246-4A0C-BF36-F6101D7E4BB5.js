new Float64Array();
class C2 {
    toString(a4, a5) {
        function f6(a7) {
            Array(456).push(0.08232904114071671);
            return 456;
        }
        Object.defineProperty(this, "toString", { writable: true, enumerable: true, value: f6 });
    }
}
const v13 = new C2();
for (let i = 0; i < 5; i++) {
    for (let v14 = 0; v14 < 50; v14++) {
    }
    v13.toString();
}
gc();
