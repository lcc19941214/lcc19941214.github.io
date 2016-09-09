(function() {
  var TYPE = window.type;
  var MAJOR_MAP = [
    "新闻",
    "广告",
    "广设",
    "广电",
    "播音",
    "网传"
  ];

  if (TYPE && MAJOR_MAP.some(major => major === TYPE)) {
    var courseSet = {
      "网传": [
        "毛泽东思想和中国特色社会主义理论体系概论",
        "马克思主义基本原理概论",
        "思想道德修养和法律基础",
        "中国近现代史纲要",
        "军事理论",
        "新闻学概论",
        "广播电视概论",
        "广告学概论",
        "新媒体基础",
        "大众传播理论",
        "媒介伦理与法规",
        "媒介研究方法",
        "数字技术应用",
        "网络传播概论",
        "网络社会学",
        "媒介调查与分析方法",
        "网络信息编辑",
        "新闻采访与写作",
        "网络新闻作品评析",
        "电子商务与政务",
        "信息素养",
        "网页设计与制作",
        "网页设计与制作实验",
        "多媒体创作与应用",
        "多媒体创作实验",
        "网络视觉传播",
        "Web视觉表达实验",
        "数字媒介工程实践",
        "数码摄影",
        "数码摄影实验",
        "互联网管理与规制",
        "多媒体新闻报道",
        "数字媒介产品策划",
        "专业实习",
        "实践中的马克思主义新闻观"
      ]
    };

    var TYPE = window.type;
    var courseData = courseSet[TYPE];

    // 获取iframe和表格
    var iframe = window.frames[1].frames[0];
    var listTable = iframe.document.querySelector('.table');

    // 解析表格
    var tableMap = {
      0: "课头号",
      1: "课程名称",
      2: "课程类型",
      3: "学分",
      4: "教师",
      5: "授课学院",
      6: "学习类型",
      7: "学年",
      8: "学期",
      9: "成绩",
      10: "操作"
    };

    var rows = Array.prototype.slice.call(listTable.querySelectorAll('tr'));
    rows.splice(0, 1); // 剔除标题行

    var dataSource = rows.map(row => {
      var columns = row.querySelectorAll('td');
      return {
        courseName: columns[1].textContent,
        courseCategory: columns[2].textContent,
        credit: columns[3].textContent,
        school: columns[5].textContent,
        type: columns[6].textContent,
        score: columns[9].textContent
      };
    });

    // 计算学分
    /**
     * 计算规则
     * 课程名称符合courseData中的任一项
     * 授课学院包括体育部，大学英语部且是公共必修
     * 
     * 保研资格
     * 所有分数在60分以上
     */
    var creditsAmout = 0;
    var multiplication = 0;
    var weightedAverage = 0;
    var count = 0;

    var sum = [];

    dataSource.forEach(item => {
      var courseName = item.courseName;
      var courseCategory = item.courseCategory;
      var credit = parseInt(item.credit);
      var school = item.school;
      var type = item.type;
      var score = parseInt(item.score);

      var validation = courseData.some(name => name === courseName)
        || (courseCategory === '公共必修' && (school === '体育部' || school === '大学英语部'))

      if (validation && score) {
        count ++;
        creditsAmout += credit;
        multiplication += credit * score;

        sum.push({
          courseName,
          courseCategory,
          credit,
          score
        });
      }
    });

    weightedAverage = multiplication / creditsAmout;
    sum.sort((a, b) => a.courseCategory.localeCompare(b.courseCategory));

    console.log('姓名：' + window.document.getElementById('nameLable').textContent.trim());
    console.log("课程：" + count);
    console.log("学分：" + creditsAmout);
    console.log("加权总成绩：" + multiplication);
    console.log("加权平均：" + weightedAverage);
  } else {
    console.log('请注明专业类别');
  }
})();