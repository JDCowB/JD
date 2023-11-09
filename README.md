# 慈善家

全量自用工具本，使用方法详见脚本内注释，反馈脚本问题请在社区内或其它渠道联系作者，随缘更新~

主要接口验参调用函数模块，脚本内容全部加密无任何调用个人接口，我很忙没空研究如何偷你ck，喜欢🐕叫的别用谢谢

> 官方线报频道：[来薅线报通知](https://t.me/LH_notify)  
> 官方解析BOT：[宇宙无敌万能解析机器人](https://t.me/ParseJDBot)（加入 [Arcadia 官方频道](https://t.me/ArcadiaPanel) 和社区群组后才可以使用）

Tips：仓库内全部都是工具本没有常规本不需要默认设置定时任务，部分情况下运行脚本会报错例如不设置环境变量、变量无效等

## 拉库

- ### Arcadia 面板（推荐）

    ```bash
    arcadia repo 慈善家 https://gitlab.com/SuperManito/cishanjia.git main --updateTaskList true --autoDisable true --whiteList '^jd_'
    ```
    详见官方文档 [arcadia.cool](https://arcadia.cool)

- ### 青龙面板

    ```bash
    ql repo https://gitlab.com/SuperManito/cishanjia.git "jd_|jdCookie" "" "^jd[^_]|USER|function|sendNotify" "main"
    ```
    ⚠ 外部项目用户请勿在 Arcadia 社区内提问！

- ### 其它

    建议使用 `git` 拉取本仓库

## 需要安装的依赖库

需要 Node.js® 16 及以上版本，建议使用 Node.js® 20 LTS

```bash
npm install -g ds crypto-js jsdom got@11
```

## 功能配置

- ### 自动登记实物奖品收货地址

  ```bash
  export WX_ADDRESS="" # 变量格式：收件人@手机号@省份@城市@区县@详细地址@6位行政区划代码@邮编，需按照顺序依次填写，多个用管道符分开（6位行政区划代码自己查地图，也可用身份证号前六位）
  export WX_ADDRESS_BLOCK="" # 黑名单关键词，多个关键词用@分开
  ```
  此变量是通用的，不过部分脚本具有与此功能相同的独特变量，届时将优先使用独特变量

- ### 配置代理

  - #### 全局代理

    ```bash
    ## 启用代理
    export JD_ISV_GLOBAL_PROXY="true"
    ## 代理组件库相关控制变量
    # 定义 HTTP 代理地址（必填）
    export GLOBAL_AGENT_HTTP_PROXY="" # 例：http://127.0.0.1:8080
    # 过滤不需要代理的地址（必填）
    export GLOBAL_AGENT_NO_PROXY='127.0.0.1,172.17.0.1,*.telegram.org,oapi.dingtalk.com' # 用英文逗号分割多个地址，这里特别注意要把用到的内网ip过滤掉
    ```
    全局代理适用于本仓库绝大多数脚本，更多配置方法详见 [gajus/global-agent](https://github.com/gajus/global-agent)
    需要额外安装代理依赖库才能使用 `npm install -g global-agent`
    > 如果你正在使用 Arcadia 面板则无需重复安装此代理依赖库，并且可以通过命令选项 `--agent` 在任意脚本上便捷的实现全局代理功能，具体详见配置文件和文档

  - #### 获取 `Token` 局部代理

    ```bash
    export JD_ISV_TOKEN_PROXY="" # 代理接口地址
    ```
    目前受限于官方接口策略，同一IP段请求多个账号后会频繁响应 `403`，因此可能需要配合代理使用，使用代理时会自动重试请求至多3次  
    需要额外安装代理依赖库才能使用 `npm install -g hpagent`

    - ##### 通过 API 提取的动态代理

      如果你需要使用的是代理商接口所动态提供的代理地址，那么请定义下方的变量
      ```bash
      export JD_ISV_TOKEN_PROXY_API="" # 代理接口地址，例：http://example.com/api/getProxy?sevret=xxx
      export JD_ISV_TOKEN_PROXY_API_MAX="" # 每个代理地址的使用次数，默认为1次
      ```
      为了避免不必要的浪费建议将接口每次响应的代理地址数量设置为1个，另外建议将接口响应格式设置为单行文本的 `ip:port` 格式，同时也支持 `json` 格式不过仅适配了部分代理商  
      启用此模式后由环境变量 `JD_ISV_TOKEN_PROXY_API` 指定的固定代理地址将会被自动忽略，届时会使用接口响应数据所动态提供的代理地址

- ### 自定义 `Token` 缓存

  > `Token` 是关联账号的重要信息，它的有效期为30分钟左右因此不用每次都用新的，默认缓存在本地文件中，缓存时间为29分钟，同时也支持使用 `Redis` 数据库进行缓存以实现跨设备共用

  - #### 自定义缓存文件路径

    ```bash
    export JD_ISV_TOKEN_CUSTOM_CACHE="" # 绝对路径，建议以 token.json 命名
    ```
    > 此文件默认存储在仓库 `function/cache` 目录下

  - #### 使用 `Redis` 数据库

    ```bash
    export JD_ISV_TOKEN_REDIS_CACHE_URL="" # 数据库地址，例：redis://password@127.0.0.1:6379/0
    export JD_ISV_TOKEN_REDIS_CACHE_KEY="" # 自定义提取或提交的键名规则，详见下方说明
    export JD_ISV_TOKEN_REDIS_CACHE_SUBMIT="" # 是否向数据库提交新的缓存token（true/false），默认是
    ```
    > 需要额外安装依赖库才能使用 `npm install -g redis`，默认从键名为用户名的字符串对象中提取键值，用户名是解码后的  
    > 如果你想自定义键名格式则需要将用户名位置设为 `<pt_pin>` 例如：`isv_token:<pt_pin>`，否则将自动在末尾追加

- ### 自定义APP签名验参

  > 本仓库绝大部分脚本需要使用签名，不自定义签名也能正常使用脚本

  · 默认通过请求 [杂货铺公益API](http://api.nolanstore.cc) 在线获取签名（不会泄露任何隐私），可通过环境变量 `JD_SIGN_API` 自定义接口地址（杂货铺接口格式）  
  · 如果存在本地签名生成脚本则会优先加载本地签名，具体规范如下：
    1. 需要将脚本命名为 genSign.js 并存储在与 getSign 脚本同一目录下
    2. 调用函数名为 genSign 并且需要 export 导出
    3. 函数固定两个传参，分别是 functionId（函数id） 和 bodyParams（body参数对象）
    4. 函数需要返回含有 body、st、sign、sv 等关键字段的url参数形式的签名字符串

- ### 自定义账号消息推送通知

  > 只对定义了推送通知开关独特环境变量的部分脚本有效，且默认均为不推送通知  
  > 账号消息的默认格式为 `【XX账号<账号序号>】<用户名>：<消息内容1>，<消息内容2>`

  - #### 过滤关键词

    ```bash
    export JD_NOTIFY_FILTER_KEYWORDS="" # 例："空气"，多个用@分割
    ```

  - #### 消息内容分隔符

    ```bash
    export JD_NOTIFY_DELIMITER="" # 例："、"，此分隔符用于分隔多条账号消息
    ```

  - #### 设置替换用户名为昵称

    ```bash
    export JD_NOTIFY_NICKNAMES="" # 例："userpin_α@哥哥,userpin_β@弟弟"，多个昵称配置用英文逗号分割，用户名和昵称用@分割
    ```

  - #### 是否显示用户名

    ```bash
    export JD_NOTIFY_SHOW_USERNAME="" # 例："false"，true/false，默认显示
    ```

  - #### 设置消息前缀格式

    ```bash
    export JD_NOTIFY_PREFIX_FORMATA="" # 例："[账号%]"，%代表账号序号
    ```

  - #### 设置自动合并消息中用数字开头表示数量的内容

    ```bash
    export JD_NOTIFY_AUTO_MERGE_TYPE="" # 例："积分 🎟️"，多个规则用@分割，正则匹配
    ```

- ### 辅助工具脚本（仅适用于 Arcadia 面板）

  安装与更新方法：`bash /arcadia/repo/SuperManito_cishanjia/utils/init.sh`
  > 执行一次即可（后期随脚本库进行更新）

  - ## 关注店铺有礼

    - ### 使用方法

      ```bash
      gz <店铺链接/单一店铺ID/组合ID变量> [--options]
      ```
      > 注释  
      > 1. 链接：支持解析ujd短链，只要链接的传递参数中包含 shopId、venderId、vendorId 其中一个任意完整参数即可，例 `gz https://u.jd.com/1234567`  
      > 2. 纯数字单一店铺ID：shopId、venderId、vendorId 任意一个参数的ID值，例：gz 1234567890  
      > 3. 市面常见id组合变量（格式为 shopId_venderId），例：gz 1234567890_0987654321

      |    命令选项    | 简写  |              作用              |
      | :------------: | :---: | :----------------------------: |
      |   `--cookie`   | `-c`  |  指定账号，参数后需跟账号序号  |
      | `--background` | `-b`  | 后台运行脚本，不在前台输出日志 |

__未经授权请勿搬运，脚本仅供用于学习交流，切勿用于商业用途！__
