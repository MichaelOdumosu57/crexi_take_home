"use strict";
(self["webpackChunkangular_task"] = self["webpackChunkangular_task"] || []).push([["main"],{

/***/ 2956:
/*!*******************************************************************************!*\
  !*** ./projects/profile-detail-card/src/lib/profile-detail-card.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileDetailCardComponent": () => (/* binding */ ProfileDetailCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);


class ProfileDetailCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileDetailCardComponent.ɵfac = function ProfileDetailCardComponent_Factory(t) { return new (t || ProfileDetailCardComponent)(); };
ProfileDetailCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileDetailCardComponent, selectors: [["lib-profile-detail-card"]], inputs: { user: "user", index: "index" }, decls: 9, vars: 6, consts: [[1, "index"], ["mat-card-md-image", "", 3, "src", "alt"]], template: function ProfileDetailCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content")(2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.user.firstName + " " + ctx.user.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user.firstName, " ", ctx.user.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.email);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardMdImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle], styles: ["[_nghost-%COMP%] {\n  margin: 20px 0 0 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.15s;\n}\n[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n@media only screen and (min-width: 768px) and (max-width: 1199px), only screen and (min-width: 1200px) {\n  [_nghost-%COMP%]:hover   mat-card[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  [_nghost-%COMP%]:hover   mat-card-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]:hover   mat-card-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: -3rem 0 1rem 0;\n    border-radius: 100%;\n  }\n  [_nghost-%COMP%]:hover   mat-card-content[_ngcontent-%COMP%]   .index[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]:hover   mat-card-content[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  transition: all 0.15s;\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  [_nghost-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   mat-card-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: -3rem 0 1rem 0;\n    border-radius: 100%;\n  }\n  [_nghost-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .index[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]   mat-card-content[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex: 1 0 100%;\n}\n.mat-card-content[_ngcontent-%COMP%]   .index[_ngcontent-%COMP%] {\n  font-size: 5rem;\n}\n@media only screen and (min-width: 768px) and (max-width: 1199px), only screen and (min-width: 1200px) {\n  .mat-card-content[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nmat-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzcmNcXHNjc3NcXHV0aWxzXFxtaXhpbnNcXHBvc2l0aW9uLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3JjXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFxib3JkZXJzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3JjXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzcmNcXHNjc3NcXHV0aWxzXFx2YXJpYWJsZXNcXG1lZGlhLXF1ZXJpZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzcmNcXHNjc3NcXHV0aWxzXFx2YXJpYWJsZXNcXHNpemVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3JjXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFx0aW1lLnNjc3MiLCJwcm9maWxlLWRldGFpbC1jYXJkLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3JjXFxzY3NzXFx1dGlsc1xcbWl4aW5zXFxmbGV4Ym94LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3JjXFxzY3NzXFx1dGlsc1xcbWl4aW5zXFxtaXNjLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OytDQUFBO0FDQUE7OytDQUFBO0FDQUE7OytDQUFBO0FBQUE7OytDQUFBO0FDQUE7OytDQUFBO0FBSUEsa0JBQUE7QUF3QkEsNkJBQUE7QUM1QkE7OytDQUFBO0FDQUE7OytDQUFBO0FBSUEsY0FBQTtBQ0RBO0VBQ0Usa0JBQUE7RUNIQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFRFdBLHFCQUFBO0FBZ0JGO0FBeEJFO0VBQ0UsMENBQUE7QUEwQko7QUF4QkU7RUVSQTtJQUNFLFVBQUE7RUZtQ0Y7RUVoQ0E7SUFDRSxzQkFBQTtFRmtDRjtFRWhDRTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUZrQ0o7RUUvQkU7SUFDRSxhQUFBO0VGaUNKO0VFOUJFO0lBQ0UsY0FBQTtFRmdDSjtBQUNGO0FBcENFO0VBQ0UscUJBQUE7QUFzQ0o7QUFuQ0U7RUVsQkE7SUFDRSxVQUFBO0VGd0RGO0VFckRBO0lBQ0Usc0JBQUE7RUZ1REY7RUVyREU7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0VGdURKO0VFcERFO0lBQ0UsYUFBQTtFRnNESjtFRW5ERTtJQUNFLGNBQUE7RUZxREo7QUFDRjtBQWhEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQW1ERjtBQWxERTtFQUNFLGVBQUE7QUFvREo7QUFsREU7RUFDRTtJQUNFLGFBQUE7RUFvREo7QUFDRjtBQS9DQTtFQUVFLFdBQUE7QUFpREYiLCJmaWxlIjoicHJvZmlsZS1kZXRhaWwtY2FyZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gUG9zaXRpb24gbWl4aW5zXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuQG1peGluIHBvc2l0aW9uKCRwb3NpdGlvbjogbnVsbCwgJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xuICAgIEBpZiAkcG9zaXRpb24gIT0gbnVsbCB7XG4gICAgICAgIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gICAgfVxuICAgIEBpZiAkdG9wICE9IG51bGwge1xuICAgICAgICB0b3A6ICR0b3A7XG4gICAgfVxuICAgIEBpZiAkcmlnaHQgIT0gbnVsbCB7XG4gICAgICAgIHJpZ2h0OiAkcmlnaHQ7XG4gICAgfVxuICAgIEBpZiAkYm90dG9tICE9IG51bGwge1xuICAgICAgICBib3R0b206ICRib3R0b207XG4gICAgfVxuICAgIEBpZiAkbGVmdCAhPSBudWxsIHtcbiAgICAgICAgbGVmdDogJGxlZnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gYWJzb2x1dGUoJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLCAkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KTtcbn1cblxuQG1peGluIGZpeGVkKCR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihmaXhlZCwgJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCk7XG59XG5cbkBtaXhpbiByZWxhdGl2ZSgkdG9wOiBudWxsLCAkcmlnaHQ6IG51bGwsICRib3R0b206IG51bGwsICRsZWZ0OiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24ocmVsYXRpdmUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpO1xufVxuXG5AbWl4aW4gc3RhdGljKCR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihzdGF0aWMsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpO1xufVxuXG5cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIEJvcmRlciB2YXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQGltcG9ydCAnY29sb3JzJztcblxuLy9ib3JkZXJzXG4kYm9yZGVyTGlnaHQ6IDFweCBzb2xpZCAkY29sb3JCb3JkZXI7XG4kYm9yZGVyTGlnaHRHcmV5OiAxcHggc29saWQgJGxpZ2h0R3JheTtcbiRyYWRpdXM6IDJweDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvbG9ycyB2YXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4kYmx1ZTogIzJlOGRkZDsvL2JsdWUgZGUgZnJhbmNlXG4kZ3JlZW46ICMzOWIyNzM7IC8vbWVkaXVtIHNlZSBncmVlblxuJHJlZDogI2QyNjY2NjsgLy9pbmRpYW4gcmVkXG4kb3JhbmdlOiAjZTU5YzI2OyAvL2NhbWJvZ2Ugb3JhbmdlXG5cbiRibHVlSG92ZXI6ICMzOGE0ZmY7Ly9ibHVlIGRlIGZyYW5jZVxuJGdyZWVuSG92ZXI6ICM0NWQyODg7IC8vbWVkaXVtIHNlZSBncmVlblxuJG9yYW5nZUhvdmVyOiAjZmZhZjJkOyAvL2NhbWJvZ2Ugb3JhbmdlXG4kcmVkSG92ZXI6IGxpZ2h0ZW4oI2QyNjY2NiwgMTAlKTsgLy9pbmRpYW4gcmVkXG5cbiRkYXJrR3JheTogIzMzMztcbiRtZWRpdW1HcmF5OiAjY2NjO1xuJGxpZ2h0R3JheTogI2Y1ZjVmNTtcbiRzdHJpcGVHcmF5OiAjZmFmYWZhO1xuJGxlZnRTaWRlTWVudUdyYXk6ICM0YTRhNGE7XG4kbGlnaHRCbHVlOiAjZTFmMWZmO1xuXG4kdGV4dERhcmtHcmF5OiAkZGFya0dyYXk7XG4kdGV4dEdyYXk6ICNhMmEyYTI7XG4kdGV4dFBhbGVHcmF5OiAjMjYyNjI2O1xuJHRleHRTbWFsbEdyYXk6ICM4MzgzODM7XG4kdGV4dFNlY29uZGFyeUdyYXk6ICM5YjliOWI7XG4kZGlzYWJsZWQtZ3JheTogI2Q5ZDlkOTtcbiRkaXNhYmxlZC1saWdodC1ncmF5OiAjZTVlNWU1O1xuJHBhbmVsR3JheTogI2Y4ZjhmODtcbiRncmF5LTUwOiAjNWY1ZjVmO1xuJGdyYXlBbHQ6ICNkOGQ4ZDg7XG5cbiRkYXJrLWdyZWVuOiAjNGM4NDdjO1xuJGxpZ2h0LWdyZWVuOiAjNzliZmI2O1xuXG4kYmxhY2s6ICMxMTE7XG4kYmxhY2tPcmlnaW5hbDogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcblxuJGxpbmtlZC1pbi1ibHVlOiAjMDA3N2I1O1xuJGdvb2dsZS1wbHVzOiAjZGQ0YzM5O1xuJGZhY2Vib29rLWJsdWU6ICMzYjU5OTg7XG4kZGFyay1ibHVlOiAjMGU0YTdjO1xuXG4kY29sb3JFcnJvcjogI2U4M2YyOTtcbiRjb2xvckljb25CdG46ICNhMGEwYTA7XG5cbiRjb2xvckJvcmRlcjogI2RhZGFkYTsgLy9kZWZhdWx0IGJvcmRlciBjb2xvclxuJGNvbG9yQm9yZGVyTGlnaHQ6ICNlM2UzZTM7XG4kY29sb3JGb3JtQm9yZGVyOiAkY29sb3JCb3JkZXI7XG4kY29sb3JGb3JtQm9yZGVySG92ZXI6I2JiYjtcbiRuZXdDb2xvckJvcmRlcjogIzk3OTc5NztcblxuLy8gYmFja2dyb3VuZHNcbi8vICRiYWNrZ3JvdW5kLWxpZ2h0LWdyYXk6ICNlOGU4ZTg7XG4kYmFja2dyb3VuZC1saWdodC1ncmF5OnRyYW5zcGFyZW50aXplKCRkYXJrR3JheSwuNSk7XG4kYmFja2dyb3VuZC1pbmRpYW4tcmVkOiB0cmFuc3BhcmVudGl6ZSgjZDI2NjY2LCAuNSk7IFxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gTWVkaWEgcXVlcnkgdmFyaWFibGVzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyogbWVkaWEgcXVlcmllcyAqL1xuJG1vYmlsZTogICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCknO1xuJHNtYWxsTW9iaWxlOlx0XHRcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpJztcbiRtZWRpdW1Nb2JpbGU6XHRcdFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCknO1xuJHRhYmxldDogICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCknO1xuJHRhYmxldFBvcnRyYWl0OiAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSc7XG4kdGFibGV0UG9ydHJhaXREb3duOiAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSc7XG4kdGFibGV0TGFuZHNjYXBlOiAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSc7XG4kc21hbGxEZXNrdG9wOiAgICAgICAgICAgICBcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSc7XG4kdGFibGV0TGFuZHNjYXBlRG93bjogXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCknO1xuJGRlc2t0b3A6ICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpJztcbiRub3RNb2JpbGU6ICAgICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpJztcbiRsYXB0b3A6ICAgICAgICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSc7XG4kbGFwdG9wRG93bjogICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCknO1xuJGxhcHRvcFRhYmxldDogICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCknO1xuJGxhcHRvcFRhYmxldExhbmRzY2FwZTogICAgICAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSc7XG4kbGFyZ2VEZXNrdG9wOiAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCknO1xuJGxhcmdlRGVza3RvcERvd246ICAgICAgICBcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1OTlweCknO1xuJHhsRGVza3RvcDogICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpJztcbiR4bERlc2t0b3BEb3duOiAgICAgICAgICAgXHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJztcbiR4eGxEZXNrdG9wOiAgICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCknO1xuJHh4eGxEZXNrdG9wOiAgICAgICAgICAgXHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpJztcbiRkZWtzdG9wRG93bkZvckNhbXBhaWduczpcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweCknO1xuXG4vKiBtZWRpYSBxdWVyaWVzIGZvciBoZWFkZXIgKi9cbiR0YWJsZXRGb3JIZWFkZXI6ICAgICAgICAgICAgICBcdCdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMjMwcHgpJztcbiR0YWJsZXRMYW5kc2NhcGVGb3JIZWFkZXI6ICAgICBcdCdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjMwcHgpJztcbiR0YWJsZXRMYW5kc2NhcGVEb3duRm9ySGVhZGVyOiBcdCdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzMHB4KSc7XG4kZGVza3RvcEZvckhlYWRlcjogICAgICAgICAgICAgXHQnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzFweCknO1xuJGxhcHRvcEZvckhlYWRlcjogICAgICAgICAgICAgIFx0J29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMxcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpJztcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIFNpemUgdmFyaWFibGVzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9kZWZhdWx0IHBhZGRpbmdzXG4kZ2FwTGFyZ2U6IDIwcHg7XG4kZ2FwRGVmYXVsdDogMTVweDtcblxuLy8gVG8gZG8gcmVuYW1lIHZhcmlhYmxlc1xuJGhlYWRlckhlaWdodDogNzVweDtcbiR0b29sYmFySGVpZ2h0OiA2NnB4O1xuJHN1YkhlYWRlckhlaWdodExhcHRvcDogNTVweDtcbiRtYXJrZXRSZXBvcnROYXZIZWlnaHRNb2JpbGU6IDY1cHg7XG4vLyBwYWdlVGl0bGUgZGl2IGhlaWdodHMgZGVwZW5kaW5nIG9uIGJyZWFrcG9pbnQgYW5kIHdoZXRoZXIgdGhlIGJhY2sgbGluayBpcyBzaG93biBvciBub3RcbiRwYWdlVGl0bGVIZWlnaHQ6IDcxcHg7XG4kcGFnZVRpdGxlSGVpZ2h0V2l0aEJhY2tMaW5rOiA5MXB4O1xuJHBhZ2VUaXRsZUhlaWdodFRhYmxldDogNTdweDtcbiRwYWdlVGl0bGVIZWlnaHRXaXRoQmFja0xpbmtUYWJsZXQ6IDc3cHg7XG4kcGFnZVRpdGxlSGVpZ2h0TW9iaWxlOiA0OXB4O1xuJHBhZ2VUaXRsZUhlaWdodFdpdGhCYWNrTGlua01vYmlsZTogNzlweDtcbiRsZWZ0U2lkZWJhcldpZHRoOiAyMjBweDtcbiRsZWZ0U2lkZWJhckluZGVudDogMzVweDtcbiRsZWZ0U2lkZWJhclRhYmxldEluZGVudDogMTBweDtcbiRwYWdlRGVmYXVsdEJvdHRvbVBhZGRpbmc6IDEwMHB4O1xuJGZvb3RlckhlaWdodDogNTVweDtcbiRmb290ZXJIZWlnaHRNb2JpbGU6IDQwcHg7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBUaW1lIHZhcmlhYmxlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qIGFuaW1hdGlvbiAqL1xuJHRyYW5zaXRpb25UaW1lOiAuMTVzO1xuIiwiQGltcG9ydCAgJ3V0aWxzJztcclxuXHJcblxyXG46aG9zdHtcclxuICBtYXJnaW46JGdhcExhcmdlIDAgMCAwO1xyXG4gIEBpbmNsdWRlIGRlZmF1bHRfZmxleF93aXRoX2NlbnRlcmVkX2l0ZW1zO1xyXG4gIG1hdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoJGNvbG9yOiAjZmZmZmZmLCAkYW1vdW50OiAuNSk7XHJcbiAgfVxyXG4gIEBtZWRpYSAjeyR0YWJsZXR9LCN7JGRlc2t0b3B9IHtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIEBpbmNsdWRlIGFsdF9jYXJkXHJcbiAgICB9XHJcbiAgfVxyXG4gIHRyYW5zaXRpb246IGFsbCAkdHJhbnNpdGlvblRpbWU7XHJcbiAgKiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb25UaW1lO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICN7JG1vYmlsZX0ge1xyXG4gICAgQGluY2x1ZGUgYWx0X2NhcmQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LWNhcmQtY29udGVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDEgMCAxMDAlO1xyXG4gIC5pbmRleHtcclxuICAgIGZvbnQtc2l6ZTo1cmVtIDtcclxuICB9ICBcclxuICBAbWVkaWEgI3skdGFibGV0fSwjeyRkZXNrdG9wfSB7XHJcbiAgICBtYXQtY2FyZC1zdWJ0aXRsZXtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG5cclxufSIsIkBtaXhpbiBkZWZhdWx0X2ZsZXhfd2l0aF9jZW50ZXJlZF9pdGVtc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBkZWZhdWx0X2NvbHVtbl9mbGV4X3dpdGhfY2VudGVyZWRfaXRlbXN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iLCJAbWl4aW4gYWx0X2NhcmR7XHJcbiAgbWF0LWNhcmR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQtY29udGVudHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICBtYXJnaW46LTNyZW0gMCAxcmVtIDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZGV4e1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1jYXJkLXN1YnRpdGxle1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3787:
/*!****************************************************************************!*\
  !*** ./projects/profile-detail-card/src/lib/profile-detail-card.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileDetailCardModule": () => (/* binding */ ProfileDetailCardModule)
/* harmony export */ });
/* harmony import */ var _profile_detail_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-detail-card.component */ 2956);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);

// material


let materialModules = [
    _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardModule,
];
class ProfileDetailCardModule {
}
ProfileDetailCardModule.ɵfac = function ProfileDetailCardModule_Factory(t) { return new (t || ProfileDetailCardModule)(); };
ProfileDetailCardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfileDetailCardModule });
ProfileDetailCardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            ...materialModules
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileDetailCardModule, { declarations: [_profile_detail_card_component__WEBPACK_IMPORTED_MODULE_0__.ProfileDetailCardComponent], imports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardModule], exports: [_profile_detail_card_component__WEBPACK_IMPORTED_MODULE_0__.ProfileDetailCardComponent] }); })();


/***/ }),

/***/ 8083:
/*!*****************************************************************************!*\
  !*** ./projects/profile-detail-card/src/lib/profile-detail-card.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileDetailCardService": () => (/* binding */ ProfileDetailCardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ProfileDetailCardService {
    constructor() { }
}
ProfileDetailCardService.ɵfac = function ProfileDetailCardService_Factory(t) { return new (t || ProfileDetailCardService)(); };
ProfileDetailCardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileDetailCardService, factory: ProfileDetailCardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6394:
/*!********************************************************!*\
  !*** ./projects/profile-detail-card/src/public-api.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileDetailCardComponent": () => (/* reexport safe */ _lib_profile_detail_card_component__WEBPACK_IMPORTED_MODULE_1__.ProfileDetailCardComponent),
/* harmony export */   "ProfileDetailCardModule": () => (/* reexport safe */ _lib_profile_detail_card_module__WEBPACK_IMPORTED_MODULE_2__.ProfileDetailCardModule),
/* harmony export */   "ProfileDetailCardService": () => (/* reexport safe */ _lib_profile_detail_card_service__WEBPACK_IMPORTED_MODULE_0__.ProfileDetailCardService)
/* harmony export */ });
/* harmony import */ var _lib_profile_detail_card_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/profile-detail-card.service */ 8083);
/* harmony import */ var _lib_profile_detail_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/profile-detail-card.component */ 2956);
/* harmony import */ var _lib_profile_detail_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/profile-detail-card.module */ 3787);
/*
 * Public API Surface of profile-detail-card
 */





/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_layout_threejs_background_threejs_background_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layout/threejs-background/threejs-background.component */ 9302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor() {
        this.title = 'angular-task';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["crx-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-threejs-background")(1, "router-outlet");
    } }, directives: [_core_layout_threejs_background_threejs_background_component__WEBPACK_IMPORTED_MODULE_0__.ThreejsBackgroundComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1740:
/*!***********************************!*\
  !*** ./src/app/app.interfaces.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetUserAPISuccessModel": () => (/* reexport safe */ _features_profile_interfaces__WEBPACK_IMPORTED_MODULE_1__.GetUserAPISuccessModel),
/* harmony export */   "LayoutState": () => (/* reexport safe */ _core_layout_interfaces__WEBPACK_IMPORTED_MODULE_2__.LayoutState),
/* harmony export */   "ProfileState": () => (/* reexport safe */ _features_profile_interfaces__WEBPACK_IMPORTED_MODULE_1__.ProfileState),
/* harmony export */   "UserProfile": () => (/* reexport safe */ _features_profile_interfaces__WEBPACK_IMPORTED_MODULE_1__.UserProfile)
/* harmony export */ });
/* harmony import */ var _core_routing_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/routing/interfaces */ 9707);
/* harmony import */ var _features_profile_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/profile/interfaces */ 7376);
/* harmony import */ var _core_layout_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/layout/interfaces */ 410);





/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/core.module */ 294);
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/features.module */ 5790);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _core_layout_threejs_background_threejs_background_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/layout/threejs-background/threejs-background.component */ 9302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);





// i18n





function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__.TranslateHttpLoader(http, 'content/i18n/');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule,
            _features_features_module__WEBPACK_IMPORTED_MODULE_2__.FeaturesModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forRoot({
                defaultLanguage: 'en',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _core_layout_threejs_background_threejs_background_component__WEBPACK_IMPORTED_MODULE_3__.ThreejsBackgroundComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule,
        _features_features_module__WEBPACK_IMPORTED_MODULE_2__.FeaturesModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule] }); })();


/***/ }),

/***/ 8693:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRoutes": () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _core_layout_page_not_found__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layout/page-not-found */ 5355);
/* harmony import */ var _features_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @features/home-page */ 9000);
/* harmony import */ var _features_profile_profile_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/profile/profile-detail */ 5225);
/* harmony import */ var _features_profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/profile/profile-list/profile-list.component */ 5173);
/* harmony import */ var _features_profile_profile_main_profile_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/profile/profile-main/profile-main.component */ 4884);





// I want to setup lazy loading however I'll avoid for convention sake
const appRoutes = [
    {
        component: _features_profile_profile_main_profile_main_component__WEBPACK_IMPORTED_MODULE_4__.ProfileMainComponent,
        path: 'profile',
        children: [
            {
                component: _features_profile_profile_detail__WEBPACK_IMPORTED_MODULE_2__.ProfileDetailComponent,
                data: { name: 'profileDetail' },
                path: ':id'
            },
            {
                component: _features_profile_profile_detail__WEBPACK_IMPORTED_MODULE_2__.ProfileDetailComponent,
                data: { name: 'profileDetail' },
                path: ''
            }
        ]
    },
    {
        component: _features_profile_profile_main_profile_main_component__WEBPACK_IMPORTED_MODULE_4__.ProfileMainComponent,
        path: 'profiles',
        children: [
            {
                component: _features_profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_3__.ProfileListComponent,
                data: { name: 'profileList' },
                path: ''
            },
        ]
    },
    {
        component: _core_layout_page_not_found__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent,
        data: { name: 'pageNotFound' },
        path: '404'
    },
    {
        component: _features_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent,
        data: { name: 'homePage' },
        path: ''
    },
    {
        data: { name: 'pageNotFound' },
        path: '**',
        redirectTo: '/404'
    }
];


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/store.module */ 6770);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.module */ 4122);
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-import-guard */ 7802);
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing/routing.module */ 3681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








class CoreModule {
    constructor(parentModule) {
        (0,_module_import_guard__WEBPACK_IMPORTED_MODULE_2__.moduleImportGuard)(parentModule, 'CoreModule');
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](CoreModule, 12)); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location,
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__.PathLocationStrategy },
        { provide: 'Window', useValue: window }
    ], imports: [[
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.LayoutModule,
            _store_store_module__WEBPACK_IMPORTED_MODULE_0__.AppStoreModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientJsonpModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__.LayoutModule,
            _routing_routing_module__WEBPACK_IMPORTED_MODULE_3__.RoutingModule
        ], _routing_routing_module__WEBPACK_IMPORTED_MODULE_3__.RoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.LayoutModule,
        _store_store_module__WEBPACK_IMPORTED_MODULE_0__.AppStoreModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientJsonpModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__.LayoutModule,
        _routing_routing_module__WEBPACK_IMPORTED_MODULE_3__.RoutingModule], exports: [_routing_routing_module__WEBPACK_IMPORTED_MODULE_3__.RoutingModule] }); })();


/***/ }),

