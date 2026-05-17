// data.js - Toàn bộ dữ liệu bài học từ sách 1 & 2 (10 bài)
window.lessons = [
  {
    id: 1,
    title: "Bài 1: Chào mừng bạn đến Đài Loan",
    vocab: [
      { word: "陳月美", pinyin: "Chén Yuèměi", meaning: "Trần Nguyệt Mỹ" },
      { word: "李明華", pinyin: "Lǐ Mínghuá", meaning: "Lý Minh Hoa" },
      { word: "王開文", pinyin: "Wáng Kāiwén", meaning: "Vương Khai Văn" },
      { word: "你", pinyin: "nǐ", meaning: "bạn" },
      { word: "來", pinyin: "lái", meaning: "đến (hướng về phía người nói)" },
      { word: "是", pinyin: "shì", meaning: "là, vâng, đúng" },
      { word: "小姐", pinyin: "xiǎo jiě", meaning: "cô gái, quý cô" },
      { word: "嗎", pinyin: "ma", meaning: "không? (trợ từ nghi vấn)" },
      { word: "接", pinyin: "jiē", meaning: "đón" },
      { word: "我們", pinyin: "wǒmen", meaning: "chúng tôi" },
      { word: "我", pinyin: "wǒ", meaning: "tôi" },
      { word: "這", pinyin: "zhè", meaning: "đây, này" },
      { word: "先生", pinyin: "xiānshēng", meaning: "ông, ngài" },
      { word: "好", pinyin: "hǎo", meaning: "tốt, khỏe" },
      { word: "姓", pinyin: "xìng", meaning: "họ" },
      { word: "叫", pinyin: "jiào", meaning: "gọi, tên là" },
      { word: "你們", pinyin: "nǐmen", meaning: "các bạn" },
      { word: "臺灣", pinyin: "Táiwān", meaning: "Đài Loan" },
      { word: "歡迎", pinyin: "huānyíng", meaning: "hoan nghênh" },
      { word: "請問", pinyin: "qǐngwèn", meaning: "xin hỏi" },
      { word: "是的", pinyin: "shì de", meaning: "vâng, đúng vậy" },
      { word: "謝謝", pinyin: "xièxie", meaning: "cảm ơn" },
      { word: "不客氣", pinyin: "bú kèqì", meaning: "không có gì" },
      { word: "你好", pinyin: "nǐ hǎo", meaning: "xin chào" },
      { word: "請", pinyin: "qǐng", meaning: "xin mời" },
      { word: "喝", pinyin: "hē", meaning: "uống" },
      { word: "茶", pinyin: "chá", meaning: "trà" },
      { word: "很", pinyin: "hěn", meaning: "rất" },
      { word: "好喝", pinyin: "hǎo hē", meaning: "ngon (đồ uống)" },
      { word: "什麼", pinyin: "shénme", meaning: "cái gì" },
      { word: "人", pinyin: "rén", meaning: "người" },
      { word: "喜歡", pinyin: "xǐhuān", meaning: "thích" },
      { word: "呢", pinyin: "ne", meaning: "thì? (trợ từ cuối câu)" },
      { word: "他", pinyin: "tā", meaning: "anh ấy" },
      { word: "不", pinyin: "bù", meaning: "không" },
      { word: "哪", pinyin: "nǎ / něi", meaning: "nào, đâu" },
      { word: "要", pinyin: "yào", meaning: "muốn" },
      { word: "咖啡", pinyin: "kāfēi", meaning: "cà phê" },
      { word: "烏龍茶", pinyin: "Wūlóng chá", meaning: "trà Ô long" },
      { word: "日本", pinyin: "Rìběn", meaning: "Nhật Bản" },
      { word: "美國", pinyin: "Měiguó", meaning: "nước Mỹ" },
      { word: "對不起", pinyin: "duìbuqǐ", meaning: "xin lỗi" },
      { word: "哪國", pinyin: "nǎ guó / něi guó", meaning: "nước nào" }
    ],
    grammar: [
      { title: "Câu hỏi A-不-A", struct: "V + 不 + V", example: "你是不是台灣人？" },
      { title: "Câu hỏi với trợ từ 吗", struct: "Câu + 吗", example: "你好吗？" },
      { title: "Cách trả lời khẳng định/phủ định", struct: "Lặp lại động từ chính hoặc 不 + động từ", example: "是, 他是臺灣人。/ 不是, 他不是。" },
      { title: "Phó từ mức độ 很", struct: "很 + Động từ/Tính từ", example: "我很好。他很喜歡臺灣。" }
    ],
    readingText: "明華: 請問你是陳月美小姐嗎？\n月美: 是的。謝謝你來接我們。\n明華: 不客氣。我是李明華。\n月美: 這是王先生。\n開文: 你好。我姓王，叫開文。\n明華: 你們好。歡迎你們來臺灣。\n\n明華: 請喝茶。\n開文: 謝謝。很好喝。請問這是什麼茶?\n明華: 這是烏龍茶。臺灣人喜歡喝茶。\n開文: 開文，你們日本人呢？\n月美: 他不是日本人。\n明華: 對不起，你是哪國人？\n開文: 我是美國人。",
    readingQuestions: [
      { text: "李明華來接誰？", options: ["陳月美", "王開文", "日本人", "美國人"], correct: 0 },
      { text: "王開文是哪國人？", options: ["臺灣人", "日本人", "美國人", "中國人"], correct: 2 },
      { text: "臺灣人喜歡喝什麼茶？", options: ["咖啡", "烏龍茶", "紅茶", "綠茶"], correct: 1 }
    ]
  },
  {
    id: 2,
    title: "Bài 2: Gia đình tôi",
    vocab: [
      { word: "張怡君", pinyin: "Zhāng Yíjūn", meaning: "Trương Di Quân" },
      { word: "馬安同", pinyin: "Mǎ Āntóng", meaning: "Mã An Đồng" },
      { word: "的", pinyin: "de", meaning: "của (trợ từ kết cấu)" },
      { word: "家人", pinyin: "jiārén", meaning: "người nhà" },
      { word: "家", pinyin: "jiā", meaning: "nhà" },
      { word: "漂亮", pinyin: "piàoliang", meaning: "đẹp" },
      { word: "房子", pinyin: "fángzi", meaning: "nhà cửa, căn phòng" },
      { word: "坐", pinyin: "zuò", meaning: "ngồi" },
      { word: "好", pinyin: "hǎo", meaning: "tốt, được" },
      { word: "有", pinyin: "yǒu", meaning: "có" },
      { word: "多", pinyin: "duō", meaning: "nhiều" },
      { word: "照片", pinyin: "zhàopiàn", meaning: "ảnh" },
      { word: "都", pinyin: "dōu", meaning: "đều" },
      { word: "照相", pinyin: "zhàoxiàng", meaning: "chụp ảnh" },
      { word: "張", pinyin: "zhāng", meaning: "tờ, bức (lượng từ)" },
      { word: "好看", pinyin: "hǎokàn", meaning: "đẹp (nhìn)" },
      { word: "誰", pinyin: "shuí", meaning: "ai" },
      { word: "姐姐", pinyin: "jiějie", meaning: "chị gái" },
      { word: "妹妹", pinyin: "mèimei", meaning: "em gái" },
      { word: "爸爸", pinyin: "bàba", meaning: "bố" },
      { word: "媽媽", pinyin: "māma", meaning: "mẹ" },
      { word: "請進", pinyin: "qǐng jìn", meaning: "mời vào" },
      { word: "田中誠一", pinyin: "Tiánzhōng Chéngyī", meaning: "Điền Trung Thành Nhất" },
      { word: "伯母", pinyin: "bómǔ", meaning: "bác gái" },
      { word: "伯父", pinyin: "bófù", meaning: "bác trai" },
      { word: "您", pinyin: "nín", meaning: "ông, bà (kính ngữ)" },
      { word: "名字", pinyin: "míngzi", meaning: "tên" },
      { word: "書", pinyin: "shū", meaning: "sách" },
      { word: "哥哥", pinyin: "gēge", meaning: "anh trai" },
      { word: "老師", pinyin: "lǎoshī", meaning: "giáo viên" },
      { word: "看書", pinyin: "kàn shū", meaning: "đọc sách" },
      { word: "幾", pinyin: "jǐ", meaning: "mấy" },
      { word: "個", pinyin: "ge", meaning: "cái, chiếc (lượng từ)" },
      { word: "沒", pinyin: "méi", meaning: "không (có)" },
      { word: "兄弟", pinyin: "xiōngdì", meaning: "anh em" },
      { word: "姐妹", pinyin: "jiěmèi", meaning: "chị em" },
      { word: "五", pinyin: "wǔ", meaning: "năm" },
      { word: "兩", pinyin: "liǎng", meaning: "hai" }
    ],
    grammar: [
      { title: "Trợ từ kết cấu 的", struct: "Người sở hữu + 的 + Vật sở hữu", example: "我的書, 哥哥的老師" },
      { title: "Động từ 有 (sở hữu)", struct: "Chủ ngữ + 有 + tân ngữ", example: "我有很多照片。" },
      { title: "Phó từ 都", struct: "Danh từ + 都 + Cụm động từ", example: "我們都是美國人。" },
      { title: "Lượng từ 個, 張", struct: "Số từ + Lượng từ + Danh từ", example: "一個哥哥, 兩張照片" }
    ],
    readingText: "怡君: 這是我家。請進！\n安同: 很漂亮的房子！\n怡君: 請坐！要不要喝茶？\n安同: 好，謝謝你。你家有很多照片。\n怡君: 我家人都很喜歡照相。\n安同: 這張照片很好看。這是誰？你姐姐嗎？\n怡君: 不是，是我妹妹。這是我爸爸、媽媽。\n安同: 你家人都很好看。\n\n明華: 田中，歡迎！歡迎！請進！\n田中: 謝謝。\n明華: 田中，這是我媽媽。\n田中: 伯母，您好！\n明華的媽媽: 你好，你好。來！來！來！請坐。你叫什麼名字？\n田中: 我叫誠一。你們家有很多書。\n明華: 都是我哥哥的書。他是老師，他很喜歡看書。\n明華的媽媽: 誠一，你家有幾個人？你有沒有兄弟姐妹？\n田中: 我家有五個人，我有兩個妹妹。",
    readingQuestions: [
      { text: "怡君家有什麼很多？", options: ["書", "照片", "咖啡", "茶"], correct: 1 },
      { text: "照片裡的人是誰？", options: ["怡君的姐姐", "怡君的妹妹", "怡君的媽媽", "怡君的朋友"], correct: 1 },
      { text: "田中誠一家有幾個人？", options: ["三個人", "四個人", "五個人", "六個人"], correct: 2 }
    ]
  },
  {
    id: 3,
    title: "Bài 3: Cuối tuần làm gì?",
    vocab: [
      { word: "週末", pinyin: "zhōumò", meaning: "cuối tuần" },
      { word: "聽", pinyin: "tīng", meaning: "nghe" },
      { word: "音樂", pinyin: "yīnyuè", meaning: "âm nhạc" },
      { word: "運動", pinyin: "yùndòng", meaning: "thể thao" },
      { word: "打", pinyin: "dǎ", meaning: "chơi (thể thao bóng)" },
      { word: "網球", pinyin: "wǎngqiú", meaning: "tennis" },
      { word: "棒球", pinyin: "bàngqiú", meaning: "bóng chày" },
      { word: "和", pinyin: "hé", meaning: "và" },
      { word: "游泳", pinyin: "yóuyǒng", meaning: "bơi" },
      { word: "常", pinyin: "cháng", meaning: "thường xuyên" },
      { word: "籃球", pinyin: "lánqiú", meaning: "bóng rổ" },
      { word: "也", pinyin: "yě", meaning: "cũng" },
      { word: "踢", pinyin: "tī", meaning: "đá" },
      { word: "足球", pinyin: "zúqiú", meaning: "bóng đá" },
      { word: "覺得", pinyin: "juéde", meaning: "cảm thấy" },
      { word: "好玩", pinyin: "hǎowán", meaning: "thú vị" },
      { word: "明天", pinyin: "míngtiān", meaning: "ngày mai" },
      { word: "早上", pinyin: "zǎoshàng", meaning: "buổi sáng" },
      { word: "去", pinyin: "qù", meaning: "đi" },
      { word: "怎麼樣", pinyin: "zěnmeyàng", meaning: "thế nào" },
      { word: "啊", pinyin: "a", meaning: "à" },
      { word: "做什麼", pinyin: "zuò shénme", meaning: "làm gì" },
      { word: "好啊", pinyin: "hǎo a", meaning: "được thôi" },
      { word: "白如玉", pinyin: "Bái Rúyù", meaning: "Bạch Như Ngọc" },
      { word: "今天", pinyin: "jīntiān", meaning: "hôm nay" },
      { word: "晚上", pinyin: "wǎnshàng", meaning: "buổi tối" },
      { word: "看", pinyin: "kàn", meaning: "xem" },
      { word: "電影", pinyin: "diànyǐng", meaning: "phim" },
      { word: "妳", pinyin: "nǐ", meaning: "bạn (nữ)" },
      { word: "想", pinyin: "xiǎng", meaning: "muốn" },
      { word: "還是", pinyin: "háishì", meaning: "hay là" },
      { word: "吧", pinyin: "ba", meaning: "đi" },
      { word: "可以", pinyin: "kěyǐ", meaning: "có thể" },
      { word: "學", pinyin: "xué", meaning: "học" },
      { word: "中文", pinyin: "Zhōngwén", meaning: "tiếng Trung" },
      { word: "一起", pinyin: "yìqǐ", meaning: "cùng nhau" },
      { word: "吃", pinyin: "chī", meaning: "ăn" },
      { word: "晚飯", pinyin: "wǎnfàn", meaning: "bữa tối" },
      { word: "菜", pinyin: "cài", meaning: "món ăn" },
      { word: "越南", pinyin: "Yuènán", meaning: "Việt Nam" },
      { word: "好不好", pinyin: "hǎo bù hǎo", meaning: "được không?" }
    ],
    grammar: [
      { title: "Vị trí từ chỉ thời gian", struct: "Thời gian + Chủ ngữ + Động từ", example: "我們今天去看電影。" },
      { title: "Cấu trúc 去 + VP", struct: "去 + Động từ", example: "我去打網球。" },
      { title: "Câu chủ đề - dẫn giải", struct: "Chủ đề + 都/也 + Bình luận", example: "美國電影、臺灣電影，我都想看。" },
      { title: "Trật tự trạng từ 也, 都, 常", struct: "Chủ ngữ + 也/都/常 + V", example: "我也常喝咖啡。" },
      { title: "Trợ từ 吧 (đề nghị)", struct: "Câu + 吧", example: "我們去看臺灣電影吧！" }
    ],
    readingText: "安同: 田中,你喜歡聽音樂嗎？\n田中: 我不喜歡聽音樂。我喜歡運動。\n安同: 你喜歡打網球嗎？\n田中: 我不喜歡打網球。\n安同: 你喜歡做什麼？\n田中: 打棒球和游泳，你呢？\n安同: 我常打籃球, 也常踢足球。\n田中: 我覺得踢足球很好玩。\n安同: 明天是週末, 我們早上去踢足球, 怎麼樣?\n田中: 好啊！\n\n如玉: 今天晚上我們去看電影，好不好？\n月美: 好啊！\n如玉: 你想看美國電影還是臺灣電影？\n月美: 美國電影、臺灣電影, 我都想看。\n如玉: 我們看臺灣電影吧 !\n月美: 好啊 ! 看電影可以學中文。\n如玉: 晚上要不要一起吃晚飯 ?\n月美: 好, 我們去吃越南菜。",
    readingQuestions: [
      { text: "田中不喜歡做什麼？", options: ["打棒球", "聽音樂", "游泳", "踢足球"], correct: 1 },
      { text: "安同常做什麼運動？", options: ["打籃球和踢足球", "打網球", "游泳", "打棒球"], correct: 0 },
      { text: "月美和如玉決定看什麼電影？", options: ["美國電影", "日本電影", "臺灣電影", "越南電影"], correct: 2 }
    ]
  },
  {
    id: 4,
    title: "Bài 4: Xin hỏi tổng cộng bao nhiêu tiền?",
    vocab: [
      { word: "一共", pinyin: "yígòng", meaning: "tổng cộng" },
      { word: "多少", pinyin: "duōshǎo", meaning: "bao nhiêu" },
      { word: "錢", pinyin: "qián", meaning: "tiền" },
      { word: "老闆", pinyin: "lǎobǎn", meaning: "chủ cửa hàng" },
      { word: "買", pinyin: "mǎi", meaning: "mua" },
      { word: "杯", pinyin: "bēi", meaning: "ly, cốc" },
      { word: "熱", pinyin: "rè", meaning: "nóng" },
      { word: "包子", pinyin: "bāozi", meaning: "bánh bao" },
      { word: "要", pinyin: "yào", meaning: "muốn" },
      { word: "大", pinyin: "dà", meaning: "to" },
      { word: "中", pinyin: "zhōng", meaning: "vừa" },
      { word: "小", pinyin: "xiǎo", meaning: "nhỏ" },
      { word: "幫", pinyin: "bāng", meaning: "giúp" },
      { word: "微波", pinyin: "wēibō", meaning: "hâm nóng" },
      { word: "百", pinyin: "bǎi", meaning: "trăm" },
      { word: "塊", pinyin: "kuài", meaning: "đồng" },
      { word: "好的", pinyin: "hǎo de", meaning: "được" },
      { word: "外帶", pinyin: "wàidài", meaning: "mang về" },
      { word: "內用", pinyin: "nèiyòng", meaning: "ăn tại chỗ" },
      { word: "支", pinyin: "zhī", meaning: "chiếc" },
      { word: "新", pinyin: "xīn", meaning: "mới" },
      { word: "手機", pinyin: "shǒujī", meaning: "điện thoại" },
      { word: "太", pinyin: "tài", meaning: "quá" },
      { word: "舊", pinyin: "jiù", meaning: "cũ" },
      { word: "了", pinyin: "le", meaning: "rồi" },
      { word: "種", pinyin: "zhǒng", meaning: "loại" },
      { word: "能", pinyin: "néng", meaning: "có thể" },
      { word: "上網", pinyin: "shàngwǎng", meaning: "lên mạng" },
      { word: "那", pinyin: "nà / nèi", meaning: "đó" },
      { word: "貴", pinyin: "guì", meaning: "đắt" },
      { word: "賣", pinyin: "mài", meaning: "bán" },
      { word: "便宜", pinyin: "piányí", meaning: "rẻ" },
      { word: "萬", pinyin: "wàn", meaning: "vạn" },
      { word: "千", pinyin: "qiān", meaning: "nghìn" },
      { word: "為什麼", pinyin: "wèishénme", meaning: "tại sao" }
    ],
    grammar: [
      { title: "Lượng từ 塊, 杯, 支, 種", struct: "Số từ + Lượng từ + Danh từ", example: "一杯咖啡, 一支手機" },
      { title: "Giới từ 幫 (giúp đỡ)", struct: "幫 + Người + Động từ", example: "請幫我微波包子。" },
      { title: "Lược bỏ danh từ chính với 的", struct: "Định ngữ + 的 (danh từ được lược bỏ)", example: "我要新的，不要舊的。" },
      { title: "Cấu trúc 太……了", struct: "太 + Tính từ + 了", example: "太貴了！" },
      { title: "Trợ động từ 能", struct: "能 + Động từ", example: "新手機能上網。" }
    ],
    readingText: "老闆: 請問你要買什麼？\n明華: 一杯熱咖啡。兩個包子。\n老闆: 你要大杯、中杯還是小杯?\n明華: 大杯。包子請幫我微波。\n老闆: 好的。請問外帶還是內用。\n明華: 外帶，一共多少錢?\n老闆: 咖啡八十，包子四十，一共一百二十塊。\n\n月美: 我想買一隻新手機。\n明華: 你的手機很好。為什麼要買新的？\n月美: 我這支手機太舊了，不好看。\n明華: 你想買哪種手機？\n月美: 能照相也能上網。\n明華: 那種手機很好，我哥哥有一支。\n月美: 貴不貴？一支賣多少錢？\n明華: 那種手機不便宜。一支要一萬五千多。",
    readingQuestions: [
      { text: "明華買了什麼？", options: ["熱咖啡和包子", "茶和包子", "咖啡和麵", "果汁"], correct: 0 },
      { text: "一共多少錢？", options: ["80塊", "120塊", "100塊", "40塊"], correct: 1 },
      { text: "月美為什麼要買新手機？", options: ["舊手機太貴", "舊手機太舊不好看", "舊手機不能上網", "新手機便宜"], correct: 1 }
    ]
  },
  {
    id: 5,
    title: "Bài 5: Mì bò ăn thật ngon",
    vocab: [
      { word: "牛肉", pinyin: "niúròu", meaning: "thịt bò" },
      { word: "麵", pinyin: "miàn", meaning: "mì" },
      { word: "真", pinyin: "zhēn", meaning: "thật" },
      { word: "好吃", pinyin: "hǎochī", meaning: "ngon" },
      { word: "說", pinyin: "shuō", meaning: "nói" },
      { word: "少", pinyin: "shǎo", meaning: "ít" },
      { word: "有名", pinyin: "yǒumíng", meaning: "nổi tiếng" },
      { word: "小吃", pinyin: "xiǎochī", meaning: "món ăn vặt" },
      { word: "最", pinyin: "zuì", meaning: "nhất" },
      { word: "湯", pinyin: "tāng", meaning: "nước dùng" },
      { word: "這麼", pinyin: "zhème", meaning: "thế này" },
      { word: "知道", pinyin: "zhīdào", meaning: "biết" },
      { word: "家", pinyin: "jiā", meaning: "tiệm" },
      { word: "店", pinyin: "diàn", meaning: "cửa hàng" },
      { word: "一定", pinyin: "yídìng", meaning: "nhất định" },
      { word: "點", pinyin: "diǎn", meaning: "gọi món" },
      { word: "碗", pinyin: "wǎn", meaning: "bát" },
      { word: "是啊", pinyin: "shì a", meaning: "đúng vậy" },
      { word: "小籠包", pinyin: "xiǎolóngbāo", meaning: "bánh bao súp" },
      { word: "臭豆腐", pinyin: "chòudòufu", meaning: "đậu phụ thối" },
      { word: "太好了", pinyin: "tài hǎo le", meaning: "tuyệt quá" },
      { word: "昨天", pinyin: "zuótiān", meaning: "hôm qua" },
      { word: "餐廳", pinyin: "cāntīng", meaning: "nhà hàng" },
      { word: "可是", pinyin: "kěshì", meaning: "nhưng" },
      { word: "辣", pinyin: "là", meaning: "cay" },
      { word: "怕", pinyin: "pà", meaning: "sợ" },
      { word: "所以", pinyin: "suǒyǐ", meaning: "vì thế" },
      { word: "自己", pinyin: "zìjǐ", meaning: "bản thân" },
      { word: "做飯", pinyin: "zuòfàn", meaning: "nấu ăn" },
      { word: "得", pinyin: "de", meaning: "được" },
      { word: "會", pinyin: "huì", meaning: "biết" },
      { word: "甜點", pinyin: "tiándiǎn", meaning: "tráng miệng" },
      { word: "不錯", pinyin: "búcuò", meaning: "không tệ" },
      { word: "教", pinyin: "jiāo", meaning: "dạy" },
      { word: "到", pinyin: "dào", meaning: "đến" },
      { word: "有一點", pinyin: "yǒu yìdiǎn", meaning: "một chút" },
      { word: "不好", pinyin: "bù hǎo", meaning: "không tốt" }
    ],
    grammar: [
      { title: "Cấu trúc 有一點 (+ Tính từ)", struct: "有一點 + Adj", example: "這碗牛肉麵有一點辣。" },
      { title: "Bổ ngữ 得", struct: "V + 得 + Bổ ngữ", example: "你做飯做得怎麼樣？" },
      { title: "Trợ động từ 會 (kỹ năng)", struct: "會 + V", example: "你會不會做飯？" },
      { title: "Giới từ 到 (đến)", struct: "到 + Địa điểm + 來/去", example: "你到我家來。" }
    ],
    readingText: "月美: 很多人都說臺灣有不少有名的小吃。\n明華: 是啊！牛肉麵、小籠包、臭豆腐···都很好吃。\n月美: 你最喜歡吃什麼？\n明華: 牛肉麵。牛肉好吃，湯也好喝。\n月美: 這麼好吃，我很想吃。\n明華: 我知道一家有名的牛肉麵店，我們一起去吃，怎麼樣？\n月美: 太好了！\n明華: 我們明天去。一定要點大碗的。\n\n月美: 昨天晚上那家餐廳的菜很好吃, 可是有一點辣。\n安同: 我也怕辣, 所以我喜歡自己做飯。\n月美: 你做飯做得怎麼樣?\n安同: 我做得不好。你會做飯嗎?\n月美: 會。我的甜點也做得不錯。\n安同: 我最喜歡吃甜點。你可以教我嗎?\n月美: 好的, 這個週末, 你到我家來。",
    readingQuestions: [
      { text: "明華最喜歡吃什麼？", options: ["臭豆腐", "小籠包", "牛肉麵", "甜點"], correct: 2 },
      { text: "月美覺得那家餐廳的菜怎麼樣？", options: ["很好吃但有點辣", "很好吃但不辣", "不好吃很辣", "普通"], correct: 0 },
      { text: "安同為什麼自己做飯？", options: ["喜歡做飯", "怕外面的菜辣", "不會做飯", "外面太貴"], correct: 1 }
    ]
  },
  {
    id: 6,
    title: "Bài 6: Trường học của họ ở trên núi",
    vocab: [
      { word: "他們", pinyin: "tāmen", meaning: "họ" },
      { word: "學校", pinyin: "xuéxiào", meaning: "trường học" },
      { word: "在", pinyin: "zài", meaning: "ở" },
      { word: "山上", pinyin: "shānshàng", meaning: "trên núi" },
      { word: "哪裡", pinyin: "nǎlǐ", meaning: "ở đâu" },
      { word: "遠", pinyin: "yuǎn", meaning: "xa" },
      { word: "那裡", pinyin: "nàlǐ", meaning: "ở đó" },
      { word: "風景", pinyin: "fēngjǐng", meaning: "phong cảnh" },
      { word: "美", pinyin: "měi", meaning: "đẹp" },
      { word: "前面", pinyin: "qiánmiàn", meaning: "phía trước" },
      { word: "海", pinyin: "hǎi", meaning: "biển" },
      { word: "後面", pinyin: "hòumiàn", meaning: "phía sau" },
      { word: "山", pinyin: "shān", meaning: "núi" },
      { word: "真的", pinyin: "zhěnde", meaning: "thật sự" },
      { word: "地方", pinyin: "dìfāng", meaning: "nơi" },
      { word: "現在", pinyin: "xiànzài", meaning: "bây giờ" },
      { word: "附近", pinyin: "fùjìn", meaning: "gần" },
      { word: "樓下", pinyin: "lóuxià", meaning: "dưới lầu" },
      { word: "找", pinyin: "zhǎo", meaning: "tìm" },
      { word: "朋友", pinyin: "péngyǒu", meaning: "bạn bè" },
      { word: "上課", pinyin: "shàngkè", meaning: "lên lớp" },
      { word: "花蓮", pinyin: "Huālián", meaning: "Hoa Liên" },
      { word: "聽說", pinyin: "tīngshuō", meaning: "nghe nói" },
      { word: "近", pinyin: "jìn", meaning: "gần" },
      { word: "方便", pinyin: "fāngbiàn", meaning: "tiện lợi" },
      { word: "這裡", pinyin: "zhèlǐ", meaning: "ở đây" },
      { word: "學生", pinyin: "xuéshēng", meaning: "học sinh" },
      { word: "東西", pinyin: "dōngxī", meaning: "đồ vật" },
      { word: "外面", pinyin: "wàimiàn", meaning: "bên ngoài" },
      { word: "裡面", pinyin: "lǐmiàn", meaning: "bên trong" },
      { word: "商店", pinyin: "shāngdiàn", meaning: "cửa hàng" },
      { word: "吃飯", pinyin: "chīfàn", meaning: "ăn cơm" },
      { word: "宿舍", pinyin: "sùshè", meaning: "ký túc xá" },
      { word: "樓", pinyin: "lóu", meaning: "tầng" },
      { word: "棟", pinyin: "dòng", meaning: "tòa" },
      { word: "大樓", pinyin: "dàlóu", meaning: "tòa nhà" },
      { word: "圖書館", pinyin: "túshūguǎn", meaning: "thư viện" },
      { word: "旁邊", pinyin: "pángbiān", meaning: "bên cạnh" },
      { word: "教室", pinyin: "jiàoshì", meaning: "phòng học" },
      { word: "游泳池", pinyin: "yóuyǒngchí", meaning: "bể bơi" }
    ],
    grammar: [
      { title: "Giới từ 在 (chỉ vị trí)", struct: "Danh từ + 在 + Địa điểm", example: "他們學校在花蓮的山上。" },
      { title: "Động từ 有 (chỉ sự tồn tại)", struct: "Địa điểm + 有 + Danh từ", example: "學校前面有海，後面有山。" },
      { title: "Cấu trúc lặp động từ V(一)V", struct: "V + (一) + V", example: "我想去看看。" },
      { title: "Phủ định 不是 (không phải)", struct: "不是 + Mệnh đề", example: "餐廳不是在學校裡面。" }
    ],
    readingText: "安同: 聽說怡君的學校很漂亮。\n如玉: 他們學校在哪裡？遠不遠？\n安同: 有一點遠。他們學校在花蓮的山上。\n如玉: 山上？那裡的風景一定很美。\n安同: 是的，他們學校前面有海，後面有山，那裡真的是一個很漂亮的地方。\n如玉: 我想去看看。我們這個周末一起去吧！\n安同: 好啊！我現在要去學校附近的咖啡店買咖啡。你呢？\n如玉: 我去樓下找朋友，我們要一起去上課。\n\n怡君: 歡迎你們來。\n安同: 你們學校真遠！\n怡君: 是啊，不是很近，有一點不方便。\n如玉: 這裡的學生在哪裡買東西？\n怡君: 在學校外面。學校裡面沒有商店。\n安同: 吃飯呢？學校裡面有没有餐廳？\n怡君: 有，餐廳在學生宿舍的一樓。\n安同: 前面這棟大樓很漂亮。\n怡君: 這是圖書館，旁邊的那棟大樓是教室，圖書館後面有游泳池。",
    readingQuestions: [
      { text: "怡君的學校在哪裡？", options: ["在臺北", "在花蓮的山上", "在海邊", "在市中心"], correct: 1 },
      { text: "學校前面有什麼？", options: ["山", "海", "商店", "圖書館"], correct: 1 },
      { text: "學校裡面有沒有商店？", options: ["有", "沒有", "有一點", "很多"], correct: 1 }
    ]
  },
  {
    id: 7,
    title: "Bài 7: 9 giờ sáng đi KTV",
    vocab: [
      { word: "點", pinyin: "diǎn", meaning: "giờ" },
      { word: "KTV", pinyin: "KTV", meaning: "karaoke" },
      { word: "唱歌", pinyin: "chànggē", meaning: "hát" },
      { word: "分", pinyin: "fēn", meaning: "phút" },
      { word: "見面", pinyin: "jiànmiàn", meaning: "gặp mặt" },
      { word: "從", pinyin: "cóng", meaning: "từ" },
      { word: "中午", pinyin: "zhōngwǔ", meaning: "buổi trưa" },
      { word: "得", pinyin: "děi", meaning: "phải" },
      { word: "銀行", pinyin: "yínháng", meaning: "ngân hàng" },
      { word: "下次", pinyin: "xià cì", meaning: "lần sau" },
      { word: "聽", pinyin: "tīng", meaning: "nghe" },
      { word: "沒問題", pinyin: "méi wèntí", meaning: "không vấn đề" },
      { word: "對了", pinyin: "duìle", meaning: "à đúng rồi" },
      { word: "時候", pinyin: "shíhou", meaning: "lúc" },
      { word: "有空", pinyin: "yǒu kòng", meaning: "có rảnh" },
      { word: "後天", pinyin: "hòutiān", meaning: "ngày kia" },
      { word: "再見", pinyin: "zàijiàn", meaning: "tạm biệt" },
      { word: "午餐", pinyin: "wǔcān", meaning: "bữa trưa" },
      { word: "剛", pinyin: "gāng", meaning: "vừa mới" },
      { word: "下課", pinyin: "xiàkè", meaning: "tan học" },
      { word: "下午", pinyin: "xiàwǔ", meaning: "buổi chiều" },
      { word: "半", pinyin: "bàn", meaning: "rưỡi" },
      { word: "比賽", pinyin: "bǐsài", meaning: "thi đấu" },
      { word: "結束", pinyin: "jiéshù", meaning: "kết thúc" },
      { word: "最近", pinyin: "zuìjìn", meaning: "gần đây" },
      { word: "忙", pinyin: "máng", meaning: "bận" },
      { word: "每", pinyin: "měi", meaning: "mỗi" },
      { word: "天", pinyin: "tiān", meaning: "ngày" },
      { word: "書法", pinyin: "shūfǎ", meaning: "thư pháp" },
      { word: "課", pinyin: "kè", meaning: "tiết học" },
      { word: "開始", pinyin: "kāishǐ", meaning: "bắt đầu" },
      { word: "字", pinyin: "zì", meaning: "chữ" },
      { word: "寫", pinyin: "xiě", meaning: "viết" },
      { word: "問", pinyin: "wèn", meaning: "hỏi" },
      { word: "等一下", pinyin: "děng yíxià", meaning: "đợi một chút" },
      { word: "有事", pinyin: "yǒu shì", meaning: "có việc" },
      { word: "有意思", pinyin: "yǒu yìsi", meaning: "thú vị" }
    ],
    grammar: [
      { title: "Thời gian và địa điểm của sự kiện", struct: "Thời gian + Địa điểm + Hoạt động", example: "他下午在教室寫書法。" },
      { title: "Cấu trúc 從...到... (từ... đến...)", struct: "從 A 到 B", example: "從早上七點到中午十二點最便宜。" },
      { title: "Trợ từ 在 (đang diễn ra)", struct: "在 + V", example: "他在吃飯。" },
      { title: "Từ 每 (mỗi)", struct: "每 + Lượng từ + 都", example: "他每天都有空。" },
      { title: "Trợ động từ 可以", struct: "可以 + V", example: "我可以看看嗎？" }
    ],
    readingText: "安同: 月美，你要去哪裡？\n月美: 去KTV唱歌。我和朋友九點二十分在大安KTV見面。\n安同: 早上九點去KTV？為什麼？\n月美: 從早上七點到中午十二點，最便宜。要不要一起去？\n安同: 我想去，可是我得到銀行。下次吧！\n月美: 好呀，下次你一定要來，我想聽你唱歌。\n安同: 沒問題。對了，什麼時候有空一起吃飯？\n月美: 後天我有空，你呢？\n安同: 我也有空，後天晚上七點怎麼樣？\n月美: 好啊！再見。\n\n安同: 如玉，你在吃飯啊？\n如玉: 是，吃午餐，等一下要上課。你呢？\n安同: 我剛下課。對了，下午四點半學校有籃球比賽。你想去看嗎？\n如玉: 想啊。比賽幾點結束？\n安同: 六點半。你晚上有事嗎？\n如玉: 我最近很忙，每天晚上都上書法課。\n安同: 學得怎麼樣？\n如玉: 剛開始學，字寫得不好，可是我覺得很有意思。",
    readingQuestions: [
      { text: "月美為什麼早上九點去KTV？", options: ["因為有空", "因為最便宜", "因為朋友約", "因為人少"], correct: 1 },
      { text: "安同為什麼不能去KTV？", options: ["要上課", "要去銀行", "要回家", "要吃飯"], correct: 1 },
      { text: "如玉晚上要做什麼？", options: ["看籃球比賽", "上書法課", "去KTV", "吃飯"], correct: 1 }
    ]
  },
  {
    id: 8,
    title: "Bài 8: Ngồi tàu hỏa đến Đài Nam",
    vocab: [
      { word: "坐", pinyin: "zuò", meaning: "ngồi, đi (phương tiện)" },
      { word: "火車", pinyin: "huǒchē", meaning: "tàu hỏa" },
      { word: "跟", pinyin: "gēn", meaning: "cùng với" },
      { word: "玩", pinyin: "wán", meaning: "chơi" },
      { word: "怎麼", pinyin: "zěnme", meaning: "thế nào" },
      { word: "慢", pinyin: "màn", meaning: "chậm" },
      { word: "鐘頭", pinyin: "zhōngtóu", meaning: "tiếng đồng hồ" },
      { word: "比較", pinyin: "bǐjiào", meaning: "khá" },
      { word: "快", pinyin: "kuài", meaning: "nhanh" },
      { word: "車票", pinyin: "chēpiào", meaning: "vé" },
      { word: "非常", pinyin: "fēicháng", meaning: "vô cùng" },
      { word: "但是", pinyin: "dànshì", meaning: "nhưng" },
      { word: "又", pinyin: "yòu", meaning: "vừa" },
      { word: "舒服", pinyin: "shūfu", meaning: "thoải mái" },
      { word: "站", pinyin: "zhàn", meaning: "trạm" },
      { word: "或是", pinyin: "huòshì", meaning: "hoặc là" },
      { word: "臺南", pinyin: "Táinán", meaning: "Đài Nam" },
      { word: "高鐵", pinyin: "gāotiě", meaning: "tàu cao tốc" },
      { word: "網路上", pinyin: "wǎnglù shàng", meaning: "trên mạng" },
      { word: "便利商店", pinyin: "biànlì shāngdiàn", meaning: "cửa hàng tiện lợi" },
      { word: "同學", pinyin: "tóngxué", meaning: "bạn học" },
      { word: "參觀", pinyin: "cānguān", meaning: "tham quan" },
      { word: "古代", pinyin: "gǔdài", meaning: "cổ đại" },
      { word: "騎", pinyin: "qí", meaning: "cưỡi, đi (xe)" },
      { word: "機車", pinyin: "jīchē", meaning: "xe máy" },
      { word: "載", pinyin: "zài", meaning: "chở" },
      { word: "捷運", pinyin: "jiéyùn", meaning: "tàu điện ngầm" },
      { word: "比", pinyin: "bǐ", meaning: "hơn" },
      { word: "故宫博物院", pinyin: "Gùgōng Bówùyuàn", meaning: "Bảo tàng Cố cung" },
      { word: "中國", pinyin: "Zhōngguó", meaning: "Trung Quốc" },
      { word: "公共汽車", pinyin: "gōnggòng qìchē", meaning: "xe buýt" },
      { word: "不行", pinyin: "bù xíng", meaning: "không được" },
      { word: "計程車", pinyin: "jìchéngchē", meaning: "taxi" },
      { word: "差不多", pinyin: "chàbùduō", meaning: "khoảng" }
    ],
    grammar: [
      { title: "Giới từ 跟 (cùng với)", struct: "跟 + Người + Động từ", example: "我跟朋友去臺南玩。" },
      { title: "Đại từ nghi vấn 怎麼 (thế nào)", struct: "怎麼 + Động từ", example: "怎麼去？" },
      { title: "Phó từ 比較 (so sánh ngầm)", struct: "比較 + Tính từ", example: "坐高鐵比較快。" },
      { title: "Cấu trúc 又...又... (vừa...vừa...)", struct: "又 + Adj1 + 又 + Adj2", example: "坐高鐵又快又舒服。" },
      { title: "Câu so sánh với 比", struct: "A 比 B + Tính từ", example: "高鐵比火車快。" }
    ],
    readingText: "如玉: 這個周末，我想跟朋友去臺南玩。\n明華: 怎麼去？\n如玉: 我想坐火車去。\n明華: 火車太慢了，要四個多鐘頭，坐高鐵比較快。\n如玉: 可是高鐵車票非常貴。\n明華: 高鐵車票有一點貴，但是坐高鐵又快又舒服。\n如玉: 我不知道在哪裡買票。\n明華: 在高鐵站、網路上或是便利商店都可以。\n如玉: 這麼方便！那我做高鐵去，謝謝你。\n\n如玉: 安同，明天我們沒課，你想去哪裡？\n安同: 我要跟同學去參觀故宮博物院。\n如玉: 聽說那裡有很多中國古代的東西。\n安同: 是啊。你要跟我們去看看嗎？\n如玉: 好。怎麼去？\n安同: 我同學騎機車載我。你可以坐公共汽車去。\n如玉: 我想坐捷運去。比較快。\n安同: 不行，到故宮沒有捷運。你要不要坐計程車去？\n如玉: 太貴了！我做公車。騎機車比坐公車快嗎？\n安同: 差不多。",
    readingQuestions: [
      { text: "如玉一開始想坐什麼去臺南？", options: ["高鐵", "火車", "公車", "計程車"], correct: 1 },
      { text: "高鐵有什麼優點？", options: ["便宜", "又快又舒服", "有很多站", "不用買票"], correct: 1 },
      { text: "去故宮博物院可以坐捷運嗎？", options: ["可以", "不可以", "只有計程車", "只有公車"], correct: 1 }
    ]
  },
  {
    id: 9,
    title: "Bài 9: Được nghỉ đi đâu chơi?",
    vocab: [
      { word: "星期", pinyin: "xīngqī", meaning: "tuần" },
      { word: "回國", pinyin: "huíguó", meaning: "về nước" },
      { word: "打算", pinyin: "dǎsuàn", meaning: "dự định" },
      { word: "電視", pinyin: "diànshì", meaning: "tivi" },
      { word: "影片", pinyin: "yǐngpiàn", meaning: "phim" },
      { word: "旅行", pinyin: "lǚxíng", meaning: "du lịch" },
      { word: "功課", pinyin: "gōngkè", meaning: "bài tập" },
      { word: "出去", pinyin: "chūqù", meaning: "đi ra ngoài" },
      { word: "大概", pinyin: "dàgài", meaning: "khoảng" },
      { word: "放假", pinyin: "fàngjià", meaning: "nghỉ" },
      { word: "下個星期", pinyin: "xià ge xīngqī", meaning: "tuần sau" },
      { word: "有時候", pinyin: "yǒu shíhòu", meaning: "có lúc" },
      { word: "多久", pinyin: "duō jiǔ", meaning: "bao lâu" },
      { word: "臺東", pinyin: "Táidōng", meaning: "Đài Đông" },
      { word: "女朋友", pinyin: "nǚ péngyou", meaning: "bạn gái" },
      { word: "月", pinyin: "yuè", meaning: "tháng" },
      { word: "號", pinyin: "hào", meaning: "ngày" },
      { word: "帶", pinyin: "dài", meaning: "dắt" },
      { word: "她", pinyin: "tā", meaning: "cô ấy" },
      { word: "還", pinyin: "hái", meaning: "còn" },
      { word: "建議", pinyin: "jiànyì", meaning: "gợi ý" },
      { word: "夜市", pinyin: "yèshì", meaning: "chợ đêm" },
      { word: "應該", pinyin: "yīnggāi", meaning: "nên" },
      { word: "逛", pinyin: "guàng", meaning: "đi dạo" },
      { word: "特別", pinyin: "tèbié", meaning: "đặc biệt" },
      { word: "茶館", pinyin: "cháguǎn", meaning: "quán trà" },
      { word: "決定", pinyin: "juédìng", meaning: "quyết định" },
      { word: "要是", pinyin: "yàoshì", meaning: "nếu" },
      { word: "就", pinyin: "jiù", meaning: "thì" },
      { word: "貓空", pinyin: "Māokōng", meaning: "Miêu Không" }
    ],
    grammar: [
      { title: "Thời gian và thời lượng", struct: "Chủ ngữ + V + Thời lượng", example: "我去花蓮玩一個星期。" },
      { title: "Cấu trúc ...的時候 (khi...)", struct: "Sự việc + 的時候", example: "放假的時候，你常去旅行嗎？" },
      { title: "Cấu trúc 有時候...有時候... (lúc thì... lúc thì...)", struct: "有時候 + Mệnh đề A + 有時候 + Mệnh đề B", example: "有時候在家寫功課，有時候出去玩。" },
      { title: "Cấu trúc 要是...就... (nếu... thì...)", struct: "要是 + Điều kiện, 就 + Kết quả", example: "要是我有空，就跟你們一起去。" }
    ],
    readingText: "安同: 田中，下個星期我們放五天的假，你要回國？\n田中: 不，我打算在家看電視、影片學中文，你呢？\n安同: 我想跟朋友去玩。\n田中: 不錯啊。去什麼地方？\n安同: 臺東。聽說那裡的風景非常漂亮。\n田中: 我也聽說。放假的時候，你常去旅行？\n安同: 不一定。有時候在家寫功課，有時候出去玩。\n田中: 你們什麼時候去臺東？\n安同: 這個星期六下午去。\n田中: 去玩多久？\n安同: 大概玩四、五天。\n\n田中: 我女朋友九月三十號要來臺灣看我。\n明華: 你想帶她去哪裡玩？\n田中: 還不知道。你有什麼建議？\n明華: 臺灣的夜市很有名。你們應該去逛逛。\n田中: 謝謝，還有什麼好玩的地方？\n明華: 臺灣的茶也很特別。臺北有很多茶館。\n田中: 到哪裡喝茶比較好？\n明華: 你們可以去貓空。那裡的風景很美。\n田中: 謝謝你。我決定帶她去貓空。你也一起去，好不好？\n明華: 要是那時候我有空，就跟你們一起去。\n田中: 太好了！謝謝！",
    readingQuestions: [
      { text: "田中放假打算做什麼？", options: ["回國", "在家看電視學中文", "去旅行", "去夜市"], correct: 1 },
      { text: "安同要去哪裡玩？", options: ["花蓮", "臺東", "臺北", "貓空"], correct: 1 },
      { text: "明華建議田中帶女朋友去哪裡？", options: ["夜市和貓空", "故宮", "KTV", "海邊"], correct: 0 }
    ]
  },
  {
    id: 10,
    title: "Bài 10: Hoa quả Đài Loan rất ngon",
    vocab: [
      { word: "水果", pinyin: "shuǐguǒ", meaning: "hoa quả" },
      { word: "黃色", pinyin: "huángsè", meaning: "màu vàng" },
      { word: "芒果", pinyin: "mángguǒ", meaning: "xoài" },
      { word: "給", pinyin: "gěi", meaning: "cho" },
      { word: "塊", pinyin: "kuài", meaning: "miếng" },
      { word: "香", pinyin: "xiāng", meaning: "thơm" },
      { word: "甜", pinyin: "tián", meaning: "ngọt" },
      { word: "紅色", pinyin: "hóngsè", meaning: "màu đỏ" },
      { word: "西瓜", pinyin: "xīguā", meaning: "dưa hấu" },
      { word: "吧", pinyin: "ba", meaning: "nhé" },
      { word: "對", pinyin: "duì", meaning: "đúng" },
      { word: "以前", pinyin: "yǐqián", meaning: "trước kia" },
      { word: "機會", pinyin: "jīhuì", meaning: "cơ hội" },
      { word: "請", pinyin: "qǐng", meaning: "mời" },
      { word: "吃吃看", pinyin: "chī chī kàn", meaning: "ăn thử" },
      { word: "拍", pinyin: "pāi", meaning: "chụp ảnh" },
      { word: "笑", pinyin: "xiào", meaning: "cười" },
      { word: "開心", pinyin: "kāixīn", meaning: "vui vẻ" },
      { word: "穿", pinyin: "chuān", meaning: "mặc" },
      { word: "衣服", pinyin: "yīfu", meaning: "quần áo" },
      { word: "旅館", pinyin: "lǚguǎn", meaning: "khách sạn" },
      { word: "太太", pinyin: "tàitai", meaning: "vợ" },
      { word: "男", pinyin: "nán", meaning: "nam" },
      { word: "矮", pinyin: "ǎi", meaning: "thấp" },
      { word: "高", pinyin: "gāo", meaning: "cao" },
      { word: "弟弟", pinyin: "dìdi", meaning: "em trai" },
      { word: "乾淨", pinyin: "gānjìng", meaning: "sạch sẽ" },
      { word: "窗戶", pinyin: "chuānghù", meaning: "cửa sổ" },
      { word: "往", pinyin: "wǎng", meaning: "về phía" },
      { word: "藍色", pinyin: "lánsè", meaning: "màu xanh dương" },
      { word: "因為", pinyin: "yīnwèi", meaning: "bởi vì" },
      { word: "住", pinyin: "zhù", meaning: "ở" },
      { word: "上個月", pinyin: "shàng ge yuè", meaning: "tháng trước" },
      { word: "這些", pinyin: "zhèxiē", meaning: "những cái này" }
    ],
    grammar: [
      { title: "Động từ lặp lại + 看 (thử làm)", struct: "V + V + 看", example: "你吃吃看。" },
      { title: "Lặp lại tính từ (AA的)", struct: "Adj + Adj + 的", example: "香香的、甜甜的" },
      { title: "Mệnh đề bổ nghĩa cho danh từ", struct: "Mệnh đề + 的 + Danh từ", example: "穿紅衣服的這個人是老闆。" },
      { title: "Trợ từ 了 (thay đổi tình huống)", struct: "Câu + 了", example: "我以前不喜歡吃水果，現在很喜歡了。" },
      { title: "Cấu trúc 因為...所以... (bởi vì... nên...)", struct: "因為 + Nguyên nhân + 所以 + Kết quả", example: "因為現在去玩的人比較少，所以旅館不太貴。" }
    ],
    readingText: "如玉: 這個黄色的水果叫什麼？\n月美: 芒果。給你一塊，吃吃看。\n如玉: 好，謝謝。香香的、甜甜的，很好吃。\n月美: 昨天明華給我們的那種水果，紅色的，叫什麼？\n如玉: 你說的是西瓜吧？\n月美: 對！對！對！臺灣有很多好吃的水果。\n如玉: 我以前不喜歡吃水果，現在很喜歡了。\n月美: 越南的水果也很好吃。\n如玉: 要是有機會，我想吃吃看。\n月美: 你來越南，我一定請你吃。\n\n明華: 你跟你女朋友上個月去花蓮玩，好玩？\n田中: 很好玩。你看，這些是我拍的照片。\n明華: 你們笑得很開心！哪一個是你女朋友？\n田中: 穿紅衣服的這個。穿黃衣服的是旅館老闆的太太。\n明華: 她們兩個都很漂亮。這兩個男的是？\n田中: 矮的是旅館的老闆，高的是他弟弟。\n明華: 那家旅館怎麼樣？\n田中: 很乾淨。窗戶往外看，是藍色的大海。\n明華: 真不錯！那家旅館貴嗎？\n田中: 因為現在去玩的人比較少，所以旅館不太貴。\n明華: 下次我也想去住。",
    readingQuestions: [
      { text: "黃色的水果是什麼？", options: ["西瓜", "芒果", "蘋果", "香蕉"], correct: 1 },
      { text: "田中女朋友穿什麼顏色的衣服？", options: ["黃色", "藍色", "紅色", "白色"], correct: 2 },
      { text: "旅館為什麼不太貴？", options: ["因為不乾淨", "因為去玩的人少", "因為太遠", "因為沒有窗戶"], correct: 1 }
    ]
  }
];

