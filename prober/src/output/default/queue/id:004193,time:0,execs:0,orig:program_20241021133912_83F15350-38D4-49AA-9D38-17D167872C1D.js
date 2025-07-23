const v1 = AggregateError.toPrimitive;
const v2 = [4,2739,128,-147296726,-10];
v2[1] = v2;
Object.defineProperty(v2, 226, { set: v1 });
new Float32Array(v2, 1073741823);
class C6 {
}
gc();
