<h1>너도먹고나도먹고(You eat I eat) | 소포장 쇼핑 서비스</h1>
<img width="100%" height="1440" alt="슬라이드1" src="https://github.com/user-attachments/assets/1aa07aaf-1014-43ae-a3f9-21ea9b8d9f97" />
    <h2>1. 프로젝트 소개</h2>
    <p>1인 가구, 맞벌이 부부, 소규모 가족 등 작은 단위의 소비자들을 위한 소포장 식재료 쇼핑 서비스이다.
필요한 만큼만 구매할 수 있는 소량 단위 중심의 상품 구성으로 식재료 낭비를 줄이고, 신선한 재료를 필요한 시점에 바로 소비할 수 있는 경험을 제공한다.
사용자는 대형마트의 대용량 포장을 부담 없이 대체할 수 있고, 플랫폼은 지역 소상공인 및 생산자와 협력해 신선하고 다양한 식품을 합리적인 가격에 제공한다.</p>
    <h2>2. 개발 기간</h2>
    <p>2025. 08. 11 ~ 2025. 08. 29</p>
    <h2>3. 맴버구성 - 백엔드 업무</h2>
    <ul>
        <li>팀장 : 김다애 - 관리자</li>
        <li>부팀장 : 임채민 - 상품목록, 상품상세, 결제, 비밀번호 수정</li>
        <li>팀원1 : 조영인 - 로그인, 회원가입, 마이페이지</li>
    </ul>
    <h2>4. 기획 배경</h2>
    <img width="2560" height="1440" alt="슬라이드3" src="https://github.com/user-attachments/assets/f74d365b-f721-43d5-857e-be52dafde902" />
    <p>최근 사회 구조의 변화로 1~2인 가구가 급격히 늘어나며, 기존의 대용량 식재료 시장은 소비자의 실제 생활 방식과 맞지 않게 되었다.