// window.grammarQuestionsBank = {

//   1: [  // Bài 1
//     { text: "Câu hỏi '你是不是台灣人？' sử dụng cấu trúc gì?", options: ["A-不-A", "Câu hỏi 吗", "Câu hỏi với 呢", "Câu hỏi với 什么"], correct: 0 },
//     { text: "Làm thế nào để hỏi 'Bạn có khỏe không?' bằng tiếng Trung?", options: ["你好吗？", "你是不好吗？", "你好不好？", "你呢？"], correct: 0 },
//     { text: "Trợ từ nghi vấn '吗' thường đứng ở vị trí nào trong câu?", options: ["Đầu câu", "Giữa câu", "Cuối câu", "Sau chủ ngữ"], correct: 2 },
//     { text: "Câu '他很喜歡臺灣' có nghĩa là gì?", options: ["Anh ấy rất thích Đài Loan", "Anh ấy thích Đài Loan không?", "Anh ấy không thích Đài Loan", "Anh ấy thích Đài Loan chứ?"], correct: 0 }
//   ],
//   2: [
//     { text: "Cấu trúc '我的書' thể hiện điều gì?", options: ["Quan hệ sở hữu", "Số nhiều", "Câu hỏi", "Phủ định"], correct: 0 },
//     { text: "Chọn câu đúng nghĩa 'Gia đình tôi có nhiều ảnh'", options: ["我家有很多照片", "我家的照片很多", "很多照片是我家", "我是很多照片"], correct: 0 },
//     { text: "Từ '都' trong câu '我們都是美國人' có tác dụng gì?", options: ["Nhấn mạnh số ít", "Nhấn mạnh toàn bộ", "Hỏi", "Phủ định"], correct: 1 },
//     { text: "Lượng từ '張' thường dùng cho sự vật nào?", options: ["Người", "Sách", "Ảnh, giấy tờ", "Nhà cửa"], correct: 2 }
//   ],
//   3: [
//     { text: "Trong câu '我們今天去看電影', từ chỉ thời gian đứng ở đâu?", options: ["Đầu câu", "Giữa chủ ngữ và động từ", "Cuối câu", "Sau động từ"], correct: 0 },
//     { text: "Cấu trúc '去 + động từ' diễn tả điều gì?", options: ["Đi để làm gì", "Đã làm xong", "Sẽ không làm", "Làm thay ai"], correct: 0 },
//     { text: "Chọn câu có nghĩa 'Tôi cũng thường uống cà phê'", options: ["我也常喝咖啡", "我常常喝咖啡", "我也咖啡喝", "我喝咖啡也常"], correct: 0 },
//     { text: "Trợ từ '吧' trong câu '我們去看臺灣電影吧！' thể hiện điều gì?", options: ["Đề nghị", "Hỏi", "Phủ định", "Ngạc nhiên"], correct: 0 }
//   ],
//   4: [
//     { text: "Lượng từ nào dùng cho điện thoại?", options: ["個", "張", "支", "杯"], correct: 2 },
//     { text: "Câu '太貴了！' diễn tả điều gì?", options: ["Quá rẻ", "Quá đắt", "Rất đẹp", "Rất ngon"], correct: 1 },
//     { text: "Trợ động từ '能' trong '新手機能上網' có nghĩa là gì?", options: ["Muốn", "Có thể", "Cần", "Nên"], correct: 1 },
//     { text: "Cấu trúc '幫我微波包子' - '幫' ở đây có nghĩa là?", options: ["Giúp", "Cho", "Làm", "Nói"], correct: 0 }
//   ],
//   5: [
//     { text: "Cấu trúc '有一點辣' có nghĩa là gì?", options: ["Rất cay", "Một chút cay", "Không cay", "Cay quá"], correct: 1 },
//     { text: "Bổ ngữ '得' trong '你做飯做得怎麼樣?' dùng để?", options: ["Đánh giá kết quả", "Chỉ thời gian", "Hỏi địa điểm", "Chỉ số lượng"], correct: 0 },
//     { text: "Trợ động từ '會' trong '你會不會做飯?' diễn tả?", options: ["Khả năng", "Dự định", "Sự cho phép", "Bắt buộc"], correct: 0 },
//     { text: "Giới từ '到' trong '你到我家來' chỉ?", options: ["Điểm đến", "Thời gian", "Nguyên nhân", "Cách thức"], correct: 0 }
//   ],
//   6: [
//     { text: "Câu '他們學校在花蓮的山上' dùng giới từ gì để chỉ vị trí?", options: ["在", "有", "是", "到"], correct: 0 },
//     { text: "Cấu trúc '學校前面有海' diễn tả sự tồn tại bằng từ nào?", options: ["在", "有", "是", "都"], correct: 1 },
//     { text: "Cụm từ '我想去看看' lặp lại động từ để làm gì?", options: ["Diễn tả ý định nhẹ nhàng", "Nhấn mạnh", "Hỏi", "Phủ định"], correct: 0 },
//     { text: "Chọn câu phủ định đúng: 'Nhà hàng không ở trong trường'", options: ["餐廳不是在學校裡面", "餐廳在學校裡面", "餐廳有不學校裡面", "餐廳沒在學校裡面"], correct: 0 }
//   ],
//   7: [
//     { text: "Cấu trúc '從早上七點到中午十二點' biểu thị?", options: ["Khoảng thời gian", "Địa điểm", "Nguyên nhân", "Kết quả"], correct: 0 },
//     { text: "Trợ từ '在' trong '他在吃飯' diễn tả?", options: ["Hành động đang diễn ra", "Vị trí", "Sở hữu", "Phủ định"], correct: 0 },
//     { text: "Từ '每' trong '他每天都有空' kết hợp với '都' có nghĩa?", options: ["Mỗi... đều", "Đôi khi", "Thường xuyên", "Hiếm khi"], correct: 0 },
//     { text: "Chọn câu có nghĩa 'Tôi có thể xem qua không?'", options: ["我可以看看嗎？", "我看看可以嗎？", "我能看看嗎？", "Tất cả đều đúng"], correct: 3 }
//   ],
//   8: [
//     { text: "Giới từ '跟' trong '我跟朋友去臺南玩' có nghĩa?", options: ["Cùng với", "Từ", "Đến", "Bằng"], correct: 0 },
//     { text: "So sánh ngầm dùng từ nào? (Ví dụ: '坐高鐵比較快')", options: ["比", "比較", "最", "很"], correct: 1 },
//     { text: "Cấu trúc '又...又...' trong '又快又舒服' diễn tả?", options: ["Vừa... vừa...", "Càng... càng...", "Hoặc... hoặc...", "Không... không..."], correct: 0 },
//     { text: "Câu so sánh '高鐵比火車快' - nghĩa là?", options: ["Tàu cao tốc nhanh hơn tàu thường", "Tàu thường nhanh hơn", "Bằng nhau", "Không so sánh được"], correct: 0 }
//   ],
//   9: [
//     { text: "Cấu trúc chỉ thời lượng: '我去花蓮玩一個星期' - '一個星期' chỉ?", options: ["Thời điểm", "Thời lượng", "Tần suất", "Địa điểm"], correct: 1 },
//     { text: "Cụm từ '放假的時候' có nghĩa?", options: ["Khi nghỉ lễ", "Nơi nghỉ lễ", "Sau nghỉ lễ", "Trước nghỉ lễ"], correct: 0 },
//     { text: "Cấu trúc '有時候...有時候...' diễn tả?", options: ["Lúc thì... lúc thì...", "Luôn luôn", "Không bao giờ", "Nếu... thì..."], correct: 0 },
//     { text: "Chọn câu điều kiện: 'Nếu tôi rảnh, tôi sẽ đi cùng các bạn'", options: ["要是我有空，就跟你們一起去", "我有空就去", "如果我忙，就去", "我跟你們一起去要是有空"], correct: 0 }
//   ],
//   10: [
//     { text: "Cấu trúc '吃吃看' - lặp lại động từ + '看' có nghĩa?", options: ["Thử làm", "Nhìn xem", "Ăn ngon", "Ăn nhanh"], correct: 0 },
//     { text: "Lặp lại tính từ trong '香香的、甜甜的' diễn tả?", options: ["Mức độ nhẹ, dễ thương", "Rất thơm, rất ngọt", "Không thơm, không ngọt", "Hơi thơm, hơi ngọt"], correct: 0 },
//     { text: "Mệnh đề '穿紅衣服的這個人' bổ nghĩa cho danh từ nào?", options: ["這個人", "紅衣服", "穿", "的"], correct: 0 },
//     { text: "Câu '因為現在去玩的人比較少，所以旅館不太貴' thể hiện quan hệ gì?", options: ["Nguyên nhân - kết quả", "Điều kiện - kết quả", "Tương phản", "Mục đích"], correct: 0 }
//   ]
// };
// Ngân hàng câu hỏi ngữ pháp theo bài (từ bài 1 đến 10) - mở rộng, bao gồm cả điền vào chỗ trống
window.grammarQuestionsBank = {
  1: [
    { text: "Câu hỏi '你是不是台灣人？' sử dụng cấu trúc gì?", options: ["A-不-A", "Câu hỏi 吗", "Câu hỏi với 呢", "Câu hỏi với 什么"], correct: 0 },
    { text: "Làm thế nào để hỏi 'Bạn có khỏe không?' bằng tiếng Trung?", options: ["你好吗？", "你是不好吗？", "你好不好？", "你呢？"], correct: 0 },
    { text: "Trợ từ nghi vấn '吗' thường đứng ở vị trí nào trong câu?", options: ["Đầu câu", "Giữa câu", "Cuối câu", "Sau chủ ngữ"], correct: 2 },
    { text: "Câu '他很喜歡臺灣' có nghĩa là gì?", options: ["Anh ấy rất thích Đài Loan", "Anh ấy thích Đài Loan không?", "Anh ấy không thích Đài Loan", "Anh ấy thích Đài Loan chứ?"], correct: 0 },
    { text: "Điền từ thích hợp: '你___ 台灣人嗎？' (Bạn có phải người Đài Loan không?)", options: ["是", "不", "有", "很"], correct: 0 },
    { text: "Chọn câu trả lời đúng cho câu hỏi '你好吗？'", options: ["我很好，謝謝。", "你好。", "對不起。", "謝謝。"], correct: 0 }
  ],
  2: [
    { text: "Cấu trúc '我的書' thể hiện điều gì?", options: ["Quan hệ sở hữu", "Số nhiều", "Câu hỏi", "Phủ định"], correct: 0 },
    { text: "Chọn câu đúng nghĩa 'Gia đình tôi có nhiều ảnh'", options: ["我家有很多照片", "我家的照片很多", "很多照片是我家", "我是很多照片"], correct: 0 },
    { text: "Từ '都' trong câu '我們都是美國人' có tác dụng gì?", options: ["Nhấn mạnh số ít", "Nhấn mạnh toàn bộ", "Hỏi", "Phủ định"], correct: 1 },
    { text: "Lượng từ '張' thường dùng cho sự vật nào?", options: ["Người", "Sách", "Ảnh, giấy tờ", "Nhà cửa"], correct: 2 },
    { text: "Điền từ: '這是我___照片。' (Đây là ảnh của tôi)", options: ["的", "了", "在", "和"], correct: 0 },
    { text: "Chọn câu đúng: 'Tôi có hai anh trai'", options: ["我有兩個哥哥", "我有二個哥哥", "我有兩哥哥", "我有兩個兄弟"], correct: 0 }
  ],
  3: [
    { text: "Trong câu '我們今天去看電影', từ chỉ thời gian đứng ở đâu?", options: ["Đầu câu", "Giữa chủ ngữ và động từ", "Cuối câu", "Sau động từ"], correct: 0 },
    { text: "Cấu trúc '去 + động từ' diễn tả điều gì?", options: ["Đi để làm gì", "Đã làm xong", "Sẽ không làm", "Làm thay ai"], correct: 0 },
    { text: "Chọn câu có nghĩa 'Tôi cũng thường uống cà phê'", options: ["我也常喝咖啡", "我常常喝咖啡", "我也咖啡喝", "我喝咖啡也常"], correct: 0 },
    { text: "Trợ từ '吧' trong câu '我們去看臺灣電影吧！' thể hiện điều gì?", options: ["Đề nghị", "Hỏi", "Phủ định", "Ngạc nhiên"], correct: 0 },
    { text: "Điền từ: '明天是週末，我們早上去踢足球，___？' (Thế nào?)", options: ["怎麼樣", "什麼", "哪裡", "為什麼"], correct: 0 },
    { text: "Chọn câu đúng: 'Anh ấy cũng thích bơi lội'", options: ["他也喜歡游泳", "他喜歡也游泳", "他喜歡游泳也", "也他喜歡游泳"], correct: 0 }
  ],
  4: [
    { text: "Lượng từ nào dùng cho điện thoại?", options: ["個", "張", "支", "杯"], correct: 2 },
    { text: "Câu '太貴了！' diễn tả điều gì?", options: ["Quá rẻ", "Quá đắt", "Rất đẹp", "Rất ngon"], correct: 1 },
    { text: "Trợ động từ '能' trong '新手機能上網' có nghĩa là gì?", options: ["Muốn", "Có thể", "Cần", "Nên"], correct: 1 },
    { text: "Cấu trúc '幫我微波包子' - '幫' ở đây có nghĩa là?", options: ["Giúp", "Cho", "Làm", "Nói"], correct: 0 },
    { text: "Điền từ: '我要___新的，不要舊的。' (Tôi muốn cái mới, không muốn cái cũ)", options: ["買", "是", "有", "的"], correct: 0 },
    { text: "Chọn câu hỏi đúng: 'Tổng cộng bao nhiêu tiền?'", options: ["一共多少錢？", "多少錢一共？", "錢一共多少？", "一共錢多少？"], correct: 0 }
  ],
  5: [
    { text: "Cấu trúc '有一點辣' có nghĩa là gì?", options: ["Rất cay", "Một chút cay", "Không cay", "Cay quá"], correct: 1 },
    { text: "Bổ ngữ '得' trong '你做飯做得怎麼樣?' dùng để?", options: ["Đánh giá kết quả", "Chỉ thời gian", "Hỏi địa điểm", "Chỉ số lượng"], correct: 0 },
    { text: "Trợ động từ '會' trong '你會不會做飯?' diễn tả?", options: ["Khả năng", "Dự định", "Sự cho phép", "Bắt buộc"], correct: 0 },
    { text: "Giới từ '到' trong '你到我家來' chỉ?", options: ["Điểm đến", "Thời gian", "Nguyên nhân", "Cách thức"], correct: 0 },
    { text: "Điền từ: '我___做飯。' (Tôi biết nấu ăn)", options: ["會", "能", "可以", "要"], correct: 0 },
    { text: "Chọn câu đúng: 'Món này rất ngon'", options: ["這個菜很好吃", "這個菜好吃很", "很好吃這個菜", "好吃這個菜很"], correct: 0 }
  ],
  6: [
    { text: "Câu '他們學校在花蓮的山上' dùng giới từ gì để chỉ vị trí?", options: ["在", "有", "是", "到"], correct: 0 },
    { text: "Cấu trúc '學校前面有海' diễn tả sự tồn tại bằng từ nào?", options: ["在", "有", "是", "都"], correct: 1 },
    { text: "Cụm từ '我想去看看' lặp lại động từ để làm gì?", options: ["Diễn tả ý định nhẹ nhàng", "Nhấn mạnh", "Hỏi", "Phủ định"], correct: 0 },
    { text: "Chọn câu phủ định đúng: 'Nhà hàng không ở trong trường'", options: ["餐廳不是在學校裡面", "餐廳在學校裡面", "餐廳有不學校裡面", "餐廳沒在學校裡面"], correct: 0 },
    { text: "Điền từ: '學校裡面沒有___。' (Trong trường không có cửa hàng)", options: ["商店", "餐廳", "圖書館", "宿舍"], correct: 0 },
    { text: "Chọn câu đúng: 'Phía trước trường có biển'", options: ["學校前面有海", "學校有海前面", "前面學校有海", "有海學校前面"], correct: 0 }
  ],
  7: [
    { text: "Cấu trúc '從早上七點到中午十二點' biểu thị?", options: ["Khoảng thời gian", "Địa điểm", "Nguyên nhân", "Kết quả"], correct: 0 },
    { text: "Trợ từ '在' trong '他在吃飯' diễn tả?", options: ["Hành động đang diễn ra", "Vị trí", "Sở hữu", "Phủ định"], correct: 0 },
    { text: "Từ '每' trong '他每天都有空' kết hợp với '都' có nghĩa?", options: ["Mỗi... đều", "Đôi khi", "Thường xuyên", "Hiếm khi"], correct: 0 },
    { text: "Chọn câu có nghĩa 'Tôi có thể xem qua không?'", options: ["我可以看看嗎？", "我看看可以嗎？", "我能看看嗎？", "Tất cả đều đúng"], correct: 3 },
    { text: "Điền từ: '我最近很忙，每天晚上都___書法課。' (Tôi bận, tối nào cũng học thư pháp)", options: ["上", "有", "去", "學"], correct: 0 },
    { text: "Chọn câu hỏi đúng: 'Bạn có rảnh không?'", options: ["你有空嗎？", "你忙嗎？", "你好嗎？", "你去嗎？"], correct: 0 }
  ],
  8: [
    { text: "Giới từ '跟' trong '我跟朋友去臺南玩' có nghĩa?", options: ["Cùng với", "Từ", "Đến", "Bằng"], correct: 0 },
    { text: "So sánh ngầm dùng từ nào? (Ví dụ: '坐高鐵比較快')", options: ["比", "比較", "最", "很"], correct: 1 },
    { text: "Cấu trúc '又...又...' trong '又快又舒服' diễn tả?", options: ["Vừa... vừa...", "Càng... càng...", "Hoặc... hoặc...", "Không... không..."], correct: 0 },
    { text: "Câu so sánh '高鐵比火車快' - nghĩa là?", options: ["Tàu cao tốc nhanh hơn tàu thường", "Tàu thường nhanh hơn", "Bằng nhau", "Không so sánh được"], correct: 0 },
    { text: "Điền từ: '我想坐高鐵去，___車票非常貴。' (Nhưng vé tàu rất đắt)", options: ["但是", "所以", "因為", "如果"], correct: 0 },
    { text: "Chọn câu đúng: 'Đi tàu hỏa thì chậm hơn'", options: ["坐火車比較慢", "坐火車比較快", "火車坐比較慢", "比較慢坐火車"], correct: 0 }
  ],
  9: [
    { text: "Cấu trúc chỉ thời lượng: '我去花蓮玩一個星期' - '一個星期' chỉ?", options: ["Thời điểm", "Thời lượng", "Tần suất", "Địa điểm"], correct: 1 },
    { text: "Cụm từ '放假的時候' có nghĩa?", options: ["Khi nghỉ lễ", "Nơi nghỉ lễ", "Sau nghỉ lễ", "Trước nghỉ lễ"], correct: 0 },
    { text: "Cấu trúc '有時候...有時候...' diễn tả?", options: ["Lúc thì... lúc thì...", "Luôn luôn", "Không bao giờ", "Nếu... thì..."], correct: 0 },
    { text: "Chọn câu điều kiện: 'Nếu tôi rảnh, tôi sẽ đi cùng các bạn'", options: ["要是我有空，就跟你們一起去", "我有空就去", "如果我忙，就去", "我跟你們一起去要是有空"], correct: 0 },
    { text: "Điền từ: '下個星期我們放五天___。' (Tuần sau chúng tôi nghỉ 5 ngày)", options: ["假", "假了", "的假", "假期"], correct: 0 },
    { text: "Chọn câu hỏi đúng: 'Bạn đi du lịch bao lâu?'", options: ["你去玩多久？", "你多久去玩？", "你去多久玩？", "多久你去玩？"], correct: 0 }
  ],
  10: [
    { text: "Cấu trúc '吃吃看' - lặp lại động từ + '看' có nghĩa?", options: ["Thử làm", "Nhìn xem", "Ăn ngon", "Ăn nhanh"], correct: 0 },
    { text: "Lặp lại tính từ trong '香香的、甜甜的' diễn tả?", options: ["Mức độ nhẹ, dễ thương", "Rất thơm, rất ngọt", "Không thơm, không ngọt", "Hơi thơm, hơi ngọt"], correct: 0 },
    { text: "Mệnh đề '穿紅衣服的這個人' bổ nghĩa cho danh từ nào?", options: ["這個人", "紅衣服", "穿", "的"], correct: 0 },
    { text: "Câu '因為現在去玩的人比較少，所以旅館不太貴' thể hiện quan hệ gì?", options: ["Nguyên nhân - kết quả", "Điều kiện - kết quả", "Tương phản", "Mục đích"], correct: 0 },
    { text: "Điền từ: '你跟你女朋友上個月去花蓮玩，好___？' (Vui không?)", options: ["玩", "嗎", "了", "的"], correct: 0 },
    { text: "Chọn câu đúng: 'Cửa sổ nhìn ra biển xanh'", options: ["窗戶往外看，是藍色的大海", "窗戶看外，大海藍色", "往外窗戶看，大海藍色", "窗戶藍色大海看"], correct: 0 }
  ]
};
// Hàm lấy câu hỏi ngữ pháp theo bài
window.getGrammarQuestions = function(lessonId) {
  return window.grammarQuestionsBank[lessonId] || [];
};

