import "./chunk-VUJOFXKG.js";

// projects/task-form-mfe/src/app/app.ts
import { Component as Component2, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

// projects/task-form-mfe/src/app/task-form/task-form.ts
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TaskService } from "shared";
import { CommonModule, NgClass } from "@angular/common";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
var TaskFormComponent = class _TaskFormComponent {
  taskService = inject(TaskService);
  // Temporary local state for the form
  taskText = "";
  urgency = "Medium";
  onSubmit() {
    if (this.taskText.trim()) {
      this.taskService.addTask({
        text: this.taskText,
        urgency: this.urgency,
        deadline: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
        // Default to today
      });
      this.taskText = "";
    }
  }
  static \u0275fac = function TaskFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _TaskFormComponent, selectors: [["task-form"]], decls: 20, vars: 3, consts: [[1, "registry-container"], [1, "registry-header"], [1, "list-body"], [1, "form-group"], ["placeholder", "What needs to be done?", 1, "dark-input", 3, "ngModelChange", "ngModel"], [1, "dark-select", 3, "ngModelChange", "ngModel", "ngClass"], ["value", "Low"], ["value", "Medium"], ["value", "High"], [1, "submit-btn", 3, "click"]], template: function TaskFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      i0.\u0275\u0275text(2, "\u2795 Add New Task");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "label");
      i0.\u0275\u0275text(6, "Task Description");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(7, "input", 4);
      i0.\u0275\u0275twoWayListener("ngModelChange", function TaskFormComponent_Template_input_ngModelChange_7_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.taskText, $event) || (ctx.taskText = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(8, "div", 3)(9, "label");
      i0.\u0275\u0275text(10, "Urgency Level");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(11, "select", 5);
      i0.\u0275\u0275twoWayListener("ngModelChange", function TaskFormComponent_Template_select_ngModelChange_11_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.urgency, $event) || (ctx.urgency = $event);
        return $event;
      });
      i0.\u0275\u0275elementStart(12, "option", 6);
      i0.\u0275\u0275text(13, "Low");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(14, "option", 7);
      i0.\u0275\u0275text(15, "Medium");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(16, "option", 8);
      i0.\u0275\u0275text(17, "High");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(18, "button", 9);
      i0.\u0275\u0275listener("click", function TaskFormComponent_Template_button_click_18_listener() {
        return ctx.onSubmit();
      });
      i0.\u0275\u0275text(19, "Add Task");
      i0.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance(7);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.taskText);
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.urgency);
      i0.\u0275\u0275property("ngClass", ctx.urgency);
    }
  }, dependencies: [FormsModule, i1.NgSelectOption, i1.\u0275NgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, NgClass, CommonModule], styles: ['\n\n.registry-container[_ngcontent-%COMP%] {\n  background: #1a1a1a;\n  color: #ffffff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.registry-header[_ngcontent-%COMP%] {\n  background: #2d2d2d;\n  margin: 0;\n  padding: 20px;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #3d3d3d;\n}\n.list-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.dark-input[_ngcontent-%COMP%], \n.dark-select[_ngcontent-%COMP%] {\n  background: #2d2d2d;\n  border: 1px solid #3d3d3d;\n  color: white;\n  padding: 12px;\n  border-radius: 8px;\n  font-size: 14px;\n  outline: none;\n  transition: border 0.2s;\n}\n.dark-input[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n}\n.High[_ngcontent-%COMP%] {\n  border-left: 5px solid #ff4d4d;\n}\n.Medium[_ngcontent-%COMP%] {\n  border-left: 5px solid #ffc107;\n}\n.Low[_ngcontent-%COMP%] {\n  border-left: 5px solid #2ecc71;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  border: none;\n  padding: 14px;\n  border-radius: 8px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.1s;\n  margin-top: 10px;\n}\n.submit-btn[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n}\n.submit-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n/*# sourceMappingURL=task-form.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(TaskFormComponent, { className: "TaskFormComponent", filePath: "projects/task-form-mfe/src/app/task-form/task-form.ts", lineNumber: 13 });
})();

// projects/task-form-mfe/src/app/app.ts
import * as i02 from "@angular/core";
var App = class _App {
  title = signal("task-form-mfe", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275element(0, "task-form");
    }
  }, dependencies: [TaskFormComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(App, { className: "App", filePath: "projects/task-form-mfe/src/app/app.ts", lineNumber: 11 });
})();
export {
  App
};
//# sourceMappingURL=Component.js.map