/***/ 8537:
/*!************************************************************!*\
  !*** ./src/app/core/layout/app-logo/app-logo.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLogoComponent": () => (/* binding */ AppLogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class AppLogoComponent {
    constructor() {
        this.logoClick$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.logoUrl = '/content/img/CREXi-logo-black.svg';
        this.target = '_self';
    }
    ngOnInit() {
        this.hasHandler = this.logoClick$.observers.length > 0;
        if (this.white) {
            this.logoUrl = '/content/img/CREXi-logo-white.svg';
        }
        if (this.newTab) {
            this.target = '_blank';
        }
    }
    logoClick() {
        if (this.hasHandler) {
            this.logoClick$.emit();
            return false;
        }
    }
}
AppLogoComponent.ɵfac = function AppLogoComponent_Factory(t) { return new (t || AppLogoComponent)(); };
AppLogoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppLogoComponent, selectors: [["crx-app-logo"]], inputs: { newTab: "newTab", white: "white" }, outputs: { logoClick$: "logoClick$" }, decls: 2, vars: 2, consts: [["href", "/", "itemprop", "url", "itemscope", "itemscope", "itemtype", "http://schema.org/Corporation", 1, "logo", 3, "click"], ["alt", "CREXi - Commercial Real Estate Exchange Inc.", "itemprop", "image", 3, "src"]], template: function AppLogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppLogoComponent_Template_a_click_0_listener() { return ctx.logoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("target", ctx.target);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n.logo[_ngcontent-%COMP%] {\n  display: block;\n}\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.header[_nghost-%COMP%]   .logo[_ngcontent-%COMP%], .header   [_nghost-%COMP%]   .logo[_ngcontent-%COMP%], crx-market-reports-header[_nghost-%COMP%]   .logo[_ngcontent-%COMP%], crx-market-reports-header   [_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  flex: 0 0 auto;\n  width: 117px;\n}\n.header[_nghost-%COMP%]   .logo[_ngcontent-%COMP%], .header   [_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 100%;\n}\n@media only screen and (max-width: 1230px) {\n  .header[_nghost-%COMP%]   .logo[_ngcontent-%COMP%], .header   [_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.header[_nghost-%COMP%]   img[_ngcontent-%COMP%], .header   [_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 39px;\n}\n@media only screen and (max-width: 767px) {\n  .header[_nghost-%COMP%]   img[_ngcontent-%COMP%], .header   [_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 25px;\n  }\n}\ncrx-market-reports-header[_nghost-%COMP%]   .logo[_ngcontent-%COMP%], crx-market-reports-header   [_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: auto;\n}\ncrx-market-reports-header[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], crx-market-reports-header   [_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 39px;\n}\n@media only screen and (max-width: 991px) {\n  crx-market-reports-header[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], crx-market-reports-header   [_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 25px;\n  }\n}\n.welcome-page[_nghost-%COMP%]   img[_ngcontent-%COMP%], .welcome-page   [_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 55px;\n}\n@media only screen and (max-width: 767px) {\n  .welcome-page[_nghost-%COMP%]   img[_ngcontent-%COMP%], .welcome-page   [_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcbWl4aW5zXFxwb3NpdGlvbi5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHV0aWxzXFx2YXJpYWJsZXNcXGJvcmRlcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFxtZWRpYS1xdWVyaWVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcdXRpbHNcXHZhcmlhYmxlc1xcc2l6ZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFx0aW1lLnNjc3MiLCJhcHAtbG9nby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzsrQ0FBQTtBQ0FBOzsrQ0FBQTtBQ0FBOzsrQ0FBQTtBQUFBOzsrQ0FBQTtBQ0FBOzsrQ0FBQTtBQUlBLGtCQUFBO0FBd0JBLDZCQUFBO0FDNUJBOzsrQ0FBQTtBQ0FBOzsrQ0FBQTtBQUlBLGNBQUE7QUNGQTtFQUNJLHFCQUFBO0FBdUJKO0FBcEJBO0VBQ0ksY0FBQTtBQXVCSjtBQXBCQTtFQUNJLFdBQUE7QUF1Qko7QUFuQkk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFzQlI7QUFqQkk7RUFDSSxZQUFBO0FBb0JSO0FBbEJRO0VBSEo7SUFJUSx1QkFBQTtFQXFCVjtBQUNGO0FBbEJJO0VBQ0ksZ0JBQUE7QUFvQlI7QUFsQlE7RUFISjtJQUlRLGdCQUFBO0VBcUJWO0FBQ0Y7QUFoQkk7RUFDSSxXQUFBO0FBbUJSO0FBakJRO0VBQ0ksWUFBQTtBQW1CWjtBQWpCWTtFQUhKO0lBSVEsWUFBQTtFQW9CZDtBQUNGO0FBZEk7RUFDSSxnQkFBQTtBQWlCUjtBQWZRO0VBSEo7SUFJUSxnQkFBQTtFQWtCVjtBQUNGIiwiZmlsZSI6ImFwcC1sb2dvLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBQb3NpdGlvbiBtaXhpbnNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5AbWl4aW4gcG9zaXRpb24oJHBvc2l0aW9uOiBudWxsLCAkdG9wOiBudWxsLCAkcmlnaHQ6IG51bGwsICRib3R0b206IG51bGwsICRsZWZ0OiBudWxsKSB7XG4gICAgQGlmICRwb3NpdGlvbiAhPSBudWxsIHtcbiAgICAgICAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgICB9XG4gICAgQGlmICR0b3AgIT0gbnVsbCB7XG4gICAgICAgIHRvcDogJHRvcDtcbiAgICB9XG4gICAgQGlmICRyaWdodCAhPSBudWxsIHtcbiAgICAgICAgcmlnaHQ6ICRyaWdodDtcbiAgICB9XG4gICAgQGlmICRib3R0b20gIT0gbnVsbCB7XG4gICAgICAgIGJvdHRvbTogJGJvdHRvbTtcbiAgICB9XG4gICAgQGlmICRsZWZ0ICE9IG51bGwge1xuICAgICAgICBsZWZ0OiAkbGVmdDtcbiAgICB9XG59XG5cbkBtaXhpbiBhYnNvbHV0ZSgkdG9wOiBudWxsLCAkcmlnaHQ6IG51bGwsICRib3R0b206IG51bGwsICRsZWZ0OiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpO1xufVxuXG5AbWl4aW4gZml4ZWQoJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKGZpeGVkLCAkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KTtcbn1cblxuQG1peGluIHJlbGF0aXZlKCR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihyZWxhdGl2ZSwgJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCk7XG59XG5cbkBtaXhpbiBzdGF0aWMoJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKHN0YXRpYywgJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCk7XG59XG5cblxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQm9yZGVyIHZhcmlhYmxlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AaW1wb3J0ICdjb2xvcnMnO1xuXG4vL2JvcmRlcnNcbiRib3JkZXJMaWdodDogMXB4IHNvbGlkICRjb2xvckJvcmRlcjtcbiRib3JkZXJMaWdodEdyZXk6IDFweCBzb2xpZCAkbGlnaHRHcmF5O1xuJHJhZGl1czogMnB4O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29sb3JzIHZhcmlhYmxlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiRibHVlOiAjMmU4ZGRkOy8vYmx1ZSBkZSBmcmFuY2VcbiRncmVlbjogIzM5YjI3MzsgLy9tZWRpdW0gc2VlIGdyZWVuXG4kcmVkOiAjZDI2NjY2OyAvL2luZGlhbiByZWRcbiRvcmFuZ2U6ICNlNTljMjY7IC8vY2FtYm9nZSBvcmFuZ2VcblxuJGJsdWVIb3ZlcjogIzM4YTRmZjsvL2JsdWUgZGUgZnJhbmNlXG4kZ3JlZW5Ib3ZlcjogIzQ1ZDI4ODsgLy9tZWRpdW0gc2VlIGdyZWVuXG4kb3JhbmdlSG92ZXI6ICNmZmFmMmQ7IC8vY2FtYm9nZSBvcmFuZ2VcbiRyZWRIb3ZlcjogbGlnaHRlbigjZDI2NjY2LCAxMCUpOyAvL2luZGlhbiByZWRcblxuJGRhcmtHcmF5OiAjMzMzO1xuJG1lZGl1bUdyYXk6ICNjY2M7XG4kbGlnaHRHcmF5OiAjZjVmNWY1O1xuJHN0cmlwZUdyYXk6ICNmYWZhZmE7XG4kbGVmdFNpZGVNZW51R3JheTogIzRhNGE0YTtcbiRsaWdodEJsdWU6ICNlMWYxZmY7XG5cbiR0ZXh0RGFya0dyYXk6ICRkYXJrR3JheTtcbiR0ZXh0R3JheTogI2EyYTJhMjtcbiR0ZXh0UGFsZUdyYXk6ICMyNjI2MjY7XG4kdGV4dFNtYWxsR3JheTogIzgzODM4MztcbiR0ZXh0U2Vjb25kYXJ5R3JheTogIzliOWI5YjtcbiRkaXNhYmxlZC1ncmF5OiAjZDlkOWQ5O1xuJGRpc2FibGVkLWxpZ2h0LWdyYXk6ICNlNWU1ZTU7XG4kcGFuZWxHcmF5OiAjZjhmOGY4O1xuJGdyYXktNTA6ICM1ZjVmNWY7XG4kZ3JheUFsdDogI2Q4ZDhkODtcblxuJGRhcmstZ3JlZW46ICM0Yzg0N2M7XG4kbGlnaHQtZ3JlZW46ICM3OWJmYjY7XG5cbiRibGFjazogIzExMTtcbiRibGFja09yaWdpbmFsOiAjMDAwO1xuJHdoaXRlOiAjZmZmO1xuXG4kbGlua2VkLWluLWJsdWU6ICMwMDc3YjU7XG4kZ29vZ2xlLXBsdXM6ICNkZDRjMzk7XG4kZmFjZWJvb2stYmx1ZTogIzNiNTk5ODtcbiRkYXJrLWJsdWU6ICMwZTRhN2M7XG5cbiRjb2xvckVycm9yOiAjZTgzZjI5O1xuJGNvbG9ySWNvbkJ0bjogI2EwYTBhMDtcblxuJGNvbG9yQm9yZGVyOiAjZGFkYWRhOyAvL2RlZmF1bHQgYm9yZGVyIGNvbG9yXG4kY29sb3JCb3JkZXJMaWdodDogI2UzZTNlMztcbiRjb2xvckZvcm1Cb3JkZXI6ICRjb2xvckJvcmRlcjtcbiRjb2xvckZvcm1Cb3JkZXJIb3ZlcjojYmJiO1xuJG5ld0NvbG9yQm9yZGVyOiAjOTc5Nzk3O1xuXG4vLyBiYWNrZ3JvdW5kc1xuLy8gJGJhY2tncm91bmQtbGlnaHQtZ3JheTogI2U4ZThlODtcbiRiYWNrZ3JvdW5kLWxpZ2h0LWdyYXk6dHJhbnNwYXJlbnRpemUoJGRhcmtHcmF5LC41KTtcbiRiYWNrZ3JvdW5kLWluZGlhbi1yZWQ6IHRyYW5zcGFyZW50aXplKCNkMjY2NjYsIC41KTsgXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBNZWRpYSBxdWVyeSB2YXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKiBtZWRpYSBxdWVyaWVzICovXG4kbW9iaWxlOiAgICAgICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSc7XG4kc21hbGxNb2JpbGU6XHRcdFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCknO1xuJG1lZGl1bU1vYmlsZTpcdFx0XHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NHB4KSc7XG4kdGFibGV0OiAgICAgICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSc7XG4kdGFibGV0UG9ydHJhaXQ6ICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpJztcbiR0YWJsZXRQb3J0cmFpdERvd246ICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpJztcbiR0YWJsZXRMYW5kc2NhcGU6ICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpJztcbiRzbWFsbERlc2t0b3A6ICAgICAgICAgICAgIFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpJztcbiR0YWJsZXRMYW5kc2NhcGVEb3duOiBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSc7XG4kZGVza3RvcDogICAgICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCknO1xuJG5vdE1vYmlsZTogICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCknO1xuJGxhcHRvcDogICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpJztcbiRsYXB0b3BEb3duOiAgICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSc7XG4kbGFwdG9wVGFibGV0OiAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSc7XG4kbGFwdG9wVGFibGV0TGFuZHNjYXBlOiAgICAgICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpJztcbiRsYXJnZURlc2t0b3A6ICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MXB4KSc7XG4kbGFyZ2VEZXNrdG9wRG93bjogICAgICAgIFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU5OXB4KSc7XG4keGxEZXNrdG9wOiAgICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCknO1xuJHhsRGVza3RvcERvd246ICAgICAgICAgICBcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCknO1xuJHh4bERlc2t0b3A6ICAgICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSc7XG4keHh4bERlc2t0b3A6ICAgICAgICAgICBcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCknO1xuJGRla3N0b3BEb3duRm9yQ2FtcGFpZ25zOlx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSc7XG5cbi8qIG1lZGlhIHF1ZXJpZXMgZm9yIGhlYWRlciAqL1xuJHRhYmxldEZvckhlYWRlcjogICAgICAgICAgICAgIFx0J29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEyMzBweCknO1xuJHRhYmxldExhbmRzY2FwZUZvckhlYWRlcjogICAgIFx0J29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMzBweCknO1xuJHRhYmxldExhbmRzY2FwZURvd25Gb3JIZWFkZXI6IFx0J29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjMwcHgpJztcbiRkZXNrdG9wRm9ySGVhZGVyOiAgICAgICAgICAgICBcdCdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIzMXB4KSc7XG4kbGFwdG9wRm9ySGVhZGVyOiAgICAgICAgICAgICAgXHQnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzFweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCknO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gU2l6ZSB2YXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vL2RlZmF1bHQgcGFkZGluZ3NcbiRnYXBMYXJnZTogMjBweDtcbiRnYXBEZWZhdWx0OiAxNXB4O1xuXG4vLyBUbyBkbyByZW5hbWUgdmFyaWFibGVzXG4kaGVhZGVySGVpZ2h0OiA3NXB4O1xuJHRvb2xiYXJIZWlnaHQ6IDY2cHg7XG4kc3ViSGVhZGVySGVpZ2h0TGFwdG9wOiA1NXB4O1xuJG1hcmtldFJlcG9ydE5hdkhlaWdodE1vYmlsZTogNjVweDtcbi8vIHBhZ2VUaXRsZSBkaXYgaGVpZ2h0cyBkZXBlbmRpbmcgb24gYnJlYWtwb2ludCBhbmQgd2hldGhlciB0aGUgYmFjayBsaW5rIGlzIHNob3duIG9yIG5vdFxuJHBhZ2VUaXRsZUhlaWdodDogNzFweDtcbiRwYWdlVGl0bGVIZWlnaHRXaXRoQmFja0xpbms6IDkxcHg7XG4kcGFnZVRpdGxlSGVpZ2h0VGFibGV0OiA1N3B4O1xuJHBhZ2VUaXRsZUhlaWdodFdpdGhCYWNrTGlua1RhYmxldDogNzdweDtcbiRwYWdlVGl0bGVIZWlnaHRNb2JpbGU6IDQ5cHg7XG4kcGFnZVRpdGxlSGVpZ2h0V2l0aEJhY2tMaW5rTW9iaWxlOiA3OXB4O1xuJGxlZnRTaWRlYmFyV2lkdGg6IDIyMHB4O1xuJGxlZnRTaWRlYmFySW5kZW50OiAzNXB4O1xuJGxlZnRTaWRlYmFyVGFibGV0SW5kZW50OiAxMHB4O1xuJHBhZ2VEZWZhdWx0Qm90dG9tUGFkZGluZzogMTAwcHg7XG4kZm9vdGVySGVpZ2h0OiA1NXB4O1xuJGZvb3RlckhlaWdodE1vYmlsZTogNDBweDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIFRpbWUgdmFyaWFibGVzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyogYW5pbWF0aW9uICovXG4kdHJhbnNpdGlvblRpbWU6IC4xNXM7XG4iLCJAaW1wb3J0ICd1dGlscyc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5sb2dvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3QtY29udGV4dCguaGVhZGVyLCBjcngtbWFya2V0LXJlcG9ydHMtaGVhZGVyKSB7XG4gICAgLmxvZ28ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICB3aWR0aDogMTE3cHg7XG4gICAgfVxufVxuXG46aG9zdC1jb250ZXh0KC5oZWFkZXIpIHtcbiAgICAubG9nbyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICBAbWVkaWEgI3skdGFibGV0TGFuZHNjYXBlRG93bkZvckhlYWRlcn0ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBtYXgtaGVpZ2h0OiAzOXB4O1xuXG4gICAgICAgIEBtZWRpYSAjeyRtb2JpbGV9IHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjpob3N0LWNvbnRleHQoY3J4LW1hcmtldC1yZXBvcnRzLWhlYWRlcikge1xuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMzlweDtcblxuICAgICAgICAgICAgQG1lZGlhICN7JHRhYmxldFBvcnRyYWl0RG93bn0ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuOmhvc3QtY29udGV4dCgud2VsY29tZS1wYWdlKSB7XG4gICAgaW1nIHtcbiAgICAgICAgbWF4LWhlaWdodDogNTVweDtcblxuICAgICAgICBAbWVkaWEgI3skbW9iaWxlfSB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 1850:
/*!***********************************************!*\
  !*** ./src/app/core/layout/app-logo/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLogoComponent": () => (/* reexport safe */ _app_logo_component__WEBPACK_IMPORTED_MODULE_0__.AppLogoComponent)
/* harmony export */ });
/* harmony import */ var _app_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-logo.component */ 8537);



/***/ }),

