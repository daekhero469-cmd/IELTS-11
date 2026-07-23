(function () {
  const phases = [
    { name: "1단계", title: "기초 문장과 일상 주제", days: "1–10" },
    { name: "2단계", title: "Listening Section 1", days: "11–20" },
    { name: "3단계", title: "General Reading 기초", days: "21–30" },
    { name: "4단계", title: "General Writing Task 1", days: "31–40" },
    { name: "5단계", title: "Speaking Part 1·2", days: "41–50" },
    { name: "6단계", title: "IELTS GT 통합 실전", days: "51–60" },
  ];

  const phaseVocabulary = [
    ["answer|답변", "detail|세부사항"],
    ["speaker|화자", "keyword|핵심어"],
    ["notice|공지", "evidence|근거"],
    ["purpose|목적", "paragraph|문단"],
    ["opinion|의견", "example|예시"],
    ["review|검토", "accuracy|정확성"],
  ];

  const seeds = [
    ["아침 일과", "현재시제로 일과를 설명합니다.", "a morning routine", "아침 일과", "I wake up at six and prepare a simple breakfast", "저는 6시에 일어나 간단한 아침 식사를 준비합니다", "The early start gives me enough time to plan my day", "일찍 시작하면 하루를 계획할 시간이 충분합니다", "routine|일과,wake up|일어나다,prepare|준비하다,breakfast|아침 식사,early|이른,plan|계획하다"],
    ["가족과 함께하는 시간", "가족 구성과 활동을 말합니다.", "family time", "가족과 보내는 시간", "My family eats dinner together on Friday evenings", "우리 가족은 금요일 저녁에 함께 식사합니다", "We share news from the week and choose a film to watch", "우리는 한 주의 소식을 나누고 볼 영화를 고릅니다", "family|가족,together|함께,dinner|저녁 식사,share|나누다,choose|고르다,evening|저녁"],
    ["내가 사는 동네", "장소와 위치를 구체적으로 묘사합니다.", "a local neighbourhood", "동네", "My neighbourhood has a quiet park beside the library", "우리 동네에는 도서관 옆에 조용한 공원이 있습니다", "The area is convenient because most shops are within walking distance", "대부분의 상점이 걸어갈 수 있는 거리에 있어 이 지역은 편리합니다", "neighbourhood|동네,quiet|조용한,beside|옆에,convenient|편리한,distance|거리,shop|상점"],
    ["주말 계획", "미래 계획에 be going to를 사용합니다.", "weekend plans", "주말 계획", "I am going to visit an art market on Saturday", "저는 토요일에 미술 시장을 방문할 예정입니다", "If the weather is fine, I will walk home along the river", "날씨가 좋으면 강을 따라 걸어서 집에 올 것입니다", "weekend|주말,visit|방문하다,market|시장,weather|날씨,river|강,along|~을 따라"],
    ["좋아하는 음식", "선호와 이유를 두 문장으로 연결합니다.", "favourite food", "좋아하는 음식", "My favourite meal is vegetable curry with rice", "제가 가장 좋아하는 음식은 밥을 곁들인 채소 카레입니다", "I enjoy it because it is warm, filling and easy to share", "따뜻하고 든든하며 함께 나누기 쉬워서 좋아합니다", "favourite|가장 좋아하는,meal|식사,vegetable|채소,filling|든든한,share|나누다,taste|맛"],
    ["대중교통 이용", "교통수단과 이동 시간을 설명합니다.", "public transport", "대중교통", "The express bus reaches the city centre in thirty minutes", "급행버스는 30분 만에 도심에 도착합니다", "Passengers can check live arrival times on the station screen", "승객들은 정류장 화면에서 실시간 도착 시간을 확인할 수 있습니다", "transport|교통,express|급행,reach|도착하다,passenger|승객,arrival|도착,screen|화면"],
    ["건강한 습관", "빈도부사로 습관을 표현합니다.", "healthy habits", "건강한 습관", "I usually take a short walk after lunch", "저는 보통 점심 식사 후에 짧게 산책합니다", "Regular movement helps me concentrate during the afternoon", "규칙적인 움직임은 오후에 집중하는 데 도움이 됩니다", "healthy|건강한,usually|보통,regular|규칙적인,movement|움직임,concentrate|집중하다,afternoon|오후"],
    ["취미와 여가", "취미의 과정과 장점을 말합니다.", "a relaxing hobby", "편안한 취미", "I started taking photographs of streets and buildings last year", "저는 작년에 거리와 건물 사진을 찍기 시작했습니다", "Photography makes me notice small details that I once ignored", "사진 촬영은 예전에 지나쳤던 작은 세부사항을 알아보게 합니다", "hobby|취미,photograph|사진,building|건물,notice|알아차리다,detail|세부사항,ignore|지나치다"],
    ["날씨와 계절", "날씨가 계획에 미치는 영향을 설명합니다.", "seasonal weather", "계절별 날씨", "Spring mornings are cool, but the afternoons become much warmer", "봄 아침은 서늘하지만 오후에는 훨씬 따뜻해집니다", "I carry a light jacket because the temperature changes quickly", "기온이 빠르게 변하기 때문에 얇은 재킷을 가지고 다닙니다", "season|계절,spring|봄,cool|서늘한,warmer|더 따뜻한,temperature|기온,jacket|재킷"],
    ["디지털 학습", "온라인 학습 방법을 설명합니다.", "online learning", "온라인 학습", "I watch one short English lesson before checking my messages", "저는 메시지를 확인하기 전에 짧은 영어 수업 하나를 시청합니다", "Writing new phrases in a notebook helps me remember them", "새로운 표현을 공책에 적으면 기억하는 데 도움이 됩니다", "online|온라인,lesson|수업,message|메시지,phrase|표현,notebook|공책,remember|기억하다"],
    ["어학원 수업 예약", "Listening에서 날짜와 시간을 포착합니다.", "a language class booking", "어학원 수업 예약", "The beginner class begins on Tuesday the twelfth at nine fifteen", "초급 수업은 12일 화요일 9시 15분에 시작합니다", "The total fee is eighty dollars and includes the course book", "총 수강료는 80달러이며 교재가 포함됩니다", "booking|예약,beginner|초급,begins|시작하다,total|총액,fee|수강료,include|포함하다"],
    ["도서관 회원 가입", "이름과 주소 정보를 정확히 듣습니다.", "library membership", "도서관 회원 가입", "Please spell your surname and confirm your current address", "성을 철자로 말하고 현재 주소를 확인해 주세요", "New members may borrow four books for three weeks", "신규 회원은 책 네 권을 3주 동안 빌릴 수 있습니다", "membership|회원 자격,spell|철자를 말하다,surname|성,address|주소,borrow|빌리다,week|주"],
    ["체육관 문의 전화", "가격과 운영시간을 구분해 듣습니다.", "a fitness centre enquiry", "체육관 문의", "The fitness centre opens at half past six on weekdays", "체육관은 평일 오전 6시 30분에 문을 엽니다", "A monthly pass costs forty-five dollars without a joining fee", "월 이용권은 가입비 없이 45달러입니다", "fitness|체력 단련,opens|문을 열다,weekday|평일,monthly|월간의,pass|이용권,cost|비용이 들다"],
    ["박물관 안내 투어", "장소와 집합 시간을 듣습니다.", "a museum tour", "박물관 투어", "The guided tour meets beside the main entrance at eleven", "가이드 투어는 11시에 정문 옆에서 모입니다", "Visitors should leave large bags in the free lockers downstairs", "방문객들은 큰 가방을 아래층 무료 보관함에 맡겨야 합니다", "guided|안내가 있는,entrance|입구,visitor|방문객,leave|맡기다,locker|보관함,downstairs|아래층"],
    ["호텔 객실 변경", "요청과 대안을 듣고 기록합니다.", "a hotel room change", "호텔 객실 변경", "The guest requested a quieter room away from the lift", "투숙객은 엘리베이터에서 떨어진 더 조용한 방을 요청했습니다", "Reception offered a room on the fifth floor after two o'clock", "프런트는 2시 이후에 5층 객실을 제안했습니다", "guest|투숙객,request|요청하다,quieter|더 조용한,lift|엘리베이터,reception|프런트,offer|제안하다"],
    ["수리 서비스 접수", "문제와 방문 시간을 듣습니다.", "a home repair appointment", "가정 수리 예약", "The kitchen tap has been leaking since Monday evening", "주방 수도꼭지는 월요일 저녁부터 물이 새고 있습니다", "A technician can visit between one and three tomorrow afternoon", "기술자는 내일 오후 1시에서 3시 사이에 방문할 수 있습니다", "repair|수리,tap|수도꼭지,leak|새다,technician|기술자,between|사이에,visit|방문하다"],
    ["지역 행사 등록", "이름, 인원, 준비물을 듣습니다.", "a community event registration", "지역 행사 등록", "The outdoor film night allows six people in each group", "야외 영화의 밤 행사에는 한 그룹당 여섯 명까지 참여할 수 있습니다", "Everyone needs to bring a chair and arrive before sunset", "모든 사람은 의자를 가져오고 해가 지기 전에 도착해야 합니다", "community|지역사회,outdoor|야외의,allow|허용하다,group|그룹,chair|의자,sunset|일몰"],
    ["단기 강좌 상담", "기간과 준비 조건을 듣습니다.", "a short course enquiry", "단기 강좌 문의", "The design course runs for six Saturdays from early May", "디자인 강좌는 5월 초부터 토요일 여섯 번 진행됩니다", "Students need a laptop, but no previous experience is required", "학생들은 노트북이 필요하지만 이전 경험은 요구되지 않습니다", "course|강좌,runs|진행되다,previous|이전의,experience|경험,required|필요한,laptop|노트북"],
    ["기차표 변경", "출발 시간과 추가 요금을 듣습니다.", "a train ticket change", "기차표 변경", "The original train leaves at seven forty from platform two", "원래 기차는 7시 40분에 2번 승강장에서 출발합니다", "Changing to the later service requires an extra twelve dollars", "더 늦은 열차로 변경하려면 12달러를 추가로 내야 합니다", "original|원래의,leaves|출발하다,platform|승강장,later|더 늦은,require|필요로 하다,extra|추가의"],
    ["분실물 신고", "물건의 특징과 발견 장소를 듣습니다.", "a lost property report", "분실물 신고", "The missing backpack is dark green with a silver zip", "분실된 배낭은 짙은 초록색이며 은색 지퍼가 달려 있습니다", "It was last seen under a seat near the information desk", "그것은 안내 데스크 근처 좌석 아래에서 마지막으로 목격되었습니다", "missing|분실된,backpack|배낭,dark|짙은,silver|은색,last seen|마지막으로 본,desk|데스크"],
    ["도서관 이용 공지", "규칙과 예외를 지문에서 찾습니다.", "a library notice", "도서관 공지", "The second floor will close for repairs from Monday to Wednesday", "2층은 수리를 위해 월요일부터 수요일까지 폐쇄됩니다", "Study rooms remain available, but users must reserve them online", "학습실은 계속 이용할 수 있지만 사용자는 온라인으로 예약해야 합니다", "floor|층,close|폐쇄하다,repairs|수리,remain|계속되다,available|이용 가능한,reserve|예약하다"],
    ["버스 시간표 읽기", "시간표에서 조건에 맞는 노선을 찾습니다.", "a bus timetable", "버스 시간표", "Route sixteen runs every twenty minutes until six in the evening", "16번 노선은 저녁 6시까지 20분마다 운행합니다", "After six, passengers must use route twenty-one from the opposite stop", "6시 이후에는 승객들이 맞은편 정류장에서 21번 노선을 이용해야 합니다", "route|노선,timetable|시간표,every|매번,until|~까지,opposite|맞은편의,stop|정류장"],
    ["공원 시설 안내", "시설 위치와 이용 제한을 찾습니다.", "a park information board", "공원 안내판", "Bicycles are permitted on the eastern path before ten in the morning", "자전거는 오전 10시 이전에 동쪽 길에서 허용됩니다", "The picnic area beside the lake is closed during winter", "호수 옆 피크닉 구역은 겨울 동안 폐쇄됩니다", "permit|허용하다,eastern|동쪽의,path|길,picnic|피크닉,lake|호수,winter|겨울"],
    ["제품 반품 규정", "기간과 영수증 조건을 확인합니다.", "a store return policy", "상점 반품 규정", "Unused items may be returned within twenty-eight days of purchase", "사용하지 않은 상품은 구매 후 28일 이내에 반품할 수 있습니다", "Customers need the original receipt unless the item is faulty", "상품에 결함이 있는 경우를 제외하면 고객은 원본 영수증이 필요합니다", "unused|사용하지 않은,return|반품하다,within|이내에,purchase|구매,receipt|영수증,faulty|결함이 있는"],
    ["온라인 강좌 설명", "대상과 수업 방식을 구분합니다.", "an online course description", "온라인 강좌 설명", "This eight-week course is designed for learners with basic computer skills", "이 8주 과정은 기본 컴퓨터 기술이 있는 학습자를 위해 설계되었습니다", "Weekly videos are recorded, while discussion sessions take place live", "주간 영상은 녹화되지만 토론 수업은 실시간으로 진행됩니다", "designed|설계된,learner|학습자,basic|기본적인,weekly|매주의,recorded|녹화된,discussion|토론"],
    ["공연장 좌석 안내", "좌석 구역과 접근 정보를 찾습니다.", "a theatre seating guide", "공연장 좌석 안내", "Seats in the front section provide the clearest view of the stage", "앞 구역 좌석에서는 무대가 가장 선명하게 보입니다", "Wheelchair spaces are located near the side entrance on level one", "휠체어 공간은 1층 측면 출입구 근처에 있습니다", "theatre|공연장,section|구역,clearest|가장 선명한,stage|무대,wheelchair|휠체어,level|층"],
    ["주민센터 프로그램", "연령과 등록 마감일을 찾습니다.", "a community programme", "주민센터 프로그램", "The weekend science club accepts children aged nine to twelve", "주말 과학 동아리는 9세부터 12세까지의 어린이를 받습니다", "Registration closes one week before the first session begins", "등록은 첫 수업 시작 일주일 전에 마감됩니다", "programme|프로그램,science|과학,accept|받다,aged|나이가 ~인,registration|등록,session|수업"],
    ["여행 보험 요약", "보장 항목과 제외 조건을 확인합니다.", "a travel insurance summary", "여행 보험 요약", "The standard plan covers delayed luggage and emergency treatment", "기본 상품은 수하물 지연과 응급 치료를 보장합니다", "It does not cover trips cancelled because of a change of mind", "단순한 변심으로 취소된 여행은 보장하지 않습니다", "insurance|보험,standard|기본의,cover|보장하다,delayed|지연된,luggage|수하물,cancel|취소하다"],
    ["카페 채용 공고 읽기", "근무 조건과 지원 방법을 찾습니다.", "a part-time café advertisement", "카페 아르바이트 공고", "The café needs a weekend assistant who can start at seven", "카페는 오전 7시에 시작할 수 있는 주말 보조 직원을 구합니다", "Applicants should email a short introduction by Thursday", "지원자는 목요일까지 짧은 자기소개를 이메일로 보내야 합니다", "part-time|시간제의,assistant|보조 직원,start|시작하다,applicant|지원자,email|이메일,Thursday|목요일"],
    ["안전 수칙 안내문", "의무와 권고 표현을 구분합니다.", "a public safety notice", "공공 안전 안내문", "Visitors must stay behind the marked line near the water", "방문객들은 물가 근처에 표시된 선 뒤에 머물러야 합니다", "Children should remain with an adult at all times", "어린이는 항상 성인과 함께 있어야 합니다", "safety|안전,behind|뒤에,marked|표시된,remain|머무르다,adult|성인,at all times|항상"],
    ["친구 초대 편지", "Writing Task 1의 목적을 첫 문장에 씁니다.", "an invitation letter", "초대 편지", "I am writing to invite you to a small dinner at my home next Saturday", "다음 주 토요일 우리 집에서 열리는 작은 저녁 모임에 당신을 초대하려고 편지를 씁니다", "The meal will begin at seven, and two friends from our class will join us", "식사는 7시에 시작하며 우리 반 친구 두 명도 함께할 것입니다", "invite|초대하다,dinner|저녁 모임,begin|시작하다,join|함께하다,Saturday|토요일,home|집"],
    ["약속 취소 사과 편지", "이유와 대안을 정중하게 제시합니다.", "an apology letter", "사과 편지", "I am sorry that I cannot meet you at the station tomorrow", "내일 역에서 만나지 못하게 되어 미안합니다", "My medical appointment was moved, so could we meet on Friday instead", "진료 예약이 변경되어 대신 금요일에 만날 수 있을까요", "apology|사과,cannot|~할 수 없다,appointment|예약,move|변경하다,instead|대신,meet|만나다"],
    ["숙소 불편 신고 편지", "문제와 원하는 해결책을 명확히 씁니다.", "a complaint about accommodation", "숙소 불편 신고", "I am writing about the heating problem in room fourteen", "14호실의 난방 문제에 관해 글을 씁니다", "The room has been cold for two nights, and I would like the system checked today", "방이 이틀 밤 동안 추웠으므로 오늘 난방 장치를 점검해 주시기 바랍니다", "complaint|불만,accommodation|숙소,heating|난방,cold|추운,system|장치,check|점검하다"],
    ["강좌 정보 요청 편지", "필요한 정보를 항목별로 요청합니다.", "a course information request", "강좌 정보 요청", "Could you tell me whether the evening course is suitable for beginners", "저녁 강좌가 초보자에게 적합한지 알려주시겠어요", "I would also like details about class size, fees and assessment", "수업 인원, 수강료, 평가에 관한 세부정보도 알고 싶습니다", "whether|~인지 아닌지,suitable|적합한,class size|수업 인원,fee|수강료,assessment|평가,detail|세부정보"],
    ["도움에 감사하는 편지", "구체적인 도움과 결과를 설명합니다.", "a thank-you letter", "감사 편지", "Thank you for helping me find my missing suitcase at the airport", "공항에서 잃어버린 여행 가방을 찾도록 도와주셔서 감사합니다", "Your quick response allowed me to continue my journey without a long delay", "신속한 대응 덕분에 긴 지연 없이 여행을 계속할 수 있었습니다", "thank|감사하다,missing|분실된,suitcase|여행 가방,response|대응,continue|계속하다,delay|지연"],
    ["여행 일정 변경 편지", "변경 사항과 확인 요청을 씁니다.", "a travel arrangement change", "여행 일정 변경", "I need to change my booking from the third of June to the tenth", "예약을 6월 3일에서 10일로 변경해야 합니다", "Please confirm whether the same room and breakfast option are available", "같은 객실과 조식 선택 사항을 이용할 수 있는지 확인해 주세요", "arrangement|일정,change|변경하다,booking|예약,confirm|확인하다,option|선택 사항,available|이용 가능한"],
    ["불량 상품 교환 편지", "구매 정보와 요청을 정확히 씁니다.", "a faulty product letter", "불량 상품 관련 편지", "The headphones I bought from your website stopped working after three days", "귀사 웹사이트에서 구매한 헤드폰이 3일 후 작동을 멈췄습니다", "I have attached the receipt and would prefer a replacement rather than a refund", "영수증을 첨부했으며 환불보다 교환품을 받고 싶습니다", "faulty|불량인,headphones|헤드폰,website|웹사이트,attach|첨부하다,replacement|교환품,refund|환불"],
    ["행사 개선 제안 편지", "경험, 문제, 개선안을 연결합니다.", "an event improvement suggestion", "행사 개선 제안", "I enjoyed the book festival, especially the talks by local writers", "지역 작가들의 강연을 포함해 도서 축제를 즐겼습니다", "Next year, clearer signs would help visitors find each room more easily", "내년에는 더 명확한 표지판이 방문객들이 각 방을 더 쉽게 찾는 데 도움이 될 것입니다", "festival|축제,especially|특히,writer|작가,clearer|더 명확한,sign|표지판,easily|쉽게"],
    ["이웃에게 부탁하는 편지", "상황을 설명하고 정중하게 부탁합니다.", "a request to a neighbour", "이웃에게 하는 부탁", "I will be away this weekend and need someone to water my plants", "이번 주말 집을 비우므로 화초에 물을 줄 사람이 필요합니다", "Would you be able to visit once on Saturday morning", "토요일 아침에 한 번 들러주실 수 있을까요", "neighbour|이웃,away|집을 비운,water|물을 주다,plant|화초,visit|들르다,once|한 번"],
    ["서비스 직원 칭찬 편지", "좋았던 행동과 영향을 설명합니다.", "a letter of praise", "칭찬 편지", "I would like to praise the staff member who helped me yesterday", "어제 저를 도와준 직원분을 칭찬하고 싶습니다", "She explained every step calmly and solved the problem within minutes", "그분은 모든 단계를 차분하게 설명하고 몇 분 안에 문제를 해결했습니다", "praise|칭찬하다,staff|직원,explain|설명하다,calmly|차분하게,solve|해결하다,within|이내에"],
    ["도시와 고향", "Speaking Part 1 답변을 이유와 예시로 확장합니다.", "hometowns and cities", "고향과 도시", "My hometown is small enough to feel friendly but large enough to be convenient", "제 고향은 친근하게 느껴질 만큼 작지만 편리할 만큼 큽니다", "The riverside path is my favourite place because people can walk there safely", "강변 길은 사람들이 안전하게 걸을 수 있어 제가 가장 좋아하는 장소입니다", "hometown|고향,city|도시,friendly|친근한,large|큰,riverside|강변,safely|안전하게"],
    ["공부하는 방법", "학습 습관을 구체적인 예로 설명합니다.", "study methods", "공부 방법", "Short daily sessions work better for me than one long lesson", "한 번의 긴 수업보다 매일 짧게 공부하는 것이 저에게 더 효과적입니다", "I review difficult words in the evening and test myself the next morning", "저녁에 어려운 단어를 복습하고 다음 날 아침 스스로 시험합니다", "method|방법,session|학습 시간,better|더 나은,difficult|어려운,review|복습하다,test|시험하다"],
    ["휴대전화 사용", "장단점을 균형 있게 말합니다.", "mobile phone use", "휴대전화 사용", "My phone saves time when I need maps, tickets or quick information", "지도, 표, 빠른 정보가 필요할 때 휴대전화는 시간을 절약해 줍니다", "However, I turn off notifications while studying so that I can focus", "하지만 공부할 때는 집중할 수 있도록 알림을 끕니다", "mobile|휴대전화,save|절약하다,map|지도,quick|빠른,notification|알림,focus|집중하다"],
    ["환경 보호", "개인 행동과 효과를 연결합니다.", "protecting the environment", "환경 보호", "I carry a reusable bottle and avoid unnecessary plastic bags", "저는 재사용 가능한 물병을 들고 다니며 불필요한 비닐봉지를 피합니다", "These habits are small, but they reduce the waste I create each week", "이 습관들은 작지만 제가 매주 만드는 쓰레기를 줄여 줍니다", "protect|보호하다,reusable|재사용 가능한,avoid|피하다,unnecessary|불필요한,reduce|줄이다,waste|쓰레기"],
    ["축제와 기념일", "과거 경험을 순서대로 말합니다.", "festivals and celebrations", "축제와 기념일", "Last autumn, I attended a lantern festival with two close friends", "지난가을 저는 친한 친구 두 명과 등불 축제에 참석했습니다", "We watched the parade, tried local food and stayed until the final performance", "우리는 퍼레이드를 보고 지역 음식을 맛본 뒤 마지막 공연까지 머물렀습니다", "celebration|기념 행사,autumn|가을,attend|참석하다,lantern|등불,parade|퍼레이드,performance|공연"],
    ["책과 독서", "선호하는 책과 이유를 설명합니다.", "books and reading", "책과 독서", "I prefer short non-fiction books that explain one idea clearly", "저는 한 가지 생각을 명확히 설명하는 짧은 논픽션 책을 선호합니다", "A good example can make a difficult subject feel much easier", "좋은 예시는 어려운 주제를 훨씬 쉽게 느끼게 할 수 있습니다", "prefer|선호하다,non-fiction|논픽션,idea|생각,clearly|명확하게,subject|주제,easier|더 쉬운"],
    ["운동과 체력", "빈도, 장소, 효과를 포함해 답합니다.", "exercise and fitness", "운동과 체력", "I swim twice a week at a pool near my home", "저는 집 근처 수영장에서 일주일에 두 번 수영합니다", "The exercise strengthens my back and helps me sleep more deeply", "그 운동은 등을 튼튼하게 하고 더 깊이 잠들도록 도와줍니다", "exercise|운동,twice|두 번,pool|수영장,strengthen|튼튼하게 하다,deeply|깊이,sleep|잠자다"],
    ["미래에 배우고 싶은 기술", "미래 목표와 동기를 말합니다.", "a future skill", "미래에 배울 기술", "I would like to learn basic video editing in the future", "저는 미래에 기본적인 영상 편집을 배우고 싶습니다", "It would help me organise travel clips and share clear stories with friends", "그 기술은 여행 영상을 정리하고 친구들과 분명한 이야기를 나누는 데 도움이 될 것입니다", "future|미래,skill|기술,basic|기본적인,editing|편집,organise|정리하다,clip|영상 조각"],
    ["기억에 남는 여행", "장소, 사건, 느낌을 연결합니다.", "a memorable journey", "기억에 남는 여행", "My most memorable journey was a train trip through the mountains", "가장 기억에 남는 여행은 산을 통과한 기차 여행이었습니다", "Heavy snow delayed us, but the changing view made the long ride enjoyable", "폭설로 지연됐지만 변하는 풍경 덕분에 긴 이동이 즐거웠습니다", "memorable|기억에 남는,journey|여행,mountain|산,heavy snow|폭설,view|풍경,enjoyable|즐거운"],
    ["음악과 집중", "개인 취향을 상황과 함께 설명합니다.", "music and concentration", "음악과 집중", "Quiet instrumental music helps me concentrate on simple tasks", "조용한 연주 음악은 간단한 일에 집중하는 데 도움이 됩니다", "For difficult reading, I prefer silence because lyrics distract me", "어려운 글을 읽을 때는 가사가 집중을 흐리게 해서 조용한 환경을 선호합니다", "instrumental|연주 음악,concentrate|집중하다,task|과제,silence|고요함,lyrics|가사,distract|집중을 흐리게 하다"],
    ["격식 수준 고르기", "수신인에 맞는 인사말과 표현을 선택합니다.", "formal and informal language", "격식체와 비격식체", "A letter to a close friend can use contractions and a warm greeting", "친한 친구에게 쓰는 편지는 축약형과 따뜻한 인사말을 사용할 수 있습니다", "A complaint to a company should remain polite, direct and formal", "회사에 보내는 불만 편지는 정중하고 직접적이며 격식을 갖춰야 합니다", "formal|격식 있는,informal|비격식의,contraction|축약형,greeting|인사말,polite|정중한,direct|직접적인"],
    ["Speaking 답변 확장", "답변에 이유와 예시를 추가합니다.", "extending a speaking answer", "말하기 답변 확장", "A strong short answer gives an opinion, a reason and one specific example", "좋은 짧은 답변은 의견, 이유, 구체적인 예시 하나를 제공합니다", "Linking words should support the idea rather than make the answer sound memorised", "연결어는 답변이 암기한 것처럼 들리게 하기보다 생각을 뒷받침해야 합니다", "extend|확장하다,opinion|의견,specific|구체적인,linking word|연결어,support|뒷받침하다,memorised|암기한"],
    ["Part 2 메모 만들기", "1분 준비 시간에 핵심어만 기록합니다.", "making cue-card notes", "큐카드 메모 작성", "Write four or five keywords instead of complete sentences during preparation", "준비 시간에는 완전한 문장 대신 핵심어 네다섯 개를 적으세요", "Arrange the notes in time order so the talk is easier to follow", "말을 따라가기 쉽도록 메모를 시간 순서로 배열하세요", "cue card|큐카드,keyword|핵심어,instead of|~대신,complete|완전한,arrange|배열하다,order|순서"],
    ["Listening 미니 모의고사", "숫자, 철자, 수정 표현을 함께 점검합니다.", "a listening mini test", "리스닝 미니 테스트", "The speaker first says fifteen, then corrects the number to fifty", "화자는 처음에 15라고 말한 뒤 숫자를 50으로 고칩니다", "The surname is Green, spelled G R E E N, and the appointment is on Thursday", "성은 Green이며 철자는 G R E E N이고 예약은 목요일입니다", "correct|고치다,number|숫자,spell|철자를 말하다,surname|성,appointment|예약,Thursday|목요일"],
    ["Reading 미니 모의고사", "동의어를 이용해 근거 문장을 찾습니다.", "a reading mini test", "리딩 미니 테스트", "The question uses the word cheap, while the passage describes the service as affordable", "문제는 cheap이라는 단어를 쓰지만 지문은 서비스를 affordable이라고 표현합니다", "Recognising this synonym helps the reader locate the correct sentence quickly", "이 동의어를 알아보면 독자가 정답 문장을 빠르게 찾는 데 도움이 됩니다", "synonym|동의어,cheap|저렴한,passage|지문,affordable|가격이 알맞은,locate|찾다,quickly|빠르게"],
    ["Writing 미니 모의고사", "20분 안에 편지의 목적과 요구사항을 완성합니다.", "a writing mini test", "라이팅 미니 테스트", "Spend three minutes planning before writing the opening sentence", "첫 문장을 쓰기 전에 3분 동안 계획하세요", "Leave two minutes at the end to check verb tense, spelling and punctuation", "마지막 2분은 동사 시제, 철자, 문장부호를 확인하는 데 남겨 두세요", "spend|시간을 쓰다,opening|첫 부분,leave|남겨 두다,verb tense|동사 시제,spelling|철자,punctuation|문장부호"],
    ["Speaking 미니 모의고사", "유창성과 정확성의 균형을 점검합니다.", "a speaking mini test", "스피킹 미니 테스트", "Answer the question directly before adding a reason or personal example", "이유나 개인적인 예시를 추가하기 전에 질문에 직접 답하세요", "If a mistake occurs, correct it briefly and continue speaking naturally", "실수가 생기면 짧게 바로잡고 자연스럽게 계속 말하세요", "directly|직접,personal|개인적인,mistake|실수,briefly|짧게,continue|계속하다,naturally|자연스럽게"],
    ["약점 집중 보완", "오답 원인을 유형별로 기록합니다.", "reviewing weak areas", "약점 보완", "I group my mistakes into vocabulary, grammar and missed information", "저는 실수를 어휘, 문법, 놓친 정보로 분류합니다", "This record shows which skill needs the most attention before the next test", "이 기록은 다음 시험 전에 어떤 기술에 가장 많은 주의가 필요한지 보여 줍니다", "weak|약한,group|분류하다,mistake|실수,grammar|문법,missed|놓친,attention|주의"],
    ["실전 시간 관리", "각 영역의 제한 시간을 지킵니다.", "test time management", "시험 시간 관리", "A simple time plan prevents one difficult question from delaying the whole section", "간단한 시간 계획은 어려운 문제 하나가 전체 영역을 지연시키는 것을 막습니다", "I mark uncertain answers, continue, and return only when time remains", "확실하지 않은 답에 표시하고 계속한 뒤 시간이 남을 때만 돌아갑니다", "management|관리,prevent|막다,difficult|어려운,delay|지연시키다,uncertain|확실하지 않은,remain|남다"],
    ["최종 4영역 점검", "시험 당일 사용할 전략을 한 번에 정리합니다.", "a final IELTS review", "IELTS 최종 점검", "Before the test, I review instructions and prepare the identification I need", "시험 전에 안내사항을 검토하고 필요한 신분증을 준비합니다", "During each section, I focus on the current task instead of worrying about earlier answers", "각 영역에서는 이전 답을 걱정하지 않고 현재 과제에 집중합니다", "final|최종의,instruction|안내사항,identification|신분증,current|현재의,instead of|~대신,worry|걱정하다"],
  ];

  const focusByPhase = [
    "Speaking Part 1 · 현재·과거·미래 시제로 3문장 답하기",
    "Listening Section 1 · 이름·숫자·날짜·장소를 정확히 기록하기",
    "General Reading · 지문 표현과 문제의 동의어 연결하기",
    "General Writing Task 1 · 목적과 세 요구사항을 명확히 쓰기",
    "Speaking Part 1·2 · 직접 답변 뒤 이유와 예시 추가하기",
    "IELTS GT 통합 · 제한 시간 안에 근거를 확인하고 답하기",
  ];

  const questionOpeners = [
    ["How does {topic} affect your daily life?", "{topicKo}은(는) 당신의 일상에 어떤 영향을 주나요?"],
    ["What is the most useful part of {topic} for you?", "{topicKo}에서 당신에게 가장 유용한 부분은 무엇인가요?"],
    ["When did you first become interested in {topic}?", "언제 처음 {topicKo}에 관심을 갖게 되었나요?"],
    ["What would you improve about {topic}?", "{topicKo}에서 무엇을 개선하고 싶나요?"],
    ["Why do people pay attention to {topic}?", "사람들은 왜 {topicKo}에 주의를 기울이나요?"],
    ["How might {topic} change in the future?", "앞으로 {topicKo}은(는) 어떻게 변할 수 있을까요?"],
  ];

  function lowerFirst(text) {
    return text.charAt(0).toLowerCase() + text.slice(1);
  }

  function upperFirst(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const days = seeds.map(function (seed, index) {
    const day = index + 1;
    const phaseIndex = Math.floor(index / 10);
    const questionTemplate = questionOpeners[index % questionOpeners.length];
    const topicEn = seed[2];
    const topicKo = seed[3];
    const listeningLines = [
      { en: seed[4] + ".", ko: seed[5] + "." },
      { en: seed[6] + ".", ko: seed[7] + "." },
    ];
    const readingEn =
      "A short passage about " + topicEn + " can contain a main idea and supporting facts. " +
      "When reading about " + topicEn + ", look for names, times, actions and reasons. " +
      "These clues make information about " + topicEn + " easier to match with a question.";
    const readingKo =
      topicKo + "에 관한 짧은 지문에는 중심 생각과 이를 뒷받침하는 사실이 포함될 수 있습니다. " +
      topicKo + "에 관한 글을 읽을 때는 이름, 시간, 행동, 이유를 찾으세요. " +
      "이러한 단서들은 " + topicKo + "에 관한 정보를 문제와 더 쉽게 연결하도록 도와줍니다.";
    const modelEn =
      "I would like to explain " + topicEn + ". " +
      upperFirst(topicEn) + " is connected to situations that learners can describe clearly. " +
      "One personal example of " + topicEn + " can support the main idea. " +
      "A practical detail about " + topicEn + " makes the explanation more specific. " +
      "For these reasons, " + topicEn + " is useful for IELTS practice.";
    const modelKo =
      topicKo + "에 관해 설명하고 싶습니다. " +
      topicKo + "은(는) 학습자가 명확하게 묘사할 수 있는 상황과 연결되어 있습니다. " +
      topicKo + "에 관한 개인적인 예시 하나는 중심 생각을 뒷받침할 수 있습니다. " +
      topicKo + "에 관한 실용적인 세부사항은 설명을 더 구체적으로 만듭니다. " +
      "이러한 이유로 " + topicKo + "은(는) IELTS 연습에 유용합니다.";
    const speakingQuestion = questionTemplate[0].replace("{topic}", topicEn);
    const speakingQuestionKo = questionTemplate[1].replace("{topicKo}", topicKo);
    const speakingAnswer =
      upperFirst(topicEn) + " is a useful subject for me. " +
      "I can connect " + topicEn + " to a real experience. " +
      "This helps me give a reason and a specific example about " + topicEn + ".";
    const speakingAnswerKo =
      topicKo + "은(는) 저에게 유용한 주제입니다. " +
      "저는 " + topicKo + "을(를) 실제 경험과 연결할 수 있습니다. " +
      "이렇게 하면 " + topicKo + "에 관해 이유와 구체적인 예시를 제시하는 데 도움이 됩니다.";
    const interviewQuestion =
      "Could you summarise the main point about " + topicEn + " in two sentences?";
    const interviewQuestionKo =
      topicKo + "의 핵심 내용을 두 문장으로 요약해 주시겠어요?";
    const interviewAnswer =
      "The main point is that " + topicEn + " can be explained with a real situation. " +
      "One clear detail about " + topicEn + " makes the summary complete.";
    const interviewAnswerKo =
      "핵심은 " + topicKo + "을(를) 실제 상황으로 설명할 수 있다는 것입니다. " +
      topicKo + "에 관한 명확한 세부사항 하나가 요약을 완성합니다.";
    const vocabulary = (seed[8] + "," + phaseVocabulary[phaseIndex].join(","))
      .split(",")
      .map(function (entry) {
        const splitIndex = entry.indexOf("|");
        return {
          en: entry.slice(0, splitIndex),
          ko: entry.slice(splitIndex + 1),
        };
      });

    return {
      day: day,
      phase: phases[phaseIndex],
      title: seed[0],
      goal: seed[1],
      examFocus: focusByPhase[phaseIndex],
      vocabulary: vocabulary,
      listening: {
        lines: listeningLines,
        script: listeningLines.map(function (line) { return line.en; }).join(" "),
      },
      reading: {
        en: readingEn,
        ko: readingKo,
        question: "이 글의 중심 주제와 중요한 세부사항 두 가지를 한국어로 정리하세요.",
      },
      writing: {
        prompt: topicKo + "을(를) 주제로 5문장을 작성하세요. 첫 문장에 목적을 밝히고 이유와 예시를 포함하세요.",
        modelEn: modelEn,
        modelKo: modelKo,
      },
      speaking: {
        question: speakingQuestion,
        questionKo: speakingQuestionKo,
        answer: speakingAnswer,
        answerKo: speakingAnswerKo,
      },
      interview: {
        question: interviewQuestion,
        questionKo: interviewQuestionKo,
        answer: interviewAnswer,
        answerKo: interviewAnswerKo,
      },
    };
  });

  window.IELTS11_BEGINNER_PHASES = phases;
  window.IELTS11_BEGINNER_DAYS = days;
})();
