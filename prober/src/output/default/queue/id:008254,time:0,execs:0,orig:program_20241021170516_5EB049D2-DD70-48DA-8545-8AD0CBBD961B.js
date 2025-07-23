const v1 = 9 + 9;
const v2 = v1.toLocaleString(9, v1, 9, 9);
class C3 {
    [v2] = v2;
}
new C3();
gc();
