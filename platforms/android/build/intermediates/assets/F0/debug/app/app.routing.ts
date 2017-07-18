import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { AppComponent } from "./app.component";

const routes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component: AppComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }