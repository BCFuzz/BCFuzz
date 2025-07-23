function f2() {
    const o3 = {
    };
    o3.a = "KU";
    const o4 = {
    };
    o4.a = "KU";
    o4.b = f2;
    const o5 = {
    };
    o5.a = "KU";
    o5.b = f2;
    o5.d = f2;
    const o6 = {
    };
    o6.a = "KU";
}
Map.groupBy(Array(22905), f2);
gc();