/***/ 7930:
/*!********************************************************!*\
  !*** ./src/app/core/layout/footer/footer.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




class FooterComponent {
    constructor() {
        this.date = new Date();
        this.facebookUri = '//www.facebook.com/CREXinc/';
        this.gramUri = '//www.instagram.com/crexi_cre/';
        this.linkedInUri = '//www.linkedin.com/company/commercial-real-estate-exchange-inc-/';
        this.twitterUri = '//twitter.com/CREXinc';
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["crx-footer"]], decls: 35, vars: 17, consts: [[1, "footer"], [1, "footer-nav"], ["routerLink", "/"], ["routerLink", "/profiles"], ["routerLink", "/profile"], ["itemscope", "itemscope", "itemtype", "https://schema.org/Organization", 1, "social"], ["itemprop", "sameAs", 3, "href"], [1, "fab", "fa-linkedin"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "spacer"], [1, "footer-bottom"], [1, "copyright"], [1, "links"], ["routerLink", "#"], ["href", "https://www.crexi.com/web/site-map/", "target", "_self"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "div", 13)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u00A0All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14)(29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Site Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, "homePage.pageTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, "homePage.viewUserProfiles"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, "homePage.viewRandomProfile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.linkedInUri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.facebookUri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.twitterUri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.gramUri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 14, ctx.date, "yyyy"), " Commercial Real Estate Exchange, Inc.");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background: #fff;\n}\n.spacer[_ngcontent-%COMP%] {\n  display: none;\n}\n.footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #dadada;\n}\n.footer[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 17px;\n  display: flex;\n  justify-content: space-evenly;\n  flex-flow: row wrap;\n  margin: 10px 25px 27px;\n}\n.footer[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  margin: 0 15px 15px 0;\n  white-space: nowrap;\n  font-weight: normal;\n}\n.footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 8px 0 27px;\n  font-size: 27px;\n  width: 100%;\n}\n.footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  vertical-align: middle;\n  display: inline-block;\n}\n.footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .fa-facebook-f[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n.footer[_ngcontent-%COMP%]   .trustpilot[_ngcontent-%COMP%] {\n  border-top: 1px solid #dadada;\n  padding: 8px 0 4px;\n  width: 100%;\n  text-align: center;\n}\n.footer[_ngcontent-%COMP%]   .trustpilot[_ngcontent-%COMP%]   crx-trustpilot[_ngcontent-%COMP%] {\n  max-width: 250px;\n  display: inline-block;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  color: #333;\n  background: #f5f5f5;\n  font-size: 14px;\n  line-height: 1.29;\n  padding: 24px 40px 48px;\n  letter-spacing: -0.5px;\n  text-align: center;\n}\n.footer-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: inherit;\n  text-decoration: none;\n}\n.footer-bottom[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.footer-bottom[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.footer-bottom[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.footer-bottom[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.footer-bottom[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n@media only screen and (min-width: 768px) {\n  .footer[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  }\n  .footer[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 16px 55px 16px 15px;\n    justify-content: space-between;\n    flex-grow: 1;\n  }\n  .footer[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n  }\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n    width: auto;\n    margin: 11px 0 5px;\n  }\n  .footer[_ngcontent-%COMP%]   .trustpilot[_ngcontent-%COMP%] {\n    padding: 19px 0 15px;\n  }\n\n  .footer-bottom[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 15px 10px;\n    justify-content: space-between;\n    letter-spacing: -0.4px;\n  }\n  .footer-bottom[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .footer-bottom[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .footer-bottom[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 0 12px;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  .footer[_ngcontent-%COMP%] {\n    padding: 40px 35px 34px;\n  }\n  .footer[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%] {\n    margin: 0;\n    flex-grow: 0;\n  }\n  .footer[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 76px;\n  }\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 20px;\n  }\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 0 9px 0 0;\n  }\n  .footer[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n    display: block;\n    flex-grow: 1;\n  }\n  .footer[_ngcontent-%COMP%]   .trustpilot[_ngcontent-%COMP%] {\n    width: auto;\n    border: 0;\n    padding: 0;\n    margin: -3px 0;\n  }\n\n  .footer-bottom[_ngcontent-%COMP%] {\n    padding: 15px 33px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcbWl4aW5zXFxwb3NpdGlvbi5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHV0aWxzXFx2YXJpYWJsZXNcXGJvcmRlcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFxtZWRpYS1xdWVyaWVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcdXRpbHNcXHZhcmlhYmxlc1xcc2l6ZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFx0aW1lLnNjc3MiLCJmb290ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7K0NBQUE7QUNBQTs7K0NBQUE7QUNBQTs7K0NBQUE7QUFBQTs7K0NBQUE7QUNBQTs7K0NBQUE7QUFJQSxrQkFBQTtBQXdCQSw2QkFBQTtBQzVCQTs7K0NBQUE7QUNBQTs7K0NBQUE7QUFJQSxjQUFBO0FDRkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCSjhCSTtBSVBSO0FBcEJBO0VBQ0ksYUFBQTtBQXVCSjtBQXBCQTtFQUNJLDZCQUFBO0FBdUJKO0FBckJJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBdUJSO0FBckJRO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXVCWjtBQW5CSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFxQlI7QUFuQlE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQXFCWjtBQWxCUTtFQUNJLGdCQUFBO0FBb0JaO0FBaEJJO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWtCUjtBQWhCUTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUFrQlo7QUFiQTtFQUNJLFdBQUE7RUFDQSxtQkpsRFE7RUltRFIsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBZ0JKO0FBZEk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFnQlI7QUFiSTtFQUNJLGNBQUE7QUFlUjtBQWRRO0VBQ0ksY0FBQTtBQWdCWjtBQWRRO0VBQ0ksZUFBQTtBQWdCWjtBQVpJO0VBQ0ksbUJBQUE7QUFjUjtBQVpRO0VBQ0ksY0FBQTtBQWNaO0FBVEE7RUFDSTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtJQUNBLGVBQUE7RUFZTjtFQVZNO0lBQ0ksYUFBQTtJQUNBLDJCQUFBO0lBQ0EsOEJBQUE7SUFDQSxZQUFBO0VBWVY7RUFWVTtJQUNJLDBCQUFBO0VBWWQ7RUFSTTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFQVVWO0VBUE07SUFDSSxvQkFBQTtFQVNWOztFQUxFO0lBQ0ksYUFBQTtJQUNBLGtCQUFBO0lBQ0EsOEJBQUE7SUFDQSxzQkFBQTtFQVFOO0VBTk07SUFDSSxTQUFBO0VBUVY7RUFQVTtJQUNJLGVBQUE7RUFTZDtFQUpVO0lBQ0ksY0FBQTtFQU1kO0FBQ0Y7QUFEQTtFQUNJO0lBQ0ksdUJBQUE7RUFHTjtFQURNO0lBQ0ksU0FBQTtJQUNBLFlBQUE7RUFHVjtFQURVO0lBQ0ksa0JBQUE7RUFHZDtFQUNNO0lBQ0ksU0FBQTtJQUNBLGVBQUE7RUFDVjtFQUNVO0lBQ0ksaUJBQUE7RUFDZDtFQUdNO0lBQ0ksY0FBQTtJQUNBLFlBQUE7RUFEVjtFQUlNO0lBQ0ksV0FBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFQUZWOztFQU1FO0lBQ0ksa0JBQUE7RUFITjtBQUNGIiwiZmlsZSI6ImZvb3Rlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gUG9zaXRpb24gbWl4aW5zXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuQG1peGluIHBvc2l0aW9uKCRwb3NpdGlvbjogbnVsbCwgJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xuICAgIEBpZiAkcG9zaXRpb24gIT0gbnVsbCB7XG4gICAgICAgIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gICAgfVxuICAgIEBpZiAkdG9wICE9IG51bGwge1xuICAgICAgICB0b3A6ICR0b3A7XG4gICAgfVxuICAgIEBpZiAkcmlnaHQgIT0gbnVsbCB7XG4gICAgICAgIHJpZ2h0OiAkcmlnaHQ7XG4gICAgfVxuICAgIEBpZiAkYm90dG9tICE9IG51bGwge1xuICAgICAgICBib3R0b206ICRib3R0b207XG4gICAgfVxuICAgIEBpZiAkbGVmdCAhPSBudWxsIHtcbiAgICAgICAgbGVmdDogJGxlZnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gYWJzb2x1dGUoJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLCAkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KTtcbn1cblxuQG1peGluIGZpeGVkKCR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihmaXhlZCwgJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCk7XG59XG5cbkBtaXhpbiByZWxhdGl2ZSgkdG9wOiBudWxsLCAkcmlnaHQ6IG51bGwsICRib3R0b206IG51bGwsICRsZWZ0OiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24ocmVsYXRpdmUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpO1xufVxuXG5AbWl4aW4gc3RhdGljKCR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihzdGF0aWMsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpO1xufVxuXG5cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIEJvcmRlciB2YXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQGltcG9ydCAnY29sb3JzJztcblxuLy9ib3JkZXJzXG4kYm9yZGVyTGlnaHQ6IDFweCBzb2xpZCAkY29sb3JCb3JkZXI7XG4kYm9yZGVyTGlnaHRHcmV5OiAxcHggc29saWQgJGxpZ2h0R3JheTtcbiRyYWRpdXM6IDJweDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvbG9ycyB2YXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4kYmx1ZTogIzJlOGRkZDsvL2JsdWUgZGUgZnJhbmNlXG4kZ3JlZW46ICMzOWIyNzM7IC8vbWVkaXVtIHNlZSBncmVlblxuJHJlZDogI2QyNjY2NjsgLy9pbmRpYW4gcmVkXG4kb3JhbmdlOiAjZTU5YzI2OyAvL2NhbWJvZ2Ugb3JhbmdlXG5cbiRibHVlSG92ZXI6ICMzOGE0ZmY7Ly9ibHVlIGRlIGZyYW5jZVxuJGdyZWVuSG92ZXI6ICM0NWQyODg7IC8vbWVkaXVtIHNlZSBncmVlblxuJG9yYW5nZUhvdmVyOiAjZmZhZjJkOyAvL2NhbWJvZ2Ugb3JhbmdlXG4kcmVkSG92ZXI6IGxpZ2h0ZW4oI2QyNjY2NiwgMTAlKTsgLy9pbmRpYW4gcmVkXG5cbiRkYXJrR3JheTogIzMzMztcbiRtZWRpdW1HcmF5OiAjY2NjO1xuJGxpZ2h0R3JheTogI2Y1ZjVmNTtcbiRzdHJpcGVHcmF5OiAjZmFmYWZhO1xuJGxlZnRTaWRlTWVudUdyYXk6ICM0YTRhNGE7XG4kbGlnaHRCbHVlOiAjZTFmMWZmO1xuXG4kdGV4dERhcmtHcmF5OiAkZGFya0dyYXk7XG4kdGV4dEdyYXk6ICNhMmEyYTI7XG4kdGV4dFBhbGVHcmF5OiAjMjYyNjI2O1xuJHRleHRTbWFsbEdyYXk6ICM4MzgzODM7XG4kdGV4dFNlY29uZGFyeUdyYXk6ICM5YjliOWI7XG4kZGlzYWJsZWQtZ3JheTogI2Q5ZDlkOTtcbiRkaXNhYmxlZC1saWdodC1ncmF5OiAjZTVlNWU1O1xuJHBhbmVsR3JheTogI2Y4ZjhmODtcbiRncmF5LTUwOiAjNWY1ZjVmO1xuJGdyYXlBbHQ6ICNkOGQ4ZDg7XG5cbiRkYXJrLWdyZWVuOiAjNGM4NDdjO1xuJGxpZ2h0LWdyZWVuOiAjNzliZmI2O1xuXG4kYmxhY2s6ICMxMTE7XG4kYmxhY2tPcmlnaW5hbDogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcblxuJGxpbmtlZC1pbi1ibHVlOiAjMDA3N2I1O1xuJGdvb2dsZS1wbHVzOiAjZGQ0YzM5O1xuJGZhY2Vib29rLWJsdWU6ICMzYjU5OTg7XG4kZGFyay1ibHVlOiAjMGU0YTdjO1xuXG4kY29sb3JFcnJvcjogI2U4M2YyOTtcbiRjb2xvckljb25CdG46ICNhMGEwYTA7XG5cbiRjb2xvckJvcmRlcjogI2RhZGFkYTsgLy9kZWZhdWx0IGJvcmRlciBjb2xvclxuJGNvbG9yQm9yZGVyTGlnaHQ6ICNlM2UzZTM7XG4kY29sb3JGb3JtQm9yZGVyOiAkY29sb3JCb3JkZXI7XG4kY29sb3JGb3JtQm9yZGVySG92ZXI6I2JiYjtcbiRuZXdDb2xvckJvcmRlcjogIzk3OTc5NztcblxuLy8gYmFja2dyb3VuZHNcbi8vICRiYWNrZ3JvdW5kLWxpZ2h0LWdyYXk6ICNlOGU4ZTg7XG4kYmFja2dyb3VuZC1saWdodC1ncmF5OnRyYW5zcGFyZW50aXplKCRkYXJrR3JheSwuNSk7XG4kYmFja2dyb3VuZC1pbmRpYW4tcmVkOiB0cmFuc3BhcmVudGl6ZSgjZDI2NjY2LCAuNSk7IFxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gTWVkaWEgcXVlcnkgdmFyaWFibGVzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyogbWVkaWEgcXVlcmllcyAqL1xuJG1vYmlsZTogICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCknO1xuJHNtYWxsTW9iaWxlOlx0XHRcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpJztcbiRtZWRpdW1Nb2JpbGU6XHRcdFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCknO1xuJHRhYmxldDogICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCknO1xuJHRhYmxldFBvcnRyYWl0OiAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSc7XG4kdGFibGV0UG9ydHJhaXREb3duOiAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSc7XG4kdGFibGV0TGFuZHNjYXBlOiAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSc7XG4kc21hbGxEZXNrdG9wOiAgICAgICAgICAgICBcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSc7XG4kdGFibGV0TGFuZHNjYXBlRG93bjogXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCknO1xuJGRlc2t0b3A6ICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpJztcbiRub3RNb2JpbGU6ICAgICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpJztcbiRsYXB0b3A6ICAgICAgICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSc7XG4kbGFwdG9wRG93bjogICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCknO1xuJGxhcHRvcFRhYmxldDogICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCknO1xuJGxhcHRvcFRhYmxldExhbmRzY2FwZTogICAgICAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSc7XG4kbGFyZ2VEZXNrdG9wOiAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCknO1xuJGxhcmdlRGVza3RvcERvd246ICAgICAgICBcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1OTlweCknO1xuJHhsRGVza3RvcDogICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpJztcbiR4bERlc2t0b3BEb3duOiAgICAgICAgICAgXHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJztcbiR4eGxEZXNrdG9wOiAgICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCknO1xuJHh4eGxEZXNrdG9wOiAgICAgICAgICAgXHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpJztcbiRkZWtzdG9wRG93bkZvckNhbXBhaWduczpcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweCknO1xuXG4vKiBtZWRpYSBxdWVyaWVzIGZvciBoZWFkZXIgKi9cbiR0YWJsZXRGb3JIZWFkZXI6ICAgICAgICAgICAgICBcdCdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMjMwcHgpJztcbiR0YWJsZXRMYW5kc2NhcGVGb3JIZWFkZXI6ICAgICBcdCdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjMwcHgpJztcbiR0YWJsZXRMYW5kc2NhcGVEb3duRm9ySGVhZGVyOiBcdCdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzMHB4KSc7XG4kZGVza3RvcEZvckhlYWRlcjogICAgICAgICAgICAgXHQnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzFweCknO1xuJGxhcHRvcEZvckhlYWRlcjogICAgICAgICAgICAgIFx0J29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMxcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpJztcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIFNpemUgdmFyaWFibGVzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9kZWZhdWx0IHBhZGRpbmdzXG4kZ2FwTGFyZ2U6IDIwcHg7XG4kZ2FwRGVmYXVsdDogMTVweDtcblxuLy8gVG8gZG8gcmVuYW1lIHZhcmlhYmxlc1xuJGhlYWRlckhlaWdodDogNzVweDtcbiR0b29sYmFySGVpZ2h0OiA2NnB4O1xuJHN1YkhlYWRlckhlaWdodExhcHRvcDogNTVweDtcbiRtYXJrZXRSZXBvcnROYXZIZWlnaHRNb2JpbGU6IDY1cHg7XG4vLyBwYWdlVGl0bGUgZGl2IGhlaWdodHMgZGVwZW5kaW5nIG9uIGJyZWFrcG9pbnQgYW5kIHdoZXRoZXIgdGhlIGJhY2sgbGluayBpcyBzaG93biBvciBub3RcbiRwYWdlVGl0bGVIZWlnaHQ6IDcxcHg7XG4kcGFnZVRpdGxlSGVpZ2h0V2l0aEJhY2tMaW5rOiA5MXB4O1xuJHBhZ2VUaXRsZUhlaWdodFRhYmxldDogNTdweDtcbiRwYWdlVGl0bGVIZWlnaHRXaXRoQmFja0xpbmtUYWJsZXQ6IDc3cHg7XG4kcGFnZVRpdGxlSGVpZ2h0TW9iaWxlOiA0OXB4O1xuJHBhZ2VUaXRsZUhlaWdodFdpdGhCYWNrTGlua01vYmlsZTogNzlweDtcbiRsZWZ0U2lkZWJhcldpZHRoOiAyMjBweDtcbiRsZWZ0U2lkZWJhckluZGVudDogMzVweDtcbiRsZWZ0U2lkZWJhclRhYmxldEluZGVudDogMTBweDtcbiRwYWdlRGVmYXVsdEJvdHRvbVBhZGRpbmc6IDEwMHB4O1xuJGZvb3RlckhlaWdodDogNTVweDtcbiRmb290ZXJIZWlnaHRNb2JpbGU6IDQwcHg7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBUaW1lIHZhcmlhYmxlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qIGFuaW1hdGlvbiAqL1xuJHRyYW5zaXRpb25UaW1lOiAuMTVzO1xuIiwiQGltcG9ydCAndXRpbHMnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG59XG5cbi5zcGFjZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkY29sb3JCb3JkZXI7XG5cbiAgICAuZm9vdGVyLW5hdiB7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBmbGV4LWZsb3c6cm93IHdyYXAgO1xuICAgICAgICBtYXJnaW46IDEwcHggMjVweCAyN3B4O1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgJGdhcERlZmF1bHQgJGdhcERlZmF1bHQgMDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNvY2lhbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDhweCAwIDI3cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuZmEtZmFjZWJvb2stZiB7XG4gICAgICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudHJ1c3RwaWxvdCB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkY29sb3JCb3JkZXI7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwIDRweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBjcngtdHJ1c3RwaWxvdCB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9vdGVyLWJvdHRvbSB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYmFja2dyb3VuZDogJGxpZ2h0R3JheTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjk7XG4gICAgcGFkZGluZzogMjRweCA0MHB4IDQ4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBhLCBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG5cbiAgICAubGlua3MgYSB7XG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgI3skbm90TW9iaWxlfSB7XG4gICAgLmZvb3RlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIC5mb290ZXItbmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHggNTVweCAxNnB4IDE1cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNvY2lhbCB7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbjogMTFweCAwIDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50cnVzdHBpbG90IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE5cHggMCAxNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvb3Rlci1ib3R0b20ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcblxuICAgICAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhICN7JGRlc2t0b3B9IHtcbiAgICAuZm9vdGVyIHtcbiAgICAgICAgcGFkZGluZzogNDBweCAzNXB4IDM0cHg7XG5cbiAgICAgICAgLmZvb3Rlci1uYXYge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDc2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc29jaWFsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDlweCAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc3BhY2VyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRydXN0cGlsb3Qge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAtM3B4IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyLWJvdHRvbSB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMzNweDtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 5686:
/*!*********************************************!*\
  !*** ./src/app/core/layout/footer/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* reexport safe */ _footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent)
/* harmony export */ });
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ 7930);



/***/ }),

/***/ 3261:
/*!********************************************************!*\
  !*** ./src/app/core/layout/header/header.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _app_logo_app_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-logo/app-logo.component */ 8537);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 8133);









function HeaderComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_button_7_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const button_r2 = restoredCtx.$implicit; return button_r2.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, button_r2.label), " ");
} }
function HeaderComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_mat_option_13_Template_mat_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const button_r5 = restoredCtx.$implicit; return button_r5.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "button.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, button_r5.label), " ");
} }
class HeaderComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.pageTitle = '';
        this.i18nButtons = Array(3)
            .fill(null)
            .map((nullVal, index0) => {
            return {
                label: "page.i18nButtons." + index0,
                click: () => {
                    this.translateService.use(["en", "es", "de"][index0]);
                }
            };
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["crx-header"]], inputs: { pageTitle: "pageTitle" }, decls: 14, vars: 8, consts: [[1, "title"], [1, "logo"], ["routerLink", "/"], [1, "i18nButtons"], ["mat-raised-button", "", 3, "click", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "mobileI18nOptions"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click"], [3, "value", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "crx-app-logo", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_button_7_Template, 3, 3, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 5)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HeaderComponent_mat_option_13_Template, 4, 6, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, ctx.pageTitle));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.i18nButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 6, "page.selectLanguage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.i18nButtons);
    } }, directives: [_app_logo_app_logo_component__WEBPACK_IMPORTED_MODULE_0__.AppLogoComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  top: 0;\n  height: 75px;\n  min-width: 320px;\n  background-color: #fff;\n  width: 100%;\n  padding: 0 12px 0 28px;\n  display: flex;\n  flex-wrap: nowrap;\n  border-bottom: 1px solid #d8d8d8;\n  align-items: center;\n  color: #333;\n  flex-direction: row;\n  justify-content: center;\n}\n.title[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  left: 50%;\n  margin: 0;\n  top: 50%;\n  width: 100%;\n  max-width: 70rem;\n  justify-content: space-evenly;\n}\n.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 1;\n  margin: 0 0 0 20px;\n  min-width: 110px;\n  transform: translateY(-1px);\n}\n.i18nButtons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 15px 0 0;\n}\n.mobileI18nOptions[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 991px) {\n  [_nghost-%COMP%] {\n    justify-content: space-between;\n    padding: 0 10px;\n  }\n\n  .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcbWl4aW5zXFxwb3NpdGlvbi5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHV0aWxzXFx2YXJpYWJsZXNcXGJvcmRlcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFxtZWRpYS1xdWVyaWVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcdXRpbHNcXHZhcmlhYmxlc1xcc2l6ZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFx0aW1lLnNjc3MiLCJoZWFkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7K0NBQUE7QUNBQTs7K0NBQUE7QUNBQTs7K0NBQUE7QUFBQTs7K0NBQUE7QUNBQTs7K0NBQUE7QUFJQSxrQkFBQTtBQXdCQSw2QkFBQTtBQzVCQTs7K0NBQUE7QUNBQTs7K0NBQUE7QUFJQSxjQUFBO0FDRkE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlGSVc7RUVIWCxnQkFBQTtFQUNBLHNCSjhCSTtFSTdCSixXQUFBO0VBRUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0pETztFSUVQLG1CQUFBO0VBQ0EsdUJBQUE7QUFzQko7QUFqQkE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBb0JKO0FBakJJO0VBQ0ksV0pyQkc7RUlzQkgsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQW1CUjtBQWRJO0VBQ0ksa0JBQUE7QUFpQlI7QUFiQTtFQUNJLGFBQUE7QUFnQko7QUFiQTtFQUNJO0lBQ0ksOEJBQUE7SUFDQSxlQUFBO0VBZ0JOOztFQVZNO0lBQ0ksZUFBQTtFQWFWO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBQb3NpdGlvbiBtaXhpbnNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5AbWl4aW4gcG9zaXRpb24oJHBvc2l0aW9uOiBudWxsLCAkdG9wOiBudWxsLCAkcmlnaHQ6IG51bGwsICRib3R0b206IG51bGwsICRsZWZ0OiBudWxsKSB7XG4gICAgQGlmICRwb3NpdGlvbiAhPSBudWxsIHtcbiAgICAgICAgcG9zaXRpb246ICRwb3NpdGlvbjtcbiAgICB9XG4gICAgQGlmICR0b3AgIT0gbnVsbCB7XG4gICAgICAgIHRvcDogJHRvcDtcbiAgICB9XG4gICAgQGlmICRyaWdodCAhPSBudWxsIHtcbiAgICAgICAgcmlnaHQ6ICRyaWdodDtcbiAgICB9XG4gICAgQGlmICRib3R0b20gIT0gbnVsbCB7XG4gICAgICAgIGJvdHRvbTogJGJvdHRvbTtcbiAgICB9XG4gICAgQGlmICRsZWZ0ICE9IG51bGwge1xuICAgICAgICBsZWZ0OiAkbGVmdDtcbiAgICB9XG59XG5cbkBtaXhpbiBhYnNvbHV0ZSgkdG9wOiBudWxsLCAkcmlnaHQ6IG51bGwsICRib3R0b206IG51bGwsICRsZWZ0OiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpO1xufVxuXG5AbWl4aW4gZml4ZWQoJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKGZpeGVkLCAkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KTtcbn1cblxuQG1peGluIHJlbGF0aXZlKCR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihyZWxhdGl2ZSwgJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCk7XG59XG5cbkBtaXhpbiBzdGF0aWMoJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKHN0YXRpYywgJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCk7XG59XG5cblxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQm9yZGVyIHZhcmlhYmxlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AaW1wb3J0ICdjb2xvcnMnO1xuXG4vL2JvcmRlcnNcbiRib3JkZXJMaWdodDogMXB4IHNvbGlkICRjb2xvckJvcmRlcjtcbiRib3JkZXJMaWdodEdyZXk6IDFweCBzb2xpZCAkbGlnaHRHcmF5O1xuJHJhZGl1czogMnB4O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29sb3JzIHZhcmlhYmxlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiRibHVlOiAjMmU4ZGRkOy8vYmx1ZSBkZSBmcmFuY2VcbiRncmVlbjogIzM5YjI3MzsgLy9tZWRpdW0gc2VlIGdyZWVuXG4kcmVkOiAjZDI2NjY2OyAvL2luZGlhbiByZWRcbiRvcmFuZ2U6ICNlNTljMjY7IC8vY2FtYm9nZSBvcmFuZ2VcblxuJGJsdWVIb3ZlcjogIzM4YTRmZjsvL2JsdWUgZGUgZnJhbmNlXG4kZ3JlZW5Ib3ZlcjogIzQ1ZDI4ODsgLy9tZWRpdW0gc2VlIGdyZWVuXG4kb3JhbmdlSG92ZXI6ICNmZmFmMmQ7IC8vY2FtYm9nZSBvcmFuZ2VcbiRyZWRIb3ZlcjogbGlnaHRlbigjZDI2NjY2LCAxMCUpOyAvL2luZGlhbiByZWRcblxuJGRhcmtHcmF5OiAjMzMzO1xuJG1lZGl1bUdyYXk6ICNjY2M7XG4kbGlnaHRHcmF5OiAjZjVmNWY1O1xuJHN0cmlwZUdyYXk6ICNmYWZhZmE7XG4kbGVmdFNpZGVNZW51R3JheTogIzRhNGE0YTtcbiRsaWdodEJsdWU6ICNlMWYxZmY7XG5cbiR0ZXh0RGFya0dyYXk6ICRkYXJrR3JheTtcbiR0ZXh0R3JheTogI2EyYTJhMjtcbiR0ZXh0UGFsZUdyYXk6ICMyNjI2MjY7XG4kdGV4dFNtYWxsR3JheTogIzgzODM4MztcbiR0ZXh0U2Vjb25kYXJ5R3JheTogIzliOWI5YjtcbiRkaXNhYmxlZC1ncmF5OiAjZDlkOWQ5O1xuJGRpc2FibGVkLWxpZ2h0LWdyYXk6ICNlNWU1ZTU7XG4kcGFuZWxHcmF5OiAjZjhmOGY4O1xuJGdyYXktNTA6ICM1ZjVmNWY7XG4kZ3JheUFsdDogI2Q4ZDhkODtcblxuJGRhcmstZ3JlZW46ICM0Yzg0N2M7XG4kbGlnaHQtZ3JlZW46ICM3OWJmYjY7XG5cbiRibGFjazogIzExMTtcbiRibGFja09yaWdpbmFsOiAjMDAwO1xuJHdoaXRlOiAjZmZmO1xuXG4kbGlua2VkLWluLWJsdWU6ICMwMDc3YjU7XG4kZ29vZ2xlLXBsdXM6ICNkZDRjMzk7XG4kZmFjZWJvb2stYmx1ZTogIzNiNTk5ODtcbiRkYXJrLWJsdWU6ICMwZTRhN2M7XG5cbiRjb2xvckVycm9yOiAjZTgzZjI5O1xuJGNvbG9ySWNvbkJ0bjogI2EwYTBhMDtcblxuJGNvbG9yQm9yZGVyOiAjZGFkYWRhOyAvL2RlZmF1bHQgYm9yZGVyIGNvbG9yXG4kY29sb3JCb3JkZXJMaWdodDogI2UzZTNlMztcbiRjb2xvckZvcm1Cb3JkZXI6ICRjb2xvckJvcmRlcjtcbiRjb2xvckZvcm1Cb3JkZXJIb3ZlcjojYmJiO1xuJG5ld0NvbG9yQm9yZGVyOiAjOTc5Nzk3O1xuXG4vLyBiYWNrZ3JvdW5kc1xuLy8gJGJhY2tncm91bmQtbGlnaHQtZ3JheTogI2U4ZThlODtcbiRiYWNrZ3JvdW5kLWxpZ2h0LWdyYXk6dHJhbnNwYXJlbnRpemUoJGRhcmtHcmF5LC41KTtcbiRiYWNrZ3JvdW5kLWluZGlhbi1yZWQ6IHRyYW5zcGFyZW50aXplKCNkMjY2NjYsIC41KTsgXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBNZWRpYSBxdWVyeSB2YXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKiBtZWRpYSBxdWVyaWVzICovXG4kbW9iaWxlOiAgICAgICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSc7XG4kc21hbGxNb2JpbGU6XHRcdFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCknO1xuJG1lZGl1bU1vYmlsZTpcdFx0XHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NHB4KSc7XG4kdGFibGV0OiAgICAgICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSc7XG4kdGFibGV0UG9ydHJhaXQ6ICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpJztcbiR0YWJsZXRQb3J0cmFpdERvd246ICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpJztcbiR0YWJsZXRMYW5kc2NhcGU6ICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpJztcbiRzbWFsbERlc2t0b3A6ICAgICAgICAgICAgIFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpJztcbiR0YWJsZXRMYW5kc2NhcGVEb3duOiBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSc7XG4kZGVza3RvcDogICAgICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCknO1xuJG5vdE1vYmlsZTogICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCknO1xuJGxhcHRvcDogICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpJztcbiRsYXB0b3BEb3duOiAgICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSc7XG4kbGFwdG9wVGFibGV0OiAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSc7XG4kbGFwdG9wVGFibGV0TGFuZHNjYXBlOiAgICAgICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpJztcbiRsYXJnZURlc2t0b3A6ICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MXB4KSc7XG4kbGFyZ2VEZXNrdG9wRG93bjogICAgICAgIFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU5OXB4KSc7XG4keGxEZXNrdG9wOiAgICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCknO1xuJHhsRGVza3RvcERvd246ICAgICAgICAgICBcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCknO1xuJHh4bERlc2t0b3A6ICAgICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSc7XG4keHh4bERlc2t0b3A6ICAgICAgICAgICBcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCknO1xuJGRla3N0b3BEb3duRm9yQ2FtcGFpZ25zOlx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSc7XG5cbi8qIG1lZGlhIHF1ZXJpZXMgZm9yIGhlYWRlciAqL1xuJHRhYmxldEZvckhlYWRlcjogICAgICAgICAgICAgIFx0J29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEyMzBweCknO1xuJHRhYmxldExhbmRzY2FwZUZvckhlYWRlcjogICAgIFx0J29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMzBweCknO1xuJHRhYmxldExhbmRzY2FwZURvd25Gb3JIZWFkZXI6IFx0J29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjMwcHgpJztcbiRkZXNrdG9wRm9ySGVhZGVyOiAgICAgICAgICAgICBcdCdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIzMXB4KSc7XG4kbGFwdG9wRm9ySGVhZGVyOiAgICAgICAgICAgICAgXHQnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzFweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCknO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gU2l6ZSB2YXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vL2RlZmF1bHQgcGFkZGluZ3NcbiRnYXBMYXJnZTogMjBweDtcbiRnYXBEZWZhdWx0OiAxNXB4O1xuXG4vLyBUbyBkbyByZW5hbWUgdmFyaWFibGVzXG4kaGVhZGVySGVpZ2h0OiA3NXB4O1xuJHRvb2xiYXJIZWlnaHQ6IDY2cHg7XG4kc3ViSGVhZGVySGVpZ2h0TGFwdG9wOiA1NXB4O1xuJG1hcmtldFJlcG9ydE5hdkhlaWdodE1vYmlsZTogNjVweDtcbi8vIHBhZ2VUaXRsZSBkaXYgaGVpZ2h0cyBkZXBlbmRpbmcgb24gYnJlYWtwb2ludCBhbmQgd2hldGhlciB0aGUgYmFjayBsaW5rIGlzIHNob3duIG9yIG5vdFxuJHBhZ2VUaXRsZUhlaWdodDogNzFweDtcbiRwYWdlVGl0bGVIZWlnaHRXaXRoQmFja0xpbms6IDkxcHg7XG4kcGFnZVRpdGxlSGVpZ2h0VGFibGV0OiA1N3B4O1xuJHBhZ2VUaXRsZUhlaWdodFdpdGhCYWNrTGlua1RhYmxldDogNzdweDtcbiRwYWdlVGl0bGVIZWlnaHRNb2JpbGU6IDQ5cHg7XG4kcGFnZVRpdGxlSGVpZ2h0V2l0aEJhY2tMaW5rTW9iaWxlOiA3OXB4O1xuJGxlZnRTaWRlYmFyV2lkdGg6IDIyMHB4O1xuJGxlZnRTaWRlYmFySW5kZW50OiAzNXB4O1xuJGxlZnRTaWRlYmFyVGFibGV0SW5kZW50OiAxMHB4O1xuJHBhZ2VEZWZhdWx0Qm90dG9tUGFkZGluZzogMTAwcHg7XG4kZm9vdGVySGVpZ2h0OiA1NXB4O1xuJGZvb3RlckhlaWdodE1vYmlsZTogNDBweDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIFRpbWUgdmFyaWFibGVzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyogYW5pbWF0aW9uICovXG4kdHJhbnNpdGlvblRpbWU6IC4xNXM7XG4iLCJAaW1wb3J0ICd1dGlscyc7XG5cbjpob3N0IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogJGhlYWRlckhlaWdodDtcbiAgICBtaW4td2lkdGg6MzIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIHBhZGRpbmc6IDAgMTJweCAwIDI4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyYXlBbHQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJGRhcmtHcmF5O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuXG4udGl0bGUge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA3MHJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBcblxuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogJGRhcmtHcmF5O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMTEwcHg7IC8vIHByZXZlbnQgbXVsdGlsaW5lXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICB9XG59XG5cbi5pMThuQnV0dG9uc3tcbiAgICBidXR0b257XG4gICAgICAgIG1hcmdpbjowICRnYXBEZWZhdWx0IDAgMDtcbiAgICB9XG59XG5cbi5tb2JpbGVJMThuT3B0aW9uc3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgI3skdGFibGV0UG9ydHJhaXREb3dufSB7XG4gICAgOmhvc3Qge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgICBcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19 */"] });


/***/ }),

