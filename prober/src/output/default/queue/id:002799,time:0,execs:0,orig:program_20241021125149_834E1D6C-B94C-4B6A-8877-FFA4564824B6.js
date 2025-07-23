class C2 {
}
class C3 extends C2 {
    31 = undefined;
}
new C3();
Object.defineProperty(C2, 2, { value: NaN });
gc();
