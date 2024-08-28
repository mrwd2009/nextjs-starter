/* eslint-disable @typescript-eslint/no-unused-expressions */
import { App, Modal } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
import type { NotificationInstance } from 'antd/es/notification/interface';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';
import { ReactNode } from 'react';

let message: MessageInstance;
let notification: NotificationInstance;
let modal: Omit<ModalStaticFunctions, 'warn'>;

export const useAntdStaticToolsInitializer = () => {
  const staticFns = App.useApp();
  message = staticFns.message;
  notification = staticFns.notification;
  modal = staticFns.modal;
};

export const closeAllPopups = () => {
  message?.destroy();
  notification?.destroy();
  Modal.destroyAll();
};

export const showSuccess = (msg: string, key = '__global_success__') => {
  key && message.destroy(key);
  message.success({
    content: msg,
    key,
  });
};

export const showSuccessNotification = (
  msg: string | ReactNode,
  duration = 4.5,
  key = '__global_success__',
) => {
  key && notification.destroy(key);
  notification.success({
    key,
    message: 'Success',
    description: msg,
    duration,
  });
};

export const destoryNotification = (msgKey: string) => {
  notification.destroy(msgKey);
};

export const showError = (error: Error | string, key = '__global_error__') => {
  let desc = error;
  if (error instanceof Error) {
    desc = error.message;
  }
  key && notification.destroy(key);
  notification.error({
    key,
    message: 'Error',
    description: desc as string,
    duration: 0,
    className: 'app-ex-error-notification',
  });
};

export const showWarning = (
  warning: string,
  duration = 4.5,
  key = '__global_warning__',
) => {
  key && notification.destroy(key);
  notification.warning({
    key,
    message: 'Warning',
    description: warning,
    duration,
  });
};

export const showWarningModal = ({
  title,
  content,
  className,
  okText,
  onOk,
}: {
  title: string;
  content: string;
  className?: string;
  okText?: string;
  onOk: () => void;
}) => {
  modal.warning({
    title,
    className,
    content,
    okText: okText || 'OK',
    centered: true,
    onOk,
  });
};

export const showConfirm = ({
  title,
  content,
  onConfirm,
  className,
}: {
  title: string;
  content: string;
  onConfirm: (() => void) | (() => Promise<void>);
  className?: string;
}) => {
  modal.confirm({
    title,
    content,
    onOk: onConfirm,
    okText: 'OK',
    cancelText: 'Cancel',
    centered: true,
    className,
  });
};
