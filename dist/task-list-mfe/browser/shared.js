import {
  __spreadProps,
  __spreadValues
} from "./chunk-VUJOFXKG.js";

// projects/shared/src/lib/shared.ts
import { Injectable, signal, computed } from "@angular/core";
import * as i0 from "@angular/core";
var TaskService = class _TaskService {
  tasksSignal = signal([], ...ngDevMode ? [{ debugName: "tasksSignal" }] : (
    /* istanbul ignore next */
    []
  ));
  // Expose the raw list
  allTasks = this.tasksSignal.asReadonly();
  // Reactive filter for Today's deadlines
  todayTasks = computed(() => {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return this.tasksSignal().filter((t) => t.deadline === today);
  }, ...ngDevMode ? [{ debugName: "todayTasks" }] : (
    /* istanbul ignore next */
    []
  ));
  addTask(task) {
    console.log("Adding task:", task);
    this.tasksSignal.update((tasks) => [...tasks, __spreadProps(__spreadValues({}, task), { id: Date.now() })]);
    console.log("Current Signal Value:", this.tasksSignal());
  }
  static \u0275fac = function TaskService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskService)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _TaskService, factory: _TaskService.\u0275fac, providedIn: "root" });
};
export {
  TaskService
};
//# sourceMappingURL=shared.js.map
