/*
 * @Description:
 * @Author: Sunly
 * @Date: 2023-08-18 06:51:12
 */
// 模拟登陆
const loginHandler = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: {
          token: "123456789",
        },
      });
    }, 1000);
  });
};

export { loginHandler };
