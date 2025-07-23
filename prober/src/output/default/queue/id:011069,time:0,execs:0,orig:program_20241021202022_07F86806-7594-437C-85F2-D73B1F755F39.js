class C1 {
}
const v3 = [4,C1,4,[4,4,4,4]];
v3.push(v3);
([v3]).flat(1000);
gc();
