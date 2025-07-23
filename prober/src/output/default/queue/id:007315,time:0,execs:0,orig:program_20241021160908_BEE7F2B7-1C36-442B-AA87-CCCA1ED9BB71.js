function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a3;
    this instanceof F1;
}
new F1();
new F1();
const v10 = new Uint16Array(64);
v10["includes"](-1073741824, -13);
gc();
