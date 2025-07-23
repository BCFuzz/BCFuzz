const v0 = [1.0];
function f1() {
    return v0;
}
Object.defineProperty(v0, 0, { enumerable: true, get: f1 });
v0.pop().pop();
gc();
