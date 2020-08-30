export enum ApiErrorCode {

    REGISTER_FAILED = "10001", // 注册失败
    LOGIN_FAILED = "10002", // 登录失败
    TOKEN_INVALID = "10003", // 用户id无效

    DELETE_ERROR="90001",//删除失败
    UPDATE_ERROR="90002",//更新失败
    CREATE_ERROR="90003",//插入失败
    SELECT_ERROR="90004",//查询失败
}