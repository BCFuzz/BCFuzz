class C1 {
}
const v2 = new C1();
const v3 = [1073741824,-26526];
v3.unshift(v3);
const v6 = new Proxy(v3, v2);
v6.toReversed().indexOf(1000);
gc();
