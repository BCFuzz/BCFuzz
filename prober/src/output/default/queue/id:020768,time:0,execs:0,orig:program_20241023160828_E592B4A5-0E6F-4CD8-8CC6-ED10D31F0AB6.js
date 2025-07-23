function f1(a2, a3, a4) {
    return 65537;
}
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
}
class C15 {
}
C15.deleteProperty = f1;
const v16 = [-15,14,9007199254740991];
const v18 = ([14,-952939671,-37915]).a;
const v20 = new Proxy(v16, C15);
delete v20[v18];
gc();
