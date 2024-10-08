<h1 align="center">🙌 **이슈관리 프로젝트** 🙌</h1>

<p align="center">
  <img src="https://img.shields.io/badge/-NextJS-05122A?style=flat&logo=Next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=Typescript&logoColor=blue"/>
  <img src="https://img.shields.io/badge/-SASS-05122A?style=flat&logo=Sass&logoColor=red"/>
  <img src="https://img.shields.io/badge/-Redux%20Toolkit-05122A?style=flat&logo=Redux&logoColor=white"/>
</p>

---

## 📌 **프로젝트 개요**

- **서비스**: 이슈 관리 툴
- **개발 환경**: Visual Studio Code
- **기술 스택**: 
  - **Frontend**: TypeScript, Next.js, Sass, Redux Toolkit
  - **외부 자원**: Radix UI, Radix Icon, REST API, Prettier

---

## 📋 **세부 기능 정의서**

### **사용자 관리**
1. 회원가입
2. 로그인
3. 회원탈퇴
4. 비밀번호 재설정
5. 사용자 프로필 관리
6. 권한 관리 (USER, MANAGER, ADMIN, SYSTEM_ADMIN)
7. 사일로 관리 권한 (MANAGER, MEMBER)

### **프로젝트 관리**
1. 프로젝트 생성
2. 프로젝트 조회
3. 프로젝트 수정
4. 프로젝트 삭제
5. 프로젝트 가입 요청

### **사일로 관리**
1. 사일로 생성
2. 사일로 조회
3. 사일로 수정
4. 사일로 삭제
5. 사일로장 할당

### **이슈 관리**
1. 이슈 등록
2. 이슈 조회
3. 이슈 수정
4. 이슈 삭제
5. 이슈 템플릿 관리
6. 이슈 태그 관리
7. 이슈 히스토리 로그
8. 이슈 레이팅 시스템
9. 이슈 알림 기능

### **코멘트 관리**
1. 코멘트 작성
2. 코멘트 조회
3. 코멘트 수정
4. 코멘트 삭제

### **문서 관리**
1. 문서 등록
2. 문서 조회
3. 문서 수정
4. 문서 삭제
5. 문서 버전 관리
6. 문서 공유 및 권한 설정

### **대시보드 및 보고**
1. 대시보드 구성
2. 맞춤형 보고서 생성

---

## 🛠️ **어드민 워크플로우**

1. **어드민 로그인**
    - 사전에 생성된 계정으로 로그인

2. **대시보드 확인**
    - 전체 프로젝트, 사일로, 이슈 현황 파악
    - 우선순위가 높은 이슈 및 중요 메트릭 확인

3. **이슈 관리**
    - 모든 이슈 조회 가능 (우선순위 레이팅 순)
    - **이슈 삭제 시** 관련 인원에게 자동 알림 전송
    - 이슈 변경은 불가, **조회 및 삭제만 가능**

4. **요청 관리**
    - **미승인 요청 확인** (가장 오래된 순)
    - 프로젝트 가입, 사일로 가입 등 요청 **승인/거절** 처리

5. **사용자 관리**
    - 모든 사용자 정보 조회 (비밀번호 제외)
    - 사용자 정보 변경, 탈퇴 처리
    - 프로젝트 및 사일로 할당/변경

6. **프로젝트 및 사일로 관리**
    - **프로젝트/사일로 생성, 수정, 삭제**
    - 프로젝트 매니저 및 사일로 매니저 지정

7. **보고서 생성 및 확인**
    - 자동 생성된 보고서 확인
    - **맞춤형 보고서 생성**

8. **시스템 로그 확인**
    - 모든 관리 작업에 대한 **로그 확인**

---

## 👤 **유저 워크플로우**

1. **회원가입**
    - 이메일, 비밀번호, 이름 입력

2. **로그인**
    - 권한에 따른 페이지 리다이렉션
        - SYSTEM_ADMIN, ADMIN: 관리자 대시보드
        - MANAGER: 매니저 대시보드
        - USER: 일반 유저 대시보드

3. **프로젝트 및 사일로 가입**
    - 가입하고자 하는 프로젝트/사일로 선택
    - 가입 요청 전송
    - 승인 대기 (ADMIN 또는 해당 MANAGER의 승인 필요)

4. **대시보드 확인**
    - 할당된 이슈 목록 확인
    - 소속 프로젝트 및 사일로 현황 파악

5. **이슈 관리**
    - 이슈 조회 (팀 이슈 및 사일로 이슈)
    - **이슈 생성** (MANAGER 또는 MEMBER 권한 필요)
    - **이슈 수정 및 상태 변경**
    - 이슈에 대한 코멘트 작성 및 확인

6. **문서 관리**
    - 프로젝트/사일로 관련 **문서 작성**
    - 문서 조회 및 수정 (권한에 따라)
    - **문서 버전 관리**

7. **알림 확인**
    - 새로운 이슈 할당, 코멘트 추가 등에 대한 알림 확인
    - **알림 설정 관리**

8. **프로필 관리**
    - 개인 정보 수정
    - 비밀번호 변경

9. **보고서 확인**
    - 권한에 따른 보고서 조회
    - **MANAGER**: 담당 프로젝트/사일로 보고서 생성 및 확인
