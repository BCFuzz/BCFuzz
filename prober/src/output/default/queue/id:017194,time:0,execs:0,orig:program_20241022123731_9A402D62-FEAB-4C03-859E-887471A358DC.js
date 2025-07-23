const v1 = Symbol.toPrimitive;
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
class C12 {
}
const v13 = [-5071270,2,-1773741108];
const v14 = [14,-952939671,-37915];
v14.a = v1;
const v15 = v14.a;
const v17 = new Proxy(v13, C12);
delete v17[v15];
gc();
