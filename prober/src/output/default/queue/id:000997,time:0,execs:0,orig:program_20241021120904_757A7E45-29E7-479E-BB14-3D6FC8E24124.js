const v2 = new Int8Array();
class C3 extends Int8Array {
    [v2] = 4.0;
}
new C3();
gc();
