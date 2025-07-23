Uint8ClampedArray instanceof BigInt64Array;
const v8 = [0.0,-1000.0,Infinity,-2.745200062365547e+307,1000000.0,0.5163086772835503,4.0];
class C9 {
}
class C10 extends C9 {
}
const v11 = new C10();
v8 instanceof v11.constructor;
gc();
