---
title: CRUD
date: 2021-05-02 12:05:01
category: django
draft: false
---

웹을 배워가면서 많이 들렸던 단어들 중 하나가 CRUD이다. Django뿐만 아니라 앞으로 프로젝트를 진행하면서 반드시 개념을 제대로 잡고 있어야 할 것 같아 정리해보려고 한다.

CRUD는 데이터 처리의 기본 기능을 뜻한다.

- Create 생성
- Read 읽기
- Update 수정
- Delete 삭제

우리는 이 4가지를 쿼리 형식으로 데이터베이스에 적용하여 원하는 데이터를 가져오고 활용한다.

# 1. Create 생성

데이터의 생성은 SQL문법 중 INSERT 명령어로 실행된다..

``` SQL
--- INSERT문의 기초 문법
--- []는 생략 가능

INSERT INTO 테이블이름[(속성리스트)]
VALUES (값리스트)
```

INSERT문은 상당히 간단하다. (테이블에 걸린 제약조건이 없다면…)

먼저 사원(emp) 테이블에 새로운 사원에 대한 정보를 추가해보려한다.

``` SQL
INSERT INTO emp
VALUES (9001, '디비아', 'SE', 7608, NULL, NULL, NULL, NULL)
```

이렇게 특정 속성을 지정해주지 않는다면 테이블에 존재하는 모든 속성들에 대해 값을 넣어주어야 한다. 만약 INSERT문이 실패하면 데이터의 삽입은 취소된다.

다음으로 사원(emp) 테이블의 속성들 중 직책(job)과 이름(ename), 사원번호(empno)에 대해서만 값을 입력하고 데이터를 삽입해보겠다.

``` SQL
INSERT INTO emp(job, ename, empno)
VALUES ('SE', '김나물', 9002)
```

위와 같이 테이블에 존재하는 특정 속성에 대해서만 값을 지정하여 삽입할 수도 있다.

>NULL값이 허용되지 않는 속성을 생략하면 오류가 발생한다.

# 2. Read 읽기

``` SQL
--- SELECT문의 기초 문법
--- []는 생략 가능

SELECT [DISTINCT] 속성이름  
FROM 테이블이름  
[WHERE 검색조건]  
[GROUP BY 속성이름]  
[HAVING 검색조건]  
[ORDER BY 속성이름 [ASC|DESC]]  
```

사용자가 원하는 데이터를 DB에서 가져오고 싶으면 SELECT 명령어를 사용해서 가져올 수 있다.

만약 사원(emp) 테이블에 속해있는 모든 사원의 이름(ename)과 직책(job)을 가져오고 싶다면 다음과 같이 작성한다.

``` SQL
SELECT ename, job  
FROM emp
```

이번엔 직책(job)이 MANAGER인 사원의 이름(ename)과 연봉(sal)을 가져오고 싶다면 WHERE문을 추가하여 조건을 걸어줄 수 있다.

```SQL
SELECT ename, sal
FROM emp
WHERE job = 'MANAGER'
```

# 3. Update 수정

DB에 저장된 데이터를 새로운 내용으로 변경하고 싶다면 UPDATE 명령어를 사용해서 데이터를 갱신한다.

``` SQL
--- UPDATE문의 기초 문법
--- []는 생략 가능

UPDATE 테이블이름
SET 속성명1 = 값1[, 속성명2 = 값2, ...]
[WHERE 조건문]
```

WHERE 절을 생략할 수도 있지만, 이 경우 모든 행을 일괄적으로 갱신하므로 주의해야 한다. 보통 WHERE절을 사용하여 특정 속성값을 수정한다.

사원(emp)들 중 사원번호(empno)가 9001인 사원을 찾아 직책(job)을 ‘CEO’ 로 수정해주려 한다.

``` SQL
UPDATE emp
SET job = 'CEO'
WHERE empno = 9001
```

# 4. Delete 삭제

더이상 쓸모없게된 데이터 또는 사용자가 DB에서 저장해두고 싶지 않은 데이터는 DELETE 명령어로 쿼리문을 작성한다.

``` SQL
--- DELETE문의 기초 문법
--- []는 생략 가능

DELETE [FROM] 테이블이름
[WHERE] 조건문
```

UPDATE의 WHERE절과 똑같이 생략할 수도 있지만, **모든 행을 일괄적으로 삭제해버리므로 주의해야한다.** (테이블에 존재하는 모든 값이 사라질 수 있다.)

사원(emp) 테이블의 사원번호가 9002인 사원에 대한 정보를 삭제하려 한다.

``` SQL
DELETE FROM emp
WHERE empno = 9002
```

***데이터를 정확하게 사용하기 위해선 CRUD와 같은 개념들을 확실히 짚고 넘어가는 것이 좋겠다!***