// Hàm xây dựng ngân hàng câu hỏi cho đề thi (giữ nguyên)
window.buildExamBank = function() {
  const bank = [];
  window.lessons.forEach(lesson => {
    lesson.vocab.slice(0, 12).forEach(v => {
      bank.push({
        text: `Từ "${v.word}" có nghĩa là gì?`,
        options: [v.meaning, "ăn cơm", "đi học", "đẹp"],
        correct: 0
      });
    });
    lesson.grammar.forEach(g => {
      bank.push({
        text: `Cấu trúc "${g.title}" dùng để làm gì?`,
        options: ["Hỏi đường", "Diễn đạt mục đích/so sánh/sở hữu", "Chỉ thời gian", "Chỉ địa điểm"],
        correct: 1
      });
    });
  });
  bank.push(
    { text: "「你好嗎？」 câu trả lời đúng nhất?", options: ["我很好，謝謝。", "不客氣。", "對不起。", "謝謝。"], correct: 0 },
    { text: "「你家有幾個人？」 nghĩa là gì?", options: ["Nhà bạn có mấy người?", "Nhà bạn ở đâu?", "Bạn bao nhiêu tuổi?", "Bạn thích gì?"], correct: 0 },
    { text: "「多少錢？」 dùng để hỏi về?", options: ["Giá tiền", "Thời gian", "Địa điểm", "Số lượng"], correct: 0 },
    { text: "Chọn câu đúng nghĩa 'Tôi là người Mỹ'", options: ["我是美國人", "我美國人", "我是美國的人", "是美國人我"], correct: 0 },
    { text: "「謝謝」 phản hồi lịch sự là?", options: ["不客氣", "你好", "對不起", "沒關係"], correct: 0 }
  );
  return bank;
};

// Các hàm tiện ích
window.getLessonById = function(id) {
  return window.lessons.find(lesson => lesson.id === id);
};
window.getVocabByLesson = function(lessonId) {
  const lesson = window.getLessonById(lessonId);
  return lesson ? lesson.vocab : [];
};
window.getGrammarByLesson = function(lessonId) {
  const lesson = window.getLessonById(lessonId);
  return lesson ? lesson.grammar : [];
};