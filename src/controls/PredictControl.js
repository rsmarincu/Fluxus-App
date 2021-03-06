import Rete from "rete";
import VuePredictControl from "./PredictControl.vue";

export class PredictControl extends Rete.Control {

    constructor(emitter, key, readonly) {
      super(key);
      this.render = 'vue';
      this.component = VuePredictControl;
      this.props = { emitter, ikey: key, readonly };
    }
  
    setValue(val) {
      this.vueContext.value = val;
    }

    isPaused() {
      return this.vueContext.pause
    }

}