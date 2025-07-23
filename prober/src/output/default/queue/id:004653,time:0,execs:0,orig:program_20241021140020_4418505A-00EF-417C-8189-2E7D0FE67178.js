function f0() {
    return f0;
}
class C1 extends f0 {
}
const t5 = /Gfoo(?<=bar)baz/mysu;
t5.lastIndex = C1;
gc();
