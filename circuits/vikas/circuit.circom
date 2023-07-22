pragma circom 2.0.0;

/*This circuit template checks that c is the multiplication of a and b.*/  

template Vikas () {  

   // Input of signals.  
   signal input a;  // will go to AND gate 
   signal input b;  // will go to NOT gate and ANd Gate


   //output from gates;
   signal x; //output from AND gate
   signal y; //output from NOT gate

   //components of gates
   component andGate=AND();
   component notGate=NOT();
   component orGate=OR();

   // result output signal 
   signal output q;  //final output signal

   // Logic of Gates  
   //AND Gate Logic 
   andGate.a <== a; 
   andGate.b <== b;
   x <== andGate.out;

   //Not Gate Logic 
   notGate.in <== b;
   y <== notGate.out;

   //OR Gate Logic 
   orGate.a <== x;
   orGate.b <== y;
   q <== orGate.out; //Final Output
}

template AND() {
    signal input a;
    signal input b;
    signal output out;

    out <== a*b;
}

template NOT() {
    signal input in;
    signal output out;

    out <== 1 + in - 2*in;
}

template OR() {
    signal input a;
    signal input b;
    signal output out;

    out <== a + b - a*b;
}
 
component main = Vikas();