냉장고 속 남은 재료는 버려지고, 소비자는 “조금만 사고 싶다”는 단순한 요구조차 충족시키기 어려운 환경에 놓여 있다.
“너도먹고나도먹고”는 이러한 불편함에서 출발했다.
대량 생산 중심의 유통 구조 대신 소량, 다양성, 즉시성을 중심으로 한 새로운 소비 패턴을 제안하며,
소비자뿐 아니라 생산자에게도 낭비 없는 공급 구조를 만들어주는 것을 목표로 한다.</p>
    <h2>5. 기대효과</h2>
   <img width="2560" height="1440" alt="슬라이드4" src="https://github.com/user-attachments/assets/6647e5ce-eaec-48dd-a832-9ffaf98c9375" />
    <strong>소비자 측면</strong>
    <ul>
        <li>필요 이상의 구매를 줄여 식품 폐기량 감소</li>
        <li>소량 포장으로 합리적인 소비와 신선한 식생활 유지</li>
        <li>맞춤형 소포장 세트로 조리 편의성 및 다양성 향상</li>
    </ul>
    <strong>유통·생산자 측면</strong>
    <ul>
        <li>소규모 생산자에게 소비자 직거래의 기회 제공</li>
        <li>재고 부담 감소 및 효율적인 생산·공급 구조 확립</li>
    </ul>
    <strong>사회적 측면</strong>
    <ul>
        <li>식품 낭비를 줄이는 지속 가능한 소비문화 조성</li>
        <li>지역 상생 기반의 친환경 유통 생태계 확대</li>
    </ul>
    <h2>5. 개발환경</h2>
    <ul>
        <li>Java</li>
        <li>Thymeleaf</li>
        <li>Spring Boot</li>
        <li>HTML, CSS, JS</li>
        <li>JDK 11.0.15</li>
        <li>YAML</li>
        <li>JSON</li>
        <li>REST:API</li>
        <li>IntelliJ IDEA</li>
        <li>git, gitHub</li>
        <li>Lombok</li>
        <li>Boot pay</li>
    </ul>
    <h2>6. ERD</h2>
    <h2>7. 담당업무</h2>
    <strong>프론트엔드</strong>
    <p>▶ 식재료</p>
    <ul>
        <li>상품목록</li>
        <li>상품상세</li>
        <li>상품결제</li>
        <li>상품결제완료</li>
    </ul>
    <p>▶ 고객센터(구매자)</p>
    <ul>
        <li>공지사항 목록, 상세</li>
        <li>1:1문의 목록, 등록</li>
        <li>자주묻는질문 목록, 등록</li>
    </ul>
    <p>▶ 고객센터(판매자)</p>
    <ul>
        <li>공지사항 목록, 상세</li>
        <li>1:1문의 목록, 등록</li>
        <li>자주묻는질문 목록, 등록</li>
    </ul>
    <div><img width="100%" height="auto" alt="프론트" src="https://github.com/user-attachments/assets/6f319e98-509c-437e-b7c7-d0d6355ac69d" /></div>
    <strong>백엔드</strong>
    <p>▶ 관리자</p>
    <ul>
        <li>회원목록
            <ul>
                <li>status = ACTIVE 인 회원만 조회하도록 설계</li>
                <li>페이징(Criteria)을 적용하여 대량 데이터 조회 시 성능 최적화</li>
                <li>검색 조건: 회원 이름, 이메일, 가입일 기준으로 필터링 가능<li>
            </ul>
        </li>
        <li>회원상세
            <ul>
                <li>선택한 회원의 상세 정보(이름, 이메일, 가입일, 상태, 구매 내역 등) 조회</li>
            </ul>
        </li>
        <li>매입 승인 목록
            <ul>
                <li>판매자가 등록한 상품 중 매입 대기 상태(status = WAITING)인 항목을 조회</li>
                <li>승인/거절 버튼 클릭 시 request_status를 ACCEPT 또는 REJECT로 변경</li>
                <li>Restful API를 통해 실시간 상태 변경 반영</li>
            </ul>
        </li>
        <li>매입 승인 상세
            <ul>
                <li>승인 요청된 상품의 세부 정보(상품명, 수량, 단가, 등록자 등) 조회</li>
            </ul>
        </li>
        <li>고객 문의 목록
            <ul>
                <li>일반 회원이 등록한 문의글 목록 조회</li>
            </ul>
        </li>
        <li>고객 문의 상세
            <ul>
                <li>문의 내용, 등록일, 답변 상태 조회</li>
                <li>답변 등록 시 tbl_inquiry_reply에 insert 후 문의 상태 자동 업데이트</li>
            </ul>
        </li>
        <li>판매자 목록
            <ul>
                <li>status = ACTIVE 인 판매자 회원만 조회하도록 설계</li>
                <li>페이징(Criteria)을 적용하여 대량 데이터 조회 시 성능 최적화</li>
                <li>검색 조건: 회원 이름, 이메일, 가입일 기준으로 필터링 가능<li>
            </ul>
        </li>
        <li>판매자 상세
            <ul>
                <li>선택한 회원의 상세 정보(이름, 이메일, 가입일, 상태, 구매 내역 등) 조회</li>
            </ul>
        </li>
        <li>판매자 문의 목록
            <ul>
                <li>판매자 계정에서 등록한 문의글 조회</li>
            </ul>
        </li>
        <li>판매자 문의 상세
            <ul>
                <li>문의 내용, 등록일, 답변 상태 조회</li>
                <li>답변 등록 시 insert 후 문의 상태 자동 업데이트</li>
            </ul>
        </li>
        <li>상품 현황 목록
            <ul>
                <li>등록된 상품 목록 조회</li>
                <li>페이징(Criteria)을 적용하여 대량 데이터 조회 시 성능 최적화</li>
                <li>검색 조건: 상품명 기준으로 필터링 가능<li>
            </ul>
        </li>
        <li>메인 배너 등록
            <ul>
                <li>홈 화면에 노출되는 배너 이미지 및 문구 등록</li>
                <li>배너 순서 설정 기능</li>
                <li>이미지 업로드<li>
            </ul>
        </li>
        <li>결제 내역
            <ul>
                <li>회원 및 판매자 결제 내역 통합 조회</li>
                <li>상품명, 결제 금액, 결제일자, 결제 상태를 함께 반환</li>
                <li>결제 상태(대기, 완료, 취소)에 따른 색상 표시로 가시성 향상<li>
            </ul>
        </li>
    </ul>
    <div>
      <img width="100%" height="auto" alt="백엔드" src="https://github.com/user-attachments/assets/4d95a222-8c6d-4c63-b2e7-2dc940f70c11" />
    </div>
    <h2>트러블 슈팅</h2>
    <h3>페이지네이션이 2페이지로 넘어가지 않던 문제</h3>
    <strong>문제 상황</strong>
    <p>회원 목록과 상품 현황 등 여러 리스트 페이지에서 1페이지까지만 정상적으로 표시되고,