/***/ 1077:
/*!*********************************************!*\
  !*** ./src/app/core/layout/header/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* reexport safe */ _header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent)
/* harmony export */ });
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component */ 3261);



/***/ }),

/***/ 410:
/*!*************************************************!*\
  !*** ./src/app/core/layout/interfaces/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutState": () => (/* reexport safe */ _uiModels__WEBPACK_IMPORTED_MODULE_0__.LayoutState)
/* harmony export */ });
/* harmony import */ var _uiModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiModels */ 8464);



/***/ }),

/***/ 8464:
/*!****************************************************!*\
  !*** ./src/app/core/layout/interfaces/uiModels.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutState": () => (/* binding */ LayoutState)
/* harmony export */ });
class LayoutState {
    constructor() {
        this.overlayLoadingIsPresent = false;
        this.overlayLoadingText = "overlayLoading.initalLoading";
        this.snackBarIsPresent = false;
        this.snackBarText = "";
    }
}


/***/ }),

/***/ 4122:
/*!**********************************************!*\
  !*** ./src/app/core/layout/layout.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-logo */ 1850);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ 5686);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ 1077);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ 7289);
/* harmony import */ var _page_not_found__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found */ 5355);
/* harmony import */ var _snack_bar_content_snack_bar_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./snack-bar-content/snack-bar-content.component */ 9768);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _store_layout_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/layout.reducer */ 4125);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
// angular



// layout componets






// materinal



// ngrx store






let material = [
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule
];
let components = [
    _app_logo__WEBPACK_IMPORTED_MODULE_0__.AppLogoComponent,
    _footer__WEBPACK_IMPORTED_MODULE_1__.FooterComponent,
    _header__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
    _page__WEBPACK_IMPORTED_MODULE_3__.PageComponent,
    _page_not_found__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent,
];
class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule,
            ...material,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_16__.StoreModule.forFeature('layout', _store_layout_reducer__WEBPACK_IMPORTED_MODULE_6__.getLayoutReducer),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_app_logo__WEBPACK_IMPORTED_MODULE_0__.AppLogoComponent,
        _footer__WEBPACK_IMPORTED_MODULE_1__.FooterComponent,
        _header__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _page__WEBPACK_IMPORTED_MODULE_3__.PageComponent,
        _page_not_found__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent, _snack_bar_content_snack_bar_content_component__WEBPACK_IMPORTED_MODULE_5__.SnackBarContentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__.StoreFeatureModule], exports: [_app_logo__WEBPACK_IMPORTED_MODULE_0__.AppLogoComponent,
        _footer__WEBPACK_IMPORTED_MODULE_1__.FooterComponent,
        _header__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _page__WEBPACK_IMPORTED_MODULE_3__.PageComponent,
        _page_not_found__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent] }); })();


/***/ }),

/***/ 5355:
/*!*****************************************************!*\
  !*** ./src/app/core/layout/page-not-found/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* reexport safe */ _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.component */ 8321);



/***/ }),

/***/ 8321:
/*!************************************************************************!*\
  !*** ./src/app/core/layout/page-not-found/page-not-found.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page/page.component */ 5662);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class PageNotFoundComponent {
    constructor() {
        this.pageContent = `We’re sorry, but the page you are looking for doesn't exist. Try these links…`;
        this.pageTitle = 'Error 404';
    }
    ngOnDestroy() {
        document.body.classList.add('no-background');
    }
    ngOnInit() {
        document.body.classList.remove('no-background');
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["crx-page-not-found"]], inputs: { pageContent: "pageContent", pageTitle: "pageTitle" }, decls: 16, vars: 2, consts: [[1, "full-screen-page-with-header"], [1, "container-fluid", "page-content"], [1, "col-sm-7", "col-sm-offset-2", "col-lg-6", "col-lg-offset-3"], [1, "text-section"], [1, "link-section"], ["routerLink", "/", 1, "blue-link"], ["href", "https://learn.crexi.com/", 1, "blue-link"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "crx-page")(1, "article", 0)(2, "section", 1)(3, "div", 2)(4, "div", 3)(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "p")(11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p")(14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Help and Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.pageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.pageContent);
    } }, directives: [_page_page_component__WEBPACK_IMPORTED_MODULE_0__.PageComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".full-screen-page-with-header[_ngcontent-%COMP%] {\n  display: block;\n  height: calc(100vh - 75px);\n  position: relative;\n}\n@media only screen and (max-width: 767px) {\n  .full-screen-page-with-header[_ngcontent-%COMP%] {\n    height: calc(100vh - 75px);\n  }\n}\n.text-section[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  line-height: 1.2;\n}\n.text-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #9b9b9b;\n}\n.text-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n  color: #000;\n}\n.link-section[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  font-size: 16px;\n  line-height: 32px;\n  font-weight: bold;\n}\n.link-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@media only screen and (max-width: 767px) {\n  .text-section[_ngcontent-%COMP%] {\n    padding-top: 21px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcbWl4aW5zXFxwb3NpdGlvbi5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHV0aWxzXFx2YXJpYWJsZXNcXGJvcmRlcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFxtZWRpYS1xdWVyaWVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcdXRpbHNcXHZhcmlhYmxlc1xcc2l6ZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFx0aW1lLnNjc3MiLCJwYWdlLW5vdC1mb3VuZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzsrQ0FBQTtBQ0FBOzsrQ0FBQTtBQ0FBOzsrQ0FBQTtBQUFBOzsrQ0FBQTtBQ0FBOzsrQ0FBQTtBQUlBLGtCQUFBO0FBd0JBLDZCQUFBO0FDNUJBOzsrQ0FBQTtBQ0FBOzsrQ0FBQTtBQUlBLGNBQUE7QUNGQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBdUJKO0FBckJJO0VBTEo7SUFNUSwwQkFBQTtFQXdCTjtBQUNGO0FBckJBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQXdCRDtBQXRCSTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjSktZO0FJbUJwQjtBQXJCSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdKVVE7QUlhaEI7QUFsQkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBcUJKO0FBbkJJO0VBQ0ksU0FBQTtBQXFCUjtBQWpCQTtFQUNDO0lBQ0MsaUJBQUE7RUFvQkE7QUFDRiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gUG9zaXRpb24gbWl4aW5zXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuQG1peGluIHBvc2l0aW9uKCRwb3NpdGlvbjogbnVsbCwgJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xuICAgIEBpZiAkcG9zaXRpb24gIT0gbnVsbCB7XG4gICAgICAgIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gICAgfVxuICAgIEBpZiAkdG9wICE9IG51bGwge1xuICAgICAgICB0b3A6ICR0b3A7XG4gICAgfVxuICAgIEBpZiAkcmlnaHQgIT0gbnVsbCB7XG4gICAgICAgIHJpZ2h0OiAkcmlnaHQ7XG4gICAgfVxuICAgIEBpZiAkYm90dG9tICE9IG51bGwge1xuICAgICAgICBib3R0b206ICRib3R0b207XG4gICAgfVxuICAgIEBpZiAkbGVmdCAhPSBudWxsIHtcbiAgICAgICAgbGVmdDogJGxlZnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gYWJzb2x1dGUoJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLCAkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KTtcbn1cblxuQG1peGluIGZpeGVkKCR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihmaXhlZCwgJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCk7XG59XG5cbkBtaXhpbiByZWxhdGl2ZSgkdG9wOiBudWxsLCAkcmlnaHQ6IG51bGwsICRib3R0b206IG51bGwsICRsZWZ0OiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24ocmVsYXRpdmUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpO1xufVxuXG5AbWl4aW4gc3RhdGljKCR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihzdGF0aWMsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpO1xufVxuXG5cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIEJvcmRlciB2YXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQGltcG9ydCAnY29sb3JzJztcblxuLy9ib3JkZXJzXG4kYm9yZGVyTGlnaHQ6IDFweCBzb2xpZCAkY29sb3JCb3JkZXI7XG4kYm9yZGVyTGlnaHRHcmV5OiAxcHggc29saWQgJGxpZ2h0R3JheTtcbiRyYWRpdXM6IDJweDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvbG9ycyB2YXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4kYmx1ZTogIzJlOGRkZDsvL2JsdWUgZGUgZnJhbmNlXG4kZ3JlZW46ICMzOWIyNzM7IC8vbWVkaXVtIHNlZSBncmVlblxuJHJlZDogI2QyNjY2NjsgLy9pbmRpYW4gcmVkXG4kb3JhbmdlOiAjZTU5YzI2OyAvL2NhbWJvZ2Ugb3JhbmdlXG5cbiRibHVlSG92ZXI6ICMzOGE0ZmY7Ly9ibHVlIGRlIGZyYW5jZVxuJGdyZWVuSG92ZXI6ICM0NWQyODg7IC8vbWVkaXVtIHNlZSBncmVlblxuJG9yYW5nZUhvdmVyOiAjZmZhZjJkOyAvL2NhbWJvZ2Ugb3JhbmdlXG4kcmVkSG92ZXI6IGxpZ2h0ZW4oI2QyNjY2NiwgMTAlKTsgLy9pbmRpYW4gcmVkXG5cbiRkYXJrR3JheTogIzMzMztcbiRtZWRpdW1HcmF5OiAjY2NjO1xuJGxpZ2h0R3JheTogI2Y1ZjVmNTtcbiRzdHJpcGVHcmF5OiAjZmFmYWZhO1xuJGxlZnRTaWRlTWVudUdyYXk6ICM0YTRhNGE7XG4kbGlnaHRCbHVlOiAjZTFmMWZmO1xuXG4kdGV4dERhcmtHcmF5OiAkZGFya0dyYXk7XG4kdGV4dEdyYXk6ICNhMmEyYTI7XG4kdGV4dFBhbGVHcmF5OiAjMjYyNjI2O1xuJHRleHRTbWFsbEdyYXk6ICM4MzgzODM7XG4kdGV4dFNlY29uZGFyeUdyYXk6ICM5YjliOWI7XG4kZGlzYWJsZWQtZ3JheTogI2Q5ZDlkOTtcbiRkaXNhYmxlZC1saWdodC1ncmF5OiAjZTVlNWU1O1xuJHBhbmVsR3JheTogI2Y4ZjhmODtcbiRncmF5LTUwOiAjNWY1ZjVmO1xuJGdyYXlBbHQ6ICNkOGQ4ZDg7XG5cbiRkYXJrLWdyZWVuOiAjNGM4NDdjO1xuJGxpZ2h0LWdyZWVuOiAjNzliZmI2O1xuXG4kYmxhY2s6ICMxMTE7XG4kYmxhY2tPcmlnaW5hbDogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcblxuJGxpbmtlZC1pbi1ibHVlOiAjMDA3N2I1O1xuJGdvb2dsZS1wbHVzOiAjZGQ0YzM5O1xuJGZhY2Vib29rLWJsdWU6ICMzYjU5OTg7XG4kZGFyay1ibHVlOiAjMGU0YTdjO1xuXG4kY29sb3JFcnJvcjogI2U4M2YyOTtcbiRjb2xvckljb25CdG46ICNhMGEwYTA7XG5cbiRjb2xvckJvcmRlcjogI2RhZGFkYTsgLy9kZWZhdWx0IGJvcmRlciBjb2xvclxuJGNvbG9yQm9yZGVyTGlnaHQ6ICNlM2UzZTM7XG4kY29sb3JGb3JtQm9yZGVyOiAkY29sb3JCb3JkZXI7XG4kY29sb3JGb3JtQm9yZGVySG92ZXI6I2JiYjtcbiRuZXdDb2xvckJvcmRlcjogIzk3OTc5NztcblxuLy8gYmFja2dyb3VuZHNcbi8vICRiYWNrZ3JvdW5kLWxpZ2h0LWdyYXk6ICNlOGU4ZTg7XG4kYmFja2dyb3VuZC1saWdodC1ncmF5OnRyYW5zcGFyZW50aXplKCRkYXJrR3JheSwuNSk7XG4kYmFja2dyb3VuZC1pbmRpYW4tcmVkOiB0cmFuc3BhcmVudGl6ZSgjZDI2NjY2LCAuNSk7IFxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gTWVkaWEgcXVlcnkgdmFyaWFibGVzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyogbWVkaWEgcXVlcmllcyAqL1xuJG1vYmlsZTogICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCknO1xuJHNtYWxsTW9iaWxlOlx0XHRcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpJztcbiRtZWRpdW1Nb2JpbGU6XHRcdFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCknO1xuJHRhYmxldDogICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCknO1xuJHRhYmxldFBvcnRyYWl0OiAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSc7XG4kdGFibGV0UG9ydHJhaXREb3duOiAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSc7XG4kdGFibGV0TGFuZHNjYXBlOiAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSc7XG4kc21hbGxEZXNrdG9wOiAgICAgICAgICAgICBcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSc7XG4kdGFibGV0TGFuZHNjYXBlRG93bjogXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCknO1xuJGRlc2t0b3A6ICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpJztcbiRub3RNb2JpbGU6ICAgICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpJztcbiRsYXB0b3A6ICAgICAgICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSc7XG4kbGFwdG9wRG93bjogICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCknO1xuJGxhcHRvcFRhYmxldDogICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCknO1xuJGxhcHRvcFRhYmxldExhbmRzY2FwZTogICAgICAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSc7XG4kbGFyZ2VEZXNrdG9wOiAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCknO1xuJGxhcmdlRGVza3RvcERvd246ICAgICAgICBcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1OTlweCknO1xuJHhsRGVza3RvcDogICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpJztcbiR4bERlc2t0b3BEb3duOiAgICAgICAgICAgXHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJztcbiR4eGxEZXNrdG9wOiAgICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCknO1xuJHh4eGxEZXNrdG9wOiAgICAgICAgICAgXHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpJztcbiRkZWtzdG9wRG93bkZvckNhbXBhaWduczpcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweCknO1xuXG4vKiBtZWRpYSBxdWVyaWVzIGZvciBoZWFkZXIgKi9cbiR0YWJsZXRGb3JIZWFkZXI6ICAgICAgICAgICAgICBcdCdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMjMwcHgpJztcbiR0YWJsZXRMYW5kc2NhcGVGb3JIZWFkZXI6ICAgICBcdCdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjMwcHgpJztcbiR0YWJsZXRMYW5kc2NhcGVEb3duRm9ySGVhZGVyOiBcdCdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzMHB4KSc7XG4kZGVza3RvcEZvckhlYWRlcjogICAgICAgICAgICAgXHQnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzFweCknO1xuJGxhcHRvcEZvckhlYWRlcjogICAgICAgICAgICAgIFx0J29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMxcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpJztcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIFNpemUgdmFyaWFibGVzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9kZWZhdWx0IHBhZGRpbmdzXG4kZ2FwTGFyZ2U6IDIwcHg7XG4kZ2FwRGVmYXVsdDogMTVweDtcblxuLy8gVG8gZG8gcmVuYW1lIHZhcmlhYmxlc1xuJGhlYWRlckhlaWdodDogNzVweDtcbiR0b29sYmFySGVpZ2h0OiA2NnB4O1xuJHN1YkhlYWRlckhlaWdodExhcHRvcDogNTVweDtcbiRtYXJrZXRSZXBvcnROYXZIZWlnaHRNb2JpbGU6IDY1cHg7XG4vLyBwYWdlVGl0bGUgZGl2IGhlaWdodHMgZGVwZW5kaW5nIG9uIGJyZWFrcG9pbnQgYW5kIHdoZXRoZXIgdGhlIGJhY2sgbGluayBpcyBzaG93biBvciBub3RcbiRwYWdlVGl0bGVIZWlnaHQ6IDcxcHg7XG4kcGFnZVRpdGxlSGVpZ2h0V2l0aEJhY2tMaW5rOiA5MXB4O1xuJHBhZ2VUaXRsZUhlaWdodFRhYmxldDogNTdweDtcbiRwYWdlVGl0bGVIZWlnaHRXaXRoQmFja0xpbmtUYWJsZXQ6IDc3cHg7XG4kcGFnZVRpdGxlSGVpZ2h0TW9iaWxlOiA0OXB4O1xuJHBhZ2VUaXRsZUhlaWdodFdpdGhCYWNrTGlua01vYmlsZTogNzlweDtcbiRsZWZ0U2lkZWJhcldpZHRoOiAyMjBweDtcbiRsZWZ0U2lkZWJhckluZGVudDogMzVweDtcbiRsZWZ0U2lkZWJhclRhYmxldEluZGVudDogMTBweDtcbiRwYWdlRGVmYXVsdEJvdHRvbVBhZGRpbmc6IDEwMHB4O1xuJGZvb3RlckhlaWdodDogNTVweDtcbiRmb290ZXJIZWlnaHRNb2JpbGU6IDQwcHg7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBUaW1lIHZhcmlhYmxlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qIGFuaW1hdGlvbiAqL1xuJHRyYW5zaXRpb25UaW1lOiAuMTVzO1xuIiwiQGltcG9ydCAndXRpbHMnO1xuXG4uZnVsbC1zY3JlZW4tcGFnZS13aXRoLWhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gJGhlYWRlckhlaWdodCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgQG1lZGlhICN7JG1vYmlsZX0ge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAkaGVhZGVySGVpZ2h0KTtcbiAgICB9XG59XG5cbi50ZXh0LXNlY3Rpb257XG5cdHBhZGRpbmctdG9wOiAxMDBweDtcblx0bGluZS1oZWlnaHQ6IDEuMjtcblxuICAgIGgxe1xuICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogJHRleHRTZWNvbmRhcnlHcmF5O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogJGJsYWNrT3JpZ2luYWw7XG4gICAgfVxuXG59XG5cbi5saW5rLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cbkBtZWRpYSAjeyRtb2JpbGV9IHtcblx0LnRleHQtc2VjdGlvbntcblx0XHRwYWRkaW5nLXRvcDogMjFweDtcblx0fVxufVxuIl19 */"] });


/***/ }),

/***/ 7289:
/*!*******************************************!*\
  !*** ./src/app/core/layout/page/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageComponent": () => (/* reexport safe */ _page_component__WEBPACK_IMPORTED_MODULE_0__.PageComponent)
/* harmony export */ });
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.component */ 5662);



/***/ }),

/***/ 5662:
/*!****************************************************!*\
  !*** ./src/app/core/layout/page/page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageComponent": () => (/* binding */ PageComponent)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _snack_bar_content_snack_bar_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../snack-bar-content/snack-bar-content.component */ 9768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);

// rxjs


// material






