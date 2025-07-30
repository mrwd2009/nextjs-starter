'use client';
import { fade } from '@/assets/styles/style-utils';
import { theme } from 'antd';
import { FC, CSSProperties } from 'react';

const ModuleLoadingIndicator: FC<{ style?: CSSProperties }> = ({ style }) => {
  const { token } = theme.useToken();
  return (
    <div className="module-loading-container" style={style}>
      <div className="module-loading-loader">
        <div className="module-loading-loader--dot"></div>
        <div className="module-loading-loader--dot"></div>
        <div className="module-loading-loader--dot"></div>
        <div className="module-loading-loader--dot"></div>
        <div className="module-loading-loader--dot"></div>
        <div className="module-loading-loader--dot"></div>
        <div className="module-loading-loader--text"></div>
      </div>
      <style jsx>{`
        @keyframes module-loading-loader {
          15% {
            transform: translateX(0);
          }

          45% {
            transform: translateX(230px);
          }

          65% {
            transform: translateX(230px);
          }

          95% {
            transform: translateX(0);
          }
        }
        @keyframes module-loading-loading-text {
          0% {
            content: 'Loading';
          }

          25% {
            content: 'Loading.';
          }

          50% {
            content: 'Loading..';
          }

          75% {
            content: 'Loading...';
          }
        }
        .module-loading-container {
          position: relative;

          .module-loading-loader {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 250px;
            height: 20px;
            margin: auto;
          }

          .module-loading-loader--dot {
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: black;
            border: 2px solid ${token.colorBorder};
            border-radius: 100%;
            animation-name: module-loading-loader;
            animation-duration: 3s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          .module-loading-loader--dot:first-child {
            background-color: rgb(35, 85, 116);
            animation-delay: 0.5s;
          }

          .module-loading-loader--dot:nth-child(2) {
            background-color: rgb(62, 135, 246);
            animation-delay: 0.4s;
          }

          .module-loading-loader--dot:nth-child(3) {
            background-color: rgb(141, 186, 56);
            animation-delay: 0.3s;
          }

          .module-loading-loader--dot:nth-child(4) {
            background-color: rgb(35, 85, 116);
            animation-delay: 0.2s;
          }

          .module-loading-loader--dot:nth-child(5) {
            background-color: rgb(62, 135, 246);
            animation-delay: 0.1s;
          }

          .module-loading-loader--dot:nth-child(6) {
            background-color: rgb(141, 186, 56);
            animation-delay: 0s;
          }

          .module-loading-loader--text {
            position: absolute;
            top: 150%;
            right: 0;
            left: 0;
            width: 8rem;
            margin: auto;
            padding: 0 ${token.paddingXS}px;
            text-align: center;
            background-color: ${fade(token.colorBgLayout, 0.7)};
            border-radius: ${token.borderRadius}px;
          }

          .module-loading-loader--text::after {
            font-weight: bold;
            font-size: ${token.fontSizeLG}px;
            animation-name: module-loading-loading-text;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            content: 'Loading';
          }
        }
      `}</style>
    </div>
  );
};

export default ModuleLoadingIndicator;
