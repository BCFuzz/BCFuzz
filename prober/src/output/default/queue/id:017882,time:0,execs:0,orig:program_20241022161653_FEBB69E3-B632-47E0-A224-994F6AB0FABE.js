const v2 = new Uint8ClampedArray(2378);
v2[Symbol.isConcatSpreadable] = v2;
([-1.4883472184324693e+308,250.3808252277554,0.3417670049150071,Infinity,5.279674116704459]).concat(v2);
gc();
