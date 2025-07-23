const v1 = RegExp();
class C3 {
}
const v4 = new C3();
const v5 = new C3();
const v6 = new C3();
JSON.stringify([v1,v4,[v5,v4,v5,[v6,1073741825,v4]]]);
gc();