const _c0 = [[["", 8, "header"]], "*"];
const _c1 = function (a0) { return { "with-background": a0 }; };
const _c2 = [".header", "*"];
// i18n
class PageComponent {
    constructor(store, _snackBar) {
        this.store = store;
        this._snackBar = _snackBar;
        this.ngUnsub = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.toggleOverlayLoading$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_0__.LayoutSelectors.getOverlayLoadingIsPresent);
        this.toggleSnackBar$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_0__.LayoutSelectors.getSnackBarInfo)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.ngUnsub), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
            if (result.isPresent) {
                let config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarConfig();
                config.panelClass = "error-snackbar";
                this._snackBar.openFromComponent(_snack_bar_content_snack_bar_content_component__WEBPACK_IMPORTED_MODULE_1__.SnackBarContentComponent, config);
            }
            else {
                this._snackBar.dismiss();
            }
        }));
        this.myClass = '';
    }
    ngOnInit() {
        this.toggleSnackBar$.subscribe();
        this.initToggleOverlayLoading().subscribe();
    }
    initToggleOverlayLoading() {
        return this.toggleOverlayLoading$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.ngUnsub), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((result) => {
            this.myClass = result ? 'loading' : '';
        }));
    }
    ngOnDestroy() {
        this.ngUnsub.next();
        this.ngUnsub.complete();
    }
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar)); };
PageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PageComponent, selectors: [["crx-page"]], hostVars: 2, hostBindings: function PageComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.myClass);
    } }, inputs: { showBackground: "showBackground" }, ngContentSelectors: _c2, decls: 5, vars: 3, consts: [[1, "page"], [1, "header-wrapper"], [1, "page-wrapper", 3, "ngClass"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c1, ctx.showBackground));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass], styles: [".header-wrapper[_ngcontent-%COMP%] {\n  height: 75px;\n  border-bottom: solid 1px #dadada;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  background-color: rgba(51, 51, 51, 0.5);\n  min-height: calc(100vh - 75px + 1px);\n  position: relative;\n  overflow: auto;\n  transition: opacity 0.25s ease-in;\n  opacity: 1;\n  padding-bottom: 20px;\n}\n.page-wrapper.with-background[_ngcontent-%COMP%] {\n  background: url(/content/img/Los-Angeles-1600.jpg) no-repeat center;\n  background-size: cover;\n}\n.loading[_nghost-%COMP%]   .page-wrapper[_ngcontent-%COMP%], .loading   [_nghost-%COMP%]   .page-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  transition: opacity 0.25s ease-out;\n  opacity: 0;\n}\n.loading[_nghost-%COMP%]   .page[_ngcontent-%COMP%], .loading   [_nghost-%COMP%]   .page[_ngcontent-%COMP%] {\n  background-color: #fff;\n  position: fixed;\n  overflow: hidden;\n  inset: 0;\n  position: relative;\n}\n.loading[_nghost-%COMP%]   .page[_ngcontent-%COMP%]::before, .loading   [_nghost-%COMP%]   .page[_ngcontent-%COMP%]::before {\n  content: \"\";\n  z-index: 1;\n  width: 80px;\n  height: 80px;\n  transform: translate(50%, -50%);\n  background: no-repeat center/contain url(/content/img/spinner.svg);\n  position: fixed;\n  top: 50%;\n  right: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcbWl4aW5zXFxwb3NpdGlvbi5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHV0aWxzXFx2YXJpYWJsZXNcXGJvcmRlcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFxtZWRpYS1xdWVyaWVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcdXRpbHNcXHZhcmlhYmxlc1xcc2l6ZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFx0aW1lLnNjc3MiLCJwYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OytDQUFBO0FDQUE7OytDQUFBO0FDQUE7OytDQUFBO0FBQUE7OytDQUFBO0FDQUE7OytDQUFBO0FBSUEsa0JBQUE7QUF3QkEsNkJBQUE7QUM1QkE7OytDQUFBO0FDQUE7OytDQUFBO0FBSUEsY0FBQTtBQ0ZBO0VBQ0ksWUZNVztFRUxYLGdDQUFBO0FBdUJKO0FBcEJBO0VBQ0ksdUNKK0NtQjtFSTlDbkIsb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxvQkZUTztBRWdDWDtBQXRCSTtFQUNJLG1FQUFBO0VBQ0Esc0JBQUE7QUF3QlI7QUFwQkE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUF1Qko7QUFuQkE7RUFHSSxzQkpJSTtFSUhKLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RU45Qkksa0JBeUJjO0FNMEJ0QjtBQWxCSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtFQUFBO0VOdkNBLGVBcUJjO0VBbEJkLFFNc0NlO0VObkNmLFVNbUNvQjtBQXFCNUIiLCJmaWxlIjoicGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gUG9zaXRpb24gbWl4aW5zXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuQG1peGluIHBvc2l0aW9uKCRwb3NpdGlvbjogbnVsbCwgJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xuICAgIEBpZiAkcG9zaXRpb24gIT0gbnVsbCB7XG4gICAgICAgIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gICAgfVxuICAgIEBpZiAkdG9wICE9IG51bGwge1xuICAgICAgICB0b3A6ICR0b3A7XG4gICAgfVxuICAgIEBpZiAkcmlnaHQgIT0gbnVsbCB7XG4gICAgICAgIHJpZ2h0OiAkcmlnaHQ7XG4gICAgfVxuICAgIEBpZiAkYm90dG9tICE9IG51bGwge1xuICAgICAgICBib3R0b206ICRib3R0b207XG4gICAgfVxuICAgIEBpZiAkbGVmdCAhPSBudWxsIHtcbiAgICAgICAgbGVmdDogJGxlZnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gYWJzb2x1dGUoJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLCAkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KTtcbn1cblxuQG1peGluIGZpeGVkKCR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihmaXhlZCwgJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCk7XG59XG5cbkBtaXhpbiByZWxhdGl2ZSgkdG9wOiBudWxsLCAkcmlnaHQ6IG51bGwsICRib3R0b206IG51bGwsICRsZWZ0OiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24ocmVsYXRpdmUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpO1xufVxuXG5AbWl4aW4gc3RhdGljKCR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihzdGF0aWMsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpO1xufVxuXG5cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIEJvcmRlciB2YXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQGltcG9ydCAnY29sb3JzJztcblxuLy9ib3JkZXJzXG4kYm9yZGVyTGlnaHQ6IDFweCBzb2xpZCAkY29sb3JCb3JkZXI7XG4kYm9yZGVyTGlnaHRHcmV5OiAxcHggc29saWQgJGxpZ2h0R3JheTtcbiRyYWRpdXM6IDJweDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvbG9ycyB2YXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4kYmx1ZTogIzJlOGRkZDsvL2JsdWUgZGUgZnJhbmNlXG4kZ3JlZW46ICMzOWIyNzM7IC8vbWVkaXVtIHNlZSBncmVlblxuJHJlZDogI2QyNjY2NjsgLy9pbmRpYW4gcmVkXG4kb3JhbmdlOiAjZTU5YzI2OyAvL2NhbWJvZ2Ugb3JhbmdlXG5cbiRibHVlSG92ZXI6ICMzOGE0ZmY7Ly9ibHVlIGRlIGZyYW5jZVxuJGdyZWVuSG92ZXI6ICM0NWQyODg7IC8vbWVkaXVtIHNlZSBncmVlblxuJG9yYW5nZUhvdmVyOiAjZmZhZjJkOyAvL2NhbWJvZ2Ugb3JhbmdlXG4kcmVkSG92ZXI6IGxpZ2h0ZW4oI2QyNjY2NiwgMTAlKTsgLy9pbmRpYW4gcmVkXG5cbiRkYXJrR3JheTogIzMzMztcbiRtZWRpdW1HcmF5OiAjY2NjO1xuJGxpZ2h0R3JheTogI2Y1ZjVmNTtcbiRzdHJpcGVHcmF5OiAjZmFmYWZhO1xuJGxlZnRTaWRlTWVudUdyYXk6ICM0YTRhNGE7XG4kbGlnaHRCbHVlOiAjZTFmMWZmO1xuXG4kdGV4dERhcmtHcmF5OiAkZGFya0dyYXk7XG4kdGV4dEdyYXk6ICNhMmEyYTI7XG4kdGV4dFBhbGVHcmF5OiAjMjYyNjI2O1xuJHRleHRTbWFsbEdyYXk6ICM4MzgzODM7XG4kdGV4dFNlY29uZGFyeUdyYXk6ICM5YjliOWI7XG4kZGlzYWJsZWQtZ3JheTogI2Q5ZDlkOTtcbiRkaXNhYmxlZC1saWdodC1ncmF5OiAjZTVlNWU1O1xuJHBhbmVsR3JheTogI2Y4ZjhmODtcbiRncmF5LTUwOiAjNWY1ZjVmO1xuJGdyYXlBbHQ6ICNkOGQ4ZDg7XG5cbiRkYXJrLWdyZWVuOiAjNGM4NDdjO1xuJGxpZ2h0LWdyZWVuOiAjNzliZmI2O1xuXG4kYmxhY2s6ICMxMTE7XG4kYmxhY2tPcmlnaW5hbDogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcblxuJGxpbmtlZC1pbi1ibHVlOiAjMDA3N2I1O1xuJGdvb2dsZS1wbHVzOiAjZGQ0YzM5O1xuJGZhY2Vib29rLWJsdWU6ICMzYjU5OTg7XG4kZGFyay1ibHVlOiAjMGU0YTdjO1xuXG4kY29sb3JFcnJvcjogI2U4M2YyOTtcbiRjb2xvckljb25CdG46ICNhMGEwYTA7XG5cbiRjb2xvckJvcmRlcjogI2RhZGFkYTsgLy9kZWZhdWx0IGJvcmRlciBjb2xvclxuJGNvbG9yQm9yZGVyTGlnaHQ6ICNlM2UzZTM7XG4kY29sb3JGb3JtQm9yZGVyOiAkY29sb3JCb3JkZXI7XG4kY29sb3JGb3JtQm9yZGVySG92ZXI6I2JiYjtcbiRuZXdDb2xvckJvcmRlcjogIzk3OTc5NztcblxuLy8gYmFja2dyb3VuZHNcbi8vICRiYWNrZ3JvdW5kLWxpZ2h0LWdyYXk6ICNlOGU4ZTg7XG4kYmFja2dyb3VuZC1saWdodC1ncmF5OnRyYW5zcGFyZW50aXplKCRkYXJrR3JheSwuNSk7XG4kYmFja2dyb3VuZC1pbmRpYW4tcmVkOiB0cmFuc3BhcmVudGl6ZSgjZDI2NjY2LCAuNSk7IFxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gTWVkaWEgcXVlcnkgdmFyaWFibGVzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyogbWVkaWEgcXVlcmllcyAqL1xuJG1vYmlsZTogICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCknO1xuJHNtYWxsTW9iaWxlOlx0XHRcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpJztcbiRtZWRpdW1Nb2JpbGU6XHRcdFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCknO1xuJHRhYmxldDogICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCknO1xuJHRhYmxldFBvcnRyYWl0OiAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSc7XG4kdGFibGV0UG9ydHJhaXREb3duOiAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSc7XG4kdGFibGV0TGFuZHNjYXBlOiAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSc7XG4kc21hbGxEZXNrdG9wOiAgICAgICAgICAgICBcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSc7XG4kdGFibGV0TGFuZHNjYXBlRG93bjogXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCknO1xuJGRlc2t0b3A6ICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpJztcbiRub3RNb2JpbGU6ICAgICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpJztcbiRsYXB0b3A6ICAgICAgICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSc7XG4kbGFwdG9wRG93bjogICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCknO1xuJGxhcHRvcFRhYmxldDogICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCknO1xuJGxhcHRvcFRhYmxldExhbmRzY2FwZTogICAgICAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSc7XG4kbGFyZ2VEZXNrdG9wOiAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCknO1xuJGxhcmdlRGVza3RvcERvd246ICAgICAgICBcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1OTlweCknO1xuJHhsRGVza3RvcDogICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpJztcbiR4bERlc2t0b3BEb3duOiAgICAgICAgICAgXHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJztcbiR4eGxEZXNrdG9wOiAgICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCknO1xuJHh4eGxEZXNrdG9wOiAgICAgICAgICAgXHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpJztcbiRkZWtzdG9wRG93bkZvckNhbXBhaWduczpcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweCknO1xuXG4vKiBtZWRpYSBxdWVyaWVzIGZvciBoZWFkZXIgKi9cbiR0YWJsZXRGb3JIZWFkZXI6ICAgICAgICAgICAgICBcdCdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMjMwcHgpJztcbiR0YWJsZXRMYW5kc2NhcGVGb3JIZWFkZXI6ICAgICBcdCdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjMwcHgpJztcbiR0YWJsZXRMYW5kc2NhcGVEb3duRm9ySGVhZGVyOiBcdCdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzMHB4KSc7XG4kZGVza3RvcEZvckhlYWRlcjogICAgICAgICAgICAgXHQnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzFweCknO1xuJGxhcHRvcEZvckhlYWRlcjogICAgICAgICAgICAgIFx0J29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMxcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpJztcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIFNpemUgdmFyaWFibGVzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9kZWZhdWx0IHBhZGRpbmdzXG4kZ2FwTGFyZ2U6IDIwcHg7XG4kZ2FwRGVmYXVsdDogMTVweDtcblxuLy8gVG8gZG8gcmVuYW1lIHZhcmlhYmxlc1xuJGhlYWRlckhlaWdodDogNzVweDtcbiR0b29sYmFySGVpZ2h0OiA2NnB4O1xuJHN1YkhlYWRlckhlaWdodExhcHRvcDogNTVweDtcbiRtYXJrZXRSZXBvcnROYXZIZWlnaHRNb2JpbGU6IDY1cHg7XG4vLyBwYWdlVGl0bGUgZGl2IGhlaWdodHMgZGVwZW5kaW5nIG9uIGJyZWFrcG9pbnQgYW5kIHdoZXRoZXIgdGhlIGJhY2sgbGluayBpcyBzaG93biBvciBub3RcbiRwYWdlVGl0bGVIZWlnaHQ6IDcxcHg7XG4kcGFnZVRpdGxlSGVpZ2h0V2l0aEJhY2tMaW5rOiA5MXB4O1xuJHBhZ2VUaXRsZUhlaWdodFRhYmxldDogNTdweDtcbiRwYWdlVGl0bGVIZWlnaHRXaXRoQmFja0xpbmtUYWJsZXQ6IDc3cHg7XG4kcGFnZVRpdGxlSGVpZ2h0TW9iaWxlOiA0OXB4O1xuJHBhZ2VUaXRsZUhlaWdodFdpdGhCYWNrTGlua01vYmlsZTogNzlweDtcbiRsZWZ0U2lkZWJhcldpZHRoOiAyMjBweDtcbiRsZWZ0U2lkZWJhckluZGVudDogMzVweDtcbiRsZWZ0U2lkZWJhclRhYmxldEluZGVudDogMTBweDtcbiRwYWdlRGVmYXVsdEJvdHRvbVBhZGRpbmc6IDEwMHB4O1xuJGZvb3RlckhlaWdodDogNTVweDtcbiRmb290ZXJIZWlnaHRNb2JpbGU6IDQwcHg7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBUaW1lIHZhcmlhYmxlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qIGFuaW1hdGlvbiAqL1xuJHRyYW5zaXRpb25UaW1lOiAuMTVzO1xuIiwiQGltcG9ydCAndXRpbHMnO1xuXG4uaGVhZGVyLXdyYXBwZXIge1xuICAgIGhlaWdodDogJGhlYWRlckhlaWdodDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGNvbG9yQm9yZGVyO1xufVxuXG4ucGFnZS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1saWdodC1ncmF5O1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAkaGVhZGVySGVpZ2h0ICsgMXB4KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzIGVhc2UtaW47XG4gICAgb3BhY2l0eTogMTtcbiAgICBwYWRkaW5nLWJvdHRvbTogJGdhcExhcmdlO1xuICAgICYud2l0aC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9jb250ZW50L2ltZy9Mb3MtQW5nZWxlcy0xNjAwLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG59XG5cbjpob3N0LWNvbnRleHQoLmxvYWRpbmcpIC5wYWdlLXdyYXBwZXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXMgZWFzZS1vdXQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbjpob3N0LWNvbnRleHQoLmxvYWRpbmcpIC5wYWdlIHtcbiAgICAvLyB3aWR0aDogMTAwdnc7XG4gICAgLy8gaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaW5zZXQ6MDtcblxuICAgIEBpbmNsdWRlIHJlbGF0aXZlKCk7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY29udGFpbiB1cmwoL2NvbnRlbnQvaW1nL3NwaW5uZXIuc3ZnKTtcblxuICAgICAgICBAaW5jbHVkZSBmaXhlZCg1MCUsIDUwJSk7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 9768:
/*!******************************************************************************!*\
  !*** ./src/app/core/layout/snack-bar-content/snack-bar-content.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackBarContentComponent": () => (/* binding */ SnackBarContentComponent)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ 1891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






class SnackBarContentComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.getSnackBarText$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_0__.LayoutSelectors.getSnackBarText);
    }
    dismissSnackbar() {
        this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.LayoutActions.hideSnackBar());
    }
}
SnackBarContentComponent.ɵfac = function SnackBarContentComponent_Factory(t) { return new (t || SnackBarContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
SnackBarContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SnackBarContentComponent, selectors: [["app-snack-bar-content"]], decls: 6, vars: 5, consts: [["aria-label", "Dismiss snackbar", 3, "click"], ["src", "content/img/close.svg"]], template: function SnackBarContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SnackBarContentComponent_Template_button_click_4_listener() { return ctx.dismissSnackbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx.getSnackBarText$)));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: none;\n  height: auto;\n  width: auto;\n  background-color: transparent;\n  display: flex;\n  color: inherit;\n}\n\nimg[_ngcontent-%COMP%] {\n  filter: invert(100%) sepia(92%) saturate(2%) hue-rotate(199deg) brightness(119%) contrast(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYWNrLWJhci1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrRkFBQTtBQUNGIiwiZmlsZSI6InNuYWNrLWJhci1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOjA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOmluaGVyaXRcclxufVxyXG5cclxuaW1ne1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDkyJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMTk5ZGVnKSBicmlnaHRuZXNzKDExOSUpIGNvbnRyYXN0KDEwMCUpO1xyXG59Il19 */"] });


/***/ }),

/***/ 1891:
/*!********************************************!*\
  !*** ./src/app/core/layout/store/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutActions": () => (/* reexport module object */ _layout_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "LayoutSelectors": () => (/* reexport module object */ _layout_selectors__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _layout_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.actions */ 1536);
/* harmony import */ var _layout_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.selectors */ 4444);




/***/ }),

/***/ 1536:
/*!*****************************************************!*\
  !*** ./src/app/core/layout/store/layout.actions.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideOverlayLoading": () => (/* binding */ hideOverlayLoading),
/* harmony export */   "hideSnackBar": () => (/* binding */ hideSnackBar),
/* harmony export */   "showOverlayLoading": () => (/* binding */ showOverlayLoading),
/* harmony export */   "showSnackBar": () => (/* binding */ showSnackBar)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

// toggle overlayLoading
const showOverlayLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Layout] show overlay loading', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const hideOverlayLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Layout] hide overlay loading');
// toggle snackbar
const showSnackBar = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Layout] show snackbar', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const hideSnackBar = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Layout] hide snackbar');


/***/ }),

/***/ 4125:
/*!*****************************************************!*\
  !*** ./src/app/core/layout/store/layout.reducer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLayoutReducer": () => (/* binding */ getLayoutReducer)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @interfaces */ 1740);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ 1891);



const initialState = new _interfaces__WEBPACK_IMPORTED_MODULE_0__.LayoutState();
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.LayoutActions.showOverlayLoading, (state, action) => (Object.assign(Object.assign({}, state), { overlayLoadingIsPresent: true, overlayLoadingText: action.text }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.LayoutActions.hideOverlayLoading, (state) => (Object.assign(Object.assign({}, state), { overlayLoadingIsPresent: false }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.LayoutActions.showSnackBar, (state, action) => (Object.assign(Object.assign({}, state), { snackBarIsPresent: true, snackBarText: action.text }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.LayoutActions.hideSnackBar, (state) => (Object.assign(Object.assign({}, state), { snackBarIsPresent: false }))));
function getLayoutReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ 4444:
/*!*******************************************************!*\
  !*** ./src/app/core/layout/store/layout.selectors.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLayoutState": () => (/* binding */ getLayoutState),
/* harmony export */   "getOverlayLoadingIsPresent": () => (/* binding */ getOverlayLoadingIsPresent),
/* harmony export */   "getOverlayLoadingText": () => (/* binding */ getOverlayLoadingText),
/* harmony export */   "getSnackBarInfo": () => (/* binding */ getSnackBarInfo),
/* harmony export */   "getSnackBarText": () => (/* binding */ getSnackBarText)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

const getLayoutState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('layout');
const getOverlayLoadingIsPresent = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getLayoutState, (layout) => layout.overlayLoadingIsPresent);
const getOverlayLoadingText = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getLayoutState, (layout) => layout.overlayLoadingText);
const getSnackBarInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getLayoutState, (layout) => ({ isPresent: layout.snackBarIsPresent }));
const getSnackBarText = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getLayoutState, (layout) => layout.snackBarText);


/***/ }),

/***/ 9302:
/*!********************************************************************************!*\
  !*** ./src/app/core/layout/threejs-background/threejs-background.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreejsBackgroundComponent": () => (/* binding */ ThreejsBackgroundComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2428);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 610);
/* harmony import */ var content_scripts_tween_js_tween__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! content/scripts/tween.js/tween */ 5596);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ 2845);
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ 1100);
/* harmony import */ var _features_profile_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/profile/store */ 1334);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @interfaces */ 1740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_utils_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/utils/utility.service */ 5525);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8784);


// rxjs


// three.js



// store







class ThreejsBackgroundComponent {
    constructor(renderer2, el, utilService, router, store, http) {
        this.renderer2 = renderer2;
        this.el = el;
        this.utilService = utilService;
        this.router = router;
        this.store = store;
        this.http = http;
        this.ngUnsub = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.scene = new three__WEBPACK_IMPORTED_MODULE_7__.Scene();
        this.currentUser$ = this.store.select(_features_profile_store__WEBPACK_IMPORTED_MODULE_3__.ProfileSelectors.pickUserProfile);
        this.adjustCameraToLookAtLocation = (endpoint, sub) => {
            return this.http.get(endpoint)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsub), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.pluck)("features", "0", "center"), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)((result) => {
                let [lng, lat] = result;
                let { x, y, z } = this.calcPosFromLatLonRad(lat, lng);
                var camDistance = this.camera.position.length();
                let vector = new three__WEBPACK_IMPORTED_MODULE_7__.Vector3(x, y, z)
                    .normalize()
                    .multiplyScalar(camDistance);
                this.camera.position.copy(vector);
                this.planetEarth.rotation.set(0, 0, 0);
                sub === null || sub === void 0 ? void 0 : sub.unsubscribe();
            }));
        };
        this.applyCanvasToDisplayDiv = () => {
            this.renderer = new three__WEBPACK_IMPORTED_MODULE_7__.WebGLRenderer({ antialias: true });
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.setCanvasDimsBasedOnDisplayElement();
            this.renderer2.appendChild(this.el.nativeElement, this.renderer.domElement);
        };
        this.retrieveDimsOfDisplayElement = () => {
            let displayDivWidth = this.utilService.numberParse(getComputedStyle(this.el.nativeElement).width);
            let displayDivHeight = this.utilService.numberParse(getComputedStyle(this.el.nativeElement).height);
            return { displayDivWidth, displayDivHeight };
        };
        this.setCanvasDimsBasedOnDisplayElement = () => {
            let { displayDivWidth, displayDivHeight } = this.retrieveDimsOfDisplayElement();
            this.renderer.setSize(displayDivWidth, displayDivHeight);
        };
        this.animate = () => {
            var _a, _b;
            requestAnimationFrame(this.animate);
            this.setCanvasDimsBasedOnDisplayElement();
            this.controls.update();
            (0,content_scripts_tween_js_tween__WEBPACK_IMPORTED_MODULE_1__.update)();
            if (this.router.url.match(/^\/\profiles/)) {
                (_a = this.planetEarth) === null || _a === void 0 ? void 0 : _a.rotateY(0.005);
                (_b = this.planetEarth) === null || _b === void 0 ? void 0 : _b.rotateX(0.005);
            }
            this.renderer.render(this.scene, this.camera);
        };
    }
    initShowCoordsOfCurrentUsersLocationOnPlanet() {
        let sub;
        sub = this.currentUser$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)((user) => user instanceof _interfaces__WEBPACK_IMPORTED_MODULE_4__.UserProfile), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsub), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.exhaustMap)((user) => {
            let endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.endpoints.getLocationCoords(user.city);
            return this.adjustCameraToLookAtLocation(endpoint, sub);
        }))
            .subscribe();
    }
    calcPosFromLatLonRad(lat, lon) {
        var phi = (90 - lat) * (Math.PI / 180);
        var theta = (lon + 180) * (Math.PI / 180);
        let x = -(Math.sin(phi) * Math.cos(theta)) * src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.threeJSBackground.planetEarthRadians;
        let y = (Math.cos(phi)) * src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.threeJSBackground.planetEarthRadians;
        let z = (Math.sin(phi) * Math.sin(theta)) * src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.threeJSBackground.planetEarthRadians;
        return { x, y, z };
    }
    ngOnInit() {
        this.initThreeJs();
        this.animate();
        this.updateEarthsPosition().subscribe();
    }
    initThreeJs() {
        this.initCamera();
        this.initBackground();
        this.initPlanetEarth();
        this.addLightsToScene();
        this.applyCanvasToDisplayDiv();
        this.initOrbitControls();
    }
    initCamera() {
        this.camera = new three__WEBPACK_IMPORTED_MODULE_7__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.setFocalLength(5);
        this.camera.position.set(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.threeJSBackground.cameraProfilesPosition.x, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.threeJSBackground.cameraProfilesPosition.y, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.threeJSBackground.cameraProfilesPosition.z);
    }
    initBackground() {
        new three__WEBPACK_IMPORTED_MODULE_7__.TextureLoader().load("content/img/pexels-peng-liu-169647.jpg", (result) => {
            this.scene.background = result;
        }, () => { }, console.log);
    }
    initPlanetEarth() {
        new three__WEBPACK_IMPORTED_MODULE_7__.TextureLoader().load("content/img/earth.jpg", (result) => {
            let geometry = new three__WEBPACK_IMPORTED_MODULE_7__.SphereGeometry(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.threeJSBackground.planetEarthRadians, 64, 64);
            let material = new three__WEBPACK_IMPORTED_MODULE_7__.MeshLambertMaterial({ map: result });
            this.planetEarth = new three__WEBPACK_IMPORTED_MODULE_7__.Mesh(geometry, material);
            this.scene.add(this.planetEarth);
        }, () => { }, console.log);
    }
    initOrbitControls() {
        this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.update();
    }
    addLightsToScene() {
        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_7__.AmbientLight(0xffffff, 1.5));
        let light = new three__WEBPACK_IMPORTED_MODULE_7__.DirectionalLight(0xffffff, 0.35);
        light.position.set(1, 5, 1).normalize();
        this.scene.add(light);
    }
    updateEarthsPosition() {
        return this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.ngUnsub), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)((evt) => evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)((evt) => {
            (0,content_scripts_tween_js_tween__WEBPACK_IMPORTED_MODULE_1__.removeAll)();
            let finalPosition = evt.url.match(/^\/\profiles/) ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.threeJSBackground.cameraProfilesPosition : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.threeJSBackground.cameraProfilePosition;
            new content_scripts_tween_js_tween__WEBPACK_IMPORTED_MODULE_1__.Tween(this.camera.position)
                .to(finalPosition, 1200)
                .onComplete(() => {
                if (!evt.url.match(/^\/\profiles/)) {
                    this.initShowCoordsOfCurrentUsersLocationOnPlanet();
                }
            })
                .start();
        }));
    }
    ngOnDestroy() {
        this.ngUnsub.next();
        this.ngUnsub.complete();
    }
}
ThreejsBackgroundComponent.ɵfac = function ThreejsBackgroundComponent_Factory(t) { return new (t || ThreejsBackgroundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_utils_utility_service__WEBPACK_IMPORTED_MODULE_5__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_15__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient)); };
ThreejsBackgroundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: ThreejsBackgroundComponent, selectors: [["app-threejs-background"]], decls: 0, vars: 0, template: function ThreejsBackgroundComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRocmVlanMtYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoidGhyZWVqcy1iYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGluc2V0OjA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59Il19 */"] });