“다음 페이지” 버튼을 눌러도 계속 1페이지 데이터를 불러오는 문제가 발생했다.</p>
    <strong>JS에서 page 값을 항상 1로 고정시켜 호출하는 실수를 했다.
백엔드에서는 페이지 값이 잘 넘어오지 않아 페이징 로직(Criteria)이 정상적으로 동작하지 않았고,
결과적으로 클라이언트에서는 페이지 이동이 되지 않는 것처럼 보였다.</strong>
    <div>
      <img width="100%" height="auto" alt="2 companyId 노출 문제(수정)" src="https://github.com/user-attachments/assets/4bad24bf-970f-443a-92fd-b8286e57f13e" />
    </div>
    <strong>해결방법</strong>
    <p>JS 코드에서 이벤트 클릭 시 page 값을 동적으로 갱신하도록 수정했다.
fetch 요청 시 현재 페이지 값을 파라미터로 전달하도록 변경하면서 문제 해결.
그 과정에서 page 값이 서버로 정상 전달되는지 console.log로 추적하면서 로직을 안정화했다.</p>
<strong>느낀점</strong>
<p>단순히 백엔드 로직만 점검하면 될 줄 알았는데, 결국 원인은 JS 내부의 고정된 변수 처리였다.
프론트엔드와 백엔드를 함께 바라보는 시야의 중요성을 다시 한 번 느꼈다.</p>
    <div>
      <img width="100%" height="auto" alt="2 companyId 노출 문제 해결(수정)" src="https://github.com/user-attachments/assets/09a83249-a27a-4222-9503-cf10ff7fc2a4" />
    </div>
    <br/>
    <h3>모든 페이지를 REST 구조로 구현하면서 JS 코드가 복잡해진 문제</h3>
    <strong>문제 상황</strong>
    <p>관리자 페이지의 모든 기능(회원, 상품, 문의, 결제 등)을 전부 REST 방식으로 구현해야 했다.
각 페이지마다 새로운 JS 파일을 만들기보다는 하나의 JS 안에서 여러 기능을 분기 처리해야 했기 때문에
코드가 길어지고 유지보수가 어려워졌다.</p>
    <div><img width="100%" height="auto" alt="공고등록, 수정 부분 리팩토링 문제" src="https://github.com/user-attachments/assets/fde32110-f209-47dc-9a74-b2b18268f950" /></div>
    <strong>해결방법</strong>
    <p>기능별로 함수 단위 분리를 진행했다.
예를 들어 getMemberList(), getSellerList(), getInquiryDetail() 등으로 나누어
API 요청과 DOM 렌더링을 각각 별도의 블록으로 관리했다.
또한 async/await를 활용해 비동기 흐름을 명확히 하면서 로직이 꼬이지 않게 정리했다.</p>
    <div><img width="100%" height="auto" alt="공고등록, 수정 부분 리팩토링 문제" src="https://github.com/user-attachments/assets/9528bb1f-b384-44af-860b-80d7e7910dd5" /></div>
    <br/>
    <h3>느낀점</h3>
    <p>하나의 JS 안에서 모든 기능을 통합하려면 코드 구조화와 함수 책임 분리가 필수라는 걸 배웠다.
단순히 작동만 되는 코드가 아니라, “운영하고 수정하기 좋은 구조”가 얼마나 중요한지도 체감했다.</p>
    <h3>배운 점 & 개선 포인트</h3>
    <p>이번 문제들을 해결하면서 “작동하는 코드”보다 중요한 건 **“관리하기 쉬운 코드”**라는 걸 실감했다.
작은 변수 하나가 전체 흐름을 막을 수 있다는 점에서, 코드 구조와 데이터 흐름을 꼼꼼히 검증하는 습관의 중요성을 배웠다.
또한, 모든 기능을 하나의 JS 안에서 REST 구조로 구현하면서 코드의 일관성과 유지보수성을 동시에 챙기는 방법을 익혔다.
앞으로는 초기 설계 단계부터 페이지 구조와 API 흐름을 함께 고려해 운영하기 좋은 구조를 만드는 데 더 집중할 것이다.</p>
