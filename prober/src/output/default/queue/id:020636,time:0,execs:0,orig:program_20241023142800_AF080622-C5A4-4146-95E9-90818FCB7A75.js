function f0(a1, a2, a3) {
    function f4() {
        return a2;
    }
    a1[Symbol.toPrimitive] = f4;
    const o7 = {
    };
    return o7;
}
const v9 = Symbol.toPrimitive;
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
class C20 {
}
C20.deleteProperty = f0;
const v21 = [-5071270,2,-1773741108];
const v22 = [14,-952939671,-37915];
v22.a = v9;
const v23 = v22.a;
const v25 = new Proxy(v21, C20);
delete v25[v23];
gc();