/***/ }),

/***/ 7802:
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleImportGuard": () => (/* binding */ moduleImportGuard)
/* harmony export */ });
const moduleImportGuard = (parentModule, moduleName) => {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
};


/***/ }),

/***/ 8775:
/*!*******************************************************!*\
  !*** ./src/app/core/routing/interfaces/go-payload.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9707:
/*!**************************************************!*\
  !*** ./src/app/core/routing/interfaces/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _route_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-data */ 7230);
/* harmony import */ var _route_history_member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-history-member */ 6054);
/* harmony import */ var _success_payload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success-payload */ 8286);
/* harmony import */ var _go_payload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./go-payload */ 8775);






/***/ }),

/***/ 7230:
/*!*******************************************************!*\
  !*** ./src/app/core/routing/interfaces/route-data.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6054:
/*!*****************************************************************!*\
  !*** ./src/app/core/routing/interfaces/route-history-member.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8286:
/*!************************************************************!*\
  !*** ./src/app/core/routing/interfaces/success-payload.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3681:
/*!************************************************!*\
  !*** ./src/app/core/routing/routing.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutingModule": () => (/* binding */ RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.routes */ 8693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class RoutingModule {
}
RoutingModule.ɵfac = function RoutingModule_Factory(t) { return new (t || RoutingModule)(); };
RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RoutingModule });
RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_0__.appRoutes, {
                enableTracing: false,
                onSameUrlNavigation: 'reload',
                paramsInheritanceStrategy: 'always',
                relativeLinkResolution: 'legacy'
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5180:
/*!*************************************************!*\
  !*** ./src/app/core/routing/routing.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutingService": () => (/* binding */ RoutingService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/actions */ 9826);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 5585);






class RoutingService {
    constructor(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
        // I suggest refactoring this to be a public ReplaySubject
        this.history = [];
        this.reloading = false;
    }
    get currentFragment() {
        const tree = this.router.parseUrl(this.router.url);
        return tree.fragment;
    }
    get currentName() {
        return this.childRoute.data.name;
    }
    get currentPath() {
        return this.router.url.split('?')[0];
    }
    get currentUrl() {
        return this.router.url;
    }
    get data() {
        return this.childRoute.data;
    }
    get end$() {
        return this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd
            || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationError || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationCancel));
    }
    get error$() {
        return this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationError));
    }
    get previousName() {
        return this.previousRoute && this.previousRoute.name || null;
    }
    get previousPath() {
        return this.previousUrl ? this.previousUrl.split('?')[0] : null;
    }
    get previousRoute() {
        return this.history[this.history.length - 2] || null;
    }
    get previousUrl() {
        return this.previousRoute && this.previousRoute.url || null;
    }
    get queryParams() {
        return this.getQueryParams();
    }
    get queryParams$() {
        return this.route.firstChild.queryParams;
    }
    get routeParams() {
        return this.getRouteParams();
    }
    get routeParams$() {
        return this.route.firstChild.paramMap;
    }
    get routesRecognized$() {
        return this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.RoutesRecognized));
    }
    get start$() {
        return this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationStart));
    }
    get success$() {
        return this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd));
    }
    get childRoute() {
        let route = this.router.routerState.snapshot.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        return route;
    }
    getQueryParam(key) {
        return this.route.snapshot.queryParamMap.get(key);
    }
    getQueryParams(snapshot) {
        snapshot = snapshot || this.route.snapshot;
        const params = {};
        snapshot.queryParamMap.keys.forEach((key) => {
            if (key.match(/\[]/)) {
                params[key] = snapshot.queryParamMap.getAll(key);
            }
            else {
                params[key] = snapshot.queryParamMap.get(key);
            }
        });
        return params;
    }
    getRouteParam(key) {
        return this.childRoute.paramMap.get(key);
    }
    getRouteParams() {
        const params = {};
        this.childRoute.paramMap.keys.forEach((key) => {
            params[key] = this.childRoute.paramMap.get(key);
        });
        return params;
    }
    init() {
        this.start$.subscribe(() => {
            // connect to ngrx
            this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.routingActions.start());
        });
        this.success$.subscribe(({ urlAfterRedirects }) => {
            if (!this.reloading) {
                this.history = [
                    ...this.history,
                    {
                        name: this.childRoute.data.name,
                        url: urlAfterRedirects
                    }
                ];
                // connect to ngrx
                this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.routingActions.success({
                    currentRoute: this.childRoute,
                    history: this.history,
                    name: this.currentName,
                    params: this.routeParams,
                    queryParams: this.queryParams,
                    url: urlAfterRedirects
                }));
            }
            else {
                // connect to ngrx
                this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.routingActions.reload());
            }
        });
    }
    reload() {
        this.reloading = true;
        this.router.onSameUrlNavigation = 'reload';
        this.toUrl(this.currentUrl).then(() => {
            this.reloading = false;
            this.router.onSameUrlNavigation = 'ignore';
        });
    }
    removeQueryParams(params) {
        if (params) {
            const queryParamsToRemove = {};
            params.forEach((param) => {
                queryParamsToRemove[param] = null;
            });
            return this.updateQueryParams(queryParamsToRemove);
        }
        else {
            return this.router.navigate([], { queryParams: {}, relativeTo: this.route });
        }
    }
    toRoute(commands, extras = {}) {
        return this.router.navigate(commands, extras);
    }
    toUrl(url, extras) {
        const destination = !extras ? url : this.router.createUrlTree([url], extras);
        return this.router.navigateByUrl(destination);
    }
    updateQueryParams(queryParams) {
        return this.router.navigate([], { queryParams, queryParamsHandling: 'merge', relativeTo: this.route });
    }
}
RoutingService.ɵfac = function RoutingService_Factory(t) { return new (t || RoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
RoutingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RoutingService, factory: RoutingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1762:
/*!*********************************************!*\
  !*** ./src/app/core/routing/store/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutingEffects": () => (/* reexport safe */ _routing_effects__WEBPACK_IMPORTED_MODULE_0__.RoutingEffects),
/* harmony export */   "getCurrentRoute": () => (/* reexport safe */ _routing_selectors__WEBPACK_IMPORTED_MODULE_1__.getCurrentRoute),
/* harmony export */   "getCurrentRouteName": () => (/* reexport safe */ _routing_selectors__WEBPACK_IMPORTED_MODULE_1__.getCurrentRouteName),
/* harmony export */   "getParams": () => (/* reexport safe */ _routing_selectors__WEBPACK_IMPORTED_MODULE_1__.getParams),
/* harmony export */   "getPrevState": () => (/* reexport safe */ _routing_selectors__WEBPACK_IMPORTED_MODULE_1__.getPrevState),
/* harmony export */   "getPrevUrl": () => (/* reexport safe */ _routing_selectors__WEBPACK_IMPORTED_MODULE_1__.getPrevUrl),
/* harmony export */   "getQueryParams": () => (/* reexport safe */ _routing_selectors__WEBPACK_IMPORTED_MODULE_1__.getQueryParams),
/* harmony export */   "getRouterState": () => (/* reexport safe */ _routing_selectors__WEBPACK_IMPORTED_MODULE_1__.getRouterState),
/* harmony export */   "getTransitionInProgress": () => (/* reexport safe */ _routing_selectors__WEBPACK_IMPORTED_MODULE_1__.getTransitionInProgress),
/* harmony export */   "getUrl": () => (/* reexport safe */ _routing_selectors__WEBPACK_IMPORTED_MODULE_1__.getUrl)
/* harmony export */ });
/* harmony import */ var _routing_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing.effects */ 4792);
/* harmony import */ var _routing_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing.selectors */ 8226);




/***/ }),

/***/ 5348:
/*!*******************************************************!*\
  !*** ./src/app/core/routing/store/routing.actions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routingActions": () => (/* binding */ routingActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

const go = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Routing] Go', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const reload = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Routing] Reloaded');
const start = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Routing] Started');
const success = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Routing] Succeed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const routingActions = { go, reload, start, success };


/***/ }),

/***/ 4792:
/*!*******************************************************!*\
  !*** ./src/app/core/routing/store/routing.effects.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutingEffects": () => (/* binding */ RoutingEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/actions */ 9826);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routing.service */ 5180);






class RoutingEffects {
    constructor(actions$, routingService) {
        this.actions$ = actions$;
        this.routingService = routingService;
        this.go$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_store_actions__WEBPACK_IMPORTED_MODULE_0__.routingActions.go), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(({ path, queryParams, url }) => {
            if (url) {
                if (queryParams) {
                    this.routingService.toUrl(url, { queryParams });
                }
                else {
                    this.routingService.toUrl(url);
                }
            }
            else if (path) {
                this.routingService.toRoute(path, { queryParams: queryParams || null });
            }
        })), { dispatch: false });
        this.reload$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_store_actions__WEBPACK_IMPORTED_MODULE_0__.routingActions.reload), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
            this.routingService.reload();
        })), { dispatch: false });
    }
}
RoutingEffects.ɵfac = function RoutingEffects_Factory(t) { return new (t || RoutingEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_routing_service__WEBPACK_IMPORTED_MODULE_1__.RoutingService)); };
RoutingEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RoutingEffects, factory: RoutingEffects.ɵfac });


/***/ }),

/***/ 3757:
/*!********************************************************!*\
  !*** ./src/app/core/routing/store/routing.reducers.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/actions */ 9826);


const initialState = {
    currentRoute: null,
    history: [],
    inProgress: false,
    name: null,
    params: null,
    prevRoute: null,
    queryParams: null,
    url: '/'
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_store_actions__WEBPACK_IMPORTED_MODULE_0__.routingActions.reload, (state) => (Object.assign(Object.assign({}, state), { inProgress: false }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_store_actions__WEBPACK_IMPORTED_MODULE_0__.routingActions.start, (state) => (Object.assign(Object.assign({}, state), { inProgress: true }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_store_actions__WEBPACK_IMPORTED_MODULE_0__.routingActions.success, (state, payload) => (Object.assign(Object.assign(Object.assign({}, state), payload), { inProgress: false, prevRoute: state.currentRoute }))));


/***/ }),

/***/ 8226:
/*!*********************************************************!*\
  !*** ./src/app/core/routing/store/routing.selectors.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentRoute": () => (/* binding */ getCurrentRoute),
/* harmony export */   "getCurrentRouteName": () => (/* binding */ getCurrentRouteName),
/* harmony export */   "getParams": () => (/* binding */ getParams),
/* harmony export */   "getPrevState": () => (/* binding */ getPrevState),
/* harmony export */   "getPrevUrl": () => (/* binding */ getPrevUrl),
/* harmony export */   "getQueryParams": () => (/* binding */ getQueryParams),
/* harmony export */   "getRouterState": () => (/* binding */ getRouterState),
/* harmony export */   "getTransitionInProgress": () => (/* binding */ getTransitionInProgress),
/* harmony export */   "getUrl": () => (/* binding */ getUrl)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

const currentRoute = (state) => state.currentRoute;
const currentRouteName = (state) => state.name;
const inProgress = (state) => state.inProgress;
const params = (state) => state.params;
const prevRoute = (state) => state.prevRoute;
const prevUrl = (state) => {
    if (state.history.length < 2) {
        return null;
    }
    return state.history[state.history.length - 2].url || null;
};
const queryParams = (state) => state.queryParams;
const url = (state) => state.url;
const getRouterState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('routing');
const getCurrentRoute = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getRouterState, currentRoute);
const getCurrentRouteName = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getRouterState, currentRouteName);
const getTransitionInProgress = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getRouterState, inProgress);
const getParams = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getRouterState, params);
const getPrevState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getRouterState, prevRoute);
const getPrevUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getRouterState, prevUrl);
const getQueryParams = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getRouterState, queryParams);
const getUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getRouterState, url);


/***/ }),

/***/ 2373:
/*!******************************************!*\
  !*** ./src/app/core/utils/main-utils.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateRandomNumber": () => (/* binding */ generateRandomNumber),
/* harmony export */   "selectRandomOptionFromArray": () => (/* binding */ selectRandomOptionFromArray)
/* harmony export */ });
let generateRandomNumber = (range = 100, additional = 0) => {
    return Math.floor(Math.random() * range) + additional;
};
let selectRandomOptionFromArray = (myArray, index) => {
    return myArray[generateRandomNumber(index !== null && index !== void 0 ? index : myArray.length)];
};


/***/ }),

/***/ 5525:
/*!***********************************************!*\
  !*** ./src/app/core/utils/utility.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var _core_layout_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layout/store */ 1891);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1133);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 5585);







class UtilService {
    constructor(actions$, store) {
        this.actions$ = actions$;
        this.store = store;
    }
    numberParse(dimension /* string or array */) {
        if (typeof dimension === "string") {
            return parseFloat(dimension.split("p")[0]);
        }
        else {
            return dimension
                .map((x) => {
                return parseFloat(x.split("p")[0]);
            });
        }
    }
    generateEntityEffect(loadingAction, loadingActionText, failText, asyncObsFn, successAction, failAction) {
        let callback = () => {
            return this.actions$
                .pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(loadingAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(() => {
                this.store.dispatch(_core_layout_store__WEBPACK_IMPORTED_MODULE_0__.LayoutActions.showOverlayLoading({ text: loadingActionText }));
                return asyncObsFn()
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => successAction({ result })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
                    this.store.dispatch(_core_layout_store__WEBPACK_IMPORTED_MODULE_0__.LayoutActions.showSnackBar({ text: failText }));
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(failAction({ error }));
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
                    this.store.dispatch(_core_layout_store__WEBPACK_IMPORTED_MODULE_0__.LayoutActions.hideOverlayLoading());
                }));
            }));
        };
        return (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(callback);
    }
}
UtilService.ɵfac = function UtilService_Factory(t) { return new (t || UtilService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
UtilService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: UtilService, factory: UtilService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5790:
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesModule": () => (/* binding */ FeaturesModule)
/* harmony export */ });
/* harmony import */ var _core_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layout/layout.module */ 4122);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page */ 9000);
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.module */ 649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class FeaturesModule {
}
FeaturesModule.ɵfac = function FeaturesModule_Factory(t) { return new (t || FeaturesModule)(); };
FeaturesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FeaturesModule });
FeaturesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _core_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule,
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_2__.ProfileModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FeaturesModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent], imports: [_core_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule,
        _profile_profile_module__WEBPACK_IMPORTED_MODULE_2__.ProfileModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule], exports: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent] }); })();


/***/ }),

/***/ 2675:
/*!***********************************************************!*\
  !*** ./src/app/features/home-page/home-page.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_layout_page_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/layout/page/page.component */ 5662);
/* harmony import */ var _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/layout/header/header.component */ 3261);
/* harmony import */ var _core_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/layout/footer/footer.component */ 7930);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





class HomePageComponent {
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["crx-home-page"]], decls: 8, vars: 7, consts: [[3, "showBackground"], [1, "header"], [3, "pageTitle"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "crx-page", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "crx-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "crx-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showBackground", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, "homePage.pageTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, "homePage.title"));
    } }, directives: [_core_layout_page_page_component__WEBPACK_IMPORTED_MODULE_0__.PageComponent, _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _core_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 9000:
/*!*********************************************!*\
  !*** ./src/app/features/home-page/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* reexport safe */ _home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent)
/* harmony export */ });
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.component */ 2675);



/***/ }),

/***/ 7929:
/*!***********************************************************!*\
  !*** ./src/app/features/profile/interfaces/api-models.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetUserAPISuccessModel": () => (/* binding */ GetUserAPISuccessModel)
/* harmony export */ });
class GetUserAPISuccessModel {
}


/***/ }),

/***/ 7376:
/*!******************************************************!*\
  !*** ./src/app/features/profile/interfaces/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetUserAPISuccessModel": () => (/* reexport safe */ _api_models__WEBPACK_IMPORTED_MODULE_2__.GetUserAPISuccessModel),
/* harmony export */   "ProfileState": () => (/* reexport safe */ _profile_state__WEBPACK_IMPORTED_MODULE_0__.ProfileState),
/* harmony export */   "UserProfile": () => (/* reexport safe */ _user_profile__WEBPACK_IMPORTED_MODULE_1__.UserProfile)
/* harmony export */ });
/* harmony import */ var _profile_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-state */ 8868);
/* harmony import */ var _user_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile */ 9908);
/* harmony import */ var _api_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-models */ 7929);





/***/ }),

/***/ 8868:
/*!**************************************************************!*\
  !*** ./src/app/features/profile/interfaces/profile-state.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileState": () => (/* binding */ ProfileState)
/* harmony export */ });
class ProfileState {
    constructor() {
        this.users = [];
        this.currentUserId = null;
    }
}


/***/ }),

/***/ 9908:
/*!*************************************************************!*\
  !*** ./src/app/features/profile/interfaces/user-profile.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfile": () => (/* binding */ UserProfile)
/* harmony export */ });
class UserProfile {
    constructor(params = {}) {
        this.profileDetailDisplay = Array(5)
            .fill(null)
            .map((nullVal, index0) => {
            return {
                type: ["single", "single", "double", "single", "date"][index0],
                detailKey: "profileDetail.detailKeys." + index0,
                value: []
            };
        });
        Object.assign(this, Object.assign({}, params));
        this.profileDetailDisplay[0].value.push(this.phoneNumber);
        this.profileDetailDisplay[1].value.push(this.cellNumber);
        this.profileDetailDisplay[2].value.push(this.city, this.state);
        this.profileDetailDisplay[3].value.push(this.email);
        this.profileDetailDisplay[4].value.push(this.dateOfBirth);
    }
}


/***/ }),

/***/ 5225:
/*!**********************************************************!*\
  !*** ./src/app/features/profile/profile-detail/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileDetailComponent": () => (/* reexport safe */ _profile_detail_component__WEBPACK_IMPORTED_MODULE_0__.ProfileDetailComponent)
/* harmony export */ });
/* harmony import */ var _profile_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-detail.component */ 5221);



/***/ }),

/***/ 5221:
/*!*****************************************************************************!*\
  !*** ./src/app/features/profile/profile-detail/profile-detail.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileDetailComponent": () => (/* binding */ ProfileDetailComponent)
/* harmony export */ });
/* harmony import */ var _profile_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @profile//store */ 1334);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/selectors */ 9209);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_layout_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/layout/page/page.component */ 5662);
/* harmony import */ var _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/layout/header/header.component */ 3261);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 3935);


// rxjs


// misc












function ProfileDetailComponent_mat_card_7_ng_container_10_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const metadata_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](metadata_r3.value[0]);
} }
function ProfileDetailComponent_mat_card_7_ng_container_10_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const metadata_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, metadata_r3.value[0]));
} }
function ProfileDetailComponent_mat_card_7_ng_container_10_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const metadata_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", metadata_r3.value[0], ", ", metadata_r3.value[1], "");
} }
function ProfileDetailComponent_mat_card_7_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-list-item", 8)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfileDetailComponent_mat_card_7_ng_container_10_span_5_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ProfileDetailComponent_mat_card_7_ng_container_10_span_6_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ProfileDetailComponent_mat_card_7_ng_container_10_span_7_Template, 2, 2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const metadata_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", metadata_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, metadata_r3.detailKey), " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "single");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "double");
} }
function ProfileDetailComponent_mat_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 5)(1, "mat-card-title-group")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-card-content")(9, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ProfileDetailComponent_mat_card_7_ng_container_10_Template, 9, 7, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const user_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 6, "profileDetail.profileTitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", user_r1.firstName, " ", user_r1.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", user_r1.picture, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", user_r1.firstName + " " + user_r1.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", user_r1.profileDetailDisplay);
} }
class ProfileDetailComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
        this.ngUnsub = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    }
    ngOnInit() {
        this.updateUser$BasedOnGetUserStrategy();
        this.determineHowToLoadUserProfile();
    }
    updateUser$BasedOnGetUserStrategy() {
        this.user$ = {
            "api": this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.getUserProfile),
            "route": this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.pickUserProfile)
        }[src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.env.profileDetail.getUserStrategy];
    }
    determineHowToLoadUserProfile() {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.env.profileDetail.getUserStrategy === "api") {
            this.store.dispatch(_profile_store__WEBPACK_IMPORTED_MODULE_0__.ProfileActions.loadingGetRandomProfile());
        }
        else {
            this.route.params
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngUnsub), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)((result) => {
                this.store.dispatch(_profile_store__WEBPACK_IMPORTED_MODULE_0__.ProfileActions.updateCurrentUserId({ id: +result.id - 1 }));
            }))
                .subscribe();
        }
    }
    ngOnDestroy() {
        this.ngUnsub.next();
        this.ngUnsub.complete();
    }
}
ProfileDetailComponent.ɵfac = function ProfileDetailComponent_Factory(t) { return new (t || ProfileDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute)); };
ProfileDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProfileDetailComponent, selectors: [["crx-profile-detail"]], decls: 9, vars: 7, consts: [[1, "header"], ["pageTitle", "profileDetail.pageTitle"], [1, "body"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["class", "card", 4, "ngIf"], [1, "card"], ["mat-card-md-image", "", 1, "circle", 3, "src", "alt"], [4, "ngFor", "ngForOf"], [3, "ngSwitch"], ["class", "detailValue", 4, "ngSwitchCase"], [1, "detailValue"]], template: function ProfileDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "crx-page")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "crx-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ProfileDetailComponent_mat_card_7_Template, 11, 8, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/profiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 3, "profileDetail.back"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 5, ctx.user$));
    } }, directives: [_core_layout_page_page_component__WEBPACK_IMPORTED_MODULE_3__.PageComponent, _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitleGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardMdImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatList, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchCase, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: [".circle[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n\n.body[_ngcontent-%COMP%] {\n  padding: 1rem 20% 0 20%;\n  max-width: 120rem;\n  margin: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: 1rem 0 0 0;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7QUFESjs7QUFJQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksMENBQUE7QUFESiIsImZpbGUiOiJwcm9maWxlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY2lyY2xlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4uYm9keXtcbiAgICBwYWRkaW5nOiAxcmVtICAyMCUgMCAyMCUgO1xuICAgIG1heC13aWR0aDogMTIwcmVtO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luOiAxcmVtIDAgMCAwO1xufVxuXG5tYXQtY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudGl6ZSgkY29sb3I6ICNmZmZmZmYsICRhbW91bnQ6IC41KTtcbiAgfVxuIl19 */"] });


/***/ }),

/***/ 5173:
/*!*************************************************************************!*\
  !*** ./src/app/features/profile/profile-list/profile-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileListComponent": () => (/* binding */ ProfileListComponent)
/* harmony export */ });
/* harmony import */ var _store_profile_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/profile.selectors */ 9638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _core_layout_page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/layout/page/page.component */ 5662);
/* harmony import */ var _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/layout/header/header.component */ 3261);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _projects_profile_detail_card_src_lib_profile_detail_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../projects/profile-detail-card/src/lib/profile-detail-card.component */ 2956);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










