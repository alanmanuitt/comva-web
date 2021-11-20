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
        <input
          {...rest}
          ref={(r) => {
            this.input = r;
          }}
        />
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
