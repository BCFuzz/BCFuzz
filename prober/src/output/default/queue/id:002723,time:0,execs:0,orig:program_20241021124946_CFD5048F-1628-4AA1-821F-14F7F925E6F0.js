const v2 = new Int16Array(9);
v2[3] += v2[Symbol.isConcatSpreadable];
gc();
