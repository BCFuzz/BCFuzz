class C0 {
    #c;
}
const v1 = new C0();
const v2 = new C0();
function f3(a4, a5) {
    const o6 = {
        ...v1,
    };
    return a5;
}
const v7 = [1.5737594009505368e+308,1.7976931348623157e+308,2.220446049250313e-16,-0.0,1.0,-343681.6140061185];
v7.constructor = f3;
const v8 = v7.constructor;
v2.valueOf = f3;
try { v8(v2); } catch (e) {}
const v10 = [2.783422986098202,-333236.047964107,-4.187467886110923,1.0,-1000000000000.0,0.7054421341391551];
class C11 {
}
[v10[6]];
for (let v14 = 0; v14 < 250; v14++) {
    v14++;
    v14--;
}
gc();
