import { theme } from 'antd';
import { FC } from 'react';

const LoginStyle: FC = () => {
  const { token } = theme.useToken();
  return (
    <style jsx global>
      {`
        .app-ex-auth {
          position: relative;
          width: 420px;
          padding: 12px 32px 16px;
          background-color: ${token.colorBgContainer};
          border: 1px solid ${token.colorBorder};
          border-radius: 24px;
          box-shadow: ${(token as unknown as { boxShadowCard: string }).boxShadowCard};

          .app-ex-auth--logo {
            text-align: center;

            img {
              max-height: 52px;
              margin: 24px auto 12px;
            }

            h1 {
              margin-bottom: 24px;
              color: ${token.colorText};
              font-size: 16px;
            }
          }
        }
      `}
    </style>
  );
};

export default LoginStyle;
