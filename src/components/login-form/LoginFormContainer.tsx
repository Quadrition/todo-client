import React from "react";

import LoginForm from "./LoginForm";

function LoginFormContainer() {
  const [emailValidateStatus, setEmailValidateStatus] = React.useState<
    "" | "warning" | "success" | "error" | "validating" | undefined
  >(undefined);
  const [emailHelp, setEmailHelp] = React.useState<string | undefined>(
    undefined
  );

  const [passwordHelp, setPasswordHelp] = React.useState<string | undefined>(
    undefined
  );
  const [passwordValidateStatus, setPasswordValidateStatus] = React.useState<
    "" | "warning" | "success" | "error" | "validating" | undefined
  >(undefined);

  const onTextChange = () => {
    if (
      emailValidateStatus !== undefined ||
      passwordValidateStatus !== undefined
    ) {
      setEmailValidateStatus(undefined);
      setEmailHelp(undefined);
      setPasswordValidateStatus(undefined);
      setPasswordHelp(undefined);
    }
  };

  return (
    <LoginForm
      emailHelp={emailHelp}
      emailValidateStatus={emailValidateStatus}
      passwordHelp={passwordHelp}
      passwordValidateStatus={passwordValidateStatus}
      onTextChange={onTextChange}
    />
  );
}

export default LoginFormContainer;
