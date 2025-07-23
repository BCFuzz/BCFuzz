class C0 {
    static b;
}
delete C0.b;
class C2 extends C0 {
}
gc();
