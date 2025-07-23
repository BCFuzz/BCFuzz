class C3 {
    h = 7.297519862446592;
    static #h = 3;
    static [-6];
}
new C3();
new C3();
new C3();
class C7 extends C3 {
}
new C7();
new C7();
new C7();
class C11 extends C3 {
    static [-2] = C7;
}
new C11();
gc();
