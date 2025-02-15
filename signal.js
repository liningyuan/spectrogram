class SignalSender extends AudioWorkletProcessor {constructor() {super();};
  process(inputs, outputs, parameters) {
    this.port.postMessage("process");
    return true;
  }
}
registerProcessor('signalsender', SignalSender);
