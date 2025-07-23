const v1 = ("ignoreCase").__proto__;
class C2 {
}
const v3 = new C2();
const v5 = [v3,v3,v3];
Reflect.apply(v3.toString, v1, v5);
gc();
