const v2 = [5];
const v3 = [5];
function f4() {
    const v6 = new Uint32Array(v2, 5, 5);
    v6.slice(5, 5);
}
v3.valueOf = f4;
([v2,[f4,f4,f4,f4]]).copyWithin(5, 5).flat();
const v12 = [0.3791757979158641,5.0,0.6074445362731085,3.0];
v12[Symbol.toPrimitive] = f4;
v12.toSpliced(v12);
+v3;
gc();
