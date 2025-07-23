function f0() {
    return f0;
}
class C1 extends f0 {
}
const v4 = C1.prototype.constructor.bind();
v4.prototype = v4;
gc();
