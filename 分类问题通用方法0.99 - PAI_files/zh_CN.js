define({ok:"确定",cancel:"取消",info:"提示",help:"帮助",error:"错误",success:"成功",warning:"警告",second:"秒",minute:"分",hour:"小时",dayOfMonth:"日",month:"月",dayOfWeek:"星期",SUN:"周日",MON:"周一",TUE:"周二",WED:"周三",THU:"周四",FRI:"周五",SAT:"周六",DEC:"十二月",JAN:"一月",FEB:"二月",MAR:"三月",APR:"四月",MAY:"五月",JUN:"六月",JUL:"七月",AUG:"八月",SEP:"九月",OCT:"十月",NOV:"十一月",every:"每%s",period:"周期",select:"选择",lastDayOfMonth:"月份的最后一天",from:"从",to:"到",readableCronExpression:"人类看得懂的CronTab表达式",resetToDefaultCron:'<a href="javascript:;">点击恢复</a>默认调度计划',advancedSetting:"高级",readableCronExpressionTemplate:['每{% if (month && month !== "*") { %}{%= month %}{% } %}月','{% if (dayOfMonth && dayOfMonth !== "*") { %}的每{%= dayOfMonth %}日，{% } %}','{% if (lastDayOfMonth !== "") { %} {%= lastDayOfMonth %}， {% } %}','{% if (dayOfWeek && dayOfWeek !== "*") { %}',"每逢{%= dayOfWeek %}，","{% } %}","在","每{%= hour %}小时","的每{%= minute %}分钟",'{% if (dayOfWeek && dayOfWeek !== "*") { %}的每{%= second %}秒{% } %}',"执行调度计划"].join("")});