const REGISTER = {
  EMAIL: {
    LABEL: "이메일",
    REQUIRED: "이메일을 입력해 주세요.",
    PLACEHOLDER: "이메일을 입력하세요.",
    PATTERN: "입력하신 이메일이 형식에 맞지 않습니다.",
  },
  ID: {
    LABEL: "아이디",
    REQUIRED: "아이디를 입력해 주세요.",
    PLACEHOLDER: "영문/숫자/특수문자 포함 8~16자",
    PATTERN: "입력하신 아이디가 형식에 맞지 않습니다.",
  },
  PASSWORD: {
    LABEL: "비밀번호",
    REQUIRED: "비밀번호를 입력해 주세요.",
    PLACEHOLDER: "영문/숫자/특수문자 포함 8~16자",
    PATTERN: "비밀번호는 영문/숫자/특수문자 포함 8~16자로 입력해야 합니다.",
  },
  CONFIRM_PASSWORD: {
    LABEL: "비밀번호 확인",
    REQUIRED: "비밀번호를 확인해 주세요.",
    VALIDATE: "입력한 비밀번호와 일치하지 않습니다.",
    PLACEHOLDER: "비밀번호를 한 번 더 입력하세요.",
  },
  ALERT: {
    EXISTING_ACCOUNT: "이미 가입된 계정입니다.",
    DONE: "회원가입이 완료되었습니다. ",
  },
  CONSENT: {
    TERMS: {
      TEXT: "[필수] 이용약관 동의",
      REQUIRED: "이용약관에 동의해 주세요.",
    },
    PRIVACY_POLICY: {
      TEXT: "[필수] 개인정보 수집 및 이용 동의",
      REQUIRED: "개인정보 수집 및 이용에 동의해 주세요.",
    },
    ALL_ACCEPT: "전체 동의",
    FULL_TEXT: "전문보기",
  },
};

const LOGIN = {
  ID: {
    LABEL: "아이디",
    REQUIRED: "아이디를 입력해 주세요.",
    PLACEHOLDER: "아이디를 입력하세요.",
  },
  PASSWORD: {
    LABEL: "비밀번호",
    REQUIRED: "비밀번호를 입력해 주세요.",
    PLACEHOLDER: "비밀번호를 입력하세요.",
  },
  ALERT: {
    WRONG_ID: "아이디가 올바르지 않습니다.",
    WRONG_PASSWORD: "비밀번호가 올바르지 않습니다.",
  },
};

const PROFILE = {
  //sample
};

export { REGISTER, LOGIN, PROFILE };
