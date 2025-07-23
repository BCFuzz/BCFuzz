class C1 {
}
try { Reflect.defineProperty(Reflect, Reflect, 129n); } catch (e) {}
Array(1000).some(C1);
gc();
