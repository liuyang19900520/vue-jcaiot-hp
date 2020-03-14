export enum ApiErrorCode {
    TIMEOUT = "-1", // 系统繁忙
    SUCCESS = "0", // 成功

    TOKEN_INVALID = "10001", // 用户id无效
    LOGIN_FAILD = "10002", // 登录失败
    REGISTER_FAILD = "10000" // 注册失败
}