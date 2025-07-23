const v1 = new Map();
const v2 = [1000000000.0,NaN];
class C3 extends Map {
    [v1] = v2;
}
new C3();
gc();
