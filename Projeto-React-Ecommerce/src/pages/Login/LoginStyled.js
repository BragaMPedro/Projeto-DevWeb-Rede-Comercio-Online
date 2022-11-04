import styled from 'styled-components';

export const Container = styled.div`

    box-sizing: border-box;

.login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: #242026;
    box-shadow: 0 15px 25px rgba(143, 124, 236, 0.7);
    border-radius: 10px;
}

.login-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
}

.login-box .user-box input {
    position: relative;
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
}

.login-box .user-box label {
    position: relative;
    left: 0;
    top: -60px;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
    top: -85px;
    left: 0;
    color: #8F7CEC;
    font-size: 12px;
}

#submit {
    padding: 10px 20px;
    color: #CBBDDB;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    letter-spacing: 4px;
    border: 1px solid #8F7CEC;
    margin: auto;
}

#submit:hover {
    background: #8F7CEC;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #8F7CEC, 0 0 25px #8F7CEC, 0 0 50px #8F7CEC, 0 0 100px #8F7CEC;
}

.button-form {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}

#register {
    font-size: 14px;
    text-decoration: none;
    color: #CBBDDB;
    margin: auto;
    width: 60%;
    text-align: center;
}

#register a {
    margin: auto;
    color: #8F7CEC;
    text-decoration: none;
}
`;