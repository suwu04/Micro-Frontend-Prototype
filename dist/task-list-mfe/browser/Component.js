import "./chunk-VUJOFXKG.js";

// projects/task-list-mfe/src/app/app.ts
import { Component as Component2, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

// projects/task-list-mfe/src/app/task-list/task-list.ts
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskService } from "shared";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TaskListComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 3)(1, "span", 5);
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(3, "strong", 6);
    i0.\u0275\u0275text(4);
    i0.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngClass", t_r1.urgency);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate1(" ", t_r1.urgency, " ");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(t_r1.text);
  }
}
function TaskListComponent_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p", 4);
    i0.\u0275\u0275text(1, "No tasks available in the registry.");
    i0.\u0275\u0275elementEnd();
  }
}
var TaskListComponent = class _TaskListComponent {
  taskService = inject(TaskService);
  static \u0275fac = function TaskListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _TaskListComponent, selectors: [["task-list"]], decls: 7, vars: 1, consts: [[1, "registry-container"], [1, "registry-header"], [1, "list-body"], [1, "task-row"], [1, "empty-state"], [1, "urgency-pill", 3, "ngClass"], [1, "task-text"]], template: function TaskListComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      i0.\u0275\u0275text(2, "\u{1F4CB} Global Registry");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(3, "div", 2);
      i0.\u0275\u0275repeaterCreate(4, TaskListComponent_For_5_Template, 5, 3, "div", 3, i0.\u0275\u0275repeaterTrackByIndex, false, TaskListComponent_ForEmpty_6_Template, 2, 0, "p", 4);
      i0.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275repeater(ctx.taskService.allTasks());
    }
  }, dependencies: [CommonModule, i1.NgClass], styles: ['\n\n.registry-container[_ngcontent-%COMP%] {\n  background: #1a1a1a;\n  color: #ffffff;\n  padding: 0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.registry-header[_ngcontent-%COMP%] {\n  background: #2d2d2d;\n  margin: 0;\n  padding: 20px;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #3d3d3d;\n}\n.list-body[_ngcontent-%COMP%] {\n  padding: 10px 20px 20px 20px;\n}\n.task-row[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  border-bottom: 1px solid #333;\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.task-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.task-text[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #e0e0e0;\n}\n.urgency-pill[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 4px 8px;\n  border-radius: 6px;\n  min-width: 60px;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n.High[_ngcontent-%COMP%] {\n  background: #ff4d4d;\n  color: white;\n}\n.Medium[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #000;\n}\n.Low[_ngcontent-%COMP%] {\n  background: #2ecc71;\n  color: white;\n}\n.empty-state[_ngcontent-%COMP%] {\n  color: #888;\n  font-style: italic;\n  padding: 20px 0;\n}\n/*# sourceMappingURL=task-list.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(TaskListComponent, { className: "TaskListComponent", filePath: "projects/task-list-mfe/src/app/task-list/task-list.ts", lineNumber: 83 });
})();

// projects/task-list-mfe/src/app/app.ts
import * as i02 from "@angular/core";
var App = class _App {
  title = signal("task-list-mfe", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275element(0, "task-list");
    }
  }, dependencies: [TaskListComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(App, { className: "App", filePath: "projects/task-list-mfe/src/app/app.ts", lineNumber: 11 });
})();
export {
  App
};
//# sourceMappingURL=Component.js.map
