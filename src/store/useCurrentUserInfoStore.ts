import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UserInfo {
  userEmail: string;
  userName: string;
  userPicture?: string;
  userRoles?: string[];
}

interface UserInfoAction {
  updateUserInfo: (info: {
    userEmail?: string;
    userName?: string;
    userPicture?: string;
    userRoles?: string[];
  }) => void;
  resetUserInfo: () => void;
}

const initialState: UserInfo = {
  userEmail: '',
  userName: '',
  userPicture: '',
  userRoles: [],
};

export const useCurrentUserInfoStore = create<UserInfo & UserInfoAction>()(
  devtools((set) => ({
    ...initialState,
    updateUserInfo: (info) => set({ ...info }),
    resetUserInfo: () => set(initialState),
  })),
);