function ProfileListComponent_div_3_lib_profile_detail_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "lib-profile-detail-card", 7);
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/profile/" + (+index_r3 + 1))("index", index_r3 + 1)("user", user_r2);
} }
function ProfileListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ProfileListComponent_div_3_lib_profile_detail_card_8_Template, 1, 3, "lib-profile-detail-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, "profileList.selectRandomUser"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 5, "profileList.instructions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 7, ctx_r0.users$));
} }
class ProfileListComponent {
    constructor(store) {
        this.store = store;
        this.users$ = this.store.select(_store_profile_selectors__WEBPACK_IMPORTED_MODULE_0__.listUserProfiles);
    }
}
ProfileListComponent.ɵfac = function ProfileListComponent_Factory(t) { return new (t || ProfileListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
ProfileListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProfileListComponent, selectors: [["app-profile-list"]], decls: 5, vars: 3, consts: [[1, "header"], ["pageTitle", "profileList.pageTitle"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "misc"], ["routerLink", "/profile", "mat-raised-button", "", "color", "primary"], [3, "routerLink", "index", "user", 4, "ngFor", "ngForOf"], [3, "routerLink", "index", "user"]], template: function ProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "crx-page")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "crx-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProfileListComponent_div_3_Template, 10, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, ctx.users$).length !== 0);
    } }, directives: [_core_layout_page_page_component__WEBPACK_IMPORTED_MODULE_1__.PageComponent, _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _projects_profile_detail_card_src_lib_profile_detail_card_component__WEBPACK_IMPORTED_MODULE_3__.ProfileDetailCardComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 40rem;\n  margin: auto;\n  overflow: auto;\n  padding: 20px 0;\n}\n.misc[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row wrap;\n}\n.misc[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 20px 20px 0;\n}\nspan[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcbWl4aW5zXFxwb3NpdGlvbi5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHV0aWxzXFx2YXJpYWJsZXNcXGJvcmRlcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFxtZWRpYS1xdWVyaWVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcdXRpbHNcXHZhcmlhYmxlc1xcc2l6ZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFx1dGlsc1xcdmFyaWFibGVzXFx0aW1lLnNjc3MiLCJwcm9maWxlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OytDQUFBO0FDQUE7OytDQUFBO0FDQUE7OytDQUFBO0FBQUE7OytDQUFBO0FDQUE7OytDQUFBO0FBSUEsa0JBQUE7QUF3QkEsNkJBQUE7QUM1QkE7OytDQUFBO0FDQUE7OytDQUFBO0FBSUEsY0FBQTtBQ0hBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBd0JGO0FBckJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUF3QkY7QUF2QkU7RUFDRSxxQkFBQTtBQXlCSjtBQXJCQTtFQUNFLFdKa0JNO0FJTVIiLCJmaWxlIjoicHJvZmlsZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gUG9zaXRpb24gbWl4aW5zXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuQG1peGluIHBvc2l0aW9uKCRwb3NpdGlvbjogbnVsbCwgJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xuICAgIEBpZiAkcG9zaXRpb24gIT0gbnVsbCB7XG4gICAgICAgIHBvc2l0aW9uOiAkcG9zaXRpb247XG4gICAgfVxuICAgIEBpZiAkdG9wICE9IG51bGwge1xuICAgICAgICB0b3A6ICR0b3A7XG4gICAgfVxuICAgIEBpZiAkcmlnaHQgIT0gbnVsbCB7XG4gICAgICAgIHJpZ2h0OiAkcmlnaHQ7XG4gICAgfVxuICAgIEBpZiAkYm90dG9tICE9IG51bGwge1xuICAgICAgICBib3R0b206ICRib3R0b207XG4gICAgfVxuICAgIEBpZiAkbGVmdCAhPSBudWxsIHtcbiAgICAgICAgbGVmdDogJGxlZnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gYWJzb2x1dGUoJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLCAkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KTtcbn1cblxuQG1peGluIGZpeGVkKCR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihmaXhlZCwgJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCk7XG59XG5cbkBtaXhpbiByZWxhdGl2ZSgkdG9wOiBudWxsLCAkcmlnaHQ6IG51bGwsICRib3R0b206IG51bGwsICRsZWZ0OiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24ocmVsYXRpdmUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpO1xufVxuXG5AbWl4aW4gc3RhdGljKCR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihzdGF0aWMsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpO1xufVxuXG5cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIEJvcmRlciB2YXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQGltcG9ydCAnY29sb3JzJztcblxuLy9ib3JkZXJzXG4kYm9yZGVyTGlnaHQ6IDFweCBzb2xpZCAkY29sb3JCb3JkZXI7XG4kYm9yZGVyTGlnaHRHcmV5OiAxcHggc29saWQgJGxpZ2h0R3JheTtcbiRyYWRpdXM6IDJweDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvbG9ycyB2YXJpYWJsZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4kYmx1ZTogIzJlOGRkZDsvL2JsdWUgZGUgZnJhbmNlXG4kZ3JlZW46ICMzOWIyNzM7IC8vbWVkaXVtIHNlZSBncmVlblxuJHJlZDogI2QyNjY2NjsgLy9pbmRpYW4gcmVkXG4kb3JhbmdlOiAjZTU5YzI2OyAvL2NhbWJvZ2Ugb3JhbmdlXG5cbiRibHVlSG92ZXI6ICMzOGE0ZmY7Ly9ibHVlIGRlIGZyYW5jZVxuJGdyZWVuSG92ZXI6ICM0NWQyODg7IC8vbWVkaXVtIHNlZSBncmVlblxuJG9yYW5nZUhvdmVyOiAjZmZhZjJkOyAvL2NhbWJvZ2Ugb3JhbmdlXG4kcmVkSG92ZXI6IGxpZ2h0ZW4oI2QyNjY2NiwgMTAlKTsgLy9pbmRpYW4gcmVkXG5cbiRkYXJrR3JheTogIzMzMztcbiRtZWRpdW1HcmF5OiAjY2NjO1xuJGxpZ2h0R3JheTogI2Y1ZjVmNTtcbiRzdHJpcGVHcmF5OiAjZmFmYWZhO1xuJGxlZnRTaWRlTWVudUdyYXk6ICM0YTRhNGE7XG4kbGlnaHRCbHVlOiAjZTFmMWZmO1xuXG4kdGV4dERhcmtHcmF5OiAkZGFya0dyYXk7XG4kdGV4dEdyYXk6ICNhMmEyYTI7XG4kdGV4dFBhbGVHcmF5OiAjMjYyNjI2O1xuJHRleHRTbWFsbEdyYXk6ICM4MzgzODM7XG4kdGV4dFNlY29uZGFyeUdyYXk6ICM5YjliOWI7XG4kZGlzYWJsZWQtZ3JheTogI2Q5ZDlkOTtcbiRkaXNhYmxlZC1saWdodC1ncmF5OiAjZTVlNWU1O1xuJHBhbmVsR3JheTogI2Y4ZjhmODtcbiRncmF5LTUwOiAjNWY1ZjVmO1xuJGdyYXlBbHQ6ICNkOGQ4ZDg7XG5cbiRkYXJrLWdyZWVuOiAjNGM4NDdjO1xuJGxpZ2h0LWdyZWVuOiAjNzliZmI2O1xuXG4kYmxhY2s6ICMxMTE7XG4kYmxhY2tPcmlnaW5hbDogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcblxuJGxpbmtlZC1pbi1ibHVlOiAjMDA3N2I1O1xuJGdvb2dsZS1wbHVzOiAjZGQ0YzM5O1xuJGZhY2Vib29rLWJsdWU6ICMzYjU5OTg7XG4kZGFyay1ibHVlOiAjMGU0YTdjO1xuXG4kY29sb3JFcnJvcjogI2U4M2YyOTtcbiRjb2xvckljb25CdG46ICNhMGEwYTA7XG5cbiRjb2xvckJvcmRlcjogI2RhZGFkYTsgLy9kZWZhdWx0IGJvcmRlciBjb2xvclxuJGNvbG9yQm9yZGVyTGlnaHQ6ICNlM2UzZTM7XG4kY29sb3JGb3JtQm9yZGVyOiAkY29sb3JCb3JkZXI7XG4kY29sb3JGb3JtQm9yZGVySG92ZXI6I2JiYjtcbiRuZXdDb2xvckJvcmRlcjogIzk3OTc5NztcblxuLy8gYmFja2dyb3VuZHNcbi8vICRiYWNrZ3JvdW5kLWxpZ2h0LWdyYXk6ICNlOGU4ZTg7XG4kYmFja2dyb3VuZC1saWdodC1ncmF5OnRyYW5zcGFyZW50aXplKCRkYXJrR3JheSwuNSk7XG4kYmFja2dyb3VuZC1pbmRpYW4tcmVkOiB0cmFuc3BhcmVudGl6ZSgjZDI2NjY2LCAuNSk7IFxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gTWVkaWEgcXVlcnkgdmFyaWFibGVzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyogbWVkaWEgcXVlcmllcyAqL1xuJG1vYmlsZTogICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCknO1xuJHNtYWxsTW9iaWxlOlx0XHRcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpJztcbiRtZWRpdW1Nb2JpbGU6XHRcdFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCknO1xuJHRhYmxldDogICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCknO1xuJHRhYmxldFBvcnRyYWl0OiAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSc7XG4kdGFibGV0UG9ydHJhaXREb3duOiAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSc7XG4kdGFibGV0TGFuZHNjYXBlOiAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSc7XG4kc21hbGxEZXNrdG9wOiAgICAgICAgICAgICBcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSc7XG4kdGFibGV0TGFuZHNjYXBlRG93bjogXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCknO1xuJGRlc2t0b3A6ICAgICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpJztcbiRub3RNb2JpbGU6ICAgICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpJztcbiRsYXB0b3A6ICAgICAgICAgICAgICBcdFx0ICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSc7XG4kbGFwdG9wRG93bjogICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCknO1xuJGxhcHRvcFRhYmxldDogICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCknO1xuJGxhcHRvcFRhYmxldExhbmRzY2FwZTogICAgICAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSc7XG4kbGFyZ2VEZXNrdG9wOiAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCknO1xuJGxhcmdlRGVza3RvcERvd246ICAgICAgICBcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1OTlweCknO1xuJHhsRGVza3RvcDogICAgICAgICAgIFx0XHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpJztcbiR4bERlc2t0b3BEb3duOiAgICAgICAgICAgXHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJztcbiR4eGxEZXNrdG9wOiAgICAgICAgICAgXHRcdCAgICAnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCknO1xuJHh4eGxEZXNrdG9wOiAgICAgICAgICAgXHQgICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpJztcbiRkZWtzdG9wRG93bkZvckNhbXBhaWduczpcdCAgICAnb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweCknO1xuXG4vKiBtZWRpYSBxdWVyaWVzIGZvciBoZWFkZXIgKi9cbiR0YWJsZXRGb3JIZWFkZXI6ICAgICAgICAgICAgICBcdCdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMjMwcHgpJztcbiR0YWJsZXRMYW5kc2NhcGVGb3JIZWFkZXI6ICAgICBcdCdvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjMwcHgpJztcbiR0YWJsZXRMYW5kc2NhcGVEb3duRm9ySGVhZGVyOiBcdCdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzMHB4KSc7XG4kZGVza3RvcEZvckhlYWRlcjogICAgICAgICAgICAgXHQnb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzFweCknO1xuJGxhcHRvcEZvckhlYWRlcjogICAgICAgICAgICAgIFx0J29ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMxcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpJztcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIFNpemUgdmFyaWFibGVzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy9kZWZhdWx0IHBhZGRpbmdzXG4kZ2FwTGFyZ2U6IDIwcHg7XG4kZ2FwRGVmYXVsdDogMTVweDtcblxuLy8gVG8gZG8gcmVuYW1lIHZhcmlhYmxlc1xuJGhlYWRlckhlaWdodDogNzVweDtcbiR0b29sYmFySGVpZ2h0OiA2NnB4O1xuJHN1YkhlYWRlckhlaWdodExhcHRvcDogNTVweDtcbiRtYXJrZXRSZXBvcnROYXZIZWlnaHRNb2JpbGU6IDY1cHg7XG4vLyBwYWdlVGl0bGUgZGl2IGhlaWdodHMgZGVwZW5kaW5nIG9uIGJyZWFrcG9pbnQgYW5kIHdoZXRoZXIgdGhlIGJhY2sgbGluayBpcyBzaG93biBvciBub3RcbiRwYWdlVGl0bGVIZWlnaHQ6IDcxcHg7XG4kcGFnZVRpdGxlSGVpZ2h0V2l0aEJhY2tMaW5rOiA5MXB4O1xuJHBhZ2VUaXRsZUhlaWdodFRhYmxldDogNTdweDtcbiRwYWdlVGl0bGVIZWlnaHRXaXRoQmFja0xpbmtUYWJsZXQ6IDc3cHg7XG4kcGFnZVRpdGxlSGVpZ2h0TW9iaWxlOiA0OXB4O1xuJHBhZ2VUaXRsZUhlaWdodFdpdGhCYWNrTGlua01vYmlsZTogNzlweDtcbiRsZWZ0U2lkZWJhcldpZHRoOiAyMjBweDtcbiRsZWZ0U2lkZWJhckluZGVudDogMzVweDtcbiRsZWZ0U2lkZWJhclRhYmxldEluZGVudDogMTBweDtcbiRwYWdlRGVmYXVsdEJvdHRvbVBhZGRpbmc6IDEwMHB4O1xuJGZvb3RlckhlaWdodDogNTVweDtcbiRmb290ZXJIZWlnaHRNb2JpbGU6IDQwcHg7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBUaW1lIHZhcmlhYmxlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qIGFuaW1hdGlvbiAqL1xuJHRyYW5zaXRpb25UaW1lOiAuMTVzO1xuIiwiQGltcG9ydCBcInV0aWxzXCI7XHJcbi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDQwcmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBwYWRkaW5nOiAkZ2FwTGFyZ2UgMCA7XHJcbn1cclxuXHJcbi5taXNje1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZmxvdzpyb3cgd3JhcDtcclxuICAqIHtcclxuICAgIG1hcmdpbjowICRnYXBMYXJnZSAkZ2FwTGFyZ2UgMFxyXG4gIH1cclxufVxyXG5cclxuc3BhbntcclxuICBjb2xvcjokd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 4884:
/*!*************************************************************************!*\
  !*** ./src/app/features/profile/profile-main/profile-main.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileMainComponent": () => (/* binding */ ProfileMainComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ 1334);
/* harmony import */ var _store_profile_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/profile.selectors */ 9638);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
// rxjs








class ProfileMainComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.users$ = this.store.select(_store_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.listUserProfiles);
        this.ngUnsub = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.checkIfInitialProfilesWereLoaded().subscribe();
    }
    checkIfInitialProfilesWereLoaded() {
        return this.users$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsub), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((result) => {
            var _a;
            if (result.length === 0) {
                this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.ProfileActions.loadingListRandomProfile());
            }
            else if (result.length < src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.env.profileList.amntOfUsersLimit && !this.initLoadOnScrollBottomSub) {
                this.initLoadOnScrollBottomSub = this.initLoadOnScrollBottom().subscribe();
            }
            else if (result.length === src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.env.profileList.amntOfUsersLimit) {
                (_a = this.initLoadOnScrollBottomSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            }
        }));
    }
    initLoadOnScrollBottom() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(window, 'scroll'), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(window, 'resize'))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.ngUnsub), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
            let xPixelsFromTheBottom = this.determineXPixelsFromBottom();
            if (xPixelsFromTheBottom < src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.env.profileList.amntOfPixelsFromBottomBeforeRetrievingData && this.router.url === "/profiles") {
                this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.ProfileActions.loadingListRandomProfile());
            }
        }));
    }
    determineXPixelsFromBottom() {
        let element = document.documentElement;
        let xPixelsFromTheBottom = Math.abs(((element.scrollHeight - element.scrollTop) - element.clientHeight));
        return xPixelsFromTheBottom;
    }
    ngOnDestroy() {
        this.ngUnsub.next();
        this.ngUnsub.complete();
    }
}
ProfileMainComponent.ɵfac = function ProfileMainComponent_Factory(t) { return new (t || ProfileMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); };
ProfileMainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ProfileMainComponent, selectors: [["app-profile-main"]], decls: 1, vars: 0, template: function ProfileMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLW1haW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 649:
/*!****************************************************!*\
  !*** ./src/app/features/profile/profile.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layout/layout.module */ 4122);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _store_profile_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/profile.reducers */ 2926);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var _store_profile_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/profile.effects */ 3492);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-list/profile-list.component */ 5173);
/* harmony import */ var _profile_main_profile_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-main/profile-main.component */ 4884);
/* harmony import */ var _profile_detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-detail */ 5225);
/* harmony import */ var projects_profile_detail_card_src_public_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/profile-detail-card/src/public-api */ 6394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
// angular



// misc


// @ngrx




// i18n

// profile components







class ProfileModule {
}
ProfileModule.ɵfac = function ProfileModule_Factory(t) { return new (t || ProfileModule)(); };
ProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _core_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            projects_profile_detail_card_src_public_api__WEBPACK_IMPORTED_MODULE_7__.ProfileDetailCardModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreModule.forFeature('profile', _store_profile_reducers__WEBPACK_IMPORTED_MODULE_2__.getProfileReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsModule.forFeature([_store_profile_effects__WEBPACK_IMPORTED_MODULE_3__.ProfileEffects])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_detail__WEBPACK_IMPORTED_MODULE_6__.ProfileDetailComponent,
        _profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_4__.ProfileListComponent,
        _profile_main_profile_main_component__WEBPACK_IMPORTED_MODULE_5__.ProfileMainComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _core_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        projects_profile_detail_card_src_public_api__WEBPACK_IMPORTED_MODULE_7__.ProfileDetailCardModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsFeatureModule], exports: [_profile_detail__WEBPACK_IMPORTED_MODULE_6__.ProfileDetailComponent] }); })();


/***/ }),

/***/ 6437:
/*!**************************************************************!*\
  !*** ./src/app/features/profile/services/profile.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @interfaces */ 1740);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);






class ProfileService {
    constructor(http) {
        this.http = http;
        this.getUser = (raw = false) => {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.env.endpoints.getRandomUser)
                .pipe(raw ? (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)() : (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(getUserSuccess));
        };
        this.listUsersCounter = 0;
        this.listUsers = (raw = false) => {
            if (this.listUsersCounter === src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.env.profileList.amntOfUsersLimit) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
            }
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.env.endpoints.listRandomUsers + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.env.profileList.amountOfUsersToList)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => {
                this.listUsersCounter += src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.env.profileList.amountOfUsersToList;
            }), raw ? (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)() : (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(listUserSuccess(this.listUsersCounter)));
        };
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
ProfileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
// transformation functions
let getUserSuccess = (apiData) => {
    let [randomUser] = apiData.results;
    let uiData = new _interfaces__WEBPACK_IMPORTED_MODULE_0__.UserProfile({
        cellNumber: randomUser.cell,
        city: randomUser.location.city,
        dateOfBirth: randomUser.dob.date,
        email: randomUser.email,
        firstName: randomUser.name.first,
        lastName: randomUser.name.last,
        phoneNumber: randomUser.phone,
        picture: randomUser.picture.medium,
        state: randomUser.location.state,
    });
    return uiData;
};
let listUserSuccess = (currentUserAmnt) => (apiData) => {
    let uiData = apiData.results.map((apiUser, index0) => {
        let uiUser = getUserSuccess({ info: apiData.info, results: [apiUser] });
        uiUser.id = (currentUserAmnt - (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.env.profileList.amountOfUsersToList - index0)) + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.env.profileList.amountOfUsersToList;
        return uiUser;
    });
    return uiData;
};


/***/ }),

/***/ 1334:
/*!*************************************************!*\
  !*** ./src/app/features/profile/store/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileActions": () => (/* reexport module object */ _profile_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "ProfileSelectors": () => (/* reexport module object */ _profile_selectors__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _profile_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.actions */ 2004);
/* harmony import */ var _profile_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.selectors */ 9638);




/***/ }),

/***/ 2004:
/*!***********************************************************!*\
  !*** ./src/app/features/profile/store/profile.actions.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomProfileFail": () => (/* binding */ getRandomProfileFail),
/* harmony export */   "getRandomProfileSuccess": () => (/* binding */ getRandomProfileSuccess),
/* harmony export */   "listRandomProfileFail": () => (/* binding */ listRandomProfileFail),
/* harmony export */   "listRandomProfileSuccess": () => (/* binding */ listRandomProfileSuccess),
/* harmony export */   "loadingGetRandomProfile": () => (/* binding */ loadingGetRandomProfile),
/* harmony export */   "loadingListRandomProfile": () => (/* binding */ loadingListRandomProfile),
/* harmony export */   "updateCurrentUserId": () => (/* binding */ updateCurrentUserId)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

// getRandomProfile Endpoint
const loadingGetRandomProfile = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] Loading Get Random Profile');
const getRandomProfileSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] Get Profile Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getRandomProfileFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] Get Profile Fail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// listRandomProfile Endpoint
const loadingListRandomProfile = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] Loading List Random Profile');
const listRandomProfileSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] List Profile Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const listRandomProfileFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] List Profile Fail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// pickRandomProfile
const updateCurrentUserId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] Update current user id', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 3492:
/*!***********************************************************!*\
  !*** ./src/app/features/profile/store/profile.effects.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEffects": () => (/* binding */ ProfileEffects)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 1334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_utils_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/utility.service */ 5525);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile.service */ 6437);




class ProfileEffects {
    constructor(utilService, profileService) {
        this.utilService = utilService;
        this.profileService = profileService;
        this.getRandomUser$ = this.utilService.generateEntityEffect(_index__WEBPACK_IMPORTED_MODULE_0__.ProfileActions.loadingGetRandomProfile, "profileDetail.initialLoading", "profileDetail.errorLoading", this.profileService.getUser, _index__WEBPACK_IMPORTED_MODULE_0__.ProfileActions.getRandomProfileSuccess, _index__WEBPACK_IMPORTED_MODULE_0__.ProfileActions.getRandomProfileFail);
        this.listRandomUsers$ = this.utilService.generateEntityEffect(_index__WEBPACK_IMPORTED_MODULE_0__.ProfileActions.loadingListRandomProfile, "profileList.initialLoading", "profileList.errorLoading", this.profileService.listUsers, _index__WEBPACK_IMPORTED_MODULE_0__.ProfileActions.listRandomProfileSuccess, _index__WEBPACK_IMPORTED_MODULE_0__.ProfileActions.listRandomProfileFail);
    }
}
ProfileEffects.ɵfac = function ProfileEffects_Factory(t) { return new (t || ProfileEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_utils_utility_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService)); };
ProfileEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProfileEffects, factory: ProfileEffects.ɵfac });


/***/ }),

/***/ 2926:
/*!************************************************************!*\
  !*** ./src/app/features/profile/store/profile.reducers.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProfileReducer": () => (/* binding */ getProfileReducer)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @interfaces */ 1740);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ 1334);



const initialState = new _interfaces__WEBPACK_IMPORTED_MODULE_0__.ProfileState();
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_index__WEBPACK_IMPORTED_MODULE_1__.ProfileActions.getRandomProfileSuccess, (state, action) => (Object.assign(Object.assign({}, state), { currentUser: action.result }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_index__WEBPACK_IMPORTED_MODULE_1__.ProfileActions.listRandomProfileSuccess, (state, action) => (Object.assign(Object.assign({}, state), { users: [...state.users, ...action.result] }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_index__WEBPACK_IMPORTED_MODULE_1__.ProfileActions.updateCurrentUserId, (state, action) => {
    return (Object.assign(Object.assign({}, state), { currentUserId: action.id }));
}));
function getProfileReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ 9638:
/*!*************************************************************!*\
  !*** ./src/app/features/profile/store/profile.selectors.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProfileState": () => (/* binding */ getProfileState),
/* harmony export */   "getUserProfile": () => (/* binding */ getUserProfile),
/* harmony export */   "listUserProfiles": () => (/* binding */ listUserProfiles),
/* harmony export */   "pickUserProfile": () => (/* binding */ pickUserProfile)
/* harmony export */ });
/* harmony import */ var _core_utils_main_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/main-utils */ 2373);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5585);


const getProfileState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('profile');
const getUserProfile = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getProfileState, ({ currentUser: user }) => user);
const listUserProfiles = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getProfileState, ({ users }) => users);
const pickUserProfile = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getProfileState, ({ users, currentUserId }) => {
    let foundUser = users.find(user => user.id === +currentUserId);
    return foundUser !== null && foundUser !== void 0 ? foundUser : (0,_core_utils_main_utils__WEBPACK_IMPORTED_MODULE_0__.selectRandomOptionFromArray)(users);
});


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);

// material






let materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_1__.MatSelectModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDividerModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule,
];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            ...materialModules
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_1__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDividerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_1__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDividerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_1__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDividerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule] }); })();


/***/ }),

/***/ 9826:
/*!**********************************!*\
  !*** ./src/app/store/actions.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomProfileFail": () => (/* reexport safe */ _features_profile_store_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getRandomProfileFail),
/* harmony export */   "getRandomProfileSuccess": () => (/* reexport safe */ _features_profile_store_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getRandomProfileSuccess),
/* harmony export */   "listRandomProfileFail": () => (/* reexport safe */ _features_profile_store_profile_actions__WEBPACK_IMPORTED_MODULE_1__.listRandomProfileFail),
/* harmony export */   "listRandomProfileSuccess": () => (/* reexport safe */ _features_profile_store_profile_actions__WEBPACK_IMPORTED_MODULE_1__.listRandomProfileSuccess),
/* harmony export */   "loadingGetRandomProfile": () => (/* reexport safe */ _features_profile_store_profile_actions__WEBPACK_IMPORTED_MODULE_1__.loadingGetRandomProfile),
/* harmony export */   "loadingListRandomProfile": () => (/* reexport safe */ _features_profile_store_profile_actions__WEBPACK_IMPORTED_MODULE_1__.loadingListRandomProfile),
/* harmony export */   "routingActions": () => (/* reexport safe */ _core_routing_store_routing_actions__WEBPACK_IMPORTED_MODULE_0__.routingActions),
/* harmony export */   "updateCurrentUserId": () => (/* reexport safe */ _features_profile_store_profile_actions__WEBPACK_IMPORTED_MODULE_1__.updateCurrentUserId)
/* harmony export */ });
/* harmony import */ var _core_routing_store_routing_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/routing/store/routing.actions */ 5348);
/* harmony import */ var _features_profile_store_profile_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @features/profile/store/profile.actions */ 2004);




