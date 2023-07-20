import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BackendErrorMessageComponent } from "src/app/shared/components/ui/backend-error-message/backend-error-message.component";

@NgModule({
  declarations: [BackendErrorMessageComponent],
  imports: [CommonModule],
  exports: [BackendErrorMessageComponent],
})
export class UiModule {}
