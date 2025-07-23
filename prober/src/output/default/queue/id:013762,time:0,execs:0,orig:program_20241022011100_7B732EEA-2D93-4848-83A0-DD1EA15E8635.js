class C1 {
}
const v2 = [4];
const v3 = [4,C1,4,v2];
function f4() {
    return v2;
}
function f5(a6) {
    return f4;
}
Object.defineProperty(v3, 4, { configurable: true, get: f4, set: f5 });
v3.push(v3);
([v3]).flat(1000);
gc();
