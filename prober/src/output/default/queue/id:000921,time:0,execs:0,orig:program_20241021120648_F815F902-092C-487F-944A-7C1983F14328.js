class C0 {
}
const v1 = C0.bind;
try { v1(v1, v1); } catch (e) {}
("p").replace(v1, "p");
gc();
