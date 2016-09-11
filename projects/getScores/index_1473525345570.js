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
        "数字媒介产品策划"
      ],
      "新闻": [
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
        "新闻采访",
        "新闻写作",
        "中国新闻传播史",
        "英美报刊选读",
        "新闻编辑",
        "新闻评论",
        "外国新闻传播史",
        "多媒体新闻报道",
        "新闻摄影",
        "摄影技术基础实验",
        "媒介经营与管理",
        "报纸版面编排与设计",
        "媒介经济学",
        "新闻作品评析",
        "新闻报道专题",
        "中西新闻比较"
      ],
      "播音": [
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
        "普通话语音",
        "普通话语音实验",
        "播音发声",
        "播音发声实验",
        "播音创作基础",
        "播音创作基础实验",
        "新闻播音与主持",
        "新闻播音与主持实验",
        "电视直播与现场报道",
        "电视直播与现场报道实验",
        "即兴表达艺术",
        "播音经典鉴赏",
        "化妆与形象设计",
        "形体训练",
        "视觉传播",
        "电视节目评析",
        "视听媒介批评",
        "电视摄像",
        "电视摄像实验",
        "非线性编辑",
        "非线性编辑实验"
      ],
      "广告": [
        "毛泽东思想和中国特色社会主义理论体系概论",
        "马克思主义基本原理概论",
        "思想道德修养和法律基础",
        "中国近现代史纲要",
        "实践中的马克思主义新闻观",
        "综合英语",
        "体育",
        "军事理论",
        "新闻学概论",
        "广播电视概论",
        "广告学概论",
        "新媒体基础",
        "大众传播理论",
        "数字技术应用",
        "媒介伦理与法规",
        "媒介研究方法",
        "广告策划",
        "广告调查",
        "广告调研与统计分析",
        "广告媒体",
        "广告创意与表现",
        "世界广告通史",
        "广告经营",
        "网络广告",
        "电脑图文设计",
        "电脑图文设计实验",
        "平面广告设计",
        "平面广告设计实验",
        "数码摄影",
        "数码摄影实验",
        "公共关系学",
        "市场营销学",
        "西方广告选讲",
        "广播影视广告",
        "数字营销传播",
        "广告文案写作",
        "广告心理学",
        "营销企划实务",
        "媒介经营与管理"
      ],
      "广设": [
        "毛泽东思想和中国特色社会主义理论体系概论",
        "马克思主义基本原理概论",
        "思想道德修养和法律基础",
        "中国近现代史纲要",
        "实践中的马克思主义新闻观",
        "军事理论",
        "新闻学概论",
        "广播电视概论",
        "广告学概论",
        "新媒体基础",
        "大众传播理论",
        "数字技术应用",
        "媒介伦理与法规",
        "媒介研究方法",
        "广告策划",
        "广告调查",
        "广告调研与统计分析",
        "广告媒体",
        "广告创意与表现",
        "世界广告通史",
        "广告经营",
        "网络广告",
        "电脑图文设计",
        "电脑图文设计实验",
        "平面广告设计",
        "平面广告设计实验",
        "数码摄影",
        "数码摄影实验",
        "公共关系学",
        "市场营销学",
        "西方广告选讲",
        "广播影视广告",
        "数字营销传播",
        "素描与色彩",
        "动漫视频广告",
        "动漫视频广告实验",
        "现代设计概论",
        "构成",
        "图形采风"
      ],
      "广电": [
        "毛泽东思想和中国特色社会主义理论体系概论",
        "马克思主义基本原理概论",
        "思想道德修养和法律基础",
        "中国近现代史纲要",
        "国情教育与社会实践",
        "军事理论",
        "新闻学概论",
        "广播电视概论",
        "广告学概论",
        "新媒体基础",
        "大众传播理论",
        "媒介伦理与法规",
        "媒介研究方法",
        "数字技术应用",
        "电视摄像",
        "电视摄像实验",
        "非线性编辑",
        "非线性编辑实验",
        "广播电视脚本写作",
        "广播电视发展史",
        "电视节目评析",
        "口语传播",
        "媒介案例分析",
        "影像叙事分析",
        "广播电视策划",
        "电视与文化产业",
        "影视剧研究",
        "电视直播与现场报道",
        "电视纪录片",
        "新闻采访",
        "新闻评论"
      ]
    };

    var TYPE = window.type;
    var courseData = courseSet[TYPE];

    courseData.push('实践中的马克思主义新闻观');
    courseData.push('专业实习');

    // 获取iframe和表格
    var iframe = window.frames[1].frames[0];
    if (iframe) {
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
          courseName: columns[1].textContent,       // 课程名称
          courseCategory: columns[2].textContent,   // 课程类型
          credit: columns[3].textContent,           // 学分
          school: columns[5].textContent,           // 授课学院
          type: columns[6].textContent,             // 学习类型
          score: columns[9].textContent             // 成绩
        };
      });

      /**
       * 计算学分
       * 
       * 计算规则
       * 课程名称符合培养方案中的任一项
       * 授课学院包括体育部，大学英语部且是公共必修
       * 缓考课程、没有分数的课程不计入加权
       * 
       * 保研资格
       * 所有分数在60分以上
       * 修了所有应修的课程
       */
      var count = 0;                // 总课程数
      var failedCourseCount = 0;    // 不及格课程总数
      var failedCourse = [];        // 不及格课程
      var retakeCourseCount = 0;    // 重修课程总数
      var retakeCourse = [];        // 重修课程
      var missingCourseCount = 0;   // 应修但是未修的课程总数
      var missingCourse = [];       // 应修但是未修的课程
      var creditsAmout = 0;         // 总学分
      var multiplication = 0;       // 加权总成绩
      var weightedAverage = 0;      // 加权平均分
      var dataTree = [];            // 解析后的成绩
      var extra = [];               // 附加信息

      // 辅助统计
      var gongbi = 0;
      var zhuanbi = 0;
      var zhuanxuan = 0;
      var gongbiCourse = [];
      var zhuanbiCourse = [];
      var zhuanxuanCourse = [];

      // 保存课程名称用来去重
      var allCourse = [];

      dataSource.forEach(item => {
        var courseName = item.courseName;
        var courseCategory = item.courseCategory;
        var credit = parseInt(item.credit);
        var school = item.school;
        var type = item.type;
        var score = parseInt(item.score);

        var unique = allCourse.indexOf(courseName) === -1;              // 不重复的课程
        var hasCourse = courseData.some(name => name === courseName);   // 培养方案中有的课程
        var publicRequired = (courseCategory === '公共必修' &&
          (school === '体育部' || school === '大学英语部'));             // 体育和英语

        var validation = unique && (hasCourse || publicRequired);

        if (validation) {
          if (score) {
            // 有分数的课程
            if (type !== '重修' && type !== '及格重修') {
              count ++;
              creditsAmout += credit;
              multiplication += credit * score;

              if (score < 60) {
                failedCourseCount ++;
                failedCourse.push(courseName);
              }

              // 辅助统计
              if (courseCategory === '公共必修') {
                gongbi ++;
                gongbiCourse.push(courseName);
              }
              if (courseCategory === '专业必修') {
                zhuanbi ++;
                zhuanbiCourse.push(courseName);
              }
              if (courseCategory === '专业选修') {
                zhuanxuan ++;
                zhuanxuanCourse.push(courseName);
              };
            } else if (type === '重修') {
              if (score < 60) {
                extra.push('重修再次不及格：' + courseName + ', ' + score);
              }

              retakeCourseCount ++;
              retakeCourse.push(courseName);
            }
          } else {
            // 没有分数的课程
            // 应修但是未修的课程
            missingCourseCount ++;
            missingCourse.push(courseName);
          }

          allCourse.push(courseName);

          dataTree.push({
            courseName,
            courseCategory,
            credit,
            score
          });
        }
      });

      weightedAverage = multiplication / creditsAmout;
      dataTree.sort((a, b) => a.courseCategory.localeCompare(b.courseCategory));

      console.warn('所有统计结果仅供参考，请以实际情况为准！');
      console.warn('成绩统计');
      console.log('姓名：' + window.document.getElementById('nameLable').textContent.trim());
      console.log("总课程数：" + count);
      console.log("总学分：" + creditsAmout);
      console.log("加权总成绩：" + multiplication);
      console.log("加权平均：" + weightedAverage.toFixed(2));

      if (failedCourseCount > 0) {
        // 不及格课程
        console.warn('不及格课程及重修课程');
        console.log('不及格课程总数：' + failedCourseCount);
        console.log('不及格课程：' + failedCourse.join(', '));
        console.log('重修课程总数：' + retakeCourseCount);
        console.log('重修课程：' + retakeCourse.join(', '));
      }

      if (missingCourseCount > 0) {
        // 应修但是未修的课程
        console.warn('应修但是未修的课程');
        console.log('应修但未修课程总数：' + missingCourseCount);
        console.log('应修但未修课程：' + missingCourse.join(', '));
      }

      if (extra.length > 0) {
        // 附加情况
        console.log(extra.join('\n'));
      }

      console.warn('参评保研的资格（重修及格的请重新核对）');
      if (failedCourseCount === 0 && missingCourseCount === 0) {
        console.log('%c具备参评保研的资格', 'color: #2BB4FF');
      } else {
        console.log('%c不具备参评保研的资格', 'color: #FF6E59');
      }
    } else {
      console.error('请进入成绩模块后再次执行该代码');
    }
  } else {
    console.error('请注明专业类别');
  }
})();