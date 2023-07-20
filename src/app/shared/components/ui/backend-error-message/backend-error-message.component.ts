import { Component, Input, OnInit } from "@angular/core";

import { IBackendErrors } from "src/app/shared/types/backendErrors.interface";

@Component({
  selector: "cd-backend-error-message",
  templateUrl: "./backend-error-message.component.html",
  styleUrls: ["./backend-error-message.component.scss"],
})
export class BackendErrorMessageComponent implements OnInit {
  @Input("backendErrors")
  public backendErrorsProps!: IBackendErrors | null;
  public errorMessages!: string[];

  ngOnInit(): void {
    this.initializeErrorMessage();
  }

  private initializeErrorMessage() {
    if (this.backendErrorsProps === null) return;
    const backError = this.backendErrorsProps;

    console.log(this.backendErrorsProps);
    this.errorMessages = Object.keys(this.backendErrorsProps).map(key => {
      const message = backError[key].join(", ");

      console.log(message);
      return `${key} ${message}`;
    });
    console.log(this.errorMessages);
    //  =
  }
}
