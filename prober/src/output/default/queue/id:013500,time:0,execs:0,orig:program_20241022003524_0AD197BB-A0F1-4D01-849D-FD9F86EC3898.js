const v1 = new Map();
const v2 = [v1];
function f3() {
    return f3;
}
function f4(a5) {
    return Map;
}
Object.defineProperty(v2, "constructor", { configurable: true, enumerable: true, get: f3, set: f4 });
class C6 extends Map {
    constructor(a8, a9) {
        super(v2);
    }
}
new C6();
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