/***/ }),

/***/ 3175:
/*!***********************************!*\
  !*** ./src/app/store/reducers.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_REDUCER_TOKEN": () => (/* binding */ APP_REDUCER_TOKEN),
/* harmony export */   "AppState": () => (/* binding */ AppState),
/* harmony export */   "logger": () => (/* binding */ logger),
/* harmony export */   "metaReducers": () => (/* binding */ metaReducers)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_routing_store_routing_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/routing/store/routing.reducers */ 3757);


class AppState {
}
const APP_REDUCER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('App Reducers', { factory: () => ({ routing: _core_routing_store_routing_reducers__WEBPACK_IMPORTED_MODULE_0__.reducer }) });
function logger(reducer) {
    return (state, action) => reducer(state, action);
}
const metaReducers = [logger];


/***/ }),

/***/ 9209:
/*!************************************!*\
  !*** ./src/app/store/selectors.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentRoute": () => (/* reexport safe */ _core_routing_store_routing_selectors__WEBPACK_IMPORTED_MODULE_0__.getCurrentRoute),
/* harmony export */   "getCurrentRouteName": () => (/* reexport safe */ _core_routing_store_routing_selectors__WEBPACK_IMPORTED_MODULE_0__.getCurrentRouteName),
/* harmony export */   "getParams": () => (/* reexport safe */ _core_routing_store_routing_selectors__WEBPACK_IMPORTED_MODULE_0__.getParams),
/* harmony export */   "getPrevState": () => (/* reexport safe */ _core_routing_store_routing_selectors__WEBPACK_IMPORTED_MODULE_0__.getPrevState),
/* harmony export */   "getPrevUrl": () => (/* reexport safe */ _core_routing_store_routing_selectors__WEBPACK_IMPORTED_MODULE_0__.getPrevUrl),
/* harmony export */   "getProfileState": () => (/* reexport safe */ _features_profile_store_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.getProfileState),
/* harmony export */   "getQueryParams": () => (/* reexport safe */ _core_routing_store_routing_selectors__WEBPACK_IMPORTED_MODULE_0__.getQueryParams),
/* harmony export */   "getRouterState": () => (/* reexport safe */ _core_routing_store_routing_selectors__WEBPACK_IMPORTED_MODULE_0__.getRouterState),
/* harmony export */   "getTransitionInProgress": () => (/* reexport safe */ _core_routing_store_routing_selectors__WEBPACK_IMPORTED_MODULE_0__.getTransitionInProgress),
/* harmony export */   "getUrl": () => (/* reexport safe */ _core_routing_store_routing_selectors__WEBPACK_IMPORTED_MODULE_0__.getUrl),
/* harmony export */   "getUserProfile": () => (/* reexport safe */ _features_profile_store_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.getUserProfile),
/* harmony export */   "listUserProfiles": () => (/* reexport safe */ _features_profile_store_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.listUserProfiles),
/* harmony export */   "pickUserProfile": () => (/* reexport safe */ _features_profile_store_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.pickUserProfile)
/* harmony export */ });
/* harmony import */ var _core_routing_store_routing_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/routing/store/routing.selectors */ 8226);
/* harmony import */ var _features_profile_store_profile_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @features/profile/store/profile.selectors */ 9638);




/***/ }),

/***/ 6770:
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStoreModule": () => (/* binding */ AppStoreModule)
/* harmony export */ });
/* harmony import */ var _core_routing_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/routing/store */ 1762);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ 5811);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ 3175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);









class AppStoreModule {
}
AppStoreModule.ɵfac = function AppStoreModule_Factory(t) { return new (t || AppStoreModule)(); };
AppStoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppStoreModule });
AppStoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.EffectsModule.forRoot([_core_routing_store__WEBPACK_IMPORTED_MODULE_0__.RoutingEffects]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forRoot(_reducers__WEBPACK_IMPORTED_MODULE_1__.APP_REDUCER_TOKEN, { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_1__.metaReducers }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__.StoreDevtoolsModule.instrument({ maxAge: 25 })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppStoreModule, { imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.EffectsRootModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__.StoreDevtoolsModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevEnv": () => (/* binding */ DevEnv),
/* harmony export */   "env": () => (/* binding */ env)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
class DevEnv {
    constructor() {
        this.production = false;
        this.endpoints = {
            getRandomUser: "https://randomuser.me/api/",
            listRandomUsers: "https://randomuser.me/api/?results=",
            getLocationCoords: (location) => {
                let encodedLocation = encodeURIComponent(location);
                return `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedLocation}.json?access_token=pk.eyJ1IjoibWljaGFlbG9kdW1vc3U1NyIsImEiOiJjajB5Nzl6ODMwMmVlMzJwZXVqdmtlbGs1In0.YWZAMCT9m7su01RofBiQmQ`;
            }
        };
        this.profileDetail = {
            getUserStrategy: "route" // "api" | "route"
        };
        this.profileList = {
            amntOfUsersLimit: 10,
            amountOfUsersToList: 2,
            amntOfPixelsFromBottomBeforeRetrievingData: 5
        };
        this.threeJSBackground = {
            planetEarthRadians: 10,
            cameraProfilesPosition: {
                x: 0, y: 0, z: 13
            },
            cameraProfilePosition: {
                x: -12.5, y: 0, z: 8
            }
        };
        this.nav = {
            profilesPage: "/profiles",
            profilePage: "/profile"
        };
    }
}
const env = new DevEnv();
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.env.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 5596:
/*!***********************************************!*\
  !*** ./src/content/scripts/tween.js/tween.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Easing": () => (/* binding */ Easing),
/* harmony export */   "Group": () => (/* binding */ Group),
/* harmony export */   "Interpolation": () => (/* binding */ Interpolation),
/* harmony export */   "Sequence": () => (/* binding */ Sequence),
/* harmony export */   "Tween": () => (/* binding */ Tween),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getAll": () => (/* binding */ getAll),
/* harmony export */   "nextId": () => (/* binding */ nextId),
/* harmony export */   "now": () => (/* binding */ now$1),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "removeAll": () => (/* binding */ removeAll),
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/**
 * The Ease class provides a collection of easing functions for use with tween.js.
 */
var Easing = {
    Linear: {
        None: function (amount) {
            return amount;
        },
    },
    Quadratic: {
        In: function (amount) {
            return amount * amount;
        },
        Out: function (amount) {
            return amount * (2 - amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount;
            }
            return -0.5 * (--amount * (amount - 2) - 1);
        },
    },
    Cubic: {
        In: function (amount) {
            return amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount + 2);
        },
    },
    Quartic: {
        In: function (amount) {
            return amount * amount * amount * amount;
        },
        Out: function (amount) {
            return 1 - --amount * amount * amount * amount;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount;
            }
            return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
        },
    },
    Quintic: {
        In: function (amount) {
            return amount * amount * amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
        },
    },
    Sinusoidal: {
        In: function (amount) {
            return 1 - Math.sin(((1.0 - amount) * Math.PI) / 2);
        },
        Out: function (amount) {
            return Math.sin((amount * Math.PI) / 2);
        },
        InOut: function (amount) {
            return 0.5 * (1 - Math.sin(Math.PI * (0.5 - amount)));
        },
    },
    Exponential: {
        In: function (amount) {
            return amount === 0 ? 0 : Math.pow(1024, amount - 1);
        },
        Out: function (amount) {
            return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            if ((amount *= 2) < 1) {
                return 0.5 * Math.pow(1024, amount - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
        },
    },
    Circular: {
        In: function (amount) {
            return 1 - Math.sqrt(1 - amount * amount);
        },
        Out: function (amount) {
            return Math.sqrt(1 - --amount * amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
        },
    },
    Elastic: {
        In: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
        },
        Out: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            amount *= 2;
            if (amount < 1) {
                return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
        },
    },
    Back: {
        In: function (amount) {
            var s = 1.70158;
            return amount === 1 ? 1 : amount * amount * ((s + 1) * amount - s);
        },
        Out: function (amount) {
            var s = 1.70158;
            return amount === 0 ? 0 : --amount * amount * ((s + 1) * amount + s) + 1;
        },
        InOut: function (amount) {
            var s = 1.70158 * 1.525;
            if ((amount *= 2) < 1) {
                return 0.5 * (amount * amount * ((s + 1) * amount - s));
            }
            return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
        },
    },
    Bounce: {
        In: function (amount) {
            return 1 - Easing.Bounce.Out(1 - amount);
        },
        Out: function (amount) {
            if (amount < 1 / 2.75) {
                return 7.5625 * amount * amount;
            }
            else if (amount < 2 / 2.75) {
                return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
            }
            else if (amount < 2.5 / 2.75) {
                return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
            }
            else {
                return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
            }
        },
        InOut: function (amount) {
            if (amount < 0.5) {
                return Easing.Bounce.In(amount * 2) * 0.5;
            }
            return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
        },
    },
    generatePow: function (power) {
        if (power === void 0) { power = 4; }
        power = power < Number.EPSILON ? Number.EPSILON : power;
        power = power > 10000 ? 10000 : power;
        return {
            In: function (amount) {
                return Math.pow(amount, power);
            },
            Out: function (amount) {
                return 1 - Math.pow((1 - amount), power);
            },
            InOut: function (amount) {
                if (amount < 0.5) {
                    return Math.pow((amount * 2), power) / 2;
                }
                return (1 - Math.pow((2 - amount * 2), power)) / 2 + 0.5;
            },
        };
    },
};

var now;
// Include a performance.now polyfill.
// In node.js, use process.hrtime.
// eslint-disable-next-line
// @ts-ignore
if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
    now = function () {
        // eslint-disable-next-line
        // @ts-ignore
        var time = process.hrtime();
        // Convert [seconds, nanoseconds] to milliseconds.
        return time[0] * 1000 + time[1] / 1000000;
    };
}
// In a browser, use self.performance.now if it is available.
else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
    // This must be bound, because directly assigning this function
    // leads to an invocation exception in Chrome.
    now = self.performance.now.bind(self.performance);
}
// Use Date.now if it is available.
else if (Date.now !== undefined) {
    now = Date.now;
}
// Otherwise, use 'new Date().getTime()'.
else {
    now = function () {
        return new Date().getTime();
    };
}
var now$1 = now;

/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tween
 */
var Group = /** @class */ (function () {
    function Group() {
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
    }
    Group.prototype.getAll = function () {
        var _this = this;
        return Object.keys(this._tweens).map(function (tweenId) {
            return _this._tweens[tweenId];
        });
    };
    Group.prototype.removeAll = function () {
        this._tweens = {};
    };
    Group.prototype.add = function (tween) {
        this._tweens[tween.getId()] = tween;
        this._tweensAddedDuringUpdate[tween.getId()] = tween;
    };
    Group.prototype.remove = function (tween) {
        delete this._tweens[tween.getId()];
        delete this._tweensAddedDuringUpdate[tween.getId()];
    };
    Group.prototype.update = function (time, preserve) {
        if (time === void 0) { time = now$1(); }
        if (preserve === void 0) { preserve = false; }
        var tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) {
            return false;
        }
        // Tweens are updated in "batches". If you add a new tween during an
        // update, then the new tween will be updated in the next batch.
        // If you remove a tween during an update, it may or may not be updated.
        // However, if the removed tween was added during the current batch,
        // then it will not be updated.
        while (tweenIds.length > 0) {
            this._tweensAddedDuringUpdate = {};
            for (var i = 0; i < tweenIds.length; i++) {
                var tween = this._tweens[tweenIds[i]];
                var autoStart = !preserve;
                if (tween && tween.update(time, autoStart) === false && !preserve) {
                    delete this._tweens[tweenIds[i]];
                }
            }
            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }
        return true;
    };
    return Group;
}());

/**
 *
 */
var Interpolation = {
    Linear: function (v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.Linear;
        if (k < 0) {
            return fn(v[0], v[1], f);
        }
        if (k > 1) {
            return fn(v[m], v[m - 1], m - f);
        }
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function (v, k) {
        var b = 0;
        var n = v.length - 1;
        var pw = Math.pow;
        var bn = Interpolation.Utils.Bernstein;
        for (var i = 0; i <= n; i++) {
            b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        }
        return b;
    },
    CatmullRom: function (v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.CatmullRom;
        if (v[0] === v[m]) {
            if (k < 0) {
                i = Math.floor((f = m * (1 + k)));
            }
            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
        }
        else {
            if (k < 0) {
                return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            }
            if (k > 1) {
                return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            }
            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
        }
    },
    Utils: {
        Linear: function (p0, p1, t) {
            return (p1 - p0) * t + p0;
        },
        Bernstein: function (n, i) {
            var fc = Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: (function () {
            var a = [1];
            return function (n) {
                var s = 1;
                if (a[n]) {
                    return a[n];
                }
                for (var i = n; i > 1; i--) {
                    s *= i;
                }
                a[n] = s;
                return s;
            };
        })(),
        CatmullRom: function (p0, p1, p2, p3, t) {
            var v0 = (p2 - p0) * 0.5;
            var v1 = (p3 - p1) * 0.5;
            var t2 = t * t;
            var t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        },
    },
};

/**
 * Utils
 */
var Sequence = /** @class */ (function () {
    function Sequence() {
    }
    Sequence.nextId = function () {
        return Sequence._nextId++;
    };
    Sequence._nextId = 0;
    return Sequence;
}());

var mainGroup = new Group();

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */
var Tween = /** @class */ (function () {
    function Tween(_object, _group) {
        if (_group === void 0) { _group = mainGroup; }
        this._object = _object;
        this._group = _group;
        this._isPaused = false;
        this._pauseStart = 0;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1000;
        this._initialRepeat = 0;
        this._repeat = 0;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = 0;
        this._easingFunction = Easing.Linear.None;
        this._interpolationFunction = Interpolation.Linear;
        // eslint-disable-next-line
        this._chainedTweens = [];
        this._onStartCallbackFired = false;
        this._onEveryStartCallbackFired = false;
        this._id = Sequence.nextId();
        this._isChainStopped = false;
        this._goToEnd = false;
    }
    Tween.prototype.getId = function () {
        return this._id;
    };
    Tween.prototype.isPlaying = function () {
        return this._isPlaying;
    };
    Tween.prototype.isPaused = function () {
        return this._isPaused;
    };
    Tween.prototype.to = function (properties, duration) {
        // TODO? restore this, then update the 07_dynamic_to example to set fox
        // tween's to on each update. That way the behavior is opt-in (there's
        // currently no opt-out).
        // for (const prop in properties) this._valuesEnd[prop] = properties[prop]
        this._valuesEnd = Object.create(properties);
        if (duration !== undefined) {
            this._duration = duration;
        }
        return this;
    };
    Tween.prototype.duration = function (d) {
        if (d === void 0) { d = 1000; }
        this._duration = d;
        return this;
    };
    Tween.prototype.start = function (time) {
        if (time === void 0) { time = now$1(); }
        if (this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.add(this);
        this._repeat = this._initialRepeat;
        if (this._reversed) {
            // If we were reversed (f.e. using the yoyo feature) then we need to
            // flip the tween direction back to forward.
            this._reversed = false;
            for (var property in this._valuesStartRepeat) {
                this._swapEndStartRepeatValues(property);
                this._valuesStart[property] = this._valuesStartRepeat[property];
            }
        }
        this._isPlaying = true;
        this._isPaused = false;
        this._onStartCallbackFired = false;
        this._onEveryStartCallbackFired = false;
        this._isChainStopped = false;
        this._startTime = time;
        this._startTime += this._delayTime;
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
        return this;
    };
    Tween.prototype._setupProperties = function (_object, _valuesStart, _valuesEnd, _valuesStartRepeat) {
        for (var property in _valuesEnd) {
            var startValue = _object[property];
            var startValueIsArray = Array.isArray(startValue);
            var propType = startValueIsArray ? 'array' : typeof startValue;
            var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
            // If `to()` specifies a property that doesn't exist in the source object,
            // we should not set that property in the object
            if (propType === 'undefined' || propType === 'function') {
                continue;
            }
            // Check if an Array was provided as property value
            if (isInterpolationList) {
                var endValues = _valuesEnd[property];
                if (endValues.length === 0) {
                    continue;
                }
                // handle an array of relative values
                endValues = endValues.map(this._handleRelativeValue.bind(this, startValue));
                // Create a local copy of the Array with the start value at the front
                _valuesEnd[property] = [startValue].concat(endValues);
            }
            // handle the deepness of the values
            if ((propType === 'object' || startValueIsArray) && startValue && !isInterpolationList) {
                _valuesStart[property] = startValueIsArray ? [] : {};
                // eslint-disable-next-line
                for (var prop in startValue) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property][prop] = startValue[prop];
                }
                _valuesStartRepeat[property] = startValueIsArray ? [] : {}; // TODO? repeat nested values? And yoyo? And array values?
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property]);
            }
            else {
                // Save the starting value, but only once.
                if (typeof _valuesStart[property] === 'undefined') {
                    _valuesStart[property] = startValue;
                }
                if (!startValueIsArray) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                }
                if (isInterpolationList) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                }
                else {
                    _valuesStartRepeat[property] = _valuesStart[property] || 0;
                }
            }
        }
    };
    Tween.prototype.stop = function () {
        if (!this._isChainStopped) {
            this._isChainStopped = true;
            this.stopChainedTweens();
        }
        if (!this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        this._isPlaying = false;
        this._isPaused = false;
        if (this._onStopCallback) {
            this._onStopCallback(this._object);
        }
        return this;
    };
    Tween.prototype.end = function () {
        this._goToEnd = true;
        this.update(Infinity);
        return this;
    };
    Tween.prototype.pause = function (time) {
        if (time === void 0) { time = now$1(); }
        if (this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = true;
        this._pauseStart = time;
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        return this;
    };
    Tween.prototype.resume = function (time) {
        if (time === void 0) { time = now$1(); }
        if (!this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = false;
        this._startTime += time - this._pauseStart;
        this._pauseStart = 0;
        // eslint-disable-next-line
        this._group && this._group.add(this);
        return this;
    };
    Tween.prototype.stopChainedTweens = function () {
        for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            this._chainedTweens[i].stop();
        }
        return this;
    };
    Tween.prototype.group = function (group) {
        if (group === void 0) { group = mainGroup; }
        this._group = group;
        return this;
    };
    Tween.prototype.delay = function (amount) {
        if (amount === void 0) { amount = 0; }
        this._delayTime = amount;
        return this;
    };
    Tween.prototype.repeat = function (times) {
        if (times === void 0) { times = 0; }
        this._initialRepeat = times;
        this._repeat = times;
        return this;
    };
    Tween.prototype.repeatDelay = function (amount) {
        this._repeatDelayTime = amount;
        return this;
    };
    Tween.prototype.yoyo = function (yoyo) {
        if (yoyo === void 0) { yoyo = false; }
        this._yoyo = yoyo;
        return this;
    };
    Tween.prototype.easing = function (easingFunction) {
        if (easingFunction === void 0) { easingFunction = Easing.Linear.None; }
        this._easingFunction = easingFunction;
        return this;
    };
    Tween.prototype.interpolation = function (interpolationFunction) {
        if (interpolationFunction === void 0) { interpolationFunction = Interpolation.Linear; }
        this._interpolationFunction = interpolationFunction;
        return this;
    };
    // eslint-disable-next-line
    Tween.prototype.chain = function () {
        var tweens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tweens[_i] = arguments[_i];
        }
        this._chainedTweens = tweens;
        return this;
    };
    Tween.prototype.onStart = function (callback) {
        this._onStartCallback = callback;
        return this;
    };
    Tween.prototype.onEveryStart = function (callback) {
        this._onEveryStartCallback = callback;
        return this;
    };
    Tween.prototype.onUpdate = function (callback) {
        this._onUpdateCallback = callback;
        return this;
    };
    Tween.prototype.onRepeat = function (callback) {
        this._onRepeatCallback = callback;
        return this;
    };
    Tween.prototype.onComplete = function (callback) {
        this._onCompleteCallback = callback;
        return this;
    };
    Tween.prototype.onStop = function (callback) {
        this._onStopCallback = callback;
        return this;
    };
    /**
     * @returns true if the tween is still playing after the update, false
     * otherwise (calling update on a paused tween still returns true because
     * it is still playing, just paused).
     */
    Tween.prototype.update = function (time, autoStart) {
        if (time === void 0) { time = now$1(); }
        if (autoStart === void 0) { autoStart = true; }
        if (this._isPaused)
            return true;
        var property;
        var elapsed;
        var endTime = this._startTime + this._duration;
        if (!this._goToEnd && !this._isPlaying) {
            if (time > endTime)
                return false;
            if (autoStart)
                this.start(time);
        }
        this._goToEnd = false;
        if (time < this._startTime) {
            return true;
        }
        if (this._onStartCallbackFired === false) {
            if (this._onStartCallback) {
                this._onStartCallback(this._object);
            }
            this._onStartCallbackFired = true;
        }
        if (this._onEveryStartCallbackFired === false) {
            if (this._onEveryStartCallback) {
                this._onEveryStartCallback(this._object);
            }
            this._onEveryStartCallbackFired = true;
        }
        elapsed = (time - this._startTime) / this._duration;
        elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
        var value = this._easingFunction(elapsed);
        // properties transformations
        this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
        if (this._onUpdateCallback) {
            this._onUpdateCallback(this._object, elapsed);
        }
        if (elapsed === 1) {
            if (this._repeat > 0) {
                if (isFinite(this._repeat)) {
                    this._repeat--;
                }
                // Reassign starting values, restart by making startTime = now
                for (property in this._valuesStartRepeat) {
                    if (!this._yoyo && typeof this._valuesEnd[property] === 'string') {
                        this._valuesStartRepeat[property] =
                            // eslint-disable-next-line
                            // @ts-ignore FIXME?
                            this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                    }
                    if (this._yoyo) {
                        this._swapEndStartRepeatValues(property);
                    }
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                if (this._yoyo) {
                    this._reversed = !this._reversed;
                }
                if (this._repeatDelayTime !== undefined) {
                    this._startTime = time + this._repeatDelayTime;
                }
                else {
                    this._startTime = time + this._delayTime;
                }
                if (this._onRepeatCallback) {
                    this._onRepeatCallback(this._object);
                }
                this._onEveryStartCallbackFired = false;
                return true;
            }
            else {
                if (this._onCompleteCallback) {
                    this._onCompleteCallback(this._object);
                }
                for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                    // Make the chained tweens start exactly at the time they should,
                    // even if the `update()` method was called way past the duration of the tween
                    this._chainedTweens[i].start(this._startTime + this._duration);
                }
                this._isPlaying = false;
                return false;
            }
        }
        return true;
    };
    Tween.prototype._updateProperties = function (_object, _valuesStart, _valuesEnd, value) {
        for (var property in _valuesEnd) {
            // Don't update properties that do not exist in the source object
            if (_valuesStart[property] === undefined) {
                continue;
            }
            var start = _valuesStart[property] || 0;
            var end = _valuesEnd[property];
            var startIsArray = Array.isArray(_object[property]);
            var endIsArray = Array.isArray(end);
            var isInterpolationList = !startIsArray && endIsArray;
            if (isInterpolationList) {
                _object[property] = this._interpolationFunction(end, value);
            }
            else if (typeof end === 'object' && end) {
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._updateProperties(_object[property], start, end, value);
            }
            else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                end = this._handleRelativeValue(start, end);
                // Protect against non numeric properties.
                if (typeof end === 'number') {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _object[property] = start + (end - start) * value;
                }
            }
        }
    };
    Tween.prototype._handleRelativeValue = function (start, end) {
        if (typeof end !== 'string') {
            return end;
        }
        if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            return start + parseFloat(end);
        }
        else {
            return parseFloat(end);
        }
    };
    Tween.prototype._swapEndStartRepeatValues = function (property) {
        var tmp = this._valuesStartRepeat[property];
        var endValue = this._valuesEnd[property];
        if (typeof endValue === 'string') {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
        }
        else {
            this._valuesStartRepeat[property] = this._valuesEnd[property];
        }
        this._valuesEnd[property] = tmp;
    };
    return Tween;
}());

var VERSION = '18.6.4';

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */
var nextId = Sequence.nextId;
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tweens.
 */
var TWEEN = mainGroup;
// This is the best way to export things in a way that's compatible with both ES
// Modules and CommonJS, without build hacks, and so as not to break the
// existing API.
// https://github.com/rollup/rollup/issues/1961#issuecomment-423037881
var getAll = TWEEN.getAll.bind(TWEEN);
var removeAll = TWEEN.removeAll.bind(TWEEN);
var add = TWEEN.add.bind(TWEEN);
var remove = TWEEN.remove.bind(TWEEN);
var update = TWEEN.update.bind(TWEEN);
var exports = {
    Easing: Easing,
    Group: Group,
    Interpolation: Interpolation,
    now: now$1,
    Sequence: Sequence,
    nextId: nextId,
    Tween: Tween,
    VERSION: VERSION,
    getAll: getAll,
    removeAll: removeAll,
    add: add,
    remove: remove,
    update: update,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exports);



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map