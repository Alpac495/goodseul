import React from 'react'
import '../../style/Login/Login.scss';

const Login = () => {
  return (
    <div>
        <div>
            <div>구슬에 로그인 하세요.</div>
            <form>
                <div> 
                    <div><input type="email" /></div>
                    <div><input type="password" /></div>
                </div>
                <div>
                    <a href="#">아이디/비밀번호 찾기</a>
                    &nbsp;|&nbsp;
                    <a href="./join">회원가입</a>
                </div>
                <div>
                    <button>이메일 로그인</button>
                </div>
                <div>
                    <div>
                        <button>네이버 로그인</button>
                    </div>
                    <div>
                        <button>카카오 로그인</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
