import Bonus from "../src/model/Bonus";

describe("보너스 클래스 테스트", () => {
  test.each
  ([
    ["1,2"],
    [ "!"],
     ["@"],
     ["A"],
     ["ㄱ"]
  ])
  ("보너스 번호가 숫자로 구성되지 않은 경우 예외가 발생한다.", (input) => {
    const RESULT = () => new Bonus(input);
    expect(RESULT).toThrow("[ERROR] 숫자만 입력해주세요.");
  });

  test.each([
    [200],
    [50],
    [46],
  ])
  ("보너스 번호가 범위 내에 포함되지 않은 경우", (input) => {
    const RESULT = () => new Bonus(input);
    expect(RESULT).toThrow("[ERROR] 숫자는 1~45까지 입력해주세요.");
  });
});