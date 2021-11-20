import React from "react";
import { ValidatorComponent } from "react-form-validator-core";

class TextValidator extends ValidatorComponent {
  render() {
    const {
      errorMessages,
      requiredError,
      validatorListener,
      validators,
      ...rest
    } = this.props;
    const { isValid } = this.state;

    return (
      <div>
        <textarea
          {...rest}
          ref={(r) => {
            this.textarea = r;
          }}
        ></textarea>
        {!isValid && (
          <div className="validator-error" style={{ color: "red" }}>
            {this.getErrorMessage()}
          </div>
        )}
      </div>
    );
  }
}

export default TextValidator;